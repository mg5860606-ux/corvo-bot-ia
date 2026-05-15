
exports.getHeader = (prefix, infos) => {
    if (!infos) return '╭⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐\n';
    return `╭⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🥀ִ ࣪𖤐
├─ ⊹ 𖤐 𝐈𝐍𝐅𝐎𝐒 𝐃𝐎 𝐁𝐎𝐓 / 𝐔𝐒𝐄𝐑
╎🥀˖ ▸ 𝗨𝘀𝘂́𝗮𝗿𝗶𝗼: @${infos.sender.split('@')[0]}
╎🥀˖ ▸ 𝗩𝗜𝗣: ${infos.isVip ? 'Sim ✅' : 'ɴᴀᴏ ❌'}
╎🥀˖ ▸ 𝗖𝗮𝗿𝗴𝗼: ${infos.cargo}
╎🥀˖ ▸ 𝗗𝗼𝗻𝗼: ${infos.ownerName}
╎🥀˖ ▸ 𝗕𝗼𝘁: ${infos.botName}
╎🥀˖ ▸ 𝗣𝗿𝗲𝗳𝗶𝘅𝗼: ${prefix}
╎🥀˖ ▸ 𝗩𝗲𝗿. 𝗕𝗮𝗶𝗹𝗲𝘆𝘀: ${infos.baileysVersion}
╎🥀˖ ▸ 𝗩𝗲𝗹𝗼𝗰𝗶𝗱𝗮𝗱𝗲: ${infos.speed} s
╎🥀˖ ▸ 𝗨𝗽𝘁𝗶𝗺𝗲: ${infos.uptime}
╎🥀˖ ▸𝗔𝘁𝗶𝘃𝗼 𝗣𝗮𝗿𝗮 𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${infos.isBotoff ? 'ɴᴀᴏ ❌' : 'Sim ✅'}
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
`;
};
exports.menu = (prefix, infos) => {
     return `‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏
${exports.getHeader(prefix, infos)}├─ ⊹ 𖤐 𝑂𝑈𝑇𝑅𝑂𝑆-𝑀𝐸𝑁𝑈𝑆
╎♱˖ ▸ ${prefix}MenuLogo
╎♱˖ ▸ ${prefix}MenuAdm
╎♱˖ ▸ ${prefix}MenuBn
╎♱˖ ▸ ${prefix}MenuBasico
╎♱˖ ▸ ${prefix}MenuDownload
╎♱˖ ▸ ${prefix}MenuFig
╎♱˖ ▸ ${prefix}MenuLink
╎♱˖ ▸ ${prefix}MenuVip
╎♱˖ ▸ ${prefix}MenuAnimes
╎♱˖ ▸ ${prefix}MenuFF
╎♱˖ ▸ ${prefix}MenuPx
╎♱˖ ▸ ${prefix}MenuRpg
╎♱˖ ▸ ${prefix}MenuSemPrefixo
╎♱˖ ▸ ${prefix}Efeitosimg
╎♱˖ ▸ ${prefix}NoPrefix
╎♱˖ ▸ ${prefix}MenuDono
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
├─ ⊹ 𖤐 𝐼𝑁𝐹𝑂𝑆 / 𝐶𝐻𝐸𝐶𝐾𝑆
╎♱˖ ▸ ${prefix}ping
╎♱˖ ▸ ${prefix}Atividade
╎♱˖ ▸ ${prefix}Rankativo
╎♱˖ ▸ ${prefix}Infodono
╎♱˖ ▸ ${prefix}avaliar
╎♱˖ ▸ ${prefix}me
╎♱˖ ▸ ${prefix}alugar
╎♱˖ ▸ ${prefix}Checkativo
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
├─ ⊹ 𖤐 𝐷𝑂𝑊𝑁𝐿𝑂𝐴𝐷𝑆
╎♱˖ ▸ ${prefix}Play
╎♱˖ ▸ ${prefix}Playvid
╎♱˖ ▸ ${prefix}playdoc
╎♱˖ ▸ ${prefix}shazam
╎♱˖ ▸ ${prefix}Tiktok
╎♱˖ ▸ ${prefix}Tiktok_audio
╎♱˖ ▸ ${prefix}Instagram
╎♱˖ ▸ ${prefix}Insta_audio
╎♱˖ ▸ ${prefix}Kwai
╎♱˖ ▸ ${prefix}Multidl
╎♱˖ ▸ ${prefix}Soundcloud
╎♱˖ ▸ ${prefix}Mediafire
╎♱˖ ▸ ${prefix}Gerarlink
╎♱˖ ▸ ${prefix}insta_audio2
╎♱˖ ▸ ${prefix}insta_video2
╎♱˖ ▸ ${prefix}instagram2
╎♱˖ ▸ ${prefix}tiktok_video2
╎♱˖ ▸ ${prefix}tiktok2
╎♱˖ ▸ ${prefix}tiktok_audio2
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
├─ ⊹ 𖤐 𝑃𝐸𝑆𝑄𝑈𝐼𝑆𝐴𝑆
╎♱˖ ▸ ${prefix}Clima
╎♱˖ ▸ ${prefix}Book
╎♱˖ ▸ ${prefix}Movie
╎♱˖ ▸ ${prefix}Imdb
╎♱˖ ▸ ${prefix}Imdbinfo
╎♱˖ ▸ ${prefix}Playstore
╎♱˖ ▸ ${prefix}Serie
╎♱˖ ▸ ${prefix}Aptoide
╎♱˖ ▸ ${prefix}Signo
╎♱˖ ▸ ${prefix}Amazon
╎♱˖ ▸ ${prefix}Wikipedia
╎♱˖ ▸ ${prefix}Pinterest
╎♱˖ ▸ ${prefix}Getnoticias
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
├─ ⊹ 𖤐 𝐼𝑁𝑇𝐸𝐿𝐼𝐺𝐸𝑁𝐶𝐼𝐴𝑆
╎♱˖ ▸ ${prefix}Gpt
╎♱˖ ▸ ${prefix}Imagine
╎♱˖ ▸ ${prefix}ppt(pedra/papel/tesoura)
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
├─ ⊹ 𖤐 𝐹𝐼𝐺𝑈𝑅𝐼𝑁𝐻𝐴𝑆
╎♱˖ ▸ ${prefix}Fsticker 
╎♱˖ ▸ ${prefix}Sticker 
╎♱˖ ▸ ${prefix}Toimg 
╎♱˖ ▸ ${prefix}Stmetadata
╎♱˖ ▸ ${prefix}Attp 
╎♱˖ ▸ ${prefix}Roubar
╎♱˖ ▸ ${prefix}Take 
╎♱˖ ▸ ${prefix}Qc 
╎♱˖ ▸ ${prefix}Figuweb 
╎♱˖ ▸ ${prefix}ttps 
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
├─ ⊹ 𖤐 𝑅𝐴𝑁𝐷𝑂𝑀'𝑆
╎♱˖ ▸ ${prefix}totext
╎♱˖ ▸ ${prefix}responda
╎♱˖ ▸ ${prefix}Gtts 
╎♱˖ ▸ ${prefix}Tagme 
╎♱˖ ▸ ${prefix}Emoji 
╎♱˖ ▸ ${prefix}Tabela
╎♱˖ ▸ ${prefix}mytag 
╎♱˖ ▸ ${prefix}Conselhobiblico
╎♱˖ ▸ ${prefix}Cantadas 
╎♱˖ ▸ ${prefix}Conselhos 
╎♱˖ ▸ ${prefix}Perfil 
╎♱˖ ▸ ${prefix}Calcular
╎♱˖ ▸ ${prefix}Morechat
╎♱˖ ▸ ${prefix}Obesidade
╎♱˖ ▸ ${prefix}Contardias
╎♱˖ ▸ ${prefix}Fazernick
╎♱˖ ▸ ${prefix}Ptvmsg
╎♱˖ ▸ ${prefix}Traduzir
╎♱˖ ▸ ${prefix}Listaddd
╎♱˖ ▸ ${prefix}Listaddi
╎♱˖ ▸ ${prefix}Destrava
╎♱˖ ▸ ${prefix}Destrava
╎♱˖ ▸ ${prefix}Gerarcpf
╎♱˖ ▸ ${prefix}Qrcode
╎♱˖ ▸ ${prefix}getperfil
╎♱˖ ▸ ${prefix}getbio
╎♱˖ ▸ ${prefix}lermais
╎♱˖ ▸ ${prefix}spoiler
╎♱˖ ▸ ${prefix}idade
╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
- © 𝑪𝑶𝑹𝑽𝑶-𝑩𝑶𝑻-𝑴𝑫⸺͟͞✰
- 𖤐𖤐𖤐𖤐𖤐`;
};

exports.adms = (prefix, infos) => {
     return `‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏
${exports.getHeader(prefix, infos)}├─ ⊹ 𖤐 𝑀𝐸𝑁𝑈-𝐴𝐷𝑀
╎♱˖ ▸ ${prefix}ativar
╎♱˖ ▸ ${prefix}Setprefix
╎♱˖ ▸ ${prefix}autototext
╎♱˖ ▸ ${prefix}autodl
╎♱˖ ▸ ${prefix}Antiimg 
╎♱˖ ▸ ${prefix}antistatus 
╎♱˖ ▸ ${prefix}Antivideo 
╎♱˖ ▸ ${prefix}Antiaudio 
╎♱˖ ▸ ${prefix}Antisticker 
╎♱˖ ▸ ${prefix}Antiloc 
╎♱˖ ▸ ${prefix}Anticontato 
╎♱˖ ▸ ${prefix}Antiddd 
╎♱˖ ▸ ${prefix}Antidoc 
╎♱˖ ▸ ${prefix}Antilinkgp 
╎♱˖ ▸ ${prefix}Antilinkhard 
╎♱˖ ▸ ${prefix}Antilinkeasy 
╎♱˖ ▸ ${prefix}Antifake 
╎♱˖ ▸ ${prefix}Antinotas 
╎♱˖ ▸ ${prefix}Antipalavra 
╎♱˖ ▸ ${prefix}Anticatalogo 
╎♱˖ ▸ ${prefix}Antipalavrao 
╎♱˖ ▸ ${prefix}Ativic
╎♱˖ ▸ ${prefix}Limitecaracteres 
╎♱˖ ▸ ${prefix}Bemvindo 
╎♱˖ ▸ ${prefix}Bemvindo2 
╎♱˖ ▸ ${prefix}fechargp
╎♱˖ ▸ ${prefix}abrirgp
╎♱˖ ▸ ${prefix}rmhorario
╎♱˖ ▸ ${prefix}Autosticker 
╎♱˖ ▸ ${prefix}Autorepo  
╎♱˖ ▸ ${prefix}Odelete 
╎♱˖ ▸ ${prefix}x9visuunica 
╎♱˖ ▸ ${prefix}x9 
╎♱˖ ▸ ${prefix}So_adm
╎♱˖ ▸ ${prefix}Limitecomandos
╎♱˖ ▸ ${prefix}Ephemeral
╎♱˖ ▸ ${prefix}Multiprefixo 
╎♱˖ ▸ ${prefix}Tempocmd (segundos)
╎♱˖ ▸ ${prefix}Antiddd-list
╎♱˖ ▸ ${prefix}Add_ddd 
╎♱˖ ▸ ${prefix}Del_ddd
╎♱˖ ▸ ${prefix}Legenda_imagem (Texto)
╎♱˖ ▸ ${prefix}Legenda_video (Texto)
╎♱˖ ▸ ${prefix}Legenda_estrangeiro (Texto)
╎♱˖ ▸ ${prefix}Legendabv (Texto)
╎♱˖ ▸ ${prefix}Legendasaiu (Texto)
╎♱˖ ▸ ${prefix}Legendabv2 (Texto)
╎♱˖ ▸ ${prefix}Legendasaiu2 (Texto)
╎♱˖ ▸ ${prefix}Autorizar (Solicitações)
╎♱˖ ▸ ${prefix}Listanegra (Número)
╎♱˖ ▸ ${prefix}Tirardalista (Número)
╎♱˖ ▸ ${prefix}ListanegraG (Número)
╎♱˖ ▸ ${prefix}TirardalistaG (Número)
╎♱˖ ▸ ${prefix}Add_prefixo
╎♱˖ ▸ ${prefix}Tirar_prefixo
╎♱˖ ▸ ${prefix}Banghost
╎♱˖ ▸ ${prefix}banlist
╎♱˖ ▸ ${prefix}banlistG
╎♱˖ ▸ ${prefix}Mutelist (Lista-Mutados)
╎♱˖ ▸ ${prefix}Mute (@mencionar)
╎♱˖ ▸ ${prefix}Desmute (@mencionar)
╎♱˖ ▸ ${prefix}Kick [@]
╎♱˖ ▸ ${prefix}Ban (mencionar-msg)
╎♱˖ ▸ ${prefix}Promover [@] (Ser-admin)
╎♱˖ ▸ ${prefix}Rebaixar [@] (Rebaixar-adm)
╎♱˖ ▸ ${prefix}Rmphotogp
╎♱˖ ▸ ${prefix}Ephemeral (M. temporárias)
╎♱˖ ▸ ${prefix}Descgp (Texto)
╎♱˖ ▸ ${prefix}Nomegp (Nome)
╎♱˖ ▸ ${prefix}Totag (Mencionar algo)
╎♱˖ ▸ ${prefix}Grupo
╎♱˖ ▸ ${prefix}Status
╎♱˖ ▸ ${prefix}Limpar
╎♱˖ ▸ ${prefix}Atividades
╎♱˖ ▸ ${prefix}Linkgp
╎♱˖ ▸ ${prefix}Revlinkgp
╎♱˖ ▸ ${prefix}Grupoinfo
╎♱˖ ▸ ${prefix}Blockcmdgp (cmd)
╎♱˖ ▸ ${prefix}Unblockcmdgp (cmd)
╎♱˖ ▸ ${prefix}Listbcmdgp
╎♱˖ ▸ ${prefix}Hidetag (txt-marcação)
╎♱˖ ▸ ${prefix}Marcar (@)
╎♱˖ ▸ ${prefix}Marcar2 (wa.me)
╎♱˖ ▸ ${prefix}gppv
╎♱˖ ▸ ${prefix}apr(bemvindo daora)
╎♱˖ ▸ ${prefix}digt
╎♱˖ ▸ ${prefix}regraspp
╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
- © 𝑪𝑶𝑹𝑽𝑶-𝑩𝑶𝑻-𝑴𝑫⸺͟͞✰
- 𖤐𖤐𖤐𖤐𖤐`;
};

exports.menudono = (prefix, infos) => {
     return `‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎
${exports.getHeader(prefix, infos)}├─ ⊹ 𖤐 𝑅𝐴𝑁𝐷𝑂𝑀'𝑆 
╎♱˖ ▸ ${prefix}Setprefix
╎♱˖ ▸ ${prefix}channel
╎♱˖ ▸ ${prefix}Fotomenu
╎♱˖ ▸ ${prefix}Servip
╎♱˖ ▸ ${prefix}Listagp
╎♱˖ ▸ ${prefix}Antipalavrão 
╎♱˖ ▸ ${prefix}Antiligar 
╎♱˖ ▸ ${prefix}Fazertm (Texto)
╎♱˖ ▸ ${prefix}Rgtm
╎♱˖ ▸ ${prefix}Tirardatm
╎♱˖ ▸ ${prefix}Listatm
╎♱˖ ▸ ${prefix}Visualizarmsg
╎♱˖ ▸ ${prefix}Verificado
╎♱˖ ▸ ${prefix}Audio-menu
╎♱˖ ▸ ${prefix}Addpalavra 
╎♱˖ ▸ ${prefix}Delpalavra 
╎♱˖ ▸ ${prefix}Ausente 
╎♱˖ ▸ ${prefix}Ativo
╎♱˖ ▸ ${prefix}div
╎♱˖ ▸ ${prefix}addcase 
╎♱˖ ▸ ${prefix}getcase
╎♱˖ ▸ ${prefix}az
╎♱˖ ▸ ${prefix}banlistG
╎♱˖ ▸ ${prefix}nukeid
╎♱˖ ▸ ${prefix}nukex
╎♱˖ ▸ ${prefix}nuked
╎♱˖ ▸ ${prefix}entrar
╎♱˖ ▸ ${prefix}sairgp
╎♱˖ ▸ ${prefix}antisp
╎♱˖ ▸ ${prefix}sair_all
╎♱˖ ▸ ${prefix}getsite
╎♱˖ ▸ ${prefix}Nuke
╎♱˖ ▸ ${prefix}SerAdm
╎♱˖ ▸ ${prefix}SerMembro
╎♱˖ ▸ ${prefix}so_dono 
╎♱˖ ▸ ${prefix}antipv
╎♱˖ ▸ ${prefix}antipv2
╎♱˖ ▸ ${prefix}antipv3
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
├─ ⊹ 𖤐 𝑺𝒀𝑺𝑻𝑬𝑴 𝑨𝑳𝑼𝑮𝑼𝑬𝑳
╎♱˖ ▸ ${prefix}aluguel (add o grupo)
╎♱˖ ▸ ${prefix}rm_aluguel (remove gp)
╎♱˖ ▸ ${prefix}lista_aluguel
╎♱˖ ▸ ${prefix}ver_aluguel
╎♱˖ ▸ ${prefix}modoaluguel
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
├─ ⊹ 𖤐 𝑺𝒀𝑺𝑻𝑬𝑴 𝑵𝑶 𝑷𝑹𝑬𝑭𝑰𝑿
╎♱˖ ▸ ${prefix}rgcmd
╎♱˖ ▸ ${prefix}delcmd
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
├─ ⊹ 𖤐 𝑺𝒀𝑺𝑻𝑬𝑴 𝑭𝑰𝑮𝑼𝑹𝑰𝑵𝑯𝑨𝑺
╎♱˖ ▸ ${prefix}rgfig
╎♱˖ ▸ ${prefix}delfig
╎♱˖ ▸ ${prefix}listafig
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
├─ ⊹ 𖤐 𝑉𝐼𝑃𝑆 / 𝑃𝑅𝐸𝑀𝐼𝑈𝑀
╎♱˖ ▸ ${prefix}Delvip [@/dias]
╎♱˖ ▸ ${prefix}Addvip [@/dias]
╎♱˖ ▸ ${prefix}Cmdviplist
╎♱˖ ▸ ${prefix}Viplist
╎♱˖ ▸ ${prefix}Addcmdvip (cmd)
╎♱˖ ▸ ${prefix}Delcmdvip (cmd)
╎♱˖ ▸ ${prefix}Wprivacyph
╎♱˖ ▸ ${prefix}Wprivacygp
╎♱˖ ▸ ${prefix}Blockcmdg (comando)
╎♱˖ ▸ ${prefix}Unblockcmdg (comando)
╎♱˖ ▸ ${prefix}Listbcmdglobal
╎♱˖ ▸ ${prefix}Blockuser [@]
╎♱˖ ▸ ${prefix}Unblockuser [@]
╎♱˖ ▸ ${prefix}Bangp
╎♱˖ ▸ ${prefix}Unbangp
╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
- © 𝑪𝑶𝑹𝑽𝑶-𝑩𝑶𝑻-𝑴𝑫⸺͟͞✰
- 𖤐𖤐𖤐𖤐𖤐`;
};

exports.menulogos = (prefix, infos) => {
     return `‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎
${exports.getHeader(prefix, infos)}├─ ⊹ 𖤐 𝑀𝐸𝑁𝑈-𝐿𝑂𝐺𝑂
╎♱˖ ▸ ${prefix}marvel
╎♱˖ ▸ ${prefix}pornohub
╎♱˖ ▸ ${prefix}space
╎♱˖ ▸ ${prefix}stone
╎♱˖ ▸ ${prefix}steel
╎♱˖ ▸ ${prefix}grafity 
╎♱˖ ▸ ${prefix}america
╎♱˖ ▸ ${prefix}glich3
╎♱˖ ▸ ${prefix}fiction
╎♱˖ ▸ ${prefix}3dstone
╎♱˖ ▸ ${prefix}gelo
╎♱˖ ▸ ${prefix}toxic
╎♱˖ ▸ ${prefix}Rainbow
╎♱˖ ▸ ${prefix}demongreen
╎♱˖ ▸ ${prefix}halloween 
╎♱˖ ▸ ${prefix}lapis
╎♱˖ ▸ ${prefix}neon3d
╎♱˖ ▸ ${prefix}3dgold
╎♱˖ ▸ ${prefix}neon
╎♱˖ ▸ ${prefix}neon1
╎♱˖ ▸ ${prefix}Corvo 
╎♱˖ ▸ ${prefix}papel
╎♱˖ ▸ ${prefix}neve
╎♱˖ ▸ ${prefix}nuvem
╎♱˖ ▸ ${prefix}break
╎♱˖ ▸ ${prefix}natal
╎♱˖ ▸ ${prefix}areia
╎♱˖ ▸ ${prefix}Narutologo 
╎♱˖ ▸ ${prefix}smoke
╎♱˖ ▸ ${prefix}jokerlogo
╎♱˖ ▸ ${prefix}transformer
╎♱˖ ▸ ${prefix}horror
╎♱˖ ▸ ${prefix}lobometal
╎♱˖ ▸ ${prefix}coffecup2
╎♱˖ ▸ ${prefix}romantic
╎♱˖ ▸ ${prefix}metalfire
╎♱˖ ▸ ${prefix}pink
╎♱˖ ▸ ${prefix}luxury
╎♱˖ ▸ ${prefix}cattxt
╎♱˖ ▸ ${prefix}carbon
╎♱˖ ▸ ${prefix}vidro
╎♱˖ ▸ ${prefix}thunder 
╎♱˖ ▸ ${prefix}cria
╎♱˖ ▸ ${prefix}anime1
╎♱˖ ▸ ${prefix}ff1game
╎♱˖ ▸ ${prefix}ff2
╎♱˖ ▸ ${prefix}anime2
╎♱˖ ▸ ${prefix}entardecer
╎♱˖ ▸ ${prefix}indian
╎♱˖ ▸ ${prefix}ffrose
╎♱˖ ▸ ${prefix}ffgren
╎♱˖ ▸ ${prefix}chufuyu
╎♱˖ ▸ ${prefix}wolf
╎♱˖ ▸ ${prefix}dragonred
╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
- © 𝑪𝑶𝑹𝑽𝑶-𝑩𝑶𝑻-𝑴𝑫⸺͟͞✰
- 𖤐𖤐𖤐𖤐𖤐`;
};

exports.alteradores = (prefix, infos) => {
     return `‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎
${exports.getHeader(prefix, infos)}├─ ⊹ 𖤐 𝑀𝐸𝑁𝑈-𝐴𝐿𝑇𝐸𝑅𝐴𝐷𝑂𝑅
╎♱˖ ▸ ${prefix}Videolento (marca)
╎♱˖ ▸ ${prefix}Videorapido (marca)
╎♱˖ ▸ ${prefix}Videocontrario (marca)
╎♱˖ ▸ ${prefix}Audiolento (marca)
╎♱˖ ▸ ${prefix}Audiorapido (marca)
╎♱˖ ▸ ${prefix}speedup
╎♱˖ ▸ ${prefix}slowed
╎♱˖ ▸ ${prefix}Grave (marca)
╎♱˖ ▸ ${prefix}Grave2 (marca)
╎♱˖ ▸ ${prefix}Esquilo (marca)
╎♱˖ ▸ ${prefix}Estourar (marca)
╎♱˖ ▸ ${prefix}Bass (marca)
╎♱˖ ▸ ${prefix}Bass2 (marca)
╎♱˖ ▸ ${prefix}Vozmenino (marca)
╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
- © 𝑪𝑶𝑹𝑽𝑶-𝑩𝑶𝑻-𝑴𝑫⸺͟͞✰
- 𖤐𖤐𖤐𖤐𖤐`;
};


exports.brincadeiras = (prefix, infos) => {
     return `‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏
${exports.getHeader(prefix, infos)}├─ ⊹ 𖤐 𝑀𝐸𝑁𝑈-𝐵𝑁
╎♱˖ ▸ ${prefix}Jogodavelha 
╎♱˖ ▸ ${prefix}Vab
╎♱˖ ▸ ${prefix}Eununca 
╎♱˖ ▸ ${prefix}duelar
╎♱˖ ▸ ${prefix}jokenpo
╎♱˖ ▸ ${prefix}roletarussa
╎♱˖ ▸ ${prefix}matematica
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
├─ ⊹ 𖤐 𝐶𝐴𝑆𝐴𝐿-𝑊𝐸𝐵
╎♱˖ ▸ ${prefix}namorar
╎♱˖ ▸ ${prefix}terminar
╎♱˖ ▸ ${prefix}divórciar
╎♱˖ ▸ ${prefix}cancelarpedido
╎♱˖ ▸ ${prefix}minhadupla
╎♱˖ ▸ ${prefix}dupla
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
├─ ⊹ 𖤐 𝐹𝑂𝑅𝐶𝐴
╎♱˖ ▸ ${prefix}forca 
╎♱˖ ▸ ${prefix}rv-forca 
╎♱˖ ▸ ${prefix}fc 
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
├─ ⊹ 𖤐 𝐼𝑁𝑇𝐸𝑅𝐴𝑇𝐼𝑉𝑂
╎♱˖ ▸ ${prefix}lindo
╎♱˖ ▸ ${prefix}linda
╎♱˖ ▸ ${prefix}fiel 
╎♱˖ ▸ ${prefix}Gay 
╎♱˖ ▸ ${prefix}Feio 
╎♱˖ ▸ ${prefix}Corno 
╎♱˖ ▸ ${prefix}Vesgo 
╎♱˖ ▸ ${prefix}Bebado 
╎♱˖ ▸ ${prefix}Gostoso 
╎♱˖ ▸ ${prefix}Gostosa 
╎♱˖ ▸ ${prefix}Sigma 
╎♱˖ ▸ ${prefix}Beta 
╎♱˖ ▸ ${prefix}Baiano 
╎♱˖ ▸ ${prefix}Baiana 
╎♱˖ ▸ ${prefix}Carioca 
╎♱˖ ▸ ${prefix}Louco 
╎♱˖ ▸ ${prefix}Louca 
╎♱˖ ▸ ${prefix}Safada 
╎♱˖ ▸ ${prefix}Safado 
╎♱˖ ▸ ${prefix}Macaco 
╎♱˖ ▸ ${prefix}Macaca 
╎♱˖ ▸ ${prefix}Puta 
╎♱˖ ▸ ${prefix}Beijo 
╎♱˖ ▸ ${prefix}Matar 
╎♱˖ ▸ ${prefix}Tapa 
╎♱˖ ▸ ${prefix}Chute 
╎♱˖ ▸ ${prefix}Dogolpe    
╎♱˖ ▸ ${prefix}Nazista 
╎♱˖ ▸ ${prefix}Chance 
╎♱˖ ▸ ${prefix}Surubao 
╎♱˖ ▸ ${prefix}Casal
╎♱˖ ▸ ${prefix}Quando
╎♱˖ ▸ ${prefix}Mencionar 
╎♱˖ ▸ ${prefix}Death
╎♱˖ ▸ ${prefix}tirarft 
╎♱˖ ▸ ${prefix}lavarlouca 
╎♱˖ ▸ ${prefix}comer
╎♱˖ ▸ ${prefix}capinarlote
╎♱˖ ▸ ${prefix}carinho 
╎♱˖ ▸ ${prefix}abraço 
╎♱˖ ▸ ${prefix}pgpeito
╎♱˖ ▸ ${prefix}pgpau
╎♱˖ ▸ ${prefix}sentar 
╎♱˖ ▸ ${prefix}morder
╎♱˖ ▸ ${prefix}pgbunda
╎♱˖ ▸ ${prefix}vord
╎♱˖ ▸ ${prefix}obesidade
╎♱˖ ▸ ${prefix}contardias
╎♱˖ ▸ ${prefix}cu
╎♱˖ ▸ ${prefix}leitada
╎♱˖ ▸ ${prefix}boquete 
╎♱˖ ▸ ${prefix}cagar 
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
├─ ⊹ 𖤐 𝑅𝐴𝑁𝐾'𝑆
╎♱˖ ▸ ${prefix}rankgay
╎♱˖ ▸ ${prefix}rankgado 
╎♱˖ ▸ ${prefix}rankcorno 
╎♱˖ ▸ ${prefix}rankgostoso 
╎♱˖ ▸ ${prefix}rankgostosa
╎♱˖ ▸ ${prefix}ranknazista 
╎♱˖ ▸ ${prefix}rankotaku
╎♱˖ ▸ ${prefix}rankpau 
╎♱˖ ▸ ${prefix}ranksigma 
╎♱˖ ▸ ${prefix}rankbeta 
╎♱˖ ▸ ${prefix}rankbaiano 
╎♱˖ ▸ ${prefix}rankbaiana 
╎♱˖ ▸ ${prefix}rankcarioca 
╎♱˖ ▸ ${prefix}ranksafado 
╎♱˖ ▸ ${prefix}ranksafada 
╎♱˖ ▸ ${prefix}ranklouco 
╎♱˖ ▸ ${prefix}ranklouca 
╎♱˖ ▸ ${prefix}rankmacaco 
╎♱˖ ▸ ${prefix}rankmacaca
╎♱˖ ▸ ${prefix}rankputa 
╎♱˖ ▸ ${prefix}rankcu 
╎♱˖ ▸ ${prefix}rankbct 
╎♱˖ ▸ ${prefix}rankfalido 
╎♱˖ ▸ ${prefix}rankcasal 
╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
- © 𝑪𝑶𝑹𝑽𝑶-𝑩𝑶𝑻-𝑴𝑫⸺͟͞✰
- 𖤐𖤐𖤐𖤐𖤐`;
};

exports.efeitos = (prefix, infos) => {
     return `‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏
${exports.getHeader(prefix, infos)}├─ ⊹ 𖤐 𝑀𝐸𝑁𝑈-𝐸𝐹𝐸𝐼𝑇𝑂𝑆
╎♱˖ ▸ ${prefix}Comunismo 
╎♱˖ ▸ ${prefix}Bolsonaro 
╎♱˖ ▸ ${prefix}Bnw 
╎♱˖ ▸ ${prefix}Beautiful 
╎♱˖ ▸ ${prefix}Blur 
╎♱˖ ▸ ${prefix}Affect 
╎♱˖ ▸ ${prefix}Del 
╎♱˖ ▸ ${prefix}Circle 
╎♱˖ ▸ ${prefix}Beautiful 
╎♱˖ ▸ ${prefix}Dither 
╎♱˖ ▸ ${prefix}Facepalm 
╎♱˖ ▸ ${prefix}Invert 
╎♱˖ ▸ ${prefix}Lgbt 
╎♱˖ ▸ ${prefix}Magik 
╎♱˖ ▸ ${prefix}Rotate 
╎♱˖ ▸ ${prefix}Rip 
╎♱˖ ▸ ${prefix}Jail 
╎♱˖ ▸ ${prefix}Trash 
╎♱˖ ▸ ${prefix}Pixelate 
╎♱˖ ▸ ${prefix}Sepia 
╎♱˖ ▸ ${prefix}Wanted  
╎♱˖ ▸ ${prefix}Wasted  
╎♱˖ ▸ ${prefix}Enhance  
╎♱˖ ▸ ${prefix}Tozombie  
╎♱˖ ▸ ${prefix}Toanime  
╎♱˖ ▸ ${prefix}Togta  
╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
- © 𝑪𝑶𝑹𝑽𝑶-𝑩𝑶𝑻-𝑴𝑫⸺͟͞✰
- 𖤐𖤐𖤐𖤐𖤐`;
};

exports.dono = (prefix, NomeDoBot, NumeroDoBot, ownerNumber, isBotoff, ownerName, botNumber) => {
     return `
╭━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╮
╞🕷️⃟➮ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓/𝐃𝐎𝐍𝐎
╰━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╯
╎
╎ 『 𝐍𝐔𝐌𝐄𝐑𝐎 』↴   
╎          
╭━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╮
│╭── ⋅ ── ✩ ── ⋅ ──╮
╎⸺͟͞𝙳𝙾𝙽𝙾 - *${ownerNumber}*
╎
╎⸺͟͞𝙱𝙾𝚃 - *${NumeroDoBot}*
│╰── ⋅ ── ✩ ── ⋅ ──╯
╰━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╯
╎
╎ 『 𝐍𝐈𝐂𝐊 𝐃𝐎𝐍𝐎 』↴   
╎
╭━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╮
│╭── ⋅ ── ✩ ── ⋅ ──╮
╎ ➪ ${ownerName} 
│╰── ⋅ ── ✩ ── ⋅ ──╯
╰━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╯
╎
╎『 𝐁𝐎𝐓 / 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐎𝐄𝐒 』↴   
╎
╭━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╮
│╭── ⋅ ── ✩ ── ⋅ ──╮
╎⸺͟͞︎𝙿𝚁𝙴𝙵𝙸𝚇 -『 ${prefix} 』
╎
╎⸺͟͞𝚂𝚃𝙰𝚃𝚄𝚂 - ${isBotoff ? '𝙾𝙵𝙵-𝙻𝙸𝙽𝙴 ❌' : '𝙾𝙽𝙻𝙸𝙽𝙴 ✅'}
╎
╎⸺͟͞𝙽𝙾𝙼𝙴 - ${NomeDoBot}
│╰── ⋅ ── ✩ ── ⋅ ──╯
╰━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╯
╎
⏤͟͟͞͞${NomeDoBot}💌⃟✧ ᭄
     ✰ ✰ ✰ ✰ ✰ ✰ `};

exports.ativic = (prefix, infos) => {
     return `${exports.getHeader(prefix, infos)}*😻 | 𝗘𝗦𝗖𝗢𝗟𝗛𝗔 𝗨𝗠 𝗡𝗨𝗠𝗘𝗥𝗢 𝗗𝗘 1 𝗔 40 𝗣𝗢𝗥 𝗚𝗘𝗡𝗧𝗜𝗟𝗘𝗭𝗔, 𝗠𝗔𝗦 𝗖𝗔𝗦𝗢 𝗤𝗨𝗘𝗜𝗥𝗔 𝗘𝗡𝗖𝗘𝗥𝗥𝗔𝗥 𝗨𝗦𝗘 𝗢 𝗡𝗨𝗠𝗘𝗥𝗢 0 𝗦𝗘𝗡𝗛𝗢𝗥(𝗔)*
─────────────────────
✨ → 𝐌𝐈𝐃𝐈𝐀𝐒
[ 1 ] ▸ 🎧 𝙰𝙽𝚃𝙸 𝙰𝚄𝙳𝙸𝙾
> ʀᴇᴍᴏᴠᴇ ᴏ ᴜsᴜᴀʀɪᴏ ǫᴜᴇ ᴇɴᴠɪᴀ ᴀᴜᴅɪᴏ
[ 2 ] ▸ 🎬 𝙰𝙽𝚃𝙸 𝚅𝙸𝙳𝙴𝙾
> ʀᴇᴍᴏᴠᴇ ᴏ ᴜsᴜᴀʀɪᴏ ǫᴜᴇ ᴇɴᴠɪᴀ ᴜᴍ ᴠɪᴅᴇᴏ
[ 3 ] ▸ 🖼️ 𝙰𝙽𝚃𝙸 𝙸𝙼𝙰𝙶𝙴𝙼
> ʀᴇᴍᴏᴠᴇ ᴏ ᴜsᴜᴀʀɪᴏ ǫᴜᴇ ᴇɴᴠɪᴀ ɪᴍᴀɢᴇᴍ
[ 4 ] ▸ 📄 𝙰𝙽𝚃𝙸 𝙳𝙾𝙲𝚄𝙼𝙴𝙽𝚃𝙾
> ʀᴇᴍᴏᴠᴇ ᴏ ᴜsᴜᴀʀɪᴏ ǫᴜᴇ ᴇɴᴠɪᴀ ᴅᴏᴄᴜᴍᴇɴᴛᴏs
[ 5 ] ▸ 🌅 𝙰𝙽𝚃𝙸 𝙵𝚃 (𝙵𝙾𝚃𝙾 𝚄𝙽𝙸𝙲𝙰)
> ʀᴇᴍᴏᴠᴇ ǫᴜᴇᴍ ᴇɴᴠɪᴀ ᴍɪᴅɪᴀ ᴅᴇ ᴠɪsᴜᴀʟɪᴢᴀᴄᴀᴏ ᴜɴɪᴄᴀ
[ 6 ] ▸ 🪄 𝙰𝚄𝚃𝙾 𝙵𝙸𝙶𝚄𝚁𝙸𝙽𝙷𝙰
> ᴄʀɪᴀ ғɪɢᴜʀɪɴʜᴀs ᴀᴜᴛᴏᴍᴀᴛɪᴄᴀᴍᴇɴᴛᴇ
[ 7 ] ▸ 👋 𝙱𝙴𝙼 𝚅𝙸𝙽𝙳𝙾 / 𝚆𝙴𝙻𝙲𝙾𝙼𝙴
> ʙᴇᴍ ᴠɪɴᴅᴏ ᴄᴏᴍ ғᴏᴛᴏ / ᴠɪᴅᴇᴏ ᴘᴇʀsᴏɴᴀʟɪᴢᴀᴅᴏ
[ 8 ] ▸ 💬 𝙱𝙴𝙼 𝚅𝙸𝙽𝙳𝙾 2
> ʙᴇᴍ ᴠɪɴᴅᴏ ᴘᴏʀ ᴛᴇxᴛᴏ sᴇᴍ ɪᴍᴀɢᴇᴍ ᴏᴜ ᴠɪᴅᴇᴏ
[ 9 ] ▸ 🔞 𝙰𝙽𝚃𝙸 𝙿𝙾𝚁𝙽
> ʙʟᴏǫᴜᴇɪᴀ ᴄᴏɴᴛᴇᴜᴅᴏ ᴀᴅᴜʟᴛᴏ ɴᴀs ɪᴍᴀɢᴇɴs
─────────────────────

🔗 → 𝐋𝐈𝐍𝐊𝐒 𝐄 𝐃𝐈𝐕𝐔𝐋𝐆𝐀𝐂𝐎𝐄𝐒
[ 10 ] ▸ ⚔️ 𝙰𝙽𝚃𝙸 𝙻𝙸𝙽𝙺 𝙷𝙰𝚁𝙳
> ᴀɴᴛɪ ʟɪɴᴋ ǫᴜᴇ ʀᴇᴍᴏᴠᴇ ᴛᴏᴅᴏ ᴛɪᴘᴏ ᴅᴇ ʟɪɴᴋ
[ 11 ] ▸ 🔗 𝙰𝙽𝚃𝙸 𝙻𝙸𝙽𝙺 𝙶𝚁𝚄𝙿𝙾
> ʀᴇᴍᴏᴠᴇ ʟɪɴᴋs ᴅᴇ ɢʀᴜᴘᴏs ᴇsᴘᴇᴄɪғɪᴄᴏs
[ 12 ] ▸ ⚙️ 𝙰𝙽𝚃𝙸 𝙻𝙸𝙽𝙺 𝙴𝙰𝚂𝚈
> ᴀᴘᴇɴᴀs ᴀᴘᴀɢᴀ sᴇᴍ ʀᴇᴍᴏᴠᴇʀ
[ 13 ] ▸ 🛒 𝙰𝙽𝚃𝙸 𝙲𝙰𝚃𝙰𝙻𝙾𝙶𝙾
> ʀᴇᴍᴏᴠᴇ ǫᴜᴇᴍ ᴇɴᴠɪᴀ ᴄᴀᴛᴀʟᴏɢᴏ
[ 14 ] ▸ 🧾 𝙰𝙽𝚃𝙸 𝙽𝙾𝚃𝙰𝚂 𝙵𝙰𝙺𝙴𝚂
> ʀᴇᴍᴏᴠᴇ ǫᴜᴇᴍ ᴅɪᴠᴜʟɢᴀ ᴏ ᴛɪɢʀɪɴʜᴏ / ᴘɢ
[ 15 ] ▸ 💸 𝙰𝙽𝚃𝙸 𝙿𝙰𝙶𝙰𝙼𝙴𝙽𝚃𝙾
> ʀᴇᴍᴏᴠᴇ ǫᴜᴇᴍ ᴇɴᴠɪᴀ ʟɪɴᴋs/ᴄᴏᴅɪɢᴏs ᴅᴇ ᴘᴀɢᴀᴍᴇɴᴛᴏ
─────────────────────

👥 → 𝐒𝐄𝐆𝐔𝐑𝐀𝐍𝐂𝐀 𝐄 𝐂𝐎𝐍𝐓𝐑𝐎𝐋𝐄
[ 16 ] ▸ 👁️ 𝙰𝙽𝚃𝙸 𝚂𝚃𝙰𝚃𝚄𝚂
> ʀᴇᴍᴏᴠᴇ ᴏ ᴜsᴜᴀʀɪᴏ ǫᴜᴇ ᴍᴀʀᴄᴀ ᴏ ɢʀᴜᴘᴏ ɴᴏs sᴛᴀᴛᴜs
[ 17 ] ▸ 🚫 𝙰𝙽𝚃𝙸 𝙽𝚄𝙼𝙴𝚁𝙾 𝙵𝙰𝙺𝙴
> ʀᴇᴍᴏᴠᴇ ɴᴜᴍᴇʀᴏs ᴇsᴛʀᴀɴɢᴇɪʀᴏs ғᴀᴋᴇs
[ 18 ] ▸ 📇 𝙰𝙽𝚃𝙸 𝙲𝙾𝙽𝚃𝙰𝚃𝙾
> ʀᴇᴍᴏᴠᴇ ǫᴜᴇᴍ ᴇɴᴠɪᴀ ᴘᴇʀғɪʟ ᴅᴇ ᴄᴏɴᴛᴀᴛᴏ
[ 19 ] ▸ 📍 𝙰𝙽𝚃𝙸 𝙻𝙾𝙲𝙰𝙻𝙸𝚉𝙰𝙲𝙰̃𝙾
> ʀᴇᴍᴏᴠᴇ ǫᴜᴇᴍ ᴇɴᴠɪᴀ ʟᴏᴄᴀʟɪᴢᴀᴄᴀ̃ᴏ
[ 20 ] ▸ 🚫 𝙰𝙽𝚃𝙸 𝙳𝙳𝙳
> ʙʟᴏǫᴜᴇɪᴀ ᴅᴅᴅs ᴇsᴘᴇᴄɪғɪᴄᴏs (ᴄᴏɴғɪɢᴜʀᴀᴠᴇʟ)
[ 21 ] ▸ 🤖 𝙰𝙽𝚃𝙸 𝙱𝙾𝚃
> ʀᴇᴍᴏᴠᴇ ᴏᴜᴛʀᴏs ʙᴏᴛs ǫᴜᴇ ᴇɴᴛʀᴀʀᴇᴍ ɴᴏ ɢʀᴜᴘᴏ
[ 22 ] ▸ 🗑️ 𝙰𝙽𝚃𝙸 𝙳𝙴𝙻𝙴𝚃𝙴
> ʀᴇᴇɴᴠɪᴀ ᴍᴇɴsᴀɢᴇɴs ᴀᴘᴀɢᴀᴅᴀs ᴘᴇʟᴏs ᴜsᴜᴀʀɪᴏs
[ 23 ] ▸ 👑 𝚂𝙾 𝙰𝙳𝙼𝙸𝙽
> ᴏ ʙᴏᴛ sᴏ ʀᴇsᴘᴏɴᴅᴇ ᴀᴅᴍɪɴs
[ 24 ] ▸ 🕵️ 𝚇9 𝙰𝙳𝙼𝙸𝙽
> ᴍᴏsᴛʀᴀ ǫᴜᴇᴍ ᴘʀᴏᴍᴏᴠᴇᴜ ᴏᴜ ʀᴇʙᴀɪxᴏᴜ ᴜᴍ ᴍᴇᴍʙʀᴏ
[ 25 ] ▸ 👁️ 𝚇9 𝚅𝙸𝚂𝚄 𝚄𝙽𝙸𝙲𝙰
> ʀᴇᴇɴᴠɪᴀ ᴍɪᴅɪᴀs ᴅᴇ ᴠɪsᴜᴀʟɪᴢᴀᴄᴀᴏ ᴜɴɪᴄᴀ ᴘʀᴏ ɢʀᴜᴘᴏ
─────────────────────

⚡ → 𝐀𝐔𝐓𝐎𝐌𝐀𝐂𝐀𝐎 𝐄 𝐌𝐎𝐃𝐎𝐒
[ 26 ] ▸ 🧠 𝙰𝚄𝚃𝙾 𝚃𝚁𝙰𝙽𝚂𝙲𝚁𝙴𝚅𝙴𝚁
> ᴄᴏʟᴏᴄᴀ ᴏs ᴀᴜᴅɪᴏs ᴇᴍ ғᴏʀᴍᴀᴛᴏ ᴅᴇ ᴛᴇxᴛᴏ
[ 27 ] ▸ ⚡ 𝙰𝚄𝚃𝙾 𝙲𝙾𝙼𝙰𝙽𝙳𝙾
> ᴀᴛɪᴠᴀ ᴛᴏᴅᴏs ᴏs ᴄᴏᴍᴀɴᴅᴏs ᴇssᴇɴᴄɪᴀɪs ᴀᴜᴛᴏᴍᴀᴛɪᴄᴀᴍᴇɴᴛᴇ
[ 28 ] ▸ 📲 𝙰𝚄𝚃𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳
> ʙᴀɪxᴀ ᴠɪᴅᴇᴏs ᴅᴏ ɪɴsᴛᴀɢʀᴀᴍ / ᴛɪᴋᴛᴏᴋ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴀᴍᴇɴᴛᴇ
[ 29 ] ▸ 💠 𝙼𝚄𝙻𝚃𝙸 𝙿𝚁𝙴𝙵𝙸𝚇𝙾
> ᴘᴇʀᴍɪᴛᴇ ᴏ ᴜsᴏ ᴅᴇ ᴍᴜʟᴛɪᴘʟᴏs ᴘʀᴇғɪxᴏs
[ 30 ] ▸ 💢 𝙰𝙽𝚃𝙸 𝙿𝙰𝙻𝙰𝚅𝚁𝙰
> ʀᴇᴍᴏᴠᴇ ᴏ ᴜsᴜᴀʀɪᴏ ǫᴜᴇ ғᴀʟᴀ ᴜᴍᴀ ᴘᴀʟᴀᴠʀᴀ ᴇsᴘᴇᴄɪғɪᴄᴀ
[ 31 ] ▸ 😤 𝙰𝙽𝚃𝙸 𝙿𝙰𝙻𝙰𝚅𝚁𝙰𝙾
> ʀᴇᴍᴏᴠᴇ ǫᴜᴇᴍ ғᴀʟᴀ ᴘᴀʟᴀᴠʀᴀᴏ
[ 32 ] ▸ 🎭 𝙼𝙾𝙳𝙾 𝙱𝚁𝙸𝙽𝙲𝙰𝙳𝙴𝙸𝚁𝙰
> ᴀᴛɪᴠᴀ ᴏ ᴍᴏᴅᴏ ᴅᴇ ʀᴇsᴇɴʜᴀ ᴇ ʙʀɪɴᴄᴀᴅᴇɪʀᴀs
[ 33 ] ▸ 💰 𝙼𝙾𝙳𝙾 𝙽-𝙲𝙾𝙸𝙽𝚂
> ᴀᴛɪᴠᴀ ᴏ sɪsᴛᴇᴍᴀ ᴅᴇ ᴍᴏᴇᴅᴀs ᴅᴏ ʙᴏᴛ
[ 34 ] ▸ 🛡️ 𝙰𝙽𝚃𝙸 𝚂𝙿𝙰𝙼
> ᴘᴜɴᴇ ǫᴜᴇᴍ ғʟᴏᴏᴅᴀʀ/ᴍᴀɴᴅᴀʀ sᴘᴀᴍ
[ 35 ] ▸ ⚔️ 𝙼𝙾𝙳𝙾 𝚁𝙿𝙶
> ᴀᴛɪᴠᴀ ᴏs ᴄᴏᴍᴀɴᴅᴏs ᴅᴇ ʀᴘɢ ɴᴏ ɢʀᴜᴘᴏ
[ 36 ] ▸ 📝 𝙻𝙸𝙼𝙸𝚃𝙴 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂
> ʟɪᴍɪᴛᴀ ᴏ ᴛᴀᴍᴀɴʜᴏ ᴍᴀxɪᴍᴏ ᴅᴇ ᴛᴇxᴛᴏ ᴘᴇʀᴍɪᴛɪᴅᴏ
[ 37 ] ▸ ⏳ 𝙻𝙸𝙼𝙸𝚃𝙰𝚁 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂
> ʟɪᴍɪᴛᴀ ᴏ ᴜsᴏ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs sᴇɢᴜɪᴅᴏs
[ 38 ] ▸ 🤖 𝙰𝚄𝚃𝙾 𝚁𝙴𝚂𝙿𝙾𝚂𝚃𝙰
> ᴀᴛɪᴠᴀ ʀᴇsᴘᴏsᴛᴀs ᴀᴜᴛᴏᴍᴀᴛɪᴄᴀs (sɪᴍɪᴍɪ)
─────────────────────

🛡️ → 𝐆𝐋𝐎𝐁𝐀𝐈𝐒 (𝐀𝐩𝐞𝐧𝐚𝐬 𝐃𝐨𝐧𝐨)
[ 39 ] ▸ 🔕 𝙰𝙽𝚃𝙸 𝙿𝚅
> ʙʟᴏǫᴜᴇɪᴀ ǫᴜᴇᴍ ᴍᴀɴᴅᴀʀ ᴍᴇɴsᴀɢᴇᴍ ɴᴏ ᴘʀɪᴠᴀᴅᴏ
[ 40 ] ▸ 📵 𝙰𝙽𝚃𝙸 𝙻𝙸𝙶𝙰𝙲𝙰𝙾
> ʙʟᴏǫᴜᴇɪᴀ ǫᴜᴇᴍ ʟɪɢᴀʀ ᴘᴀʀᴀ ᴏ ʙᴏᴛ`};

exports.consultas = (prefix, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6, NomeDoBot, ownerName) => {
     return `
╭━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╮
╞🧸⃟➮𝑫𝑶𝑵𝑶: ${ownerName}
╰━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╯
╎
╎ 『 𝐃𝐎𝐍𝐎𝐒 𝐃𝐎 𝐁𝐎𝐓 』↴   
╎          
╭━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╮
│╭── ⋅ ── ✩ ── ⋅ ──╮
│╞『1』- wa.me/${numero_dono1}
╎
│╞『2』- wa.me/${numero_dono2}
╎
│╞『3』- wa.me/${numero_dono3}
╎
│╞『4』- wa.me/${numero_dono4}
╎
│╞『5』- wa.me/${numero_dono5}
╎
│╞『6』- wa.me/${numero_dono6}
╎
│╰── ⋅ ── ✩ ── ⋅ ──╯
╰━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╯
⏤͟͟͞͞${NomeDoBot}💌⃟✧ ᭄
     ✰ ✰ ✰ ✰ ✰ ✰ `};

exports.menu18 = (prefix, infos) => {
     return `‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏
${exports.getHeader(prefix, infos)}├─ ⊹ 𖤐 𝑀𝐸𝑁𝑈 - +𝟏𝟖
╎♱˖ ▸ ${prefix}Plaq (Plaquinha)
╎♱˖ ▸ ${prefix}Plaq1 (Plaquinha)
╎♱˖ ▸ ${prefix}Plaq2 (Plaquinha)
╎♱˖ ▸ ${prefix}Plaq3 (Plaquinha)
╎♱˖ ▸ ${prefix}Plaq4 (Plaquinha)
╎♱˖ ▸ ${prefix}Plaq5 (Plaquinha)
╎♱˖ ▸ ${prefix}Plaq6 (Plaquinha)
╎♱˖ ▸ ${prefix}Plaq7 (Plaquinha)
╎♱˖ ▸ ${prefix}Plaq8 (Plaquinha)
╎♱˖ ▸ ${prefix}Plaq9 (Plaquinha)
╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
- © 𝑪𝑶𝑹𝑽𝑶-𝑩𝑶𝑻-𝑴𝑫⸺͟͞✰
- 𖤐𖤐𖤐𖤐𖤐`;
};

exports.status = (prefix, isAntiImg, isAntiVid, isAntiAudio, isAntiSticker, Antidoc, isAntiCtt, Antiloc, isAntilinkgp, isAntiLinkEasy, isAntiLinkHard, isAntifake, isAntiNotas, isAnticatalogo, isPalavrao, isAntiFlood, isAntiDDD, isModobn, isAutorepo, isModoCoins, isAutofigu, isAnticall, isAntiPv, isAntiPv2, isAntiPv3, ANT_SP, nescessario, isBotoff, So_Adm, isMultiP, isx9, isAntistatus, isX9VisuUnica, isWelkom, isWelkom2) => {
     return `
╭━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╮
╎     𖤐 - 𝐒𝐓𝐀𝐓𝐔𝐒 - 𖤐
╰━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╯
‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏
├╾❲ 𝑷𝑹𝑶𝑻𝑬𝑪𝑨𝑶 / 𝑺𝑻𝑨𝑻𝑼𝑺 ❳ ⚡      
╭━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╮
│╭── ⋅ ─── ✩ ─── ⋅ ──╮
┊│𝑨𝑵𝑻𝑰-𝑰𝑴𝑮: ${isAntiImg ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑵𝑻𝑰-𝑽𝑰𝑫𝑬𝑶: ${isAntiVid ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑵𝑻𝑰-𝑨𝑼𝑫𝑰𝑶: ${isAntiAudio ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑵𝑻𝑰-𝑺𝑻𝑰𝑪𝑲𝑬𝑹: ${isAntiSticker ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑵𝑻𝑰-𝑫𝑶𝑪: ${Antidoc ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑵𝑻𝑰-𝑪𝑻𝑻: ${isAntiCtt ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑵𝑻𝑰-𝑳𝑶𝑪: ${Antiloc ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑵𝑻𝑰-𝑳𝑰𝑵𝑲-𝑮𝑷: ${isAntilinkgp ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑵𝑻𝑰-𝑳𝑰𝑵𝑲-𝑬𝑨𝑺𝒀: ${isAntiLinkEasy ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑵𝑻𝑰-𝑳𝑰𝑵𝑲-𝑯𝑨𝑹𝑫: ${isAntiLinkHard ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑵𝑻𝑰-𝑭𝑨𝑲𝑬: ${isAntifake ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑵𝑻𝑰-𝑵𝑶𝑻𝑨𝑺: ${isAntiNotas ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑵𝑻𝑰-𝑪𝑨𝑻𝑨𝑳𝑶𝑮𝑶: ${isAnticatalogo ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑵𝑻𝑰-𝑷𝑨𝑳𝑨𝑽𝑹𝑨𝑶: ${isPalavrao ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑵𝑻𝑰-𝑭𝑳𝑶𝑶𝑫: ${isAntiFlood ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑵𝑻𝑰-𝑫𝑫𝑫: ${isAntiDDD ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
│╰─── ⋅ ── ✩ ─── ⋅ ──╯
╰━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╯
├╾❲ 𝑬𝑵𝑻𝑹𝑬𝑻𝑬𝑹𝑰𝑴𝑬𝑵𝑻𝑶 ❳ 😼
╭━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╮
│╭── ⋅ ─── ✩ ─── ⋅ ──╮
┊│𝑴𝑶𝑫𝑶-𝑩𝑵: ${isModobn ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑼𝑻𝑶-𝑹𝑬𝑷𝑶: ${isAutorepo ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑺𝒀𝑺𝑻𝑬𝑴-𝑵-𝑪𝑶𝑰𝑵𝑺: ${isModoCoins ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑼𝑻𝑶-𝑭𝑰𝑮𝑼: ${isAutofigu ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
│╰─── ⋅ ── ✩ ─── ⋅ ──╯
╰━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╯
├╾❲ 𝑨𝑻𝑰𝑽𝑨𝑪𝑶𝑬𝑺/𝑫𝑶𝑵𝑶𝑺 ❳ 🀄
╭━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╮
│╭── ⋅ ─── ✩ ─── ⋅ ──╮
┊│𝑨𝑵𝑻𝑰-𝑪𝑨𝑳𝑳: ${isAnticall ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑵𝑻𝑰𝑷𝑽: ${isAntiPv ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑵𝑻𝑰𝑷𝑽2: ${isAntiPv2 ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑨𝑵𝑻𝑰𝑷𝑽3: ${isAntiPv3 ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑫𝑬𝑻𝑬𝑪𝑻𝑶𝑹-𝑳𝑰𝑵𝑲𝑺: ${ANT_SP ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑶𝑫𝑬𝑳𝑬𝑻𝑬: ${nescessario.Odelete ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑺𝑶-𝑫𝑶𝑵𝑶: ${isBotoff ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
│╰──── ⋅ ── ✩ ──── ⋅ ──╯
╰━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╯
├╾❲ 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑽𝑶𝑺 ❳ 🚀
╭━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╮
│╭── ⋅ ─── ✩ ─── ⋅ ──╮
┊│𝑺𝑶-𝑨𝑫𝑴: ${So_Adm ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑴𝑼𝑳𝑻𝑰-𝑷𝑹𝑬𝑭𝑰𝑿: ${isMultiP ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑿9-𝑨𝑫𝑴: ${isx9 ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑿9-𝑽𝑰𝒁𝑼-𝑼𝑵𝑰𝑪𝑨: ${isX9VisuUnica ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
│╰──── ⋅ ── ✩ ──── ⋅ ──╯
╰━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╯
├╾❲ 𝑩𝑬𝑴 𝑽𝑰𝑵𝑫𝑶 1/2 ❳ 💐
╭━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╮
│╭── ⋅ ─── ✩ ─── ⋅ ──╮
┊│𝑩𝑬𝑴-𝑽𝑰𝑵𝑫𝑶1: ${isWelkom ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
┊│𝑩𝑬𝑴-𝑽𝑰𝑵𝑫𝑶2: ${isWelkom2 ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'}
│╰─── ⋅ ── ✩ ─── ⋅ ──╯
╰━━━❃ ° • ° ๑ ۩ ๑ ° • ° ❃━━━╯

‎*⏤͟͟͞͞TUTORIAL DE COMO CONFIGURAR O LEGENDA BEM VINDO 1/2* 🙇‍♂️
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎


『1』 ↴
-
  ➥ _Este comando é pra marca o usuário na entrada_

   • Exemplo:
   『 _PARA LEGENDA COM FOTO_ 』
   ↳『 ${prefix}legendabv Olá *#numerodele#* , seja bem vindo (a) 』
   
   『 PARA LEGENDA SEM FOTO 』
   ↳『 ${prefix}legendabv2 Olá *#numerodele#* , seja bem vindo (a)
────────────────────


『2』 ↴
-
  ➥ _Esse comando é pra mostrar o usuário que saiu_ 

   • Exemplo:
   『 _PARA LEGENDA COM FOTO_ 』
   ↳『 ${prefix}legendasaiu O *#numerodele#* acaba de sair do grupo 』
  
    『 _PARA LEGENDA SEM FOTO_ 』
   ↳『 ${prefix}legendasaiu2 O *#numerodele#* acaba de sair do grupo 』   
────────────────────


『3』 ↴
-
  ➥ _Esse e pra mostrar o nome do grupo atual_

   • Exemplo:
   『 _PARA LEGENDA COM FOTO_ 』
      ↳『 ${prefix}legendabv Olá *#numerodele#* , seja bem vindo (a) ao grupo *#nomedogp#* 』
     
     『 _PARA LEGENDA SEM FOTO_ 』
      ↳『 ${prefix}legendabv2 Olá *#numerodele#* , seja bem vindo (a) ao grupo *#nomedogp#* 』
────────────────────


• ❗ Para saber mais sobre os comandos de dono use: *${prefix}menuadm* ❗

ʙʏ: corvo`
};

exports.coins = (prefix) => {
     return `‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏
├─ ⊹ 𖤐 𝐴𝐷𝑀'𝑆-𝐶𝑀𝐷
╎♱˖ ▸ ${prefix}Sorteiocoins 
╎♱˖ ▸ ${prefix}Sortcoins 
╎♱˖ ▸ ${prefix}Whatmusic 
╎♱˖ ▸ ${prefix}Gartic 
╎♱˖ ▸ ${prefix}Quizfutebol 
╎♱˖ ▸ ${prefix}Quizanimais 
╎♱˖ ▸ ${prefix}Anagrama 
╎♱˖ ▸ ${prefix}Enigma 
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
├─ ⊹ 𖤐 𝑀𝐸𝑀𝐵𝑅𝑂𝑆
╎♱˖ ▸ ${prefix}Minerar 
╎♱˖ ▸ ${prefix}Minerarcoins 
╎♱˖ ▸ ${prefix}Coins
╎♱˖ ▸ ${prefix}Estatisticas 
╎♱˖ ▸ ${prefix}Cassino 
╎♱˖ ▸ ${prefix}Dadoapostado 
╎♱˖ ▸ ${prefix}Slot
╎♱˖ ▸ ${prefix}Rankcoins
╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
- © 𝑪𝑶𝑹𝑽𝑶-𝑩𝑶𝑻-𝑴𝑫⸺͟͞✰
- 𖤐𖤐𖤐𖤐𖤐`
};


exports.menudownload = (prefix) => {
     return `├─ ⊹ 𖤐 𝐷𝑂𝑊𝑁𝐿𝑂𝐴𝐷𝑆
╎♱˖ ▸ ${prefix}Play (musica)
╎♱˖ ▸ ${prefix}Playvid (video)
╎♱˖ ▸ ${prefix}Playdoc (documento)
╎♱˖ ▸ ${prefix}Shazam
╎♱˖ ▸ ${prefix}Whatmusic
╎♱˖ ▸ ${prefix}Tiktok (link)
╎♱˖ ▸ ${prefix}Tiktokaudio
╎♱˖ ▸ ${prefix}Instagram (link)
╎♱˖ ▸ ${prefix}Insta_audio
╎♱˖ ▸ ${prefix}Facebook (link)
╎♱˖ ▸ ${prefix}Face_audio
╎♱˖ ▸ ${prefix}Twitter_audio
╎♱˖ ▸ ${prefix}Twitter_video
╎♱˖ ▸ ${prefix}Kwai
╎♱˖ ▸ ${prefix}Mediafire (link)
╎♱˖ ▸ ${prefix}Ytmp4
╎♱˖ ▸ ${prefix}Ytsearch
╎♱˖ ▸ ${prefix}Download-link
╎♱˖ ▸ ${prefix}Spotify (link)
╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐`
};

exports.menubasico = (prefix) => {
     return `├─ ⊹ 𖤐 𝐶𝑂𝑀𝐴𝑁𝐷𝑂𝑆 𝐵𝐴́𝑆𝐼𝐶𝑂𝑆
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
├─ ⊹ 𖤐 𝑇𝐸𝑋𝑇𝑂𝑆
╎♱˖ ▸ ${prefix}Piada
╎♱˖ ▸ ${prefix}Indiretas
╎♱˖ ▸ ${prefix}Cantadas
╎♱˖ ▸ ${prefix}Frasedeamor
╎♱˖ ▸ ${prefix}Frasebonita
╎♱˖ ▸ ${prefix}Deboche
╎♱˖ ▸ ${prefix}Motivacional
╎♱˖ ▸ ${prefix}Pegadinha
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
├─ ⊹ 𖤐 𝐷𝐼𝑉𝐸𝑅𝑆𝑂𝑆
╎♱˖ ▸ ${prefix}Dog
╎♱˖ ▸ ${prefix}Gato
╎♱˖ ▸ ${prefix}Receita (bolo)
╎♱˖ ▸ ${prefix}Traduzir (texto)
╎♱˖ ▸ ${prefix}Bitcoin
╎♱˖ ▸ ${prefix}Cotacao (dolar)
╎♱˖ ▸ ${prefix}Calcular (13+11)
╎♱˖ ▸ ${prefix}Bhaskara (2x²+4x+2=0)
╎♱˖ ▸ ${prefix}Raizquadrada (8)
╎♱˖ ▸ ${prefix}Bio
╎♱˖ ▸ ${prefix}Ping
╎♱˖ ▸ ${prefix}Convite (link)
╎♱˖ ▸ ${prefix}Gtts pt (texto)
╎♱˖ ▸ ${prefix}Tomp3 (marcar video)
╎♱˖ ▸ ${prefix}Personagem (naruto)
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
├─ ⊹ 𖤐 𝐹𝐼𝐺𝑈𝑅𝐼𝑁𝐻𝐴𝑆
╎♱˖ ▸ ${prefix}Sticker (marcar foto)
╎♱˖ ▸ ${prefix}Fstiker (marcar foto)
╎♱˖ ▸ ${prefix}Attp (texto)
╎♱˖ ▸ ${prefix}Emojimix (😍+🥰)
╎♱˖ ▸ ${prefix}Toimg (marcar sticker)
╎♱˖ ▸ ${prefix}Togif (marcar sticker)
├⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐
├─ ⊹ 𖤐 𝑃𝐸𝑆𝑄𝑈𝐼𝑆𝐴𝑅
╎♱˖ ▸ ${prefix}Pesquisa_yt (titulo)
╎♱˖ ▸ ${prefix}Ytsearch (titulo)
╎♱˖ ▸ ${prefix}Clima (cidade)
╎♱˖ ▸ ${prefix}Chatgpt (pergunta)
╎♱˖ ▸ ${prefix}Print (link)
╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐`
};

exports.menufig = (prefix) => {
     return `├─ ⊹ 𖤐 𝐹𝐼𝐺𝑈𝑅𝐼𝑁𝐻𝐴𝑆
╎♱˖ ▸ ${prefix}Sticker (marcar foto/video)
╎♱˖ ▸ ${prefix}Fstiker (marcar foto)
╎♱˖ ▸ ${prefix}Figvideo (marcar video)
╎♱˖ ▸ ${prefix}Attp (texto animado)
╎♱˖ ▸ ${prefix}Emojimix (😍+🥰)
╎♱˖ ▸ ${prefix}Toimg (sticker → imagem)
╎♱˖ ▸ ${prefix}Togif (sticker → gif)
╎♱˖ ▸ ${prefix}Sfundo (sticker sem fundo)
╎♱˖ ▸ ${prefix}Rename (renomear sticker)
╎♱˖ ▸ ${prefix}Take (roubar sticker)
╎♱˖ ▸ ${prefix}Semoji (emoji → sticker)
╎♱˖ ▸ ${prefix}Brat (texto estilo brat)
╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐`
};

exports.menulink = (prefix) => {
     return `├─ ⊹ 𖤐 𝐿𝐼𝑁𝐾𝑆
╎♱˖ ▸ ${prefix}Gerarlink
╎♱˖ ▸ ${prefix}Revlinkgp
╎♱˖ ▸ ${prefix}Linkgp
╎♱˖ ▸ ${prefix}Encurtalink (link)
╎♱˖ ▸ ${prefix}Tinyurl (link)
╎♱˖ ▸ ${prefix}Gerarqr (texto)
╎♱˖ ▸ ${prefix}Download-link (link)
╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐`
};

exports.menuvip = (prefix) => {
     return `├─ ⊹ 𖤐 𝑉𝐼𝑃 / 𝑃𝑅𝐸𝑀𝐼𝑈𝑀
╎♱˖ ▸ ${prefix}Viplist
╎♱˖ ▸ ${prefix}Consultar_vip
╎♱˖ ▸ ${prefix}Addvip (@ | dias)
╎♱˖ ▸ ${prefix}Delvip (@)
╎♱˖ ▸ ${prefix}Cmdviplist
╎♱˖ ▸ ${prefix}Addcmdvip (cmd)
╎♱˖ ▸ ${prefix}Delcmdvip (cmd)
╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐`
};

exports.menuanimes = (prefix) => {
     return `├─ ⊹ 𖤐 𝐴𝑁𝐼𝑀𝐸𝑆
╎♱˖ ▸ ${prefix}Anime1 (imagem aleatoria)
╎♱˖ ▸ ${prefix}Anime2 (imagem aleatoria)
╎♱˖ ▸ ${prefix}Personagem (nome)
╎♱˖ ▸ ${prefix}Imgpraanime (marcar foto)
╎♱˖ ▸ ${prefix}Toanime (marcar foto)
╎♱˖ ▸ ${prefix}Avatar (@ usuario)
╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐`
};

exports.menuff = (prefix) => {
     return `├─ ⊹ 𖤐 𝐹𝑅𝐸𝐸 𝐹𝐼𝑅𝐸
╎♱˖ ▸ ${prefix}Ff1 (foto ff)
╎♱˖ ▸ ${prefix}Ff2 (foto ff)
╎♱˖ ▸ ${prefix}Ffavatar (id)
╎♱˖ ▸ ${prefix}Ffgren
╎♱˖ ▸ ${prefix}Ffrose
╎♱˖ ▸ ${prefix}Fpsmascote
╎♱˖ ▸ ${prefix}Equipemascote
╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐`
};

exports.menupx = (prefix) => {
     return `├─ ⊹ 𖤐 𝑃𝑈𝑋𝐴𝐷𝐴𝑆
╎♱˖ ▸ ${prefix}Cpf (numero)
╎♱˖ ▸ ${prefix}Nome (completo)
╎♱˖ ▸ ${prefix}Telefone (numero)
╎♱˖ ▸ ${prefix}Parentes (cpf)
╎♱˖ ▸ ${prefix}Score (cpf)
╎♱˖ ▸ ${prefix}Mae (nome)
╎♱˖ ▸ ${prefix}Placa (placa)
╎♱˖ ▸ ${prefix}Cep (cep)
╎♱˖ ▸ ${prefix}Ip (endereco)
╎♱˖ ▸ ${prefix}Ddd (numero)
╎♱˖ ▸ ${prefix}Validarcpf (cpf)
╎♱˖ ▸ ${prefix}Validarcnpj (cnpj)
╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐`
};

exports.menusemprefixo = (prefix) => {
     return `├─ ⊹ 𖤐 𝑆𝐸𝑀 𝑃𝑅𝐸𝐹𝐼𝑋𝑂
╎♱˖ ▸ Noprefix (listar)
╎♱˖ ▸ corvo, clima SP
╎♱˖ ▸ corvo, banir @
╎♱˖ ▸ corvo, promover @
╎♱˖ ▸ corvo, rebaixar @
╎♱˖ ▸ corvo, cita
╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐`
};

exports.menurpg = (prefix) => {
     return `├─ ⊹ 𖤐 𝑅𝑃𝐺 / 𝐽𝑂𝐺𝑂𝑆
╎♱˖ ▸ ${prefix}Jogodavelha @user
╎♱˖ ▸ ${prefix}Forca
╎♱˖ ▸ ${prefix}Dama @user
╎♱˖ ▸ ${prefix}Lig4 @user
╎♱˖ ▸ ${prefix}Batalha_naval @user
╎♱˖ ▸ ${prefix}Rimas
╎♱˖ ▸ ${prefix}Tesouro
╎♱˖ ▸ ${prefix}Verdade_desafio
╎♱˖ ▸ ${prefix}Carta
╎♱˖ ▸ ${prefix}Adivinha (1 a 5)
╎♱˖ ▸ ${prefix}Matematica
╎♱˖ ▸ ${prefix}Cassino (valor)
╎♱˖ ▸ ${prefix}Slot
╎♱˖ ▸ ${prefix}Roletarussa
╎♱˖ ▸ ${prefix}Uno (Cria Sala)
╎♱˖ ▸ ${prefix}Roleta_mp (Roleta Multiplayer)
╎♱˖ ▸ ${prefix}Monopoly (Banco Imobiliário)
╎♱˖ ▸ ${prefix}Lobisomem (Cidade Dorme)
╎♱˖ ▸ ${prefix}Corrida_mp (Corrida Maluca)
╎♱˖ ▸ ${prefix}Detetive (Descubra o Assassino)
╎♱˖ ▸ ${prefix}Stop (Adedonha - Cria Sala)
╎♱˖ ▸ ${prefix}Vinte_um (Blackjack Solo)
╎♱˖ ▸ ${prefix}Ship @user1 @user2
╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐`
};