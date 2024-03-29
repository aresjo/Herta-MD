require('./settings')
const { default: WADefault, 
useMultiFileAuthState, 
DisconnectReason, 
fetchLatestBaileysVersion, 
generateForwardMessageContent, 
prepareWAMessageMedia, 
generateWAMessageFromContent, 
generateMessageID, 
downloadContentFromMessage, 
makeInMemoryzeltoria, 
jidDecode, 
proto } = require("@adiwajshing/baileys")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
const axios = require('axios')
const fetch = require('node-fetch')
const FileType = require('file-type')
const PhoneNumber = require('awesome-phonenumber')
const moment = require('moment-timezone')
const path = require('path')
const { getSizeMedia } = require('./lib/myfunc')
const { 
 imageToWebp, 
 videoToWebp, 
 writeExifImg, 
 writeExifVid } = require('./lib/exif')
const { smsg, 
getBuffer, 
fetchJson } = require('./lib/simple')
const { isSetClose,
    addSetClose,
    removeSetClose,
    changeSetClose,
    getTextSetClose,
    isSetDone,
    addSetDone,
    removeSetDone,
    changeSetDone,
    getTextSetDone,
    isSetLeft,
    addSetLeft,
    removeSetLeft,
    changeSetLeft,
    getTextSetLeft,
    isSetOpen,
    addSetOpen,
    removeSetOpen,
    changeSetOpen,
    getTextSetOpen,
    isSetProses,
    addSetProses,
    removeSetProses,
    changeSetProses,
    getTextSetProses,
    isSetWelcome,
    addSetWelcome,
    removeSetWelcome,
    changeSetWelcome,
    getTextSetWelcome,
    addSewaGroup,
    getSewaExpired,
    getSewaPosition,
    expiredCheck,
    checkSewaGroup
} = require("./lib/zeltoria")

const {
	writeExif
} = require('./lib/exif')

const sleep = async (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}

global.db = JSON.parse(fs.readFileSync("./database/database.json"))
if (global.db) global.db.data = {
         users: {},
         chats: {},
         database: {},
         game: {},
         others: {},
         sticker: {},
         absen: {},
         cmd: {},
         settings: {},
         anonymous: {},
         menfess: {},
         ...(global.db.data || {})
      }

let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
let _left = JSON.parse(fs.readFileSync('./database/left.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
let set_open = JSON.parse(fs.readFileSync('./database/set_open.json'));
let set_close = JSON.parse(fs.readFileSync('./database/set_close.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let opengc = JSON.parse(fs.readFileSync('./database/opengc.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let antilink2 = JSON.parse(fs.readFileSync('./database/antilink2.json'));
let antiwame2 = JSON.parse(fs.readFileSync('./database/antiwame2.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));

const zeltoria = makeInMemoryzeltoria({ logger: pino().child({ level: 'silent', stream: 'zeltoria' }) })
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
	...query,
	...(apikeyqueryname ? {
		[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]
		} : {})
		})) : '')
		
async function Botstarted() {
    const { state, saveCreds } = await useMultiFileAuthState(`./${sessionName}`)

    const herta = WADefault({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['Herta - MD','Safari','1.0.0'],
        patchMessageBeforeSending: (message) => {

                const requiresPatch = !!(
                  message.buttonsMessage
              	  || message.templateMessage
              		|| message.listMessage
                );
                if (requiresPatch) {
                    message = {
                        viewOnceMessage: {
                            message: {
                                messageContextInfo: {
                                    deviceListMetadataVersion: 2,
                                    deviceListMetadata: {},
                                },
                                ...message,
                            },
                        },
                    };
                }
                return message;
    },
        auth: state
    })

    zeltoria.bind(herta.ev)
    
    herta.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!herta.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(herta, mek, zeltoria)
        require("./zeltoria")(herta, m, chatUpdate, zeltoria, opengc, antilink, antiwame, antilink2, antiwame2, set_welcome_db, set_left_db, set_proses, set_done, set_open, set_close, sewa, _welcome, _left, db_respon_list)
        } catch (err) {
            console.log(err)
        }
    })
    
    herta.ev.on('groups.update', async anu => {
    try {
    for(let x of anu) {
       try {
       ppgc = await herta.profilePictureUrl(x.id, 'image')
       } catch {
       ppgc = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
       }
       let wm_fatih = { url : ppgc }
       if (x.announce == true) {
       herta.sendMessage(x.id, {image: {url: ppgc}, caption: `*「 Group Update Detected 」*\n\nGroup telah ditutup, Sekarang hanya admin yang dapat mengirim pesan !`})
       } else if (x.announce == false) {
       herta.sendMessage(x.id, {image: {url: ppgc}, caption:`*「 Group Update Detected 」*\n\nGroup telah dibuka, Sekarang peserta dapat mengirim pesan !`})
       } else if (x.restrict == true) {
       herta.sendMessage(x.id, {image: {url: ppgc}, caption:`*「 Group Update Detected 」*\n\nInfo group telah dibatasi, Sekarang hanya admin yang dapat mengedit info group !`})
       } else if (x.restrict == false) {
       herta.sendMessage(x.id, {image: {url: ppgc}, caption:`*「 Group Update Detected 」*\n\nInfogroup telah dibuka, Sekarang peserta dapat mengedit info group !`})
       } else {
       herta.sendMessage(x.id, {image: {url: ppgc}, caption:`*「 Group Update Detected 」*\n\nNama Group telah diganti menjadi *${x.subject}*`})
     }
    }
    } catch (err){
    console.log(err)
    }
    })
    
    zeltoria.bind(herta.ev)
    herta.ev.on('call', async (celled) => {
    	if (global.anticall) {
    	console.log(celled)
    for (let kopel of celled) {
    	if (kopel.isGroup == false) {
    	if (kopel.status == "offer") {
    	let nomer = await herta.sendTextWithMentions(kopel.from, `*${herta.user.name}* tidak bisa menerima panggilan ${kopel.isVideo ? `video` : `suara`}. Maaf @${kopel.from.split('@')[0]} kamu akan diblokir. Silahkan hubungi Owner membuka blok !`)
    herta.sendContact(kopel.from, owner, nomer)
    await sleep(5000)
    herta.updateBlockStatus(kopel.from, "block")
    }
    }
    }
    }
    })
    
    herta.ev.on('group-participants.update', async (anu) => {
        const isWelcome = _welcome.includes(anu.id)
        const isLeft = _left.includes(anu.id)
        try {
            let metadata = await herta.groupMetadata(anu.id)
            let participants = anu.participants
            const groupName = metadata.subject
  		      const groupDesc = metadata.desc
            for (let num of participants) {
                try {
                    ppuser = await herta.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
                }

                try {
                    ppgroup = await herta.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
                }
                if (anu.action == 'add' && (isWelcome || global.welcome)) {
                	console.log(anu)
                if (isSetWelcome(anu.id, set_welcome_db)) {               	
                var get_teks_welcome = await getTextSetWelcome(anu.id, set_welcome_db)
                var replace_pesan = (get_teks_welcome.replace(/@user/gi, `@${num.split('@')[0]}`))
                var full_pesan = (replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc))
                herta.sendMessage(anu.id, {text: `${full_pesan}`})
                } else {
                	herta.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `*Welcome Kak @${num.split("@")[0]} Di Group ${metadata.subject}* 

${metadata.desc} `})
                }
                } else if (anu.action == 'remove' && (isLeft || global.left)) {
                	console.log(anu)
                  if (isSetLeft(anu.id, set_left_db)) {            	
                        var get_teks_left = await getTextSetLeft(anu.id, set_left_db)
                        var replace_pesan = (get_teks_left.replace(/@user/gi, `@${num.split('@')[0]}`))
                        var full_pesan = (replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc))
                      herta.sendMessage(anu.id, {text: `${full_pesan}`})
                       } else {
                       	herta.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `Bye Kak 👋
                       	
*"Karna Setiap Ucapan Selamat Datang Akan Selalu Diakhiri Dengan Ucapan Selamat Tinggal"*

Terima Kasih Kak @${num.split("@")[0]} Sampai Bertemu Kembali Di Group ${metadata.subject}` })
                        }
                        } else if (anu.action == 'promote') {
                    herta.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `@${num.split('@')[0]} sekaran menjadi admin grup ${metadata.subject}` })
                } else if (anu.action == 'demote') {
                    herta.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `@${num.split('@')[0]} bukan admin grup ${metadata.subject} lagi` })
              }
            }
        } catch (err) {
            console.log(err)
        }
    })
	
    // Setting
    herta.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    herta.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = herta.decodeJid(contact.id)
            if (zeltoria && zeltoria.contacts) zeltoria.contacts[id] = { id, name: contact.notify }
        }
    })

    herta.getName = (jid, withoutContact  = false) => {
        id = herta.decodeJid(jid)
        withoutContact = herta.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = zeltoria.contacts[id] || {}
            if (!(v.name || v.subject)) v = herta.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === herta.decodeJid(herta.user.id) ?
            herta.user :
            (zeltoria.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    herta.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await herta.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await herta.getName(i + '@s.whatsapp.net')}\nFN:${await herta.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
	    })
	}
	herta.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
    herta.public = true

    herta.serializeM = (m) => smsg(herta, m, zeltoria)

    herta.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); herta.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); Botstarted(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); Botstarted(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, reconnecting..."); Botstarted(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); herta.logout(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); Botstarted(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); Botstarted(); }
            else if (reason === DisconnectReason.Multidevicemismatch) { console.log("Multi device mismatch, please scan again"); herta.logout(); }
            else herta.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
        if (update.connection == "open" || update.receivedPendingNotifications == "true") {
         await zeltoria.chats.all()
         console.log(`Connected to = ` + JSON.stringify(herta.user, null, 2))
         //herta.sendMessage("77777777777" + "@s.whatsapp.net", {text:"", "contextInfo":{"expiration": 86400}})
      }
    })

    herta.ev.on('creds.update', saveCreds)

  herta.sendText = (jid, text, quoted = '', options) => herta.sendMessage(jid, { text: text, ...options }, { quoted, ...options })

herta.downloadMediaMessage = async (message) => {
      let mime = (message.msg || message).mimetype || ''
      let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
      const stream = await downloadContentFromMessage(message, messageType)
      let buffer = Buffer.from([])
      for await (const chunk of stream) {
         buffer = Buffer.concat([buffer, chunk])
      }

      return buffer
   }
   
herta.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {

        let quoted = message.msg ? message.msg : message

        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    herta.sendImage = async (jid, path, caption = '', quoted = '', options) => {
    	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    return await herta.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }
    herta.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
    	let types = await herta.getFile(path, true)
    let { mime, ext, res, data, filename } = types
    if (res && res.status !== 200 || file.length <= 65536) {
    	try { throw { json: JSON.parse(file.toString()) } }
    catch (e) { if (e.json) throw e.json }
    }
    let type = '', mimetype = mime, pathFile = filename
    if (options.asDocument) type = 'document'
    if (options.asSticker || /webp/.test(mime)) {
    	let { writeExif } = require('./lib/exif')
    let media = { mimetype: mime, data }
    pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
    await fs.promises.unlink(filename)
    type = 'sticker'
    mimetype = 'image/webp'
    }
    else if (/image/.test(mime)) type = 'image'
    else if (/video/.test(mime)) type = 'video'
    else if (/audio/.test(mime)) type = 'audio'
    else type = 'document'
    await herta.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
    return fs.promises.unlink(pathFile)
    }
    
    herta.getFile = async (PATH, returnAsFilename) => {
      let res, filename
      const data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
      if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
      const type = await FileType.fromBuffer(data) || {
         mime: 'application/octet-stream',
         ext: '.bin'
      }
      if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './media/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
      return {
         res,
         filename,
         ...type,
         data,
         deleteFile() {
            return filename && fs.promises.unlink(filename)
         }
     }
     }
     
    herta.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    	let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
    	buffer = await writeExifVid(buff, options)
    } else {
    	buffer = await videoToWebp(buff)
    }
    
    await herta.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
    return buffer
    }
    herta.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    	let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
    	buffer = await writeExifImg(buff, options)
    } else {
    	buffer = await imageToWebp(buff)
    }
    
    await herta.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
    return buffer
    }
    
    herta.sendMediaAsSticker = async (jid, path, quoted, options = {}) => {
    	let {
    	ext,
    mime,
    data
    } = await herta.getFile(path)
    let media = {}
    let buffer
    media.data = data
    media.mimetype = mime
    if (options && (options.packname || options.author)) {
    	buffer = await writeExif(media, options)
    } else {
    	buffer = /image/.test(mime) ? await imageToWebp(data) : /video/.test(mime) ? await videoToWebp(data) : ""
    }
    await herta.sendMessage(jid, {
    	sticker: {
    	url: buffer
    },
    ...options
    }, {
    	quoted
    })
    return buffer
    }
    
    herta.sendFakeLink = (jid, text, salam, pushname, quoted) => herta.sendMessage(jid, {
    	text: text,
    contextInfo: {
    	"externalAdReply": {
    	"title": `Selamat ${salam} ${pushname}`,
    "body": `© ${namaowner}`,
    "previewType": "PHOTO",
    "thumbnailUrl": ``,
    "thumbnail": pp_bot,
    "sourceUrl": fakelink
    }
    }
    }, {
    quoted : quoted
    })
    
    herta.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
    	let type = await herta.getFile(path, true)
    let {
    	res,
    data: file,
    filename: pathFile
    } = type
    if (res && res.status !== 200 || file.length <= 65536) {
    	try {
    	throw {
    	json: JSON.parse(file.toString())
    }
    }
    catch (e) {
    	if (e.json) throw e.json
    }
    }
    let opt = {
    	filename
    }
    if (quoted) opt.quoted = quoted
    if (!type) options.asDocument = true
    let mtype = '',
    mimetype = type.mime,
    convert
    if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
    else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
    else if (/video/.test(type.mime)) mtype = 'video'
    else if (/audio/.test(type.mime))(
    convert = await (ptt ? toPTT : toAudio)(file, type.ext),
    file = convert.data,
    pathFile = convert.filename,
    mtype = 'audio',
    mimetype = 'audio/ogg; codecs=opus'
    )
    else mtype = 'document'
    if (options.asDocument) mtype = 'document'
    
    delete options.asSticker
    delete options.asLocation
    delete options.asVideo
    delete options.asDocument
    delete options.asImage
    
    let message = {
    	...options,
    caption,
    ptt,
    [mtype]: {
    	url: pathFile
    },
    mimetype
    }
    let m
    try {
    	m = await herta.sendMessage(jid, message, {
    	...opt,
    ...options
    })
    }
    catch (e) {
    	//console.error(e)
    m = null
    }
    finally {
    	if (!m) m = await herta.sendMessage(jid, {
    	...message,
    [mtype]: file
    }, {
    	...opt,
    ...options
    })
    file = null
    return m
    }
    }
    
herta.sendTextWithMentions = async (jid, text, quoted, options = {}) => herta.sendMessage(jid, {
      text: text,
      mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
      ...options
   }, {
      quoted
   })

    return herta
}

Botstarted()
