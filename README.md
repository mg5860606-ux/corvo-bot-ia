# 🦅 CorvoBot - O Robô Multifuncional para WhatsApp

<div align="center">

![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=flat-square&logo=whatsapp&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=flat-square&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=flat-square)

**A solução definitiva para automação, entretenimento e gerenciamento inteligente de grupos no WhatsApp** 🚀

[Features](#-features) • [Instalação](#-instalação-rápida) • [Jogos](#-ecossistema-de-jogos) • [Comandos](#-principais-comandos) • [Contribuir](#-contribuindo) • [Suporte](#-suporte)

</div>

---

## 🌟 O que é CorvoBot?

**CorvoBot** é um bot revolucionário para WhatsApp com um vasto ecossistema de jogos, ferramentas de automação e recursos de administração. Com mais de **25+ jogos multiplayer** e integração com redes sociais, CorvoBot transforma seu WhatsApp em uma plataforma completa de entretenimento e produtividade.

> 💡 Desde jogos clássicos até apostas automáticas, do gerenciamento de grupos até downloads de qualquer rede social - **tudo em um só lugar**.

---

## ⚡ Features Principais

### 🎮 Ecossistema de Jogos (25+)

<table>
<tr>
<td>

**🎯 Clássicos Atemporais**
- Jogo da Velha
- Dama
- Lig-4
- Batalha Naval
- Forca
- Stop (Cidades)

</td>
<td>

**🎲 Cassino & Apostas**
- Roleta Russa
- Blackjack (21)
- Aposta de Corrida
- Sorteio de Coins
- Roleta com Multiplicadores
- Caça-níqueis (Slots)

</td>
</tr>
<tr>
<td>

**👥 Social & Party**
- Lobisomem
- Detetive
- Monopoly (Banco Imobiliário)
- Quiz Temático
- Rimas & Palavras
- Verdade ou Desafio

</td>
<td>

**🧩 Desafios & Lógica**
- Gartic (Desenho Colaborativo)
- Jogo de Rimas
- Quiz de Futebol & Animais
- Tesouro Escondido
- UNO Multiplayer
- Jokenpo (Pedra, Papel, Tesoura)

</td>
</tr>
</table>

### 🛡️ Administração & Segurança de Grupos

- **Anti-Link:** Bloqueio de links (modo Hard/Easy)
- **Anti-Fake:** Detecção de contas suspeitas
- **Anti-Spam & Bot:** Proteção contra spam e bots maliciosos
- **Gestão de Membros:** Promover, rebaixar, banir com logs
- **Lista Negra:** Sistema global e por grupo
- **Agendamento:** Automação de abertura/fechamento

### 📥 Ferramentas de Download

Baixe conteúdo de:
- 📸 Instagram (fotos, vídeos, reels)
- 🎬 TikTok (vídeos sem marca d'água)
- 🎥 YouTube (vídeos, áudio, playlists)
- 🐦 Twitter/X (tweets, vídeos)
- 📱 Facebook (vídeos, fotos)
- 🎵 Spotify (informações de músicas)
- 🎮 Outros (MediaFire, Google Drive, etc)

### 🎁 Sistema de Economia

- **Coins:** Sistema de moeda virtual
- **Daily Rewards:** Recompensas diárias para usuários ativos
- **Apostas:** Ganhe ou perca coins em jogos
- **Banco:** Armazene e gerencie seu dinheiro virtual

---

## 🚀 Instalação Rápida

### Pré-requisitos
- **Node.js** v18 ou superior
- **Git**
- Um celular com WhatsApp para pareamento


### Passo 1: Clonar e Instalar

```bash
# Clone o repositório
git clone https://github.com/mg5860606-ux/corvo-bot-ia.git
cd corvo-bot-ia

# Instale as dependências
npm install
```

### Passo 2: Configurar

```bash
# Inicie o bot (setup interativo)
npm start
```

O bot guiará você através:
- Nome do bot
- Seu nome
- Seu número WhatsApp
- Chave da API Groq

### Passo 3: Pareamento

1. Escaneie o **QR Code** com seu WhatsApp
2. O bot conectará automaticamente
3. Pronto! Bot online 🎉

---
## 🚀 Executando com PM2

Se quiser manter o bot online e reiniciar automaticamente em caso de falha, use o PM2.

### Instalar PM2
```bash
npm install -g pm2
```

### Iniciar o bot com PM2
```bash
cd corvo-bot-ia
pm2 start corvo.js --name corvo-bot
```

### Salvar a lista de processos
```bash
pm2 save
```

### Reiniciar o bot manualmente
```bash
pm2 restart corvo-bot
```

### Logs em tempo real
```bash
pm2 logs corvo-bot
```

### Observação para Windows
No Windows, use `pm2-windows-startup` para habilitar o auto-start no boot:
```bash
npm install -g pm2-windows-startup
npx pm2-windows-startup install
pm2 save
```

---
## 📋 Principais Comandos

| Comando | Descrição |
|---------|-----------|
| `.menu` | Exibe menu principal de comandos |
| `.admin` | Painel de administração |
| `.games` | Lista de jogos disponíveis |
| `.velha` / `.dama` / `.lig4` | Iniciar jogo contra o bot |
| `.lobisomem` / `.detetive` | Jogos em grupo (multiplayer) |
| `.apostacorrida` | Aposta em corrida de cavalos |
| `.roleta` | Roleta russa com ganhos |
| `.ytdl [url]` | Baixar vídeo do YouTube |
| `.tiktok [url]` | Baixar vídeo do TikTok |
| `.insta [url]` | Baixar do Instagram |

> 💡 Use `.menu` dentro do WhatsApp para ver a lista **completa** e atualizada!

---

## 🏇 Exemplo: Como Funciona a Aposta de Corrida

1. **Iniciar:** `.apostacorrida`
2. **O bot mostra:** 4 competidores aleatórios (🏎️ 🚀 🐎 ⚡)
3. **Você aposta:** `apostar 2 1000` (aposta 1000 coins no competidor 2)
4. **A corrida começa** após fechamento das apostas
5. **Resultado:** Ganha se seu competidor vencer! 🏆

---

## ⚙️ Configuração Avançada

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz:

```env
BOT_NAME=CorvoBot
OWNER_NUMBER=55119999999
```

### Arquivos de Configuração

- **`DADOS DO CORVO/`** - Dados persistentes de usuários e jogos
- **`settings/lib/menus.js`** - Personalizar menus

---

## 🎯 Roadmap & Futuras Features

- [ ] 📊 Dashboard web para estatísticas
- [ ] 🎨 Customização de temas e menus
- [ ] 🌐 Suporte multilíngue
- [ ] 📈 Sistema de ranking global
- [ ] 🎬 Integração com Twitch
- [ ] 🤝 Sistema de clãs/guildas
- [ ] 🎪 Novos jogos semanais

---

## 🛠️ Troubleshooting

### Bot não conecta
```bash
# Tente reiniciar
npm start

# Ou limpe cache
rm -rf node_modules package-lock.json
npm install
npm start
```

### Erro de API
- Verifique sua chave de API
- Garanta que a chave não expirou
- Tente adicionar uma nova chave

### Bot desconecta
- Evite deixar abas do WhatsApp Web abertas
- Reinicie regularmente com `npm start`

---

## 🤝 Contribuindo

Adoramos contribuições! Se você tem uma ideia:

1. **Fork** o repositório
2. Crie uma branch (`git checkout -b feature/incrivel`)
3. Commit suas mudanças (`git commit -m 'Add feature incrível'`)
4. Push (`git push origin feature/incrivel`)
5. Abra um **Pull Request**

---

## 📝 Estrutura do Projeto

```
corvo-bot-ia/
├── corvo.js                 # Bot principal
├── package.json             # Dependências
├── ARQUIVES/
│   ├── ai_core.js          # Integração de IA e APIs
│   ├── funcoes/            # Funções auxiliares
│   ├── games/              # Lógica dos jogos
│   └── sticker/            # Processamento de stickers
├── DADOS DO CORVO/         # Banco de dados persistente
│   ├── usuarios/           # Dados de usuários
│   └── INFO_CORVO/         # Configurações
└── settings/               # Configuração e menus
```

---

## 💬 Suporte & Comunidade

- 📧 **Issues:** Use a aba [Issues](https://github.com/mg5860606-ux/corvo-bot-ia/issues) para reportar bugs
- 💬 **Discussões:** [GitHub Discussions](https://github.com/mg5860606-ux/corvo-bot-ia/discussions)
- 🐦 **Twitter:** [@CorvoBot](https://twitter.com)

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja [LICENSE](LICENSE) para detalhes.

---

## 🌟 Créditos

Desenvolvido com ❤️ pelo time **CorvoBot**

- **APIs de processamento** - Integração de serviços externos
- **Baileys** - Cliente WhatsApp
- **Node.js Community** - Ferramentas e bibliotecas

---

<div align="center">

**[⭐ Deixe uma estrela se gostou!](https://github.com/mg5860606-ux/corvo-bot-ia)**

*Elevando sua experiência no WhatsApp desde 2024* 🚀

</div>
