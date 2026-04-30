const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    makeCacheableSignalKeyStore
} = require("@whiskeysockets/baileys");
const pino = require("pino");
const readline = require("readline");
const { Boom } = require("@hapi/boom");
const qrcode = require("qrcode-terminal");

const question = (text) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise((resolve) => rl.question(text, (answer) => { rl.close(); resolve(answer); }));
};

async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState('qrcode');
    const { version } = await fetchLatestBaileysVersion();

    console.clear();
    console.log("\x1b[32m%s\x1b[0m", `
    ██████╗ ██████╗ ██████╗ ██╗   ██╗ ██████╗ 
    ██╔════╝██╔═══██╗██╔══██╗██║   ██║██╔═══██╗
    ██║     ██║   ██║██████╔╝██║   ██║██║   ██║
    ██║     ██║   ██║██╔══██╗╚██╗ ██╔╝██║   ██║
    ╚██████╗╚██████╔╝██║  ██║ ╚████╔╝ ╚██████╔╝
     ╚═════╝ ╚═════╝ ╚═╝  ╚═╝  ╚═══╝   ╚═════╝ 
    >> SISTEMA FLOOD CORVO V1.0 - STATUS: ONLINE
    `);

    if (!state.creds.registered && !global.metodoEscolhido) {
        const metodo = await question("Escolha o método de conexão:\n1. QR Code\n2. Código de Pareamento\nDigite: ");
        global.metodoEscolhido = metodo;
    }

    // REMOVIDO: Configurações complexas de patchMessage e prioridade (Motor de velocidade)
    const client = makeWASocket({
        version,
        logger: pino({ level: "silent" }),
        printQRInTerminal: false,
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" })),
        },
        browser: ["Ubuntu", "Chrome", "20.0.04"], // Browser padrão estável
    });

    // --- LÓGICA DE PAREAMENTO CORRIGIDA ---
    if (!client.authState.creds.registered && global.metodoEscolhido === '2') {
        // Aguarda 3 segundos para o socket estabilizar antes de pedir o código
        setTimeout(async () => {
            let numero = await question("\nDigite o número com DDD (Ex: 55119xxxxxxxx):\n> ");
            numero = numero.replace(/[^0-9]/g, '').trim();

            if (!numero) {
                console.log("Número inválido.");
                process.exit();
            }

            try {
                const code = await client.requestPairingCode(numero, "CORVO-FLOOD");
                console.log("\x1b[32m%s\x1b[0m", `\n[SISTEMA] CÓDIGO DE PAREAMENTO: ${code}\n`);
            } catch (err) {
                console.log("\x1b[31m%s\x1b[0m", "[!] Erro ao solicitar código: " + err);
            }
        }, 3000);
    }

    client.ev.on("creds.update", saveCreds);

    client.ev.on("connection.update", async (update) => {
        const { connection, lastDisconnect, qr } = update;

        if (qr && global.metodoEscolhido === '1') {
            console.clear();
            console.log("\x1b[32m>> SISTEMA FLOOD CORVO V1.0\x1b[0m");
            qrcode.generate(qr, { small: true });
            console.log("\x1b[33m%s\x1b[0m", "[!] Escaneie o QR Code acima para conectar.");
        }

        if (connection === "close") {
            const reason = new Boom(lastDisconnect?.error)?.output.statusCode;
            if (reason !== DisconnectReason.loggedOut) {
                connectToWhatsApp();
            } else {
                console.log("\x1b[31m%s\x1b[0m", "[!] Desconectado. Limpe a pasta 'qrcode' e tente novamente.");
                process.exit();
            }
        } else if (connection === "open") {
            console.log("\x1b[32m%s\x1b[0m", "\n[!] FLOOD CORVO CONECTADO COM SUCESSO!");

            const { monitorarEntradaEmGrupos } = require('./join-handler');
            monitorarEntradaEmGrupos(client);
        }
    });

    // Chama os ficheiros de comando
    require('./index')(client);
    require('./main')(client);
}

connectToWhatsApp().catch(err => console.error(err));
