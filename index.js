/*
* ShanBot es una creación de shanduy
* ShanBot no tiene ningun fin de lucro
* shanduy se reserva todos los derechos de autor
* © 2021 shanduy, INC.

Cualquier copia que utilize mi ApiKey sera dado de baja

- Que hay de nuevo?
* Nada
*/


const express = require('express');
/*
 Imports the express library.
 This is necessary to have an express server.
*/
const bodyParser = require('body-parser');  // Node.js body parsing middleware.

const app = express(); // Creates an app for your servers client

app.use(bodyParser.json()); // Express modules / packages
app.use(bodyParser.urlencoded({ extended: true })); // Express modules / packages

app.use(express.static('public')); // load the files that are in the public directory

app.get('/', (req, res) => { // When someone tries to visit the root or / directory of your website it also imports the variables req and res
  // req is short for the request, includes the url, headers and more that the client has send to the server
  // res is the response you will send. includes sending files, redirects, codes, and more

  res.sendFile(process.cwd() + '/public/index.html'); // This sends a file to the client, Often on repl.it, you will get an error about a root directory is requires, this is why, you may need to add '/home/runner/<replname>' then the directory, in this case, 'public/index.html'
});

app.get('/error', (req, res) => { // When someone tries to visit the '/error' directory
  res.sendStatus(500) // Sends status codes to the client. find them https://www.restapitutorial.com/httpstatuscodes.html here
  res.send('Hello!') // send html to the client
	/*
		This will give an error as once something has been sent to the client, you can't send another. 
		This applies to most 'res' functions
	*/
})

app.get('/req', (req, res) => { // When someone tries to visit the '/req' directory. please note that the '/***' can be changed to anything you wish as long as it complies as a url path.
  console.log(req.query) // this logs all query strings such as '?hello=hi&ping=pong' you can get these through req.query.hello or req.query.ping. Remember, always send headers back to the client. ie:
  res.json(req.query) //send json to the client
})

app.get('/res', (req, res) => {
  /* Please note that this will error as multiple headers are sent to the client */
  res.send('Hello!')
  // or
  res.send('<p>Hello!</p>')

  res.json('{"hello":"hi","ping":"pong"}')

  res.sendStatus(200)
  //using res.send(200) is deprecated and will terminate the nodejs in future.

  res.sendFile('/home/runner/public/index.html')

  res.redirect('https://www.google.com')

  res.download(process.cwd() + '/public/index.html')
})

app.get('/get', (req, res) => {
  // On get request
})

app.post('/post', (req, res) => {
  // On post request
})

// and more for most request types

app.route('/reqtypes')
  .get(function (req, res) {
    res.send('Get')
  })
  .post(function (req, res) {
    res.send('Post')
  })
  .put(function (req, res) {
    res.send('Put')
  })

app.get('/multiple/paths', (req, res) => {
  // exist
})

app.get('/multiple/paths/also/work/*', (req, res) => {
  // used for 404 if no other get functions are triggered in this path
})

app.get('/*', (req, res) => {
  // used for 404 if no other get functions are triggered
})

app.listen(3000, () => console.log('server started'));




const {
  WAConnection,
  MessageType,
  Presence,
  Mimetype,
  ProxyAgent,
  rugaapi,
  GroupSettingChange
} = require('@adiwajshing/baileys')

//INICIO ENTRADA DEL ARCHIVO//
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./src/bahasa')
const { negara } = require('./src/kodenegara')
const { virtex } = require('./src/virtex')
const { wait, pegatinas, musica, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
//FIN ENTRADA DE ARCHIVO//

//INICIO ENTRADA DEL PAQUETE NPM//
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const axios = require("axios")
const fetch = require('node-fetch')
//const fb = require('fb-video-downloader')
/*const tiktod = require('tiktok-scraper')*/
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
const speed = require('performance-now')
const FormData = require("form-data")
//const gis = require("g-i-s");
//FIN DE ENTRADA PAQUETE NPM//

//INICIO ENTRADA JSON//
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))

//FIN DE ENTRADA JSON//

//INICIO DE LA ENTRADA DEL MENÚ//

const { help } = require('./src/help')
const { logomaker } = require('./database/menu/logomaker')
const { toinmenu } = require('./src/toinmenu')
const { menuadmin } = require('./src/menuadmin')
const { nsfwmenu } = require('./src/nsfwmenu')
const { desmenu } = require('./src/desmenu')
const { version } = require('./src/version')
const { juegos } = require('./src/juegos')
const { shantera } = require('./src/shantera')
const { antimenu } = require('./src/antimenu')
const { welmenu } = require('./src/welmenu')
const { kickmenu } = require('./src/kickmenu')
const { banmenu } = require('./src/banmenu')
const { otak } = require('./src/otak')
const { levelmenu } = require('./src/levelmenu')
const {fbDown} = require('./lib/fb.js')
const { daftarvip } = require('./src/daftarvip')
const { cekvip } = require('./src/cekvip')
const { vipmenu } = require('./src/vipmenu')
/*const { mediamenu } = require('./database/menu/mediamenu')
const { educationmenu } = require('./database/menu/educationmenu')
const { downloadermenu } = require('./database/menu/downloadermenu')
const { mememenu } = require('./database/menu/mememenu')
const { kerangmenu } = require('./database/menu/kerangmenu')
const { groupmenu } = require('./database/menu/groupmenu')
const { soundmenu } = require('./database/menu/soundmenu')
const { musicmenu } = require('./database/menu/musicmenu')
const { islammenu } = require('./database/menu/islammenu')
const { stalkmenu } = require('./database/menu/stalkmenu')
const { wibumenu } = require('./database/menu/wibumenu')
const { funmenu } = require('./database/menu/funmenu')
const { informationmenu } = require('./database/menu/informationmenu')
const { 18+menu } require('./database/menu/18+menu')
const { ownermenu } require('./database/menu/ownermenu')
const { othermenu } require('./database/menu/othermenu')*/
/******FIN DE ENTRADA DEL MENÚ******/

/******CARGA DE ENTRADA VCARD******/
const vcard = 'BEGIN:VCARD\n' // Tarjeta de contacto
  + 'VERSION:3.0\n'
  + 'FN:Shan\n' // Nombre
  + 'ORG:Chapin;\n' // Propietario
  + 'TEL;type=CELL;type=VOICE;waid=54766384:+54766384\n' // ID de WhatsApp + número de teléfono
  + 'END:VCARD'
/******FIN DE ENTRADA VCARD******/

prefix = '*'
blocked = []
banChats = false

/******CONFIGURACION DE CARGA******/
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))
const {
  author,
  pack
} = settingan

/******INICIO DE FUNCIONES ENTRADA******/

/******ARCHIVOS ANTILINK ******/

const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antiface = JSON.parse(fs.readFileSync('./src/antiface.json'))
const antitube = JSON.parse(fs.readFileSync('./src/antitube.json'))
const antitik = JSON.parse(fs.readFileSync('./src/antitik.json'))
const antinsta = JSON.parse(fs.readFileSync('./src/antinsta.json'))
const antikwai = JSON.parse(fs.readFileSync('./src/antikwai.json'))
const antidiscord = JSON.parse(fs.readFileSync('./src/antidiscord.json'))
const antinestle = JSON.parse(fs.readFileSync('./src/antinestle.json'))
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    
/******FIN DE ARCHIVOS ANTILINK******/


//LEVEL INICIO
const getLevelingXp = (userId) => {
  let position = false
  Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
      position = i
    }
  })
  if (position !== false) {
    return _level[position].xp
  }
}

const getLevelingLevel = (userId) => {
  let position = false
  Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
      position = i
    }
  })
  if (position !== false) {
    return _level[position].level
  }
}

const getLevelingId = (userId) => {
  let position = false
  Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
      position = i
    }
  })
  if (position !== false) {
    return _level[position].jid
  }
}

const addLevelingXp = (userId, amount) => {
  let position = false
  Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
      position = i
    }
  })
  if (position !== false) {
    _level[position].xp += amount
    fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
  }
}

const addLevelingLevel = (userId, amount) => {
  let position = false
  Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
      position = i
    }
  })
  if (position !== false) {
    _level[position].level += amount
    fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
  }
}

const addLevelingId = (userId) => {
  const obj = { jid: userId, xp: 1, level: 1 }
  _level.push(obj)
  fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
}
//LEVEL FIN

function addMetadata(packname, author) {
  if (!packname) packname = 'CHAPINIANDO'; if (!author) author = 'Chapin';
  author = author.replace(/[^a-zA-Z0-9]/g, '');
  let name = `${author}_${packname}`
  if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
  const json = {
    "sticker-pack-name": packname,
    "sticker-pack-publisher": author,
  }
  const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
  const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

  let len = JSON.stringify(json).length
  let last

  if (len > 256) {
    len = len - 256
    bytes.unshift(0x01)
  } else {
    bytes.unshift(0x00)
  }

  if (len < 16) {
    last = len.toString(16)
    last = "0" + len
  } else {
    last = len.toString(16)
  }

  const buf2 = Buffer.from(last, "hex")
  const buf3 = Buffer.from(bytes)
  const buf4 = Buffer.from(JSON.stringify(json))

  const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

  fs.writeFile(`./${name}.exif`, buffer, (err) => {
    return `./${name}.exif`
  })

}

function kyun(seconds) {
  function pad(s) {
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60 * 60));
  var minutes = Math.floor(seconds % (60 * 60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
  const client = new WAConnection()
  client.version = [2, 2126, 14]
  client.logger.level = 'warn'
  console.log(banner.string)
  client.on('qr', () => {
    console.log(color('[', 'white'), color('!', 'red'), color(']', 'white'), color(' Escanea el codigo QR rapido!!!  '))
  })

  fs.existsSync('./Nazwa.json') && client.loadAuthInfo('./Nazwa.json')
  client.on('connecting', () => {
    start('2', 'Desconectado')
  })
  client.on('open', () => {
    success('2', 'Conectado')
  })//de aqui
 
 await client.connect({ timeoutMs: 30 * 1000 })
  fs.writeFileSync('./Nazwa.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

  client.on('group-participants-update', async (anu) => {
    if(antifake.includes(anu.jid)) {
	const mdata = await client.groupMetadata(anu.jid)
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(502)) {
					client.sendMessage(mdata.id, 'Solo estan permitidos numeros +502.', MessageType.text)
					setTimeout(async function () {
						client.groupRemove(mdata.id, [num])
					}, 1000)
				}
			}
		}
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/vBsrYzv/23664023.jpg'
				}
				teks =`﹋﹋﹋﹋﹋﹋﹋\n*HOLAA!!* @${num.split('@')[0]}\n*Un Gusto conocerte* 🤗\n\n*BIENVENID@ A*: *${mdata.subject}*\n\n★ _Recuerda leer la descripcion del grupo para no tener ningun problema 🧐_\n\n 👉Toma en cuenta que este grupo no es para ligar.\n╦═══════════ \n☞@${num.split('@')[0]}, Tambien puedes seguirnos en redes sociales.👍\n_*ⓕacebook*_ \n_*ⓘnstagram*_\n_*Ⓨoutube*_\n╩═══════════`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = ''
				} catch {
					ppimg = ''
				}
				teks = ``
				        
    
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})


  client.on('CB:Blocklist', json => {
    if (blocked.length > 2) return
    for (let i of json[1].blocklist) {
      blocked.push(i.replace('c.us', 's.whatsapp.net'))
    }
  })
//hasta aqui
  client.on('chat-update', async (mek) => {
    try {
      if (!mek.hasNewMessage) return
      mek = JSON.parse(JSON.stringify(mek)).messages[0]
      if (!mek.message) return
      if (mek.key && mek.key.remoteJid == 'status@broadcast') return
      if (mek.key.fromMe) return
      global.prefix
      global.blocked
      const content = JSON.stringify(mek.message)
      const from = mek.key.remoteJid
      const type = Object.keys(mek.message)[0]
      const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
      const time = moment.tz('America/Guayaquil').format('HH:mm:ss')
      const date = moment.tz('America/Guayaquil').format('DD/MM/YY')
      body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
      budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
      const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
      const args = body.trim().split(/ +/).slice(1)
      let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined
      const isCmd = body.startsWith(prefix)

      mess = {
        wait: 'Calmao pa estoy procesando😎\n\n❗Por favor no hacer spam👏❗',
        success: '✔️ Listo ✔️',
        levelon: '❬ ✅ ❭ ',
        leveloff: ' ❬ ✅ ❭  *Level desactivado*',
        levelnoton: '❬ ❎ ❭ *Level no esta activado*',
        levelnol: '*Nivel* 0 ',
        error: {
          stick: '[❎] Falló, se produjo un error al convertir la imagen en una pegatina',
          Iv: 'Este no es un link de youtube'
        },
        only: {
          group: '[❗] Este comando es solo para grupos',
          ownerG: '[❗] Este comando solo puede ser utilizado por un admins del grupo',
          ownerB: '[❗] Este comando solo lo usa el Bot',
          admin: '[❗] Este comando solo puede ser utilizado por administradores del grupo',
          premium: 'Este comando solo para admin y vips',
          Badmin: '[❗] Este comando solo se puede usar cuando el bot se convierte en administrador',
          pegatina: 'Calma crack estoy haciendo tu sticker 👏\n\n*Recuerda los stickersgif son de 6 segundos*\n\n',
          attp: 'Calma crack estoy haciendo tu texto a sticker 👏\n\n*Esto puede demorar unos minutos*',
          imgs: 'Euu chito 🥴\n\n*Convirtiendo tu Sticker a Imagen 🔄*',
          mpcancion: 'Calmaoooo estoy procesando 😎\n\n*Convirtiendo de MP4 a MP3 🔄*',
          mpa: 'Euu chito 🥴\n\n*Estoy decargando tu cancion 🔄*\n\nAguarde un momento, por favor.',
          xn: 'Calmao pa 😎\n\n*Estoy descargando tu video 🔄*\n\nAguarde un momento, por favor.',
          mpv: 'Calma ✋🥸🤚\n\n*Estoy descargando tu video 🔄*\n\nAguarde un momento, por favor.',
          insta: 'Calmao 😎\n\n*Estoy descargando tu post 🔄*\n\nAguarde un momento, por favor.',
          musica: 'Buscando.. espere por favor.. 😎',
          musica2: 'Estoy bucando tu archivo.. 😎',
          daftarB: `「NO ESTAS REGISTRADO」\n\nPA NO APARECES EN MI BASE DE DATOS ✋🥸🤚\n`,
        }
      }
      const apakah = ['Si', 'No']
      const kapankah = ['Otro día', 'Otra semana', 'Otro mes', 'Otro año']
      const botNumber = client.user.jid
      const ownerNumber = ["50254766384@s.whatsapp.net", "19729476903@s.whatsapp.net"]
      const premium = ["50254766384@s.whatsapp.net", "19729476903@s.whatsapp.net"]
       const moderador = ["50254766384@s.whatsapp.net", "19729476903@s.whatsapp.net"]  // replace this with your number
      const nomorOwner = [ownerNumber]
      const isGroup = from.endsWith('@g.us')
      const totalchat = await client.chats.all()
      const sender = isGroup ? mek.participant : mek.key.remoteJid
      const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
      const isBanned = ban.includes(sender)
      const groupName = isGroup ? groupMetadata.subject : ''
      const isAntiLink = isGroup ? antilink.includes(from) : false
      const isAntiDiscord = isGroup ? antidiscord.includes(from) : false
            const isAntiNestle = isGroup ? antinestle.includes(from) : false
      const isAntiTube = isGroup ? antitube.includes(from) : false
      const isAntInsta = isGroup ? antinsta.includes(from) : false
      const isAntiTik = isGroup ? antitik.includes(from) : false
      const isAntiFace = isGroup ? antiface.includes(from) : false
      const isAntiKwai = isGroup ? antikwai.includes(from) : false
      const groupId = isGroup ? groupMetadata.jid : ''
      const groupMembers = isGroup ? groupMetadata.participants : ''
      const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
      const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
      const isGroupAdmins = groupAdmins.includes(sender) || false
      const isWelkom = isGroup ? welkom.includes(from) : false
      const isNsfw = isGroup ? nsfw.includes(from) : false
      const isSimi = isGroup ? samih.includes(from) : false
      const isOwner = ownerNumber.includes(sender)
      const isUser = user.includes(sender)
      const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
      const NomerOwner = '50254766384@s.whatsapp.net'
      const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
      const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
const isAntiFake = isGroup ? antifake.includes(from) : false
const isPremium = premium.includes(sender)
const isModerador = moderador.includes(sender)
    const isKickarea = isGroup ? kickarea.includes(from) : false;
     const isVerify = user.includes(sender)
      /******Entrada ApiKey******/
      const BarBarKey = '8'
      /******Fin de la entrada de ApiKey******/

      const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
      }
      const reply = (teks) => {
        client.sendMessage(from, teks, text, { quoted: mek })
      }
      const sendMess = (hehe, teks) => {
        client.sendMessage(hehe, teks, text)
      }
      const mentions = (teks, memberr, id) => {
        (id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
      }


      //ANTILINKS FACEBOOK GRUPOS PERFILES PUBLICACIONES

      if (budy.includes("https://www.facebook.com/")) {
        if (!isGroup) return
        if (!isAntiFace) return
        if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
        client.updatePresence(from, Presence.composing)
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        reply(`*LINK DE FACEBOOK DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
        setTimeout(() => {
          client.groupRemove(from, [kic]).catch((e) => { reply(`*ERR:* ${e}`) })
        }, 0)
        setTimeout(() => {
          client.updatePresence(from, Presence.composing)
          reply("Adios mi loco")
        }, 0)
      }

      if (budy.includes("https://m.facebook.com/")) {
        if (!isGroup) return
        if (!isAntiFace) return
        if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
        client.updatePresence(from, Presence.composing)
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        reply(`*LINK DE FACEBOOK DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
        setTimeout(() => {
          client.groupRemove(from, [kic]).catch((e) => { reply(`*ERR:* ${e}`) })
        }, 0)
        setTimeout(() => {
          client.updatePresence(from, Presence.composing)
          reply("Adios mi loco")
        }, 0)
      }


      //FIN ANTILINKS FACEBOOK GRUPOS PERFILES PUBLICACIONES			

      //FUNCION ANTILINK
 if (budy.includes("https://nestle.com/")) {
        if (!isGroup) return
        if (!isAntiDiscord) return
        if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
        client.updatePresence(from, Presence.composing)
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        reply(`*LINK DE NESTLE DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo, por PUBLICIDAD ENGAÑOSA.`)
        setTimeout(() => {
          client.groupRemove(from, [kic]).catch((e) => { reply(`*ERR:* ${e}`) })
        }, 0)
        setTimeout(() => {
          client.updatePresence(from, Presence.composing)
          reply("Adios mi loc@")
        }, 0)
      }

      if (budy.includes("https://discord.com/")) {
        if (!isGroup) return
        if (!isAntiDiscord) return
        if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
        client.updatePresence(from, Presence.composing)
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        reply(`*LINK DE DISCORD DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
        setTimeout(() => {
          client.groupRemove(from, [kic]).catch((e) => { reply(`*ERR:* ${e}`) })
        }, 0)
        setTimeout(() => {
          client.updatePresence(from, Presence.composing)
          reply("Adios mi loc@")
        }, 0)
      }

      if (budy.includes("https://s.kwai.app/")) {
        if (!isGroup) return
        if (!isAntiKwai) return
        if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
        client.updatePresence(from, Presence.composing)
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        reply(`*LINK DE KWAI DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
        setTimeout(() => {
          client.groupRemove(from, [kic]).catch((e) => { reply(`*ERR:* ${e}`) })
        }, 0)
        setTimeout(() => {
          client.updatePresence(from, Presence.composing)
          reply("Adios mi loc@")
        }, 0)
      }

      if (budy.includes("https://youtu.be/")) {
        if (!isGroup) return
        if (!isAntiTube) return
        if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
        client.updatePresence(from, Presence.composing)
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        reply(`*LINK DE YOUTUBE DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
        setTimeout(() => {
          client.groupRemove(from, [kic]).catch((e) => { reply(`*ERR:* ${e}`) })
        }, 0)
        setTimeout(() => {
          client.updatePresence(from, Presence.composing)
          reply("Adios mi loc@")
        }, 0)
      }



      if (budy.includes("https://www.instagram.com/")) {
        if (!isGroup) return
        if (!isAntInsta) return
        if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
        client.updatePresence(from, Presence.composing)
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        reply(`*LINK DE INSTAGRAM DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
        setTimeout(() => {
          client.groupRemove(from, [kic]).catch((e) => { reply(`*ERR:* ${e}`) })
        }, 0)
        setTimeout(() => {
          client.updatePresence(from, Presence.composing)
          reply("Adios mi loc@")
        }, 0)
      }

      if (budy.includes("https://vm.tiktok.com/")) {
        if (!isGroup) return
        if (!isAntiTik) return
        if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
        client.updatePresence(from, Presence.composing)
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        reply(`*LINK DE TIK TOK DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
        setTimeout(() => {
          client.groupRemove(from, [kic]).catch((e) => { reply(`*ERR:* ${e}`) })
        }, 0)
        setTimeout(() => {
          client.updatePresence(from, Presence.composing)
          reply("Adios....:)")
        }, 0)
      }

      if (budy.includes("://chat.whatsapp.com/")) {
        if (!isGroup) return
        if (!isAntiLink) return
        if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
        client.updatePresence(from, Presence.composing)
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        reply(`*LINK DE WHATSAPP DETECTADO 📢* ${sender.split("@")[0]} Usted será expulsado del grupo`)
        setTimeout(() => {
          client.groupRemove(from, [kic]).catch((e) => { reply(`*ERR:* ${e}`) })
        }, 0)
        setTimeout(() => {
          client.updatePresence(from, Presence.composing)
          reply("Adios....:)")
        }, 0)
      }

    if (isGroup && isKickarea && !mek.key.fromMe) {
      if (sender.includes("502")) {
        reply("Lo sentimos, solo estan permitidos +502!");
        itsmevall.groupRemove(from, [sender]);
      }
    }
      //FIN DE ANTI LINKS 


      //FUNCION DE LEVEL

     if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 75) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`╦═══════════╦\n*「 LEVEL UP 🆙🥳 」*\n\nFelicidades subiste de nivel.\n\n*NOMBRE*\n${pushname}\n*XP*: ${getLevelingXp(sender)}\n*NIVEL*: ${getLevel} de ${getLevelingLevel(sender)}\n╩═══════════╩`)
                }
            } catch (err) {
                console.error(err)
            }
        }

      //FIN DE FUNCION DE LEVEL


      colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
      const isMedia = (type === 'imageMessage' || type === 'videoMessage')
      const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
      const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
      const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      const isQuotedAudio =  type === "extendedTextMessage" && content.includes("audioMessage");
      if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      if (isCmd && isBanned) {
        return console.log(color('[ USUÁRIO BANEADO ] Ignorando Comando', 'blue'), color(moment.tz('America/Guayaquil').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
      }
      if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]))
      if (isCmd && isGroup) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]), 'En', color(groupName))

      /******ENTRADA FIN DE FUNCIONES******/
      function addMetadata(packname, author) {
        if (!packname) packname = 'Bot'; if (!author) author = 'Shanduy';
        author = author.replace(/[^a-zA-Z0-9]/g, '');
        let name = `${author}_${packname}`
        if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
        const json = {
          "sticker-pack-name": packname,
          "sticker-pack-publisher": author,
        }
        const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
        const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

        let len = JSON.stringify(json).length
        let last

        if (len > 256) {
          len = len - 256
          bytes.unshift(0x01)
        } else {
          bytes.unshift(0x00)
        }

        if (len < 16) {
          last = len.toString(16)
          last = "0" + len
        } else {
          last = len.toString(16)
        }

        const buf2 = Buffer.from(last, "hex")
        const buf3 = Buffer.from(bytes)
        const buf4 = Buffer.from(JSON.stringify(json))

        const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

        fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {
          return `./src/stickers/${name}.exif`
        })

      }
      switch (command) {
        case 'intro':
        case 'intro':
          client.sendMessage(from, help(prefix, sender), text, { quoted: mek })
          break
        case 'otak':
          client.sendMessage(from, otak(prefix, sender), text, { quoted: mek })
          break
        case 'juegos':
          client.sendMessage(from, juegos(prefix, sender), text, { quoted: mek })
          break
        case 'idioma':
          client.sendMessage(from, bahasa(prefix, sender), text, { quoted: mek })
          break
        case 'levelmenu':
          client.sendMessage(from, levelmenu(prefix, sender), text, { quoted: mek })
          break
        case 'shanmenu':
          client.sendMessage(from, toinmenu(prefix, sender), text, { quoted: mek })
          break
        case 'menuadmin':
          client.sendMessage(from, menuadmin(prefix, sender), text, { quoted: mek })
          break
        case 'nsfwmenu':
          client.sendMessage(from, nsfwmenu(prefix, sender), text, { quoted: mek })
          break
        case 'banmenu':
          client.sendMessage(from, banmenu(prefix, sender), text, { quoted: mek })
          break
        case 'kickmenu':
          client.sendMessage(from, kickmenu(prefix, sender), text, { quoted: mek })
          break
        case 'desmenu':
          client.sendMessage(from, desmenu(prefix, sender), text, { quoted: mek })
          break
        case 'versión':
        case 'version':
          client.sendMessage(from, version(prefix, sender), text, { quoted: mek })
          break
        case 'antimenu':
          client.sendMessage(from, antimenu(prefix, sender), text, { quoted: mek })
          break
        case 'welmenu':
          client.sendMessage(from, welmenu(prefix, sender), text, { quoted: mek })
          break
        case 'palabras':
          client.sendMessage(from, shantera(prefix, sender), text, { quoted: mek })
          break

        /*case 'virtex':
             case 'troleo':
                   client.sendMessage(from, virtex(prefix, sender), text, {quoted: mek})
                   break*/
        case 'demote':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('La etiqueta de destino que el administrador quiere transmitir')
          mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
          if (mentioned.length > 1) {
            teks = ''
            for (let _ of mentioned) {
              teks += `Pedido recibido✅\n\nRetirando cargo como administrador :\n`
              teks += `@_.split('@')[0]`
            }
            mentions(teks, mentioned, true)
            client.groupDemoteAdmin(from, mentioned)
          } else {
            mentions(`Pedido recibido✅\n\nRetirando cargo como administrador @${mentioned[0].split('@')[0]}\n*${groupMetadata.subject}*_`, mentioned, true)
            client.groupDemoteAdmin(from, mentioned)
          }
          break
        case 'promote':
          client.updatePresence(from, Presence.composing)
          if (!isUser) return reply(mess.only.daftarB)
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('¡La etiqueta de destino que desea promocionar!')
          mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
          if (mentioned.length > 1) {
            teks = 'Pedido recibido✅\n\nAgregando cargo como administrador :\n'
            for (let _ of mentioned) {
              teks += `@${_.split('@')[0]}\n`
            }
            mentions(teks, mentioned, true)
            client.groupMakeAdmin(from, mentioned)
          } else {
            mentions(`Pedido recibido✅\n\nAgregando cargo como administrador : @${mentioned[0].split('@')[0]}`, mentioned, true)
            client.groupMakeAdmin(from, mentioned)
          }
          break


        //FUNCIONES DE BAN Y DESBAN			

        case 'ban':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins) return reply(mess.only.admin)
           if (!isPremium) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          					if (!isModerador) return reply('No es un miembro Moderador, póngase en contacto con el admin.' ,text, { quoted: mek })
          if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
          mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
          pru = '*\n'
          for (let _ of mentioned) {
            pru += `@${_.split('@')[0]}\n`
          }
          ban.push(`${mentioned}`)
          fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
          susp = `『 BANEADO 🚫 』\n\n◉Nombre: @${mentioned[0].split('@')[0]}\n◉Razon: Spam\n\n*Usted a sido baneado por el uso del bot, no podra usar el bot hasta nuevo aviso*`
          mentions(`${susp}`, mentioned, true)
          break

        case 'desban':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
          mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
          pru = '*\n'
          for (let _ of mentioned) {
            pru += `@${_.split('@')[0]}\n`
          }
          ban.splice(`${mentioned}`)
          fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
          susp = `『 DESBANEADO ✅ 』\n\n◉Nombre: @${mentioned[0].split('@')[0]}\n\n*Se te a retirado el BAN ya puedes usar el bot*`
          mentions(`${susp}`, mentioned, true)
          break
          
case "lobo":
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} texto*`)
                   F = body.slice(6)
                   //reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/wolflogo?apikey=3nafoHN7QD2aHyzi18Em7qVC6sw&text1=Chapiniando&text2=${F}`)
                   client.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: ``, quoted: mek})
                   break


        //FIN DE FUNCIONES BAN Y DESBAN					


      //INICIO TIENDA DE IMAGENES

      case "3d":
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} texto*`)
                   F = body.slice(4)
                   //reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/text3dbox?apikey=3nafoHN7QD2aHyzi18Em7qVC6sw&text=${F}`)
                   client.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: ``, quoted: mek})
                   break

                    case "ysilver":
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} texto*`)
                   F = body.slice(4)
                   //reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/splaybutton?apikey=3nafoHN7QD2aHyzi18Em7qVC6sw&text=${F}`)
                   client.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: ``, quoted: mek})
                   break

                    case "flow":
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} texto*`)
                   F = body.slice(5)
                   //reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/flowertext?apikey=3nafoHN7QD2aHyzi18Em7qVC6sw&text=${F}`)
                   client.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: ``, quoted: mek})
                   break

    case "neon":
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Texto*`)
                   F = body.slice(5)
                   //reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/naruto?apikey=3nafoHN7QD2aHyzi18Em7qVC6sw&text=${F}`)
                   client.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: ``, quoted: mek})
                   break;

                       case "crossfire":
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Texto*`)
                   F = body.slice(10)
                   //reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/crosslogo?apikey=3nafoHN7QD2aHyzi18Em7qVC6sw&text=${F}`)
                   client.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: ``, quoted: mek})
                   break;

         case "calendario":
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Texto*`)
                   F = body.slice(10)
                   //reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/calender?apikey=3nafoHN7QD2aHyzi18Em7qVC6sw&image=https://i.ibb.co/X8GVLks/186495059-527872915234472-535326800816949807-n.jpg`)
                   client.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: ``, quoted: mek})
                   break;

                            case "barcode":
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Texto*`)
                   F = body.slice(9)
                   //reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/barcode?apikey=3nafoHN7QD2aHyzi18Em7qVC6sw&text=${F}`)
                   client.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: ``, quoted: mek})
                   break;

                  case "hartata":
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Texto*`)
                   F = body.slice(9)
                   //reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/hartatahta?apikey=3nafoHN7QD2aHyzi18Em7qVC6sw&text=${F}`)
                   client.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: ``, quoted: mek})
                   break;

//case 'wpsearch':

if (args.length == 0) return reply(`Example: ${prefix + command} gatos`)
query = args.join(' ')
get_result = await fetchJson(`https://api.zeks.me/api/gimg?apikey=3nafoHN7QD2aHyzi18Em7qVC6sw&q=${query}`)
ini_buffer = await getBuffer(get_result.result)
await client.sendMessage(from, ini_buffer, image, { quoted: mek })
break

          case 'casino':
          case 'maquinita':
a = '🍇'
b = '🍎'
c = '*10* '
e = '🍑'
f = '💰'
g = '🥝'
pw = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck = pw[Math.floor(Math.random() * pw.length)]
pw1 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck1 = pw1[Math.floor(Math.random() * pw1.length)]
pw2 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck2 = pw2[Math.floor(Math.random() * pw2.length)]
pw3 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck3 = pw3[Math.floor(Math.random() * pw3.length)]
pw4 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck4 = pw4[Math.floor(Math.random() * pw4.length)]
pw5 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck5 = pw5[Math.floor(Math.random() * pw5.length)]
pw6 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck6 = pw6[Math.floor(Math.random() * pw6.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
s = `┃ │  ${luck} │  ${luck1} │ ${luck2}`
a = `┃ │  ${luck3} │  ${luck4} │ ${luck5}`
m = `┃ │  ${luck6} │  ${luck7} │ ${luck7}`
u = `
╭──╼┥𝐂𝐀𝐒𝐒𝐈𝐍𝐎┝╾─╮
╽ ┌─────────┐ ┃
${s}
┃ ├─────────┤ ┃
${a}
┃ ├─────────┤ ┃
${m}
╿ └─────────┘ ╿
╰── 🤠CHAPIN🤠 ──╯`
reply(`${u}`)
break
          
      //FIN TIENDA DE IMAGENES


        /******JUEGOS******/

        case 'gay':
          if (!isUser) return reply(mess.only.daftarB)
          rate = body.slice(5)
          client.updatePresence(from, Presence.composing)
          random = `${Math.floor(Math.random() * 100)}`
          gay = random
          if (gay < 20) { ga = 'Usted es hetero 🤪🤙' } else if (gay == 21) { ga = 'Mas o menos 🤔' } else if (gay == 23) { ga = 'Mas o menos 🤔' } else if (gay == 24) { ga = 'Mas o menos 🤔' } else if (gay == 25) { ga = 'Mas o menos 🤔' } else if (gay == 26) { ga = 'Mas o menos 🤔' } else if (gay == 27) { ga = 'Mas o menos 🤔' } else if (gay == 28) { ga = 'Mas o menos 🤔' } else if (gay == 29) { ga = 'Mas o menos 🤔' } else if (gay == 30) { ga = 'Mas o menos 🤔' } else if (gay == 31) { ga = 'Tengo mi dudas 😑' } else if (gay == 32) { ga = 'Tengo mi dudas 😑' } else if (gay == 33) { ga = 'Tengo mi dudas 😑' } else if (gay == 34) { ga = 'Tengo mi dudas 😑' } else if (gay == 35) { ga = 'Tengo mi dudas 😑' } else if (gay == 36) { ga = 'Tengo mi dudas 😑' } else if (gay == 37) { ga = 'Tengo mi dudas 😑' } else if (gay == 38) { ga = 'TTengo mi dudas 😑' } else if (gay == 39) { ga = 'Tengo mi dudas 😑' } else if (gay == 40) { ga = 'Tengo mi dudas 😑' } else if (gay == 41) { ga = 'Tengo razon? 😏' } else if (gay == 42) { ga = 'Tengo razon? 😏' } else if (gay == 43) { ga = 'Tengo razon? 😏' } else if (gay == 44) { ga = 'Tengo razon? 😏' } else if (gay == 45) { ga = 'Tengo razon? 😏' } else if (gay == 46) { ga = 'Tengo razon? 😏' } else if (gay == 47) { ga = 'Tengo razon? 😏' } else if (gay == 48) { ga = 'Tengo razon? 😏' } else if (gay == 49) { ga = 'Tengo razon? 😏' } else if (gay == 50) { ga = 'Eres o no? 🧐' } else if (gay > 51) { ga = 'Usted es gay 🥸' }
          hasil = `${rate}Usted es ${random}% gay\n\n${ga}`
          reply(hasil)
          break

case 'punteo':
if (!isUser) return reply(mess.only.daftarB)
rate = body.slice(7)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
gay = random
if (gay < 20 ) {ga = 'Poco punteo, ya no tienes otra oportunidad 🤪🤙'} else if (gay == 21 ) {ga = 'Poco punteo, ya no tienes otra oportunidad 🤔'} else if (gay == 23 ) {ga = 'Poco ya no tienes otra oportunidad 🤔'} else if (gay == 24 ) {ga = 'No tienes otra oportunidad 🤔'} else if (gay == 25 ) {ga = 'Poco punteo 🤔'} else if (gay == 26 ) {ga = 'Casi pero no 🤔'} else if (gay == 27 ) {ga = 'Casi per no 🤔'} else if (gay == 28 ) {ga = 'Casi pero no 🤔'} else if (gay == 29 ) {ga = 'Va queriendo 🤔'} else if (gay == 30 ) {ga = 'Ya no tienes otra oportunidaf 🤔'} else if (gay == 31 ) {ga = 'Ya no tienes otra oportunidad 😑'} else if (gay == 32 ) {ga = 'Ya no tienes otra oportunidad 😑'} else if (gay == 33 ) {ga = 'Prueba de nuevo 😑'} else if (gay == 34 ) {ga = 'Prueba otra vez 😑'} else if (gay == 35 ) {ga = 'Prueba otra vez 😑'} else if (gay == 36 ) {ga = 'Ya no tienes otra oportunidad 😑'} else if (gay == 37 ) {ga = 'Ya no tienes otra oportunidad 😑'} else if (gay == 38 ) {ga = 'Ya no tienes otra oportunidad 😑'} else if (gay == 39 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 40 ) {ga = 'sigue probando suerte 😑'} else if (gay == 41 ) {ga = 'Sigue probando suerte? 😏'} else if (gay == 42 ) {ga = 'Prueba ota vez? 😏'} else if (gay == 43 ) {ga = 'Asi te vas a quedar? 😏'} else if (gay == 44 ) {ga = 'Asi te vas a quedar? 😏'} else if (gay == 45 ) {ga = 'Asi te vas a quedar? 😏'} else if (gay == 46 ) {ga = 'Te quedas asi 😏'} else if (gay == 47 ) {ga = 'Intentalo de nuevo, puedes ganar 😏'} else if (gay == 48 ) {ga = 'Intentalo de nuevo, puede estar mejor 😏'} else if (gay == 49 ) {ga = 'intentalo puede estar mejor 😏'} else if (gay == 50 ) {ga = 'Puede estar mejor 🧐'} else if (gay > 51) {ga = 'Tienes buen punteo 🥸'}
hasil = `${rate}Sacaste ${random}% en el reto\n\n${ga}`
reply(hasil)
break
          
        case 'giammattei':
          if (!isUser) return reply(mess.only.daftarB)
          rate = body.slice(9)
          client.updatePresence(from, Presence.composing)
          random = `${Math.floor(Math.random() * 100)}`
          cuties = random
          if (cuties < 20) { cu = 'Mi loco usted va para el cielo 👏' } else if (cuties == 21) { cu = 'Te salvaste ramirez 😎' } else if (cuties == 23) { cu = 'Te salvaste ramirez 😎' } else if (cuties == 24) { cu = 'Te salvaste ramirez 😎' } else if (cuties == 25) { cu = 'Te salvaste ramirez 😎' } else if (cuties == 26) { cu = 'Te salvaste ramirez 😎' } else if (cuties == 27) { cu = 'Te salvaste ramirez 😎' } else if (cuties == 28) { cu = 'Te salvaste ramirez 😎' } else if (cuties == 29) { cu = 'Te salvaste ramirez 😎' } else if (cuties == 30) { cu = 'Te salvaste ramirez 😎' } else if (cuties == 31) { cu = 'Ramirez que hace viendo.. 🤔' } else if (cuties == 32) { cu = 'Miguelito quiere con tigo 🤔' } else if (cuties == 33) { cu = 'Miguelito quiere con tigo 🤔' } else if (cuties == 34) { cu = 'Miguelito quiere con tigo 🤔' } else if (cuties == 35) { cu = 'Miguelito quiere con tigo 🤔' } else if (cuties == 36) { cu = 'Miguelito quiere con tigo 🤔' } else if (cuties == 37) { cu = 'Aldo Davila te ama 🤔' } else if (cuties == 38) { cu = 'Miguelito quiere con tigo 🤔' } else if (cuties == 39) { cu = 'Giammattei te ama 🤔' } else if (cuties == 40) { cu = 'Miguelito quiere con tigo 🤔' } else if (cuties == 41) { cu = 'Mmm sospechoso ramirez 🧐' } else if (cuties == 42) { cu = 'Mmm sospechoso ramirez 🧐' } else if (cuties == 43) { cu = 'Mmm sospechoso ramirez 🧐' } else if (cuties == 44) { cu = 'Mmm sospechoso ramirez 🧐' } else if (cuties == 45) { cu = 'Mmm sospechoso ramirez 🧐' } else if (cuties == 46) { cu = 'Mmm sospechoso ramirez 🧐' } else if (cuties == 47) { cu = 'Mmm sospechoso ramirez 🧐' } else if (cuties == 48) { cu = 'Mmm sospechoso ramirez 🧐' } else if (cuties == 49) { cu = 'Mmm sospechoso ramirez 🧐' } else if (cuties == 50) { cu = 'Mmm sospechoso ramirez 🧐' } else if (cuties > 51) { cu = 'Señores un autentico FAN DE GIAMMATTEI esta en el grupo 🥸' }
          hasil = `${rate}Resultado ${random}% fan de Giammattei\n\n${cu}`
          reply(hasil)
          break

case 'rank':
try{
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
d = []
teks = '╦═══════════╦\n╚>Top 5 de los mas sexis del grupo\n\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `➔ 【 @${groupMembers[r].jid.split('@')[0]} 】\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Hubo un error intentalo nuevamente :/')
}
break			


case 'test':
try{
if (!isModerador) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
d = []
teks = '╦═══════════╦\n╚>Top 5 de los mas sexis del grupo\n\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `➔ 【 @${groupMembers[r].jid.split('@')[0]} 】\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Hubo un error intentalo nuevamente :/')
}
break	

        /******FIN JUEGOS******/


        case 'wa.me':
        case 'wame':
          client.updatePresence(from, Presence.composing)
          options = {
            text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : @${sender.split("@s.whatsapp.net")[0]}\n\nSu link de Whatsapp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*O ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
            contextInfo: { mentionedJid: [sender] }
          }
          client.sendMessage(from, options, text, { quoted: mek })
          break
          if (data.error) return reply(data.error)
          reply(data.result)
          break
        /*case 'tneon':
                    data = await await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=tshanduyx&text=${body.slice(8)}`)
                    if (!isUser) return reply(mess.only.daftarB)
                    client.sendMessage(from, data, image, {quoted: mek, caption: body.slice(8)})
                    break*/

       // case 'creador':
          client.sendMessage(from, { displayname: "Shan 🥸", vcard: vcard }, MessageType.contact, { quoted: mek })
          client.sendMessage(from, 'Arriba está el número del creador del bot \n\nNO SOY UN BOT 🥸\n\nAhi puedes resolver tus preguntas y errores :)\n\nEste no es el numero del propietario del bot que estas usando ahora mismo. Si no, del creador de la base de datos del bot.', MessageType.text, { quoted: mek })
          const none = fs.readFileSync('./mp3/shan.mp3');
          client.sendMessage(from, none, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
          break

        case 'hidetag':
          client.updatePresence(from, Presence.composing)
          if (!isGroupAdmins) return reply(mess.only.Badmin)
          if (!isUser) return reply(mess.only.daftarB)
          if (!isGroup) return reply(mess.only.group)
          teks = body.slice(9)
          group = await client.groupMetadata(from);
          member = group['participants']
          jids = [];
          member.map(async adm => {
            jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
          })
          options = {
            text: teks,
            contextInfo: { mentionedJid: jids },
            quoted: mek
          }
          await client.sendMessage(from, options, text)
          break
        case 'tts':
          client.updatePresence(from, Presence.recording)
          if (args.length < 1) return client.sendMessage(from, 'Cual es el código de idioma?\n\nPara saber el codigo de idioma coloque el comando ${prefix}idioma', text, { quoted: mek })
          if (!isUser) return reply(mess.only.daftarB)
          const gtts = require('./lib/gtts')(args[0])
          if (args.length < 2) return client.sendMessage(from, 'Y el texto?', text, { quoted: mek })
          dtt = body.slice(8)
          ranm = getRandom('.mp3')
          rano = getRandom('.ogg')
          dtt.length > 600
            ? reply('Texto muy largo weon')
            : gtts.save(ranm, dtt, function () {
              exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply('Gagal om:(')
                client.sendMessage(from, buff, audio, { quoted: mek, ptt: true })
                fs.unlinkSync(rano)
              })
            })
          break
        case 'listadmins':
        case 'adminlist':
          client.updatePresence(from, Presence.composing)
          if (!isUser) return reply(mess.only.daftarB)
          if (!isGroup) return reply(mess.only.group)
          teks = `*Lista De Administradores Del Grupo*\n\n${groupMetadata.subject}\n\nTotal: ${groupAdmins.length}\n\n`
          no = 0
          for (let admon of groupAdmins) {
            no += 1
            teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
          }
          mentions(teks, groupAdmins, true)
          break
        case 'setprefix':
          client.updatePresence(from, Presence.composing)
          if (args.length < 1) return
          if (!isOwner) return reply(mess.only.ownerB)
          prefix = args[0]
          reply(`El prefijo se ha cambiado correctamente a : ${prefix}`)
          break
        case 'todos':
        case 'tagall':
          client.updatePresence(from, Presence.composing)
          if (!isGroup) return reply(mess.only.group)
          if (!isUser) return reply(mess.only.daftarB)
          if (!isGroupAdmins) return reply(mess.only.admin)
          members_id = []
          teks = (args.length > 1) ? body.slice(8).trim() : ''
          teks += `  Mensaje para : ${groupMembers.length} miembros\n`
          for (let mem of groupMembers) {
            teks += `╠➥ @${mem.jid.split('@')[0]}\n`
            members_id.push(mem.jid)
          }
          mentions('↱👉🚨 *Atención* 🚨👈↰\n╠➥' + teks + '╚═〘 Hola!! Grupo👋 \n👉 Saludemos y demostremos que estamos activos.\n👉 Deja tu *Hola* nada te cuesta 〙', members_id, true)
          break
        case 'send':
          var pc = body.slice(6)
          var nomor = pc.split("|")[0];
          var pesan = pc.split("|")[1];
          client.sendMessage(nomor + '@s.whatsapp.net', pesan, text)
          break
        case 'setppbot':
          client.updatePresence(from, Presence.composing)
          if (!isQuotedImage) return reply(`Sube fotos con subtítulos ${prefix}Ok`)
          if (!isOwner) return reply(mess.only.ownerB)
          enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
          media = await client.downloadAndSaveMediaMessage(enmedia)
          await client.updateProfilePicture(botNumber, media)
          reply('Gracias por el nuevo perfil')
          break
        case 'bc':
          client.updatePresence(from, Presence.composing)
          if (!isOwner) return reply(mess.only.ownerB)
          if (args.length < 1) return reply('.......')
          anu = await client.chats.all()
          if (isMedia && !mek.message.videoMessage || isQuotedImage) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            buff = await client.downloadMediaMessage(encmedia)
            for (let _ of anu) {
              client.sendMessage(_.jid, buff, image, { caption: `*「 TRANSMISIÓN 」*\n\n${body.slice(4)}` })
            }
            reply('')
          } else {
            for (let _ of anu) {
              sendMess(_.jid, `*「 CHAPIN 」*\n\n${body.slice(4)}`)
            }
            reply('Transmisión exitosa')
          }
          break
        case 'bcgc':
          client.updatePresence(from, Presence.composing)
          if (!isOwner) return reply(mess.only.ownerB)
          if (args.length < 1) return reply('.......')
          if (isMedia && !mek.message.videoMessage || isQuotedImage) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            buff = await client.downloadMediaMessage(encmedia)
            for (let _ of groupMembers) {
              client.sendMessage(_.jid, buff, image, { caption: `*「 GRUPO BC 」*\n*Grupo* : ${groupName}\n\n${body.slice(6)}` })
            }
            reply('')
          } else {
            for (let _ of groupMembers) {
              sendMess(_.jid, `*「 BC GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
            }
            reply('Grupo de transmisión exitoso')
          }

        case 'leave':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins) return reply(mess.only.admin)
          setTimeout(() => {
            client.groupLeave(from)
          }, 2000)
          setTimeout(() => {
            client.updatePresence(from, Presence.composing)
            client.sendMessage(from, 'Chao Pa👋', text) // ur cods
          }, 0)
          break

        case 'grupocr':
          client.updatePresence(from, Presence.composing)
          options = {
            text: `El creador de este grupo es: @54766384`,
            contextInfo: { mentionedJid: [from] }
          }
          client.sendMessage(from, options, text, { quoted: mek })
          break

        case 'kick':
        case 'pafuera':
          client.updatePresence(from, Presence.composing)
          if (!isGroup) return reply(mess.only.group)
           if (!isPremium) return reply(mess.only.premium)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marca al que vamos a darle chajalele')
          mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
          if (mentioned.length > 1) {
            teks = 'Pedido recibido,  👋 :\n'
            for (let _ of mentioned) {
              teks += `@${_.split('@')[0]}\n`
              const none = fs.readFileSync('./mp3/baneado.mp3');
              client.sendMessage(from, none, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
            }
            mentions(teks, mentioned, true)
            client.groupRemove(from, mentioned)
          } else {
            mentions(`Pedido recibido\n@${mentioned[0].split('@')[0]}\nFue eliminado del grupo`, mentioned, true)
            client.groupRemove(from, mentioned)
            client.sendMessage(mentioned, 'Cgame', text)
            const none = fs.readFileSync('./mp3/baneado.mp3');
            client.sendMessage(from, none, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
          }
          break

        case 'exe':
          client.updatePresence(from, Presence.composing)
          if (!isGroup) return reply(mess.only.group)
          if (!isUser) return reply(mess.only.daftarB)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (!isGroupAdmins) return reply(mess.only.Badmin)
          const cmd = body.slice(5)
          exec(cmd, (err, stdout) => {
            if (err) return client.sendMessage(from, 'NO VEMO ✋🥸🤚', text, { quoted: mek })
            if (stdout) {
              client.sendMessage(from, stdout, text, { quoted: mek })
            }
          })
          break

case 'tospam':
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Numero!')
if (!Number(oi2)) return reply('Se esta detectando spam!')
	  for (let i = 0; i < oi2; i++) {
	  itsmevall.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('La cantidad se ha exedido!')
if (Number(args[0]) >= 50) return reply('Numero!')
	  for (let i = 0; i < args[0]; i++) {
	  itsmevall.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await itsmevall.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Spam detectado!')
	if (Number(args[0]) >= 50) return reply('spam!')
	  for (let i = 0; i < args[0]; i++) {
	  itsmevall.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await itsmevall.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Spam detectado!')
	if (Number(args[0]) >= 50) return reply('Spam!')
	  for (let i = 0; i < args[0]; i++) {
	  itsmevall.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await itsmevall.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('spam!')
	if (!Number(oi2)) return reply('spam detectado!')
	  for (let i = 0; i < oi2; i++) {
	  itsmevall.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
      
        
        //ANTILINKS DE REDES SOCIALES	

        case 'antidiscord':
          if (!isGroup) return reply(mess.only.group)
          if (!isUser) return reply(mess.only.daftarB)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (!isGroupAdmins) return reply(mess.only.ownerG)
          if (args.length < 1) return reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
          if (Number(args[0]) === 1) {
            if (isAntiDiscord) return reply('El antilink de Instagram ya esta activo')
            antidiscord.push(from)
            fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antidiscord))
            reply('❬ ✅ ❭ La funcion de antilink de Discord esta habilitada en este grupo')
            client.sendMessage(from, `Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envie un link de *Discord* a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
          } else if (Number(args[0]) === 0) {
            antidiscord.splice(from)
            fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antidiscord))
            reply('❬ ✅ ❭ La funcion de antilink de Discord esta deshabilitada en este grupo')
          } else {
            reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
          }
          break

        case 'antikwai':
          if (!isGroup) return reply(mess.only.group)
          if (!isUser) return reply(mess.only.daftarB)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (!isGroupAdmins) return reply(mess.only.ownerG)
          if (args.length < 1) return reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
          if (Number(args[0]) === 1) {
            if (isAntiKwai) return reply('El antilink de Instagram ya esta activo')
            antikwai.push(from)
            fs.writeFileSync('./src/antinsta.json', JSON.stringify(antikwai))
            reply('❬ ✅ ❭ La funcion de antilink de Kwai esta habilitada en este grupo')
            client.sendMessage(from, `Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envie un link de *Kwai* o de su perfil para pedir likes o followers a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
          } else if (Number(args[0]) === 0) {
            antikwai.splice(from)
            fs.writeFileSync('./src/antinsta.json', JSON.stringify(antikwai))
            reply('❬ ✅ ❭ La funcion de antilink de Kwai esta deshabilitada en este grupo')
          } else {
            reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
          }
          break

        case 'antinsta':
          if (!isGroup) return reply(mess.only.group)
          if (!isUser) return reply(mess.only.daftarB)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (!isGroupAdmins) return reply(mess.only.ownerG)
          if (args.length < 1) return reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
          if (Number(args[0]) === 1) {
            if (isAntInsta) return reply('El antilink de Instagram ya esta activo')
            antinsta.push(from)
            fs.writeFileSync('./src/antinsta.json', JSON.stringify(antinsta))
            reply('❬ ✅ ❭ La funcion de antilink de Instagram esta habilitada en este grupo')
            client.sendMessage(from, `Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envie un link de *Instagram* o de su perfil para pedir likes o followers a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
          } else if (Number(args[0]) === 0) {
            antinsta.splice(from)
            fs.writeFileSync('./src/antinsta.json', JSON.stringify(antinsta))
            reply('❬ ✅ ❭ La funcion de antilink de Instagram esta deshabilitada en este grupo')
          } else {
            reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
          }
          break

        case 'antitik':
          if (!isGroup) return reply(mess.only.group)
          if (!isUser) return reply(mess.only.daftarB)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (!isGroupAdmins) return reply(mess.only.ownerG)
          if (args.length < 1) return reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
          if (Number(args[0]) === 1) {
            if (isAntiTik) return reply('El antilink de Tik Tok ya esta activo')
            antitik.push(from)
            fs.writeFileSync('./src/antitik.json', JSON.stringify(antitik))
            reply('❬ ✅ ❭ La funcion de antilink de Tik Tok esta habilitada en este grupo')
            client.sendMessage(from, `Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envia un link de *Tik Tok* o de su perfil a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
          } else if (Number(args[0]) === 0) {
            antitik.splice(from)
            fs.writeFileSync('./src/antitik.json', JSON.stringify(antitik))
            reply('❬ ✅ ❭ La funcion de antilink de Tik Tok esta deshabilitada en este grupo')
          } else {
            reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
          }
          break

        case 'antitube':
          if (!isGroup) return reply(mess.only.group)
          if (!isUser) return reply(mess.only.daftarB)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (!isGroupAdmins) return reply(mess.only.ownerG)
          if (args.length < 1) return reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
          if (Number(args[0]) === 1) {
            if (isAntiTube) return reply('El antilink de facebook ya esta activo')
            antitube.push(from)
            fs.writeFileSync('./src/antitube.json', JSON.stringify(antitube))
            reply('❬ ✅ ❭ La funcion de antilink de YouTube esta habilitada en este grupo')
            client.sendMessage(from, `Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envia un link de *YouTube* o de su canal a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
          } else if (Number(args[0]) === 0) {
            antitube.splice(from)
            fs.writeFileSync('./src/antitube.json', JSON.stringify(antitube))
            reply('❬ ✅ ❭ La funcion de antilink de YouTube esta deshabilitada en este grupo')
          } else {
            reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
          }
          break

		  case 'antinestle':
          if (!isGroup) return reply(mess.only.group)
          if (!isUser) return reply(mess.only.daftarB)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (!isGroupAdmins) return reply(mess.only.ownerG)
          if (args.length < 1) return reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
          if (Number(args[0]) === 1) {
            if (isAntiNestle) return reply('El antilink de Nestle ya esta activo')
            antinestle.push(from)
            fs.writeFileSync('./src/antinestle.json', JSON.stringify(antinestle))
            reply('❬ ✅ ❭')
            client.sendMessage(from, `Listo.`, text)
          } else if (Number(args[0]) === 0) {
            antinestle.splice(from)
            fs.writeFileSync('./src/antinestle.json', JSON.stringify(antinestle))
            reply('❬ ✅ ❭ La funcion de antilink de Nestle esta deshabilitada en este grupo')
          } else {
            reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
          }
          break

        case 'antiface':
          if (!isGroup) return reply(mess.only.group)
          if (!isUser) return reply(mess.only.daftarB)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (!isGroupAdmins) return reply(mess.only.ownerG)
          if (args.length < 1) return reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
          if (Number(args[0]) === 1) {
            if (isAntiFace) return reply('El antilink de facebook ya esta activo')
            antiface.push(from)
            fs.writeFileSync('./src/antiface.json', JSON.stringify(antiface))
            reply('❬ ✅ ❭ La funcion de antilink de Facebook esta habilitada en este grupo')
            client.sendMessage(from, `Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envia un link de *Facebook* o de alguna publicacion para pedir likes o grupos a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
          } else if (Number(args[0]) === 0) {
            antiface.splice(from)
            fs.writeFileSync('./src/antiface.json', JSON.stringify(antiface))
            reply('❬ ✅ ❭ La funcion de antilink de Facebook esta deshabilitada en este grupo')
          } else {
            reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
          }
          break

        case 'antilink':
          if (!isGroup) return reply(mess.only.group)
          if (!isUser) return reply(mess.only.daftarB)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (!isGroupAdmins) return reply(mess.only.ownerG)
          if (args.length < 1) return reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
          if (Number(args[0]) === 1) {
            if (isAntiLink) return reply('El antilink ya esta activo')
            antilink.push(from)
            fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
            reply('❬ ✅ ❭')

          } else if (Number(args[0]) === 0) {
            antilink.splice(from)
            fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
            reply('❬ ✅ ❭ La funcion de antilink de Grupos De Whatsapp esta deshabilitada en este grupo')
          } else {
            reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
          }
          break

     case "from":
        if (!isGroup) return reply("Solo grupo");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Solo Administrador");
        if (args[0] == "on") {
          if (isKickarea) return reply("✅");
          kickarea.push(from);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Activado!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Desactivado!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `INDIFINIDO`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;

        //FIN DE ANTILINK

        //INICIO EXTRAS

case 'unir':
if (!isPremium) return reply(mess.only.premium)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Para unir a una persona debes escribir el numero sin (+)\n\nEjemplo: *unir 502xxxxxxxx')
if (args[0].startsWith('+')) return reply(mess.unire)
try {0
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
client.groupAdd(from, [num])
} catch (e) {
console.log('Error:', e)
reply('No se pudo agregar el destino, el numero puede estar privado')}
break

        case 'linkgroup':
        case 'linkgrup':
        case 'linkgc':
          client.updatePresence(from, Presence.composing)
          if (!isGroup) return reply(mess.only.group)
          if (!isPremium) return reply(mess.only.premium)
          if (!isUser) return reply(mess.only.daftarB)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          linkgc = await client.groupInviteCode(from)
          yeh = `Aqui esta el link del grupo\n\nhttps://chat.whatsapp.com/${linkgc}\n\nLink Del Grupo *${groupName}*`
          client.sendMessage(from, yeh, text, { quoted: mek, detectLinks: false })
          break
        case 'qrcode':
          buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
          client.sendMessage(from, buff, image, { quoted: mek })
          break

        case 'closegc':
          client.updatePresence(from, Presence.composing)
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          var nomor = mek.participant
          const close = {
            text: `Grupo cerrado por el administrador @${nomor.split("@s.whatsapp.net")[0]}\nAhora *solo los administradores* puede enviar mensajes`,
            contextInfo: { mentionedJid: [nomor] }
          }
          client.groupSettingChange(from, GroupSettingChange.messageSend, true);
          reply(close)
          break
        case 'opengc':
        case 'bukagc':
          client.updatePresence(from, Presence.composing)
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          open = {
            text: `Grupo abierto por el administrador @${sender.split("@")[0]}\nAhora *todos los participantes* pueden enviar mensajes`,
            contextInfo: { mentionedJid: [sender] }
          }
          client.groupSettingChange(from, GroupSettingChange.messageSend, false)
          client.sendMessage(from, open, text, { quoted: mek })
          break
        case 'attp':
          if (!isUser) return reply(mess.only.daftarB)
          if (args.length < 1) return reply(`¿Dónde está el texto?\n*Ejemplo:* ${prefix}attp text`)
          reply(mess.only.attp)
          attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
          client.sendMessage(from, attp2, MessageType.sticker, { quoted: mek })
          break
        case 's':
        case 'tucson':
        case 'opa':
        case 'shan':
        case 'nefasto':
        case 'stiker':
        case 'sticker':
        case 'stickergif':
        case 'stikergif':
          if (!isUser) return reply(mess.only.daftarB)
          if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await client.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.webp')
            await ffmpeg(`./${media}`)
              .input(media)
              .on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
              })
              .on('error', function (err) {
                console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply(mess.error.stick)
              })
              .on('end', function () {
                console.log('Finish')
                exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
                  if (error) {
                    reply(ind.stikga())
                    fs.unlinkSync(media)
                    fs.unlinkSync(ran)
                  }
                  client.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek })
                  fs.unlinkSync(media)
                  fs.unlinkSync(ran)
                })
              })
              .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(ran)
          } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await client.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.webp')
            reply(mess.only.pegatina)
            await ffmpeg(`./${media}`)
              .inputFormat(media.split('.')[1])
              .on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
              })
              .on('error', function (err) {
                console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                reply(`[❗] Fallo, al momento de convertir ${tipe} al sticker`)
              })
              .on('end', function () {
                console.log('Finish')
                exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
                  if (error) {
                    reply(ind.stikga())
                    fs.unlinkSync(media)
                    fs.unlinkSync(ran)
                  }
                  client.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek })
                  fs.unlinkSync(media)
                  fs.unlinkSync(ran)
                })
              })
              .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(ran)
          } else {
            reply(`Envíe una imagen con el comando ${prefix}s o etiqueta a una imagen que ya se haya enviado`)
          }
          break


        case 'toimg':
          client.updatePresence(from, Presence.composing)
          if (!isUser) return reply(mess.only.daftarB)
          if (!isQuotedSticker) return reply('❌ Solo stickers')
          reply(mess.only.imgs)
          encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
          media = await client.downloadAndSaveMediaMessage(encmedia)
          ran = getRandom('.png')
          exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply('❌ No se pudo convertir el sticker en imágenes')
            buffer = fs.readFileSync(ran)
            client.sendMessage(from, buffer, image, { quoted: mek, caption: '*⌈ Imagen convertida ✅ ⌉*' })
            fs.unlinkSync(ran)
          })
          break
        case 'tomp3':
          client.updatePresence(from, Presence.composing)
          if (!isUser) return reply(mess.only.daftarB)
          if (!isQuotedVideo) return reply('❌ Solo videos')
          reply(mess.only.mpcancion)
          encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
          media = await client.downloadAndSaveMediaMessage(encmedia)
          ran = getRandom('.mp4')
          exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply('❌ No se pudo convertir el video a mp3')
            buffer = fs.readFileSync(ran)
            client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
          })
          break

          				case 'fake':
					try {
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ya esta activo')
						antifake.push(from)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('✔️')
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Desactivado ✔️')
					} else {
						reply('1 para activar, 0 para desactivar')
					}
					} catch {
						reply('Error, intente nuevamente.')
					}
                break

        //------FIN EXTRAS------//

        //SERVICIO DE MUSICA Y VIDEO 			


        case 'play':
          if (args.length < 1) return reply('Donde esta el nombre de la canción?\n\nEjemplo: *play Industry Baby - Lil Nas X')
          if (!isUser) return reply(mess.only.daftarB)
         					if (!isModerador) return reply('No es un miembro Moderador, póngase en contacto con el admin.' ,text, { quoted: mek })
          play = body.slice(5)
          anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?q=${play}&apikey=3nafoHN7QD2aHyzi18Em7qVC6sw`)
          if (anu.error) return reply(anu.error)
          infomp3 = `*⌈ Canción Encontrada ✅ ⌉*\n◉ *Título:* ${anu.result.title}\n◉ *Fuente:* ${anu.result.source}\n◉ *Tamaño:* ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠*`
          buffer = await getBuffer(anu.result.thumbnail)
          lagu = await getBuffer(anu.result.url_audio)
          client.sendMessage(from, buffer, image, { quoted: mek, caption: infomp3 })
          client.sendMessage(from, lagu, audio, { mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek })
          break

        case 'play2':
          if (args.length < 1) return reply('Donde esta el nombre de la canción?\n\nEjemplo: *play2 Industry Baby - Lil Nas X')
          if (!isUser) return reply(mess.only.daftarB)
          reply(mess.only.musica2)
          play = body.slice(5)
          anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?q=${play}&apikey=3nafoHN7QD2aHyzi18Em7qVC6sw`)
          if (anu.error) return reply(anu.error)
          infomp3 = `*⌈ Canción Encontrada ✅ ⌉*\n◉ *Título:* ${anu.result.title}\n◉ *Fuente:* ${anu.result.source}\n◉ *Tamaño:* ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠*`
          buffer = await getBuffer(anu.result.thumbnail)
          lagu = await getBuffer(anu.result.url_audio)
          client.sendMessage(from, buffer, image, { quoted: mek, caption: infomp3 })
          client.sendMessage(from, lagu, audio, { mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek })
          break

              case 'mp3':
          if (args.length < 1) return reply('Donde esta el nombre de la canción?\n\nEjemplo: *mp3 Industry Baby - Lil Nas X')
          if (!isUser) return reply(mess.only.daftarB)
          if (!isPremium) return reply(mess.only.premium)
          					if (!isModerador) return reply('No es un miembro Moderador, póngase en contacto con el admin.' ,text, { quoted: mek })
          //reply(mess.only.musica2)
          play = body.slice(5)
          anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=3nafoHN7QD2aHyzi18Em7qVC6sw&q=${play}`)
          if (anu.error) return reply(anu.error)
          infomp3 = ``
          buffer = await getBuffer(anu.result.thumbnail)
          lagu = await getBuffer(anu.result.url_audio)
          client.sendMessage(from, buffer, image, { quoted: mek, caption: infomp3 })
          client.sendMessage(from, lagu, audio, { mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek })
          break

 case "tiktok":
        if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.zeks.me/api/tiktok?apikey=3nafoHN7QD2aHyzi18Em7qVC6sw&url=${args[0]}`
        );
        var b = bv.result.author_metadata;
        var tamnel = await getBuffer(
          bv.result.media_resources.image.contentUrl
        );
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `⚜️ *Nickname*: ${b.username}\n❤️ *Like*: ${a.stats.diggCount}\n💬 *Comment*: ${a.stats.commentCount}\n🔁 *Share*: ${a.stats.shareCount}\n🎞️ *Views*: ${a.stats.playCount}`,
          `Seleccione formato para descargar`,
          tamnel,
          [
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|audio`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
          break

      case "tiktokdl":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.zeks.me/api/tiktok?apikey=3nafoHN7QD2aHyzi18Em7qVC6sw&url=${link}`
        );
        if (tipe == "audio") {
          sendMediaURL(from, bv.result.media_resources.music.playUrl, "");
        }
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.video.videoUrl, "");
        }
        break;


case 'ph': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nombre&texto*`)
                   var F = body.slice(4)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   //reply(``)
                   anu = await getBuffer(`https://api.zeks.me/api/phub?apikey=3nafoHN7QD2aHyzi18Em7qVC6sw&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara+buat+foto+profil+di+whatsapp+menjadi+unik.jpg&username=${F1}&msg=${F2}`)
                  client.sendMessage(from, anu, image, {caption: ``, quoted: mek})
                   break

                   case 'buscar': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nombre&texto*`)
                   var F = body.slice(2)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   //reply(``)
                   anu = await getBuffer(`https://api.zeks.me/api/missing-image?apikey=3nafoHN7QD2aHyzi18Em7qVC6sw&image=https://i.ibb.co/pQQNSmy/Pics-Art-09-12-03-34-27.png&text1=SE BUSCA&text2=ENTIENDE POR CHIHUAHUA&text3=LLAMAR AL%50005000`)
                  client.sendMessage(from, anu, image, {caption: ``, quoted: mek})
                   break
    		

        //FIN DE SERVICIO DE MUSICA Y VIDEO			
        //INICIO VIP 
        				case 'addvip':  
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isModerador) return reply('No es un miembro Moderador, póngase en contacto con el admin.' ,text, { quoted: mek })
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Pasar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '╭────「 *PREMIUM👑* 」──*\n│+ *Número* : \n│+ *Expirado*: *30 Dias*\n│+ *Status*: *ACTIVO*\n│ Actualizado a premium🥰\n*╰──────「 *Premium* 」────'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.sendMessage(from, mentioned)
					} else {
						mentions(`╭────「 *PREMIUM👑* 」──*\n│+ *Número* : @${mentioned[0].split('@')[0]}\n│+ *Expirado*: *30 Dias*\n│+ *Status*: *ACTIVO*\n│ Actualizado a premium🥰\n*╰──────「 *Premium* 」────`, mentioned, true)
					client.sendMessage(from, mentioned)
				    }
					break
             				case 'addmod':  
					if (!isOwner) return reply(mess.only.ownerB)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Pasar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '╭────「 *MODERADOR* 」──*\n│+ *Número* : \n│+ *Moderador del grupo*\n│+ *Status*: *ACTIVO*\n│ Actualizado a Moderador🥰\n*╰──────「 *MODERADOR* 」────'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.sendMessage(from, mentioned)
					} else {
						mentions(`╭────「 *MODERADOR* 」──*\n│+ *Número* : @${mentioned[0].split('@')[0]} \n│+ *Moderador del grupo*\n│+ *Status*: *ACTIVO*\n│ Actualizado a Moderador🥰\n*╰──────「 *MODERADOR* 」────`, mentioned, true)
					client.sendMessage(from, mentioned)
				    }
					break
				case 'dellvip':
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isPremium) return reply('No esta registrado, pongase en contacto con el admin.' ,text, { quoted: mek })
          					if (!isModerador) return reply('No es un miembro Moderador, póngase en contacto con el admin.' ,text, { quoted: mek })
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Agrega el contacto.')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '╭────「 *PREMIUM👑* 」──*\n│+ *Número* : \n│+ *Status*: *DESACTIVADO*\n│ A sido quitado de la lista premium.🙂\n*╰──────「 *Premium* 」────'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.sendMessage(from, mentioned)
					} else {
						mentions(`╭────「 *PREMIUM👑* 」──*\n│+ *Número* : \n│+ *Status*: *DESACTIVADO*\n│ A sido quitado de la lista premium.🙂\n*╰──────「 *Premium* 」────`, mentioned, true)
					client.sendMessage(from, mentioned)
				    }
					break

          case 'daftarvip': 
					client.sendMessage(from, daftarvip(prefix) , text, { quoted: mek })
					break
					case 'cekvip': 
					if (!isPremium) return reply('No estas registrado.' ,text, { quoted: mek })
					me = client.user
					uptime = process.uptime()
					client.sendMessage(from,  `*──────────────────*\n*GRUPO:* CHAPINIANDO\n*─────────────────*\n『 *𝐕𝐈𝐏 𝐔𝐒𝐄𝐑*』\n*──────────────────*\n*•Número:* *${sender.split("@s.whatsapp.net")[0]}*\n*•Status:* *ACTIVO*\n*──────────────────*\n*Status Bot:* *${kyun(uptime)}*\n\n*USTED ES MIEMBRO PREMIUM* 🐊🚩\n*──────────────────*` , text, { quoted: mek, })
					break

          case 'listavip':
					teks = '╭────*「 *𝐕𝐢𝐩𝐬👑* 」\n'
					for (let V of premium) {
						teks += `│+  @${V.split('@')[0]}\n`
					}
					teks += `│+ Total : ${premium.length}\n╰──────*「 *PREMIUM* 」*────`
	client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
          
			//FIN VIP----------------//

        case 'registrar':
          client.updatePresence(from, Presence.composing)
          if (isUser) return reply('Ya estas registrado 🧐')
          if (args.length < 1) return reply(`Incorrecto \nComando : ${prefix}daftar Nombre\nComando : ${prefix}registrar nombre`)
          var reg = body.slice(8)
          var nombre = reg.split("|")[0];
          user.push(sender)
          fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
          client.sendMessage(from, `\`\`\`REGISTRADO ✅\`\`\`\n\n\`\`\`DNI: MALASO 🥸\`\`\`\n\n\`\`\`Hora EC: ${time}\`\`\`\n\n\`\`\`Fecha: ${date}\`\`\`\n\n\`\`\`[Usuario]: ${nombre}\`\`\`\n\`\`\`[Número]: wa.me/${sender.split("@")[0]}\`\`\`\n\nTotal de usuários: ${user.length}\`\`\``, text, { quoted: mek })
          break
        case 'welcome':
          if (!isGroup) return reply(mess.only.group)
          if (!isUser) return reply(mess.only.daftarB)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (!isGroupAdmins) return reply(mess.only.Badmin)
          if (args.length < 1) return reply('Para activar está funcion coloca *welcome 1')
          if (Number(args[0]) === 1) {
            if (isWelkom) return reply('Ya esta activada!!!')
            welkom.push(from)
            fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
            reply('❬ ✅ ❭')
          } else if (Number(args[0]) === 0) {
            welkom.splice(from)
            fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
            reply('❬ ✅ ❭ La funcion de bienvenida esta desactivada en este grupo')
          } else {
            reply('Escribe el comando 1 para activarlo y 0 para desactivarlo Ejemplo: *welcome 1')
          }
          break
        case 'nsfwneko':
          try {
            if (!isNsfw) return reply('❌ *NSFW NO ESTA ACTIVADO* ❌')
            if (!isUser) return reply(mess.only.daftarB)
            res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, { method: 'get' })
            buffer = await getBuffer(res.result)
            client.sendMessage(from, buffer, image, { quoted: mek, caption: 'mesum' })
          } catch (e) {
            console.log(`Error :`, color(e, 'red'))
            reply('❌ *ERROR* ❌')
          }
          break
        case 'nsfw':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (args.length < 1) return reply('Digita 1 para activar los NSFW')
          if (Number(args[0]) === 1) {
            if (isNsfw) return reply('Recursos Activados ✅')
            nsfw.push(from)
            fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
            reply('❬ ✅ ❭ La funcion NSFW esta habilitado en este grupo')
          } else if (Number(args[0]) === 0) {
            nsfw.splice(from, 1)
            fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
            reply('❬ ✅ ❭ La funcion NSFW esta deshabilitado en este grupo')
          } else {
            reply('Digite 1 para activarlo, 0 para desactivarlo')
          }
          break
        case 'waifu':
          gatauda = body.slice(7)
          reply(mess.wait)
          if (!isUser) return reply(mess.only.daftarB)
          anu = await fetchJson(`https://arugaz.my.id/api/nekonime`, { method: 'get' })
          buffer = await getBuffer(anu.result)
          client.sendMessage(from, buffer, image, { quoted: mek })
          break
        case 'randomanime':
          gatauda = body.slice(13)
          reply(mess.wait)
          if (!isUser) return reply(mess.only.daftarB)
          anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, { method: 'get' })
          buffer = await getBuffer(anu.result)
          client.sendMessage(from, buffer, image, { quoted: mek })
          break
        case 'delete':
        case 'del':
          if (!isGroup) return reply(mess.only.group)
          if (!isUser) return reply(mess.only.daftarB)
          client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
          break
        case 'level':
          if (!isLevelingOn) return reply(mess.levelnoton)
          if (!isGroup) return reply(mess.only.group)
          const userLevel = getLevelingLevel(sender)
          const userXp = getLevelingXp(sender)
          sem = sender.replace('@s.whatsapp.net', '')
          if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
          resul = `『 *TUS ESTADISTICAS 🆙* 』\n\nTus estadisticas en tiempo real 🕐\n\n├─ ❏ *NOMBRE:* ${sem}\n├─ ❏ *XP 🆙:* ${userXp}\n└─ ❏ *NIVEL:* ${userLevel}`
          client.sendMessage(from, resul, text, { quoted: mek })
            .catch(async (err) => {
              console.error(err)
              await reply(`Error!\n${err}`)
            })
          break

        case 'leveling':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (args.length < 1) return reply('Digita *leveling 1 para activar este recurso')
          if (args[0] === '1') {
            if (isLevelingOn) return reply('*La función de nivel ya estaba activa*')
            _leveling.push(groupId)
            fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
            reply(mess.levelon)
          } else if (args[0] === '0') {
            _leveling.splice(groupId, 1)
            fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
            reply(mess.leveloff)
          } else {
            reply(` *Digita el comando 1 para activar, 0 para desactivar *\n * Ejemplo: ${prefix}leveling 1*`)
          }
          break
        /*case 'nsfwtrap':
                try{
                        if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
                        if (!isUser) return reply(mess.only.daftarB)
                        res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=APIKEYLU`, {method: 'get'})
                        buffer = await getBuffer(res.result)
                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Estas enfermo flaco'})
                } catch (e) {
                        console.log(`*Error* :`, color(e,'red'))
                        reply('❌ *ERROR* ❌')
                }
break*/
        case 'randomhentaio':
          try {
            if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
            res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, { method: 'get' })
            buffer = await getBuffer(res.result)
            client.sendMessage(from, buffer, image, { quoted: mek, caption: 'Otaku que se esperaba' })
          } catch (e) {
            console.log(`Error :`, color(e, 'red'))
            reply('❌ *ERROR* ❌')
          }
          break
        /*case 'nsfwloli':
          try {
            if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
            res = await fetchJson(`https://api.lolis.life/random?nsfw=true`, {method: 'get'})
            buffer = await getBuffer(res.url)
            client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Alto pedofilo socio'})
          } catch (e) {
            console.log(`Error :`, color(e,'red'))
            reply('❌ *ERROR* ❌')
          }
          break*/
        case 'nsfwbobs':
          try {
            if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
            res = await fetchJson(`https://meme-api.herokuapp.com/gimme/biganimetiddies`, { method: 'get' })
            buffer = await getBuffer(res.url)
            client.sendMessage(from, buffer, image, { quoted: mek, caption: 'Quiero ver tetas' })
          } catch (e) {
            console.log(`Error :`, color(e, 'red'))
            reply('❌ *ERROR* ❌')
          }
          break
        case 'nsfwblowjob':
          try {
            if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
            res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob`, { method: 'get' })
            buffer = await getBuffer(res.result)
            client.sendMessage(from, buffer, image, { quoted: mek, caption: 'No antojen' })
          } catch (e) {
            console.log(`Error :`, color(e, 'red'))
            reply('❌ *ERROR* ❌')
          }
          break
        case 'nsfwneko':
          try {
            if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
            res = await fetchJson(`https://api.computerfreaker.cf/v1/neko`, { method: 'get' })
            buffer = await getBuffer(res.result)
            client.sendMessage(from, buffer, image, { quoted: mek, caption: 'Pero que wea?' })
          } catch (e) {
            console.log(`Error :`, color(e, 'red'))
            reply('❌ *ERROR* ❌')
          }
          break
        /*case 'nsfwyuri':
          try {
            if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
            res = await fetchJson(`https://api.computerfreaker.cf/v1/yuri`, {method: 'get'})
            buffer = await getBuffer(res.result)
            client.sendMessage(from, buffer, image, {quoted: mek, caption: 'NEFASTOOOOOOO'})
          } catch (e) {
            console.log(`Error :`, color(e,'red'))
            reply('❌ *ERROR* ❌')
          }
        break*/
        case 'nsfwass':
          try {
            if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
            res = await fetchJson(`'https://meme-api.herokuapp.com/gimme/animebooty`, { method: 'get' })
            buffer = await getBuffer(res.url)
            client.sendMessage(from, buffer, image, { quoted: mek, caption: 'Ese es el culito que querías?' })
          } catch (e) {
            console.log(`Error :`, color(e, 'red'))
            reply('❌ *ERROR* ❌')
          }
          break
        case 'nsfwsidebobs':
          try {
            if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
            res = await fetchJson(`https://meme-api.herokuapp.com/gimme/sideoppai`, { method: 'get' })
            buffer = await getBuffer(res.url)
            client.sendMessage(from, buffer, image, { quoted: mek, caption: 'wuajjaaja' })
          } catch (e) {
            console.log(`Error :`, color(e, 'red'))
            reply('❌ *ERROR* ❌')
          }
          break
        case 'nsfwahegao':
          try {
            if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
            res = await fetchJson(`https://meme-api.herokuapp.com/gimme/ahegao`, { method: 'get' })
            buffer = await getBuffer(res.url)
            client.sendMessage(from, buffer, image, { quoted: mek, caption: 'Joder' })
          } catch (e) {
            console.log(`Error :`, color(e, 'red'))
            reply('❌ *ERROR* ❌')
          }
          break
        case 'nsfwthighs':
          try {
            if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
            res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animethighss`, { method: 'get' })
            buffer = await getBuffer(res.url)
            client.sendMessage(from, buffer, image, { quoted: mek, caption: 'Por que muslos?' })
          } catch (e) {
            console.log(`Error :`, color(e, 'red'))
            reply('❌ *ERROR* ❌')
          }
          break
        case 'nsfwfeets':
          try {
            if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
            res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animefeets`, { method: 'get' })
            buffer = await getBuffer(res.url)
            client.sendMessage(from, buffer, image, { quoted: mek, caption: 'MMMMM PATAS' })
          } catch (e) {
            console.log(`Error :`, color(e, 'red'))
            reply('❌ *ERROR* ❌')
          }
          break
        case 'nsfwarmpits':
          try {
            if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
            res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animearmpits`, { method: 'get' })
            buffer = await getBuffer(res.url)
            client.sendMessage(from, buffer, image, { quoted: mek, caption: 'A?' })
          } catch (e) {
            console.log(`Error :`, color(e, 'red'))
            reply('❌ *ERROR* ❌')
          }
          break
        case 'nsfwtoin':
          try {
            if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
            res = await fetchJson(`https://tobz-api.herokuapp.com/nsfwtrap?apikey=BotWeA`, { method: 'get' })
            buffer = await getBuffer(res.url)
            client.sendMessage(from, buffer, image, { quoted: mek, caption: 'Bro....' })
          } catch (e) {
            console.log(`Error :`, color(e, 'red'))
            reply('❌ *ERROR* ❌')
          }
          break

            case 'facebook':
case 'fb':
if (args.length < 1) return reply('Y el link? ')
if(!isUrl(args[0]) && !args[0].includes('facebook')) return reply('Link de facebook')
teks = args.join(' ')
reply(mess.wait)
res = await fbDown(teks).catch(e => {
  reply(mess.musica)
})
a = res[0]
result = `
Titulo :* ${a.judul}
*Source :* ${a.source}
*TamaÃ±o :* ${a.size}
*Calidad :* ${a.quality}
*Tipo :* ${a.type}
*Name File :* ${a.judul}.${a.type}
`
sendFileFromUrl(a.thumb, image, {caption: result, quoted: sam})
sendFileFromUrl(a.link, video, { mimetype: 'video/mp4',quoted: sam, filename: `${a.judul}.${a.type}`})
break

        case 'ping':
          if (!isUser) return reply(mess.only.userB)
          const timestamp = speed();
          const latensi = speed() - timestamp
          client.updatePresence(from, Presence.composing)
          uptime = process.uptime()
          client.sendMessage(from, `Velocidad: *${latensi.toFixed(4)} _Second_*\nDevice: *Alcatel Pixi 4*\nRAM: *6Mb*\nData: *10GB*\nRed: *2G*\nEstado: *Bateria Baja*`, text, { quoted: mek })
          break
        case 'ttp':
          if (args.length < 1) return reply('Y el texto flaco?')
          ranp = getRandom('.png')
          rano = getRandom('.webp')
          teks = body.slice(4).trim()
          anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, { method: 'get' })
          if (anu.error) return reply(anu.error)
          exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
            fs.unlinkSync(ranp)
            if (err) return reply(mess.error.stick)
            client.sendMessage(from, fs.readFileSync(rano), sticker, { quoted: mek })
            fs.unlinkSync(rano)
          })
          break
        default:

          if (budy.includes(`sexoo`)) {
            reply(`Sexo, uy no`)
          }
         if (budy.includes(`Hueco`)) {
            reply(`Prestame atencion.`)
          }

          if (budy.includes(`Bot gay`)) {
            reply(`Miren a este huesito.`)
          }

          if (budy.includes(`Pela la verga`)) {
            reply(`Ya vas pidiendo`)
          }

          if (budy.includes(`porno`)) {
            reply(`El porqui no esta permitido. \n🛑 _Este es un mensaje automatico._ `)
          }

          if (budy.includes(`Mierda`)) {
            reply(`Moderar ese vocabulario, \nTe vamos a mandar con el negro del Whatsapp`)
          }
		   if (budy.includes(`Pa la verga`)) {
            reply(`Moderar ese vocabulario\nTe vamos a mandar con el negro del Whatsapp`)
          }
          if (budy.includes(`Come mierda`)) {
            reply(`Moderar ese vocabulario`)
          }
          if (budy.includes(`Grupo aburrido`)) {
            reply(`Creo que ni has hablado.`)
          }

if (budy.includes(`hdlgp`)) {
            reply(`Porfavor moderara el lenguaje.`)
          }

if (budy.includes(`HDP`)) {
            reply(`Modera el lenguaje.`)
          }

		  if (budy.includes(`Hola nenas`)) {
            reply(`Hola..\nMandame foto para conocerte.`)
          }
		   if (budy.includes(`Alguna chica para pv`)) {
            reply(`Este no es grupo de ligue, cualquier cosa puedes hacerlo aca en genera,  Si alguien aceptá no hay problema siempre y cuando seas educado.`)
          }
		   if (budy.includes(`Alguien para pv`)) {
            reply(`Este no es grupo de ligue, cualquier cosa puedes comentarlo aca en general. Exepto si alguien acepta no hay problema, siempre y cuando sea con respeto.`)
          }
		    if (budy.includes(`Hola soy nuevo`)) {
            reply(`Hola nuevo.`)
          }
		   if (budy.includes(`Hola soy nueva`)) {
            reply(`Hola nueva.`)
          }
		  
          if (budy.includes(`Esto esta aburrido`)) {
            reply(`Haste grande..`)
          }
          if (budy.includes(`Tu madre`)) {
            reply(`Moderar el vocabulario porfavor.`)
          }
            if (budy.includes(`Como les va`)) {
            reply(`Nitidos ㋡`)
          }
		    if (budy.includes(`Como estan`)) {
            reply(`Nitidos ㋡`)
          }
		      if (budy.includes(`De que trata el grupo`)) {
            reply(`╦════════════╦\nLee la descripcion del grupo.\n╩════════════╩`)
          }
		  	    if (budy.includes(`De que es el grupo`)) {
            reply(`╦════════════╦\nLee la descripcion del grupo.\n╩════════════╩`)
          }
		  	    if (budy.includes(`Descripcion del grupo`)) {
            reply(`╦════════════╦\nLee la descripcion del grupo.\n╩════════════╩`)
          }
	  	    if (budy.includes(`Este grupo de que es`)) {
            reply(`╦════════════╦\nLee la descripcion del grupo.\n╩════════════╩`)
          }
	  	    if (budy.includes(`Quien me agrego`)) {
            reply(`╦════════════╦\nLee la descripcion del grupo.\n╩════════════╩`)
          }
	  	    if (budy.includes(`Que hago aca`)) {
            reply(`Aqui no haces nada, Orale..\n╩════════════╩`)
          }

          if (budy.includes(`Rules`)) {
            reply(`Chapiniando!\n
Amistad a lo chapín!!\n
*Recuerda* :\n
✎Se amable y cordial.\n
✎No privados a las señoritas.\n
✎No se admite desnudos.\n
✎Activa el grupo no critiques.\n
✎Si usted solo crítica y no aporta 
✎Se puede retirar gracias.\n
Presentarse con foto a
✎Todos los integrantes porfavor.\n
Para fomentar un entorno agradable debemos tratarnos con respeto.\n
⚠️ *Se les recuerda que no se debe compartir enlaces de otros whatsapp.*`)
          }

            if (budy.includes(`Huecos`)) {
            reply(`Prestame atencion`)
          }

		    if (budy.includes(`Que se cuentan de bueno`)) {
            reply(`1, 2, 3, Nitidos.. `)
          }
		      
             if (budy.startsWith(`Riki`)) {
            const none = fs.readFileSync('./mp3/rini.mp3');
            client.sendMessage(from, none, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
          }
                if (budy.startsWith(`Gufy`)) {
            const none = fs.readFileSync('./mp3/gudy.mp3');
            client.sendMessage(from, none, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
          }
                
if (budy.startsWith(`El de barbita`)) {
            const none = fs.readFileSync('./mp3/barbita.mp4');
            client.sendMessage(from, none, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
          }
               
if (budy.startsWith(`Sexo`)) {
            const none = fs.readFileSync('./mp3/zuniga.mp4');
            client.sendMessage(from, none, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
          }
          if (budy.startsWith(`Donde estan todos`)) {
            const none = fs.readFileSync('./mp3/dondeestan.mp4');
            client.sendMessage(from, none, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
          }
          if (budy.startsWith(`Cuentate un chiste`)) {
            const none = fs.readFileSync('./mp3/dylan2.mp3');
            client.sendMessage(from, none, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
          }
                    
          if (isGroup && isSimi && budy != undefined) {
            console.log(budy)
            muehe = await simih(budy)
            console.log(muehe)
            reply(muehe)
          } else {
						console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()