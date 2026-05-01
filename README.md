# 🤖 WhatsApp Bot de Inteligência Artificial

Um poderoso e personalizável Bot de WhatsApp com integração a IAs (Groq, Gemini, etc.), desenvolvido para ser totalmente customizável para novos donos. Ele inclui sistemas de níveis, jogos, menus interativos, ferramentas de download, administração de grupos e muito mais.

---

## 🚀 Como instalar na sua máquina ou Host (VPS / Pterodactyl)

### 1. Requisitos
- [Node.js](https://nodejs.org/en/) (Versão 18 ou superior)
- Git instalado.

### 2. Clonando o Repositório
Abra o seu terminal (ou o console da sua Host) e digite:
```bash
git clone https://github.com/SEU_USUARIO/corvo-bot-ia.git
cd corvo-bot-ia
```

### 3. Instalando as dependências
Rode o comando abaixo para instalar todas as bibliotecas necessárias:
```bash
npm install
```

### 4. Configuração Inicial (Setup Interativo)
O bot possui um sistema de **Configuração Inicial Automática** pelo terminal. 
Na primeira vez que você rodar, a tela do terminal vai perguntar o nome do Bot, o seu nome, e o seu número de WhatsApp. 

Para iniciar:
```bash
npm start
```
*Responda às 3 perguntinhas que aparecerem no console.* Os dados serão salvos no arquivo `INFO_CORVO.json`.

### 5. Conectando no WhatsApp
Após o Setup Inicial, o bot vai perguntar como você deseja se conectar:
- **( 1 ) Código (Pairing):** Ele gerará um código de 8 dígitos para você inserir no WhatsApp (Aparelhos Conectados > Conectar com número).
- **( 2 ) QR-Code:** Ele gerará um QR-Code no terminal. Escaneie-o com o WhatsApp.

Pronto! Assim que aparecer "BOT CONECTADO", ele já estará online.

---

## ☁️ Como hospedar (Host / VPS / Termux)

### Painel Pterodactyl (Jexactyl, etc.)
1. Crie um servidor Node.js.
2. Na aba `Startup`, coloque o comando de inicialização como `npm start`.
3. Vá no `File Manager`, faça o upload do repositório zipado e extraia, ou use a aba `Git Pull` se sua host tiver.
4. Vá no `Console`, inicie o servidor e siga o **Setup Interativo**.

### Termux (Celular)
Se você for rodar direto do celular:
```bash
pkg update && pkg upgrade
pkg install nodejs git -y
git clone https://github.com/SEU_USUARIO/corvo-bot-ia.git
cd corvo-bot-ia
npm install
npm start
```

---

## ⚙️ Funcionalidades
- **IA Autônoma:** Você pode alterar os prompts base, mas ele já vem com uma personalidade sarcástica e humanizada.
- **Auto-Reply PV:** Responde automaticamente quando o Dono o chama no privado.
- **Grupos:** Antifake, Antibot, Boas-Vindas, Banimento, Promoção, etc.
- **Downloads:** Baixa vídeos e áudios do Instagram, YouTube, TikTok, etc.
- **Diversão:** Jogos de aposta, RPG básico, níveis, cassino.

## 📝 Configurações Avançadas
Para mudar chaves de APIs ou editar manualmente o bot, modifique os arquivos na pasta `DADOS DO CORVO/INFO_CORVO/media/`.

As chaves do **Groq** ficam localizadas em `groq_keys.json` na raiz do projeto. Cole as suas lá para que a IA funcione sem interrupções.
