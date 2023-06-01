// BASE ORI BY JER OFC
// Recode By Zeltoria
require('./settings')
const { 
BufferJSON, 
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent, 
proto, 
generateWAMessageContent, 
generateWAMessage, 
prepareWAMessageMedia, 
areJidsSameUser, 
getContentType } = require('@adiwajshing/baileys')
const fs = require('fs');
const os = require('os')
const util = require('util');
const chalk = require('chalk');
const axios = require('axios');
const moment = require('moment-timezone');
const ms = toMs = require('ms');
const FormData = require("form-data");
const { fromBuffer } = require('file-type')
const { fetchBuffer } = require("./lib/myfunc2")
const fetch = require('node-fetch')
const { exec, spawn, execSync } = require("child_process")
const fsx = require('fs-extra')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()

// DATABASE GAME
const _family100 = {}
const tebakgambar = {}
const tebakkata = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkabupaten = {}
const tebakkota = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}
//-\\
const similarity = require('similarity')
const threshold = 0.72

const jawabanBenar = (tebak) => {
	return` ${tebak} \n\nJawaban Benar \nSelamat Kamu Ga Dapet Apa-ApaðŸ—¿`
}
const waktuHabis = (jawaban) => {
	return `Waktu Habis\nJawaban:  ${jawaban}`
}

const { smsg, fetchJson, getBuffer } = require('./lib/simple')
const { 
  updateResponList,
  delResponList,
  isAlreadyResponListGroup,
  sendResponList,
  isAlreadyResponList,
  getDataResponList,
  addResponList,
  isSetClose,
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
    checkSewaGroup,
    addPay,
    updatePay
} = require("./lib/store")

async function getGroupAdmins(participants){
        let admins = []
        for (let i of participants) {
            i.admin === "superadmin" ? admins.push(i.id) :  i.admin === "admin" ? admins.push(i.id) : ''
        } 
        return admins || []
}

const _prem = require("./lib/premium");
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));

function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new FormData();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}

function msToDate(mse) {
               temp = mse
               days = Math.floor(mse / (24 * 60 * 60 * 1000));
               daysms = mse % (24 * 60 * 60 * 1000);
               hours = Math.floor((daysms) / (60 * 60 * 1000));
               hoursms = mse % (60 * 60 * 1000);
               minutes = Math.floor((hoursms) / (60 * 1000));
               minutesms = mse % (60 * 1000);
               sec = Math.floor((minutesms) / (1000));
               return days + " Days " + hours + " Hours " + minutes + " Minutes";
            }
            
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

const sleep = async (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

const jsonformat = (string) => {
	return JSON.stringify(string, null, 2)
}

async function UploadDulu(medianya, options = {}) {
const { ext } = await fromBuffer(medianya) || options.ext
        var form = new FormData()
        form.append('file', medianya, 'tmp.'+ext)
        let jsonnya = await fetch('https://tenaja.zeeoneofc.repl.co/upload', {
                method: 'POST',
                body: form
        })
        .then((response) => response.json())
        return jsonnya
}

const tanggal = (numer) => {
	myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
				myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumâ€™at','Sabtu']; 
				var tgl = new Date(numer);
				var day = tgl.getDate()
				bulan = tgl.getMonth()
				var thisDay = tgl.getDay(),
				thisDay = myDays[thisDay];
				var yy = tgl.getYear()
				var year = (yy < 1000) ? yy + 1900 : yy; 
				const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
				let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				
				return`${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

module.exports = herta = async (herta, m, chatUpdate, store, opengc, antilink, antiwame, antilink2, antiwame2, set_welcome_db, set_left_db, set_proses, set_done, set_open, set_close, sewa, _welcome, _left, db_respon_list, ) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : '' //omzee
        var budy = (typeof m.text == 'string' ? m.text : '')
        const isCmd = /^[°•÷×¶£¢€¥®™_=|~!?#/$%^&.+-,\\\©^]/.test(body)
        const prefix = isCmd ? budy[0] : ''
        const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await herta.decodeJid(herta.user.id)
        const isCreator = ["6281315252010@s.whatsapp.net",botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const text = q = args.join(" ")
        const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const groupMetadata = m.isGroup ? await herta.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const from = mek.key.remoteJid
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isPremium = _prem.checkPremiumUser(m.sender, premium)
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
      	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
      	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
      	const isSewa = checkSewaGroup(m.chat, sewa)
        const isAntiLink = antilink.includes(m.chat) ? true : false
        const isAntiWame = antiwame.includes(m.chat) ? true : false  
        const isAntiLink2 = antilink2.includes(m.chat) ? true : false
        const isAntiWame2 = antiwame2.includes(m.chat) ? true : false  
const isWelcome = _welcome.includes(m.chat)
const isLeft = _left.includes(m.chat)
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')

const reply = async (text) =>{
	return await herta.sendFakeLink(m.chat, text, salam, pushname, m)
}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Bot Created By Jer Ofc\n`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;rulzxdBot,;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/33e79ab21ec0446cc3e4f.jpg' }}}}
function parseMention(text = '') {
	return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

async function getGcName(groupID) {
            try {
                let data_name = await herta.groupMetadata(groupID)
                return data_name.subject
            } catch (err) {
                return '-'
            }
        }
        
if(m.isGroup){
    expiredCheck(herta, sewa)
    }
        function pickRandom(list) {
        	return list[Math.floor(Math.random() * list.length)]
        }
        
        //autotyper all
        if (global.autoTyping) { if (m.chat) { herta.sendPresenceUpdate('composing', m.chat) }
       }
            
      if (isAntiLink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`*ã€Œ ANTI LINK ã€*\n\nLink grup detected, maaf kamu akan di kick !`)
        if (!isBotAdmins) return reply(`Upsss... gajadi, bot bukan admin`)
        let gclink = (`https://chat.whatsapp.com/`+await herta.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Upsss... gak jadi, untung link gc sendiri`)
        if (isAdmins) return reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await herta.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
        herta.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
      if (isAntiLink2) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return //reply(`Upsss... gajadi, bot bukan admin`)
        let gclink = (`https://chat.whatsapp.com/`+await herta.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return //reply(`Upsss... gak jadi, untung link gc sendiri`)
        if (isAdmins) return //reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await herta.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
        }
        }
      if (isAntiWame) {
        if (budy.match(`wa.me/`)) {
        reply(`*ã€Œ ANTI WA ME ã€*\n\nWa Me detected, maaf kamu akan di kick !`)
        if (!isBotAdmins) return reply(`Upsss... gajadi, bot bukan admin`)
        if (isAdmins) return reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await herta.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })        
        herta.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
      if (isAntiWame2) {
        if (budy.match(`wa.me/`)) {
        if (!isBotAdmins) return //reply(`Upsss... gajadi, bot bukan admin`)
        if (isAdmins) return //reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await herta.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })        
        }
        }
      if (isAntiWame) {
        if (budy.includes((`Wa.me/`) || (`Wa.me/`))) {
        reply(`*ã€Œ ANTI WA ME ã€*\n\nWa Me detected, maaf kamu akan di kick !`)
        if (!isBotAdmins) return reply(`Upsss... gajadi, bot bukan admin`)
        if (isAdmins) return reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        herta.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
        if (isAlreadyResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list)) {
            var get_data_respon = getDataResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list)
            if (get_data_respon.isImage === false) {
                herta.sendMessage(m.chat, { text: sendResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list) }, {
                    quoted: m
                })
            } else {
                herta.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
                    quoted: m
                })
            }
        }
        
        _prem.expiredCheck(herta, premium)

        //antilink all by xeon
        if (AntiLinkAll)
        if (budy.includes("https://")){
        	if (!isBotAdmins) (bvl)
        bvl = `\`\`\`Ã£â‚¬Å’ Link Detected Ã£â‚¬Â\`\`\`\n\nAdmin has sent a link, admin is free to send any linkÃ°Å¸Ëœâ€¡`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        await herta.sendMessage(m.chat,
        {
        	delete: {
        	remoteJid: m.chat,
        fromMe: false,
        id: m.key.id,
        participant: m.key.participant
        }
        })
        herta.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        herta.sendMessage(from, {text:`\`\`\`Ã£â‚¬Å’ Link Detected Ã£â‚¬Â\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
        } else {
        	}
        
        if (('family100' + m.chat in _family100) && !isCmd) {
        	kuis = true
        let room = _family100['family100' + m.chat]
        let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
        let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (!isSurender) {
        	let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
        if (room.terjawab[index]) return !0
        room.terjawab[index] = m.sender
        }
        let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
        let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : ``}`.trim()
herta.sendTextWithMentions(m.chat, caption, m)
.then(mes => {
	return _family100['family100' + m.chat].pesan = mesg
	}).catch(_ => _)
	if (isWin || isSurender) delete _family100['family100' + m.chat]
	}
	if (tebakgambar[m.chat] && !isCmd && m.quoted) {
		if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
			let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
			jawaban = json.jawaban.toLowerCase().trim()
			if (m.text.toLowerCase() == jawaban) {
				reply(jawabanBenar("Tebakgambar", tebakgambar[m.chat][2]) + "\n\nKirim perintah .tebakgambar untuk bermain lagi")
				clearTimeout(tebakgambar[m.chat][3])
				delete tebakgambar[m.chat]
				}
				else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
				reply(`_Ya, Dikit Lagi!_`)
				else reply(m.chat, "âŒ Jawaban salah", footer_text, '.tega', 'Hint', '.ytega', 'Nyerah', m)
				}
			}
			if (tebakkata[m.chat] && !isCmd && m.quoted) {
				if (m.quoted.id == tebakkata[m.chat][0].key.id) {
					let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
					jawaban = json.jawaban.toLowerCase().trim()
					if (m.text.toLowerCase() == jawaban) {
						reply(jawabanBenar("Tebak Kata", tebakkata[m.chat][2]) + "\n\nKirim perintah .tebakkata untuk bermain lagi")
						clearTimeout(tebakkata[m.chat][3])
						delete tebakkata[m.chat]
						}
						else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
						reply(`_Ya, Dikit Lagi!_`)
						else reply("âŒ Jawaban salah\n\n.teka -- _Bantuan_\n.yteka -- _Nyerah_")
					}
				}
				if (tebakbendera[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
						jawaban = json.name.toLowerCase().trim()
						if (m.text.toLowerCase() == jawaban) {
							reply(jawabanBenar("Tebak Bendera", tebakbendera[m.chat][2]) + "\n\nKirim perintah .tebakbendera untuk bermain lagi")
							clearTimeout(tebakbendera[m.chat][3])
							delete tebakbendera[m.chat]
						}
						else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
						reply(`_Ya, Dikit Lagi!_`)
						else reply("âŒ Jawaban salah\n\n.tebe -- _Bantuan_\n.ytebe -- _Nyerah_")
					}
				}
				if (caklontong[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == caklontong[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (m.text.toLowerCase() == jawaban) {
							reply(jawabanBenar("Cak Lontong", caklontong[m.chat][2]) + "\n\nKirim perintah .caklontong untuk bermain lagi")
							clearTimeout(caklontong[m.chat][3])
							delete caklontong[m.chat]
						}
						else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
						reply(`_Ya, Dikit Lagi!_`)
						else reply("âŒ Jawaban salah\n\n.telo -- _Bantuan_\n.ytelo -- _Nyerah_")
					}
				}
				if (susunkata[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == susunkata[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (m.text.toLowerCase() == jawaban) {
							reply(jawabanBenar("Susun Kata", susunkata[m.chat][2]) + "\n\nKirim perintah .susunkata untuk bermain lagi")
							clearTimeout(susunkata[m.chat][3])
							delete susunkata[m.chat]
						}
						else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
						reply(`_Ya, Dikit Lagi!_`)
						else reply("âŒ Jawaban salah\n\n.tesuka -- _Bantuan_\n.ytesuka -- _Nyerah_")
					}
				}
				if (tebakkalimat[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakkalimat[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (m.text.toLowerCase() == jawaban) {
							reply(jawabanBenar("Tebak Kalimat", tebakkalimat[m.chat][2]) + "\n\nKirim perintah .tebakkalimat untuk bermain lagi")
							clearTimeout(tebakkalimat[m.chat][3])
							delete tebakkalimat[m.chat]
						}
						else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
						reply(`_Ya, Dikit Lagi!_`)
						else reply("âŒ Jawaban salah\n\n.tekatu -- _Bantuan_\n.ytekatu -- _Nyerah_")
					}
				}
				if (siapaaku[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == siapaaku[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (m.text.toLowerCase() == jawaban) {
							reply(jawabanBenar("Tebak Siapa", siapaaku[m.chat][2]) + "\n\nKirim perintah .tebaksiapa untuk bermain lagi")
							clearTimeout(siapaaku[m.chat][3])
							delete siapaaku[m.chat]
						}
						else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
						reply(`_Ya, Dikit Lagi!_`)
						else reply("âŒ Jawaban salah\n\n.tesi -- _Bantuan_\n.ytesi -- _Nyerah_")
					}
				}
		const kontak = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: `6283136505591-1614953337@g.us`
					} : {})
				},
				message: {
					'contactMessage': {
						'displayName': `${pushname}`,
						'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
						'jpegThumbnail': pp_bot,
						thumbnail: pp_bot,
						sendEphemeral: true
					}
				}
			}
			
        switch(command) {
         case 'owner':
         case 'creator': {
            herta.sendContact(m.chat, global.owner, m)
         }
         break
         case 'menu': case 'help': case '?': {
         	herta.sendMessage(m.chat, {image: pp_bot, caption: require("./settings").helpMenu(pushname)}, {quoted:m})
          }
          break
			case'welcome':{
			if ((global.welcome || isWelcome)){ }
            if (!m.isGroup) return reply('Fitur Khusus Group!')
			if (!isAdmins) return reply('Fitur Khusus admin!')
            if (args[0] === "on") {
               if (isWelcome) return reply(`Udah on`)
                _welcome.push(m.chat)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
                reply('Sukses mengaktifkan welcome di grup ini')
            } else if (args[0] === "off") {
               if (!isWelcome) return reply(`Udah off`)
                let anu = _welcome.indexOf(m.chat)
               _welcome.splice(anu, 1)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
                reply('Sukses menonaktifkan welcome di grup ini')
            } else {
                reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
			}
			quoted: kontak
			}
            break
        case'left': case 'goodbye':{
        	if ((global.left || isLeft)){ }
            if (!m.isGroup) return reply('Fitur Khusus Group!')
			if (!isAdmins) return reply('Fitur Khusus admin!')
            if (args[0] === "on") {
               if (isLeft) return reply(`Udah on`)
                _left.push(m.chat)
                fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
                reply('Sukses mengaktifkan goodbye di grup ini')
            } else if (args[0] === "off") {
               if (!isLeft) return reply(`Udah off`)
                let anu = _left.indexOf(m.chat)
               _left.splice(anu, 1)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
                reply('Sukses menonaktifkan goodbye di grup ini')
            } else {
                reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
            }
        }
        break
case'antiwame':{
            if (!m.isGroup) return reply('Fitur Khusus Group!')
				if (!isAdmins) return reply('Fitur Khusus admin!')
                if (!isBotAdmins) return reply("Jadikan bot sebagai admin terlebih dahulu")
             if (args[0] === "on") {
                if (isAntiWame) return reply(`Udah aktif`)
                antiwame.push(m.chat)
                fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
                reply('Successfully Activate Antiwame In This Group')
            } else if (args[0] === "off") {
                if (!isAntiWame) return reply(`Udah nonaktif`)
                let anu = antiwame.indexOf(m.chat)
                antiwame.splice(anu, 1)
                fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
                reply('Successfully Disabling Antiwame In This Group')
            } else {
                reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
            }
}
break
case'antilink':{
            if (!m.isGroup) return reply('Fitur Khusus Group!')
				if (!isAdmins) return reply('Fitur Khusus admin!')
                if (!isBotAdmins) return reply("Bot harus menjadi admin")
            if (args[0] === "on") {
               if (isAntiLink) return reply(`Udah aktif`)
                antilink.push(m.chat)
                fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                reply('Successfully Activate Antilink In This Group')
            } else if (args[0] === "off") {
               if (!isAntiLink) return reply(`Udah nonaktif`)
                let anu = antilink.indexOf(m.chat)
                antilink.splice(anu, 1)
                fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                reply('Successfully Disabling Antilink In This Group')
            } else {
                reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
            }
  
}
		    break
         case 'h':
         case 'hidetag':{
            if (!m.isGroup) return reply("Khusus grup")
            if (!(isAdmins || isCreator)) return reply("Fitur khusus admin")
   let tek = m.quoted ? quoted.text : (text ? text : "")
            herta.sendMessage(m.chat, {
               text: tek ,
               mentions: participants.map(a => a.id)
            }, {
            	quoted: kontak
            })
         }
         break
         case 'sewa':{
         	reply(sewabot)
         }
         break
         case 'jadibot':{
         	reply(`JASA JADIBOT CHAT OWNER AJA KAK`)
         }
         break
         case 'donasi': case 'donate':{
         	herta.sendMessage(m.chat, {image: qris, caption: donasi}, {quoted:m})
         }
         break
         case 'q':{
         	reply ("On Kok Kak Bot Nya")
         }
         break
         case 'kick':{
         	if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
         if (!isBotAdmins) return reply("Bot Bukan Admin")
         if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
         await herta.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat())).catch((err) => reply(jsonformat)())
         }
         break
         case 'add': {
         	if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
         if (!isBotAdmins) return reply("Bot Bukan Admin")
         if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
         let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await herta.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'promote': {
         	if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
         if (!isBotAdmins) return reply("Bot Bukan Admin")
         if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await herta.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         case 'demote': {
         	if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
         if (!isBotAdmins) return reply("Bot Bukan Admin")
         if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await herta.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'sc':
         case 'script':{
         	reply("SCRIPT ORI BY ARES JO \n\nBASE NY ARES JO")
         }
         break
         case 'tqto':
         case 'thanksto':{
         	reply(`â•­â”€â’ ã€Œ THANKS TO ã€ 
â”‚â—‹ Allah Swt.
â”‚â—‹ Myparents
â”‚â—‹ Ares Jo
â”‚â—‹ VinzDev
â”‚â—‹ Misel
â”‚â—‹ Fatih Arridho
â”‚â—‹ Ferdiz
â”‚â—‹ Zeeoneofc
â”‚â—‹ JerOfc
â”‚â—‹ All Creator Bot
â•°â’`) // MAU MAMBAHIN NAMA LU? 
// SILAHKAN TAPI TOLONG JANGAN HAPUS SALAH SATU NAMA DI ATAS ITU
         }
         break
         case 'setppbot':{
         	if (!m.key.fromMe && !isCreator) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Owner")
         if (!/image/.test(mime)) return `Kirim/Reply Image Dengan Caption ${prefix + command}`
         if (/webp/.test(mime)) return `Kirim/Reply Image Dengan Caption ${prefix + command}`
         let media = await herta.downloadAndSaveMediaMessage(qmsg)
         await herta.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
         }
         break
         case 'jasrun':{
         	reply(`Mau jasrun ? silahkan hubungi Owner`)
         }
         break
         case 'join':{
         	if (!isCreator) return reply(`Fitur Ini Hanya Dapat Di Gunakan Oleh Owner`)
         if (!text) return reply(`Masukan Link Group !`)
         if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(`Link Eror !`)
         reply("Sedang Di Proses")
         let result = args[0].split('https://chat.whatsapp.com/')[1]
         await herta.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         break
         case "tiktoknowm":
         case "tiktok":{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
         if (!isUrl(args[0])  && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
         reply("Sedang Di Proses")
         let res = await fetch(global.api('alfa', '/api/downloader/tiktok', {url: args[0]}, 'apikey'))
         if (!res.ok) throw await res.text()
         var result = await res.json()
         var result = result.result 
         herta.sendMessage(from, {video:{url: result.nowm}, mimetype:"video/mp4", caption: `DONE`}, {quoted:m})
         }
         break
         case "tiktokaudio":{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
         if (!isUrl(args[0])  && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
         reply("Sedang Di Proses")
         let res = await fetch(global.api('alfa', '/api/downloader/tiktok', {url: args[0]}, 'apikey'))
         if (!res.ok) throw await res.text()
         var result = await res.json()
         var result = result.result 
         herta.sendMessage(from, {audio:{url: result.audio}, mimetype:"audio/mpeg", caption: `DONE`}, {quoted:m})
         }
         break
         case 'tiktokaudio2':{
         	if (!text) return m.reply( `Example : ${prefix + command} link`)
         if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
         reply("Sedang Di Proses")
         require('./lib/tiktok').Tiktok(q).then( data => {
         	herta.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
         })
         }
         break
         case "tiktokvn":{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
         if (!isUrl(args[0])  && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
         reply("Sedang Di Proses")
         let res = await fetch(global.api('alfa', '/api/downloader/tiktok', {url: args[0]}, 'apikey'))
         if (!res.ok) throw await res.text()
         var result = await res.json()
         var result = result.result 
         herta.sendMessage(from, {audio:{url: result.audio}, mimetype:"audio/mpeg", ptt:true, caption: `DONE`}, {quoted:m})
         }
         break
         case "patrick":
         case "popoci":
         case "sponsbob":
         case "kawan-sponsbob":
         case "awoawo":
         case "chat":
         case "benedict":
         case "dbfly":
         case "dino-kuning":
         case "doge":
         case "gojosatoru":
         case "hope-boy":
         case "jisoo":
         case "kr-robot":
         case "kucing":
         case "lonte":
         case "manusia-lidi":
         case "menjamet":
         case "meow":
         case "nicholas":
         case "tyni": {
         	reply("Sedang Di Proses")
         let res = await fetch(global.api('alfa', '/api/telegram-sticker/' + command, {}, 'apikey'))
         if (!res.ok) throw await res.text()
         let img = await res.buffer()
         let savestik = await herta.sendImageAsSticker(m.chat, img, m, {
         	packname: packname,
         author: author
         })
         await fs.unlinkSync(savestik)
         }
         break
         case 'ttp':
         case 'attp':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         if (!text) return reply(`Kirim perintah:\n${prefix+command} teks\n\nContoh penggunaan\n${prefix+command} saya robok anda goblok`)
         let res = await fetch(global.api('alfa', '/api/canvas/' + command, {text: text}, 'apikey'))
         if (!res.ok) throw await res.text()
         let img = await res.buffer()
         let encmedia = await herta.sendMediaAsSticker(m.chat, img, m, {
         	packname: global.packname,
         author: author
         })
         await fs.unlinkSync(encmedia)
         }
         break
         case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink':{
         	if (!m.isGroup) throw reply(`Fitur Ini Khusus Group`)
         if (!isBotAdmins) throw reply(`Bot Bukan Admin`)
         reply("Sedang Di Proses")
         let response = await herta.groupInviteCode(m.chat)
         herta.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
         reply("Itu Link Group Nya Kak")
         }
         break
         case 'revoke':
         case 'resetlink':
         case 'resetlinkgrup':
         case 'resetlinkgroup':
         case 'resetlinkgc':{
         	if (!m.isGroup) throw reply(`Fitur Ini Khusus Group`)
         if (!isBotAdmins) throw reply(`Bot Bukan Admin`)
         if (!isAdmins && !isCreator) return reply(`Fitur Ini Khusus Admin !`)
         reply("Sedang Di Proses")
         herta.groupRevokeInvite(m.chat)
         reply(`Done Reset Link Gc Nya Kak`)
         }
         break
         case 'delete': case 'del':{
         	if (!m.quoted) throw false
         let { chat, fromMe, id, isBaileys } = m.quoted
         if (!isBaileys) return 'Pesan Itu Bukan Di kirim Oleh Bot'
         herta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
         reply("Sukses Delete Pesan âœ…")
         }
         break
         case 'kosong':{
         	if (!isCreator) return (`Fitur Ini Khusus Owner`)
         	reply(`
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         `)
         }
         break
         case 'out':{
         	if (!m.isGroup) throw reply(`Fitur Ini Khusus Group`)
         	if (!isCreator) return reply(`Fitur Ini Khusus Owner`)
         await herta.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'listonline': case 'onlinelist':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
         let online = [...Object.keys(store.presences[id]), botNumber]
         herta.sendText(m.chat, 'List Online:\n\n' + online.map(v => 'â­” @' + v.replace(/@.+/, '')).join`\n`, m, {
         	mentions: online
         })
         }
         break
         case 'public':{
         	if (!isCreator) return (`Fitur Ini Khusus Owner`)
         herta.public = true
         reply('*Sukses Ganti Bot Ke Mode Public*')
         }
         break
         case 'self':{
         	if (!isCreator) return (`Fitur Ini Khusus Owner`)
         herta.public = false 
         reply('*Sukses Ganti Bot Ke mode Self, Jika Mau Ganti Bot  Ke Mode Public Silahkan Ke Nomor Bot Ketik .public*')
         }
         break
         case 'tiktokkayes':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         reply("Sedang Di Proses")
         var but = [{ buttonId: `grubbot`, buttonText: { displayText: `GROUP BOT` }, type: 1 }]
         var kayes = JSON.parse(fs.readFileSync('./random/kayes.json'))
         var hasil = pickRandom(kayes)
         herta.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokgirl':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         reply("Sedang Di Proses")
         var asupan = JSON.parse(fs.readFileSync('./random/tiktokgirl.json'))
         var hasil = pickRandom(asupan)
         herta.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokghea':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	reply("Sedang Di Proses")
         var gheayubi = JSON.parse(fs.readFileSync('./random/gheayubi.json'))
         var hasil = pickRandom(gheayubi)
         herta.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokbocil':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	reply("Sedang Di Proses")
         var bocil = JSON.parse(fs.readFileSync('./random/bocil.json'))
         var hasil = pickRandom(bocil)
         herta.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokukhty':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	reply("Sedang Di Proses")
         var ukhty = JSON.parse(fs.readFileSync('./random/ukhty.json'))
         var hasil = pickRandom(ukhty)
         herta.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktoksantuy':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	reply("Sedang Di Proses")
         var santuy = JSON.parse(fs.readFileSync('./random/santuy.json'))
         var hasil = pickRandom(santuy)
         herta.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokpanrika':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	reply("Sedang Di Proses")
         var rikagusriani = JSON.parse(fs.readFileSync('./random/panrika.json'))
         var hasil = pickRandom(rikagusriani)
         herta.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktoknotnot':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         reply("Sedang Di Proses")
         var notnot = JSON.parse(fs.readFileSync('./random/notnot.json'))
         var hasil = pickRandom(notnot)
         herta.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokgabagtha':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	reply("Sedang Di Proses")
         var gabagtha = JSON.parse(fs.readFileSync('./random/tiktokgabagtha.json'))
         var hasil = pickRandom(gabagtha)
         herta.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'block':{
         	if (!isCreator) return reply(`Fitur Ini Khusus Owner`)
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await herta.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'unblock':{
         	if (!isCreator) return reply(`Fitur Ini Khusus Owner`)
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await herta.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'setnamegc':
         case 'setnamagc':{
         if (!m.isGroup) return(`Fitur Ini Khusus Group`)
         if (!isBotAdmins) return(`Bot Bukan Admin`)
         if (!isAdmins) return(`Fitur Ini Khusus Admin !`)
         if (!text) throw 'Text Nya ?'
         await herta.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'setdesc': case 'setdesk':{
         	if (!m.isGroup) return(`Fitur Ini Khusus Group`)
         if (!isBotAdmins) return(`Bot Bukan Admin`)
         if (!isAdmins) return(`Fitur Ini Khusus Admin !`)
         if (!text) throw 'Text Nya ?'
         await herta.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'gitclone':{
         	if (!args[0]) return reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/JER-BOTZ/JERxxx`)
         if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Eror Bang Link Nya`)
         let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
         let [, user, repo] = args[0].match(regex1) || []
         repo = repo.replace(/.git$/, '')
         let url = `https://api.github.com/repos/${user}/${repo}/zipball`
         let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
         herta.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply("Sukses"))
         }
         break
         case 'developer': case 'dev': {
         	reply(`JER-BOT DEVELOPER\n\n\nÂ©2021-2023 JER-BOTZ MD.\n\nWhatshapp\nJER: wa.me/6281315252010`)
         }
         break
case 'delprem':

         case 'unprem':

         case 'delpremium': {

            if (!isCreator) return (`Emank Lu Owner Gua Kah ?`)
            if (!text) return reply(`*Kek gini bang*\n\nâ€¢ ${prefix + command} number\n*Contoh:* ${prefix + command} 62887435047326\n\natau\n\nâ€¢ ${prefix + command} @tag\n*Contoh:* ${prefix + command} @62887435047326`)

            let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            if (users) {

               premium.splice(_prem.getPremiumPosition(users, premium), 1)

               fs.writeFileSync('./database/premium.json', JSON.stringify(premium))

               reply("Sukses del premium")

            } else {

               var cekpr = await herta.onWhatsApp(args[0] + "@s.whatsapp.net")

               if (cekpr.length == 0) return reply(`Nomor ${args[0]} tidak terdaftar di WhatsApp`)

               premium.splice(_prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)

               fs.writeFileSync('./database/premium.json', JSON.stringify(premium))

               reply("Sukses del premium")

            }

         }

         break
         case 'addprem':{
         if (!isCreator) return (`Emank Lu Owner Gua Kah ?`)
         
            const swn = args.join(" ")

            const pcknm = swn.split("|")[0];

            const atnm = swn.split("|")[1];

            if (!(pcknm && atnm)) return reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${command} @62887435047326|30d`)

            let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            if (users) {

               _prem.addPremiumUser((pcknm.replace('@', '') + '@s.whatsapp.net').replace(' @', '@'), atnm, premium)

               reply("Sukses add premium")

            } else {

               var cekap = await herta.onWhatsApp(pcknm + "@s.whatsapp.net")

               if (cekap.length == 0) return reply(`Nomor ${pcknm} tidak terdaftar di WhatsApp`)

               _prem.addPremiumUser((pcknm.replace('@', '') + '@s.whatsapp.net').replace(' @', '@'), atnm, premium)

               reply("Sukses add premium")

            }
         }
         break
         case 'listpremium': case 'listprem':{

            let txt = ""

            let men = [];

            for (let i of premium) {

               men.push(i.id)

               txt += `*ðŸ†” ID:* @${i.id.split("@")[0]}\n`

               if (i.expired === 'PERMANENT') {

                  let cekvip = 'PERMANENT'

                  txt += `*â° Expired:* PERMANENT\n\n`

               } else {

                  let cekvip = i.expired - Date.now()

                  txt += `*â° Expired:* ${msToDate(cekvip)}`

               }

            }

            herta.sendMessage(m.chat, { text: `ã€Œ *PREMIUM USER LIST* ã€\n\n*ðŸ‘‘ Total Premium : ${premium.length} user*\n\n${txt}` }, { mentions: men, quoted: m })

         }

         break
         case 'buyprem':{
         	herta.sendContact(m.chat, global.owner,), reply(`Buy Premium Chat Owner`)
         }
         break
         case'antiwame2':{
         	if (!m.isGroup) return reply('Fitur Khusus Group!')
         if (!isAdmins) return reply('Fitur Khusus admin!')
         if (!isBotAdmins) return reply("Jadikan bot sebagai admin terlebih dahulu")
         if (args[0] === "on") {
         	if (isAntiWame2) return reply(`Udah aktif`)
         antiwame2.push(m.chat)
         fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
         reply('Successfully Activate antiwame2 In This Group')
         } else if (args[0] === "off") {
         	if (!isAntiWame2) return reply(`Udah nonaktif`)
         let anu = antiwame2.indexOf(m.chat)
         antiwame2.splice(anu, 1)
         fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
         reply('Successfully Disabling antiwame2 In This Group')
         } else {
         	reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
         }
}
break
case'antilink2':{
	if (!m.isGroup) return reply(`Fitur Ini Khusus Group`)
	if (!isAdmins) return reply('Fitur Khusus admin!')
	if (!isBotAdmins) return reply("Bot harus menjadi admin")
	if (args[0] === "on") {
		if (isAntiLink2) return reply(`Udah aktif`)
		antilink2.push(m.chat)
		fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
		reply('Successfully Activate antilink2 In This Group')
		} else if (args[0] === "off") {
			if (!isAntiLink2) return reply(`Udah nonaktif`)
			let anu = antilink2.indexOf(m.chat)
			antilink2.splice(anu, 1)
			fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
			reply('Successfully Disabling antilink2 In This Group')
			} else {
				reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
				}
				}
				break
				case 'groupbot': case 'grubbot': case 'grupbot':{
					reply(grubbot)
					}
						break
						case 'spotify':{ //credit: Ray SenpaiÃ¢ÂÂ¤Ã¯Â¸Â https://github.com/EternityBots/Nezuko
						if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
						if (!text) return reply(`Mana Link Nya ?`)
						const Spotify = require('./lib/spotify')
						const spotify = new Spotify(text)
						const info = await spotify.getInfo()
						if ((info).error) throw `The link you provided is not spotify link`
						const { name, artists, album_name, release_date, cover_url } = info
						const details = `*Title:* ${name || ''}\n*Artists:* ${(artists || []).join(
						','
						)}\n*Album:* ${album_name}\n*Release Date:* ${release_date || ''}`
						const response = await herta.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
						const bufferpotify = await spotify.download()
						await herta.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
					}
					break
					case 'yts': case 'ytsearch': {
						if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
						if (!text) throw `Contoh : ${prefix + command} story wa anime`
						reply("Sedang Di Proses")
						let yts = require("youtube-yts")
						let search = await yts(text)
						let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
						let no = 1
						for (let i of search.all) {
							teks += `No : ${no++}\nType : ${i.type}\nVideo ID : ${i.videoId}\nTitle : ${i.title}\nViews : ${i.views}\nDuration : ${i.timestamp}\nUploaded : ${i.ago}\nUrl : ${i.url}\n\n`
							}
						herta.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
					}
					break
					case 'google': {
						if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
						if (!text) throw `Contoh : ${prefix + command} fatih arridho`
						let google = require('google-it')
						google({'query': text}).then(res => {
							let teks = `Google Search From : ${text}\n\n`
							for (let g of res) {
								teks += `*Title* : ${g.title}\n`
								teks += `*Description* : ${g.snippet}\n`
								teks += `*Link* : ${g.link}\n\nIni Hasil Nya Kak\n\n`
								}
							reply(teks)
						})
					}
					break
					case 'menfess':{
					if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
					if (m.isGroup) return reply(`Fitur Ini Hanya Dapat Di Gunakan Di Private Chat`)
					if (!text) return reply(`*Kayak Gini Kak*\n\Contoh : ${prefix + command} nomor|nama|pesan`)
					let nomor = q.split('|')[0] ? q.split('|')[0] : q
					let saking = q.split('|')[1] ? q.split('|')[1] : q
					let pesan = q.split('|')[2] ? q.split('|')[2] : ''
					if (pesan.length < 1) return reply(`Semua Nya Harus Di Isi ! contoh : menfess 62xxxxxxxxxx|someone|hello KakaAll must be filled in! eg : confess 62xxxxxxxxxx|from|hello dude`)
					let teksnya = `Hi Kak Ada Menfess Nih\n\nFrom :  _${saking}_  \nMessage : _${pesan}_ `
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`
					herta.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, footer: namabot })
					reply(`Sukses Kirim Menfess !!`)
					}
						break
						case 'runtime': case 'speed':{
						reply(`Runtime : ${runtime(process.uptime())}`)
						}
						break
						case 'antilinkall': {
							if (!m.isGroup) return reply(`Fitur Ini Khusus Group`)
							if (!isBotAdmins) return reply(`Bot Bukan Admin`)
							if (!isAdmins && !isCreator) return reply(`Fitur Ini Khusus Admin !`)
							if (args[0] === "on") {
								if (AntiLinkAll) return reply('Already activated')
								ntilinkall.push(from)
								fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
								reply('Success in turning on all antilink in this group')
								var groupe = await herta.groupMetadata(from)
								var members = groupe['participants']
								var mems = []
								members.map(async adm => {
									mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
									})
									herta.sendMessage(from, {text: `\`\`\`Ã£â‚¬Å’ Ã¢Å¡Â Ã¯Â¸ÂWarningÃ¢Å¡Â Ã¯Â¸Â Ã£â‚¬Â\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
									} else if (args[0] === "off") {
										if (!AntiLinkAll) return reply('Already deactivated')
										let off = ntilinkall.indexOf(from)
										ntilinkall.splice(off, 1)
										fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
										reply('Success in turning off all antilink in this group')
										} else {
											reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
											}
											}
											break
case 'ytmp3': case 'ytaudio': {
	let { yta } = require('./lib/y2mate')
	if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
	let quality = args[1] ? args[1] : '128kbps'
	let media = await yta(text, quality)
	if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
	herta.sendImage(m.chat, media.thumb, ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${isUrl(text)}\n Ext : MP3\n Resolusi : ${args[1] || '128kbps'}`, m)
	herta.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
case 'ytmp4': case 'ytvideo': {
	let { ytv } = require('./lib/y2mate')
	if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
	let quality = args[1] ? args[1] : '360p'
	let media = await ytv(text, quality)
	if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
	herta.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${isUrl(text)}\n Ext : MP3\n Resolusi : ${args[1] || '360p'}` }, { quoted: m })
	}
	break
case 'pinterest':{
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	if (!text) return reply('Contoh Penggunaan : .pinterest JerOfc')
	let { pinterest } = require('./lib/scraper')
	anu = await pinterest(text)
	result = anu[Math.floor(Math.random(), anu.length)]
	herta.sendMessage(m.chat, { image: { url: result }, caption: `Media Url : `+result }, { quoted: m })
	}
break
case 'bctext': case 'broadcasttext': case 'broadcast':
if (!isCreator) return reply("Fitur khusus owner!")
if (!text) throw `Mana Text Nya ?`
var data = await store.chats.all()
for (let i of data) {
	herta.sendMessage(i.id, {text: `${namaowner}'s Broadcast\n\nMessage : ${q}` })
	await sleep(1000)
	}
	break
case 'toimage': case 'toimg': {
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	if (!quoted) throw 'Reply image'
	if (!/webp/.test(mime)) throw `Reply sticker with caption *${prefix + command}*`
	reply("Sedang Di Proses")
	let media = await herta.downloadAndSaveMediaMessage(quoted)
	let ran = await getRandom('.png')
	exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		fs.unlinkSync(media)
		if (err) throw err
		let bufferimg13x = fs.readFileSync(ran)
		herta.sendMessage(m.chat, { image: bufferimg13x }, { quoted: m })
		fs.unlinkSync(ran)
		})
		}
		break
case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker':{
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	if (!quoted) throw `*Reply Video/Image With Caption* ${prefix + command}`
	if (/image/.test(mime)) {
		reply("Sedang Di Proses")
		let media = await quoted.download()
		let encmedia = await herta.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		await fs.unlinkSync(encmedia)
		} else if (/video/.test(mime)) {
			if ((quoted.msg || quoted).seconds > 11) return reply('*Maximum 10 seconds!*')
			let media = await quoted.download()
			let encmedia = await herta.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
			await fs.unlinkSync(encmedia)
			} else {
				reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
				}
				}
				break
				case 'setnamabot': case 'setnamebot': {
					if (!text) throw `Contoh : ${prefix + command} WhatsApp âœ…`
					let name = await herta.updateProfileName(text)
					reply(`Successfully renamed bot to ${name}`)
					}
					break
case 'setstatus': case 'setbiobot': case 'setbotbio': {
	if (!text) throw `this is a WhatsApp Bot named JerOfc`
	let name = await herta.updateProfileStatus(text)
	reply(`Successfully changed bot bio status to ${name}`)
	}
	break
case 'play': case 'ytplay':{
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	if (!text) throw `Contoh : ${prefix + command} anime whatsapp status`
	reply("Sedang Di Proses")
	let yts = require("youtube-yts")
	let search = await yts(text)
	let anulay = search.videos[Math.floor(Math.random() * search.videos.length)]
	let buttons = [
		{buttonId: `.ytmp3 ${anulay.url}`, buttonText: {displayText: 'â™« Audio'}, type: 1},
		{buttonId: `.ytmp4 ${anulay.url}`, buttonText: {displayText: 'â–º Video'}, type: 1}
		]
		let buttonMessage = {
	image: { url: anulay.thumbnail },
		caption: `
Title : ${anulay.title}
Ext : Search
ID : ${anulay.videoId}
Duration : ${anulay.timestamp}
Viewers : ${anulay.views}
Upload At : ${anulay.ago}
Author : ${anulay.author.name}
Channel : ${anulay.author.url}
Description : ${anulay.description}
Url : ${anulay.url}`,
footer: namabot,
buttons: buttons,
headerType: 4
}
herta.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	let { TelegraPh } = require('./lib/uploader')
	if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
	if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
	if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
	reply("Sedang Di Proses")
	mee = await herta.downloadAndSaveMediaMessage(quoted)
	mem = await TelegraPh(mee)
	meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
	memek = await herta.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
	await fs.unlinkSync(memek)
	}
	break
case 'emojimix': {
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	let [emoji1, emoji2] = text.split`+`
	if (!emoji1) throw `Contoh : ${prefix + command} ðŸ˜…+ðŸ¤”`
	if (!emoji2) throw `Contoh : ${prefix + command} ðŸ˜…+ðŸ¤”`
	let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
	for (let res of anumojimix.results) {
		let encmedia = await herta.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		await fs.unlinkSync(encmedia)
		}
		}
		break
		case 'emojimix2': {
			if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
			if (!text) throw `Contoh : ${prefix + command} ðŸ˜…`
			let anumix2 = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
			for (let res of anumix2.results) {
				let encmedia= await herta.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
				await fs.unlinkSync(encmedia)
				}
				}
				break
case 'assalamualaikum':{
	reply(`Waalaikumsalam`)
	}
	break
case 'broadcastvid': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':{
if (!isCreator) return reply("Fitur khusus owner!")
if (!text) throw `Mana Text Nya ?`
let getGroups = await herta.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let xeoncast = groups.map(v => v.id)
reply(` Broadcasting in ${xeoncast.length} Group Chat, in ${xeoncast.length * 1.5} seconds`)
for (let i of xeoncast) {
	let txt = `${namaowner}'s Broadcast\n\nMessage : ${text}`
	if(/image/.test(mime)) {
		let media = await quoted.download()
		await herta.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
		}
		if(/video/.test(mime)){
			let media = await quoted.download()
			await herta.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
			}
			}
			reply(`Sukses Broadcast in ${xeoncast.length} Groups`)      
			}
			break
case 'tagall': {
	if (!m.isGroup) return reply('Fitur Khusus Group!')
	if (!isAdmins) return reply('Fitur Khusus admin!')
	if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
	let teks = `â•šÂ» Tag All Â«â• 
	
ðŸŒ¿ *Message : ${q ? q : 'empty'}*\n\n`
	for (let mem of participants) {
		teks += `@${mem.id.split('@')[0]}\n`
		}
		herta.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
		}
		break
case 'mediafire': {
	if (!text) throw `Mana Link Nya ?`
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw `The link you provided is invalid`
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(baby1))
	const result4 = `*MEDIAFIRE DOWNLOADER*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
herta.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break
case 'igphoto':
case 'instaphoto':
case 'instafoto':
case 'igfoto':
case "ig":
case "igdl":{
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link Instagram\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/p/ClU74LNpgaw/?igshid=YmMyMTA2M2Y=`)
	if (!isUrl(args[0])) return reply(`Kirim perintah:\n${prefix+command} link Instagram\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/p/ClU74LNpgaw/?igshid=YmMyMTA2M2Y=`)
	reply("Sedang Di Proses")
	let res = await fetch(global.api('alfa', '/api/downloader/instagram-photo', {url: args[0]}, 'apikey'))
	if (!res.ok) throw await res.text()
	var result = await res.json()
	var result = result.result
	for(let i of result.url){
		herta.sendFile(m.chat, i, 'ig.jpg', `DONE âœ…`, m)
		}
		}
		case 'igvideo':
		case 'igvidio':
		case 'igvid':
		case 'instavideo':
		case 'instavid':
		case 'igreels':
		case 'instareels':
		case 'instareel':{
			if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
			if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link Instagram video/reels\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/reel/CnVwm3KrQRl/?igshid=YmMyMTA2M2Y=`)
			if (!isUrl(args[0])) return reply(`Kirim perintah:\n${prefix+command} link Instagram video/reels\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/reel/CnVwm3KrQRl/?igshid=YmMyMTA2M2Y=`)
			reply("Sedang Di Proses")
			let res = await fetch(global.api('alfa', '/api/downloader/instagram-video', {url: args[0]}, 'apikey'))
			if (!res.ok) throw await res.text()
			var result = await res.json()
			var result = result.result
			for(let i of result.url){
				herta.sendFile(m.chat, i, 'ig.mp4', `DONE âœ…`, m)
				}
				}
				break
				case 'china':
				case 'indonesia':
				case 'malaysia':
				case 'thailand':
				case 'korea':
				case 'japan':
				case 'vietnam':
				case 'jenni':
				case 'jiiso':
				case 'lisa':
				case 'rose': {
					if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
					reply("Sedang Di Proses")
					let res = await fetch(global.api('alfa', '/api/cecan/' + command, {}, 'apikey'))
					if (!res.ok) throw await res.text()
					let img = await res.buffer()
					herta.sendFile(m.chat, img, 'cecan.jpg', `CANTIK KAN BANG ISTRI KITA ?`, m)
				}
				break
				case "tebakgambar":{
					if (tebakgambar[m.chat]) return herta.sendMessage(m.chat, {
					text: "Soal ini belum selesai"
					}, {
						quoted: tebakgambar[m.chat][0]
					})
					var res = await fetch(api('alfa', '/api/game/' + command, {}, 'apikey'))
					if(!res.ok) throw res.text()
					var result = await res.json()
					console.log("Jawaban: " + result.jawaban)
					tebakgambar[m.chat] = [
					await herta.sendMessage(m.chat, {image:{url: result.img}, caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`},{quoted: m}
					), result, 4999,
					setTimeout(() => {
						if (tebakgambar[m.chat]) {
							herta.sendButtonText(m.chat, [{
								buttonId: '.tebakgambar',
								buttonText: {
									displayText: "Tebak Gambar"
								},
								type: 1
								}], waktuHabis(result.jawaban), footer_text, m)
								delete tebakgambar[m.chat]
							}
						}, 120000)
					]
				}
				break
				case 'tega': {
					if (!(m.chat in tebakgambar)) return
					let json = tebakgambar[m.chat][1]
					herta.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', 'ï¿½ ' + reply, '.ytega', 'Dahlah Nyerah Aja', m)
				}
				case 'ytega': {
					if (!(m.chat in tebakgambar)) return
					clearTimeout(tebakgambar[m.chat][3])
					delete tebakgambar[m.chat]
					return herta.send1ButMes(m.chat, 'Payah lu, gitu aja nyerah', footer_text, '.tebakgambar', 'Soal baru', m)
				}
				break
				case "tebakkata":{
					if (tebakkata[m.chat]) return herta.sendMessage(m.chat, {
						text: "Soal ini belum selesai"
						}, {
							quoted: tebakkata[m.chat][0]
							})
							var anu = await fetch(api('alfa', '/api/game/tebakkata', {}, 'apikey'))
							if(!anu.ok) throw anu.text()
							var result = await anu.json()
							var result = result.result
							console.log("Jawaban: " + result.jawaban)
							tebakkata[m.chat] = [
							await herta.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 4999,
							setTimeout(() => {
								if (tebakkata[m.chat]) {
									reply(waktuHabis(result.jawaban) + "\n\nkirim perintah .tebakkata untuk bermain lagi!")
									delete tebakkata[m.chat]
									}
								}, 120000)
							]
						}
						break
						case 'teka': {
							if (!(m.chat in tebakkata)) return
							let json = tebakkata[m.chat][1]
							reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
						}
						break
						case 'yteka': {
							if (!(m.chat in tebakkata)) return
							clearTimeout(tebakkata[m.chat][3])
							delete tebakkata[m.chat]
							return reply("Payah lu, gitu aja nyerah")
						}
						break
						case "tebakbendera": {
							if (tebakbendera[m.chat]) return herta.sendMessage(m.chat, {
								text: "Soal ini belum selesai"
								}, {
									quoted: tebakbendera[m.chat][0]
									})
									var anu = await fetch(api('alfa', '/api/game/tebakbendera', {}, 'apikey'))
									if (!anu.ok) throw anu.text()
									var result = await anu.json()
									var result = result.result
									console.log("Jawaban: " + result.name)
									tebakbendera[m.chat] = [
									await herta.sendMessage(m.chat, {
										image: {
											url: result.img
											},
											caption: `Gamabar diatas adalah bendera negara?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik`
											}, {
												quoted: m
												}),
												result, 4999,
												setTimeout(() => {
													if (tebakbendera[m.chat]) {
														reply(waktuHabis(result.name) + "\n\nkirim perintah .tebakbendera untuk bermain lagi!")
														delete tebakbendera[m.chat]
													}
												}, 120000)
											]
										}
							break
							case 'tebe': {
								if (!(m.chat in tebakbendera)) return
								let json = tebakbendera[m.chat][1]
								reply(m.chat, '```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footer_text, '.ytebe', 'Dahlah Nyerah Aja', m)
						}
						break
						case 'ytebe': {
							if (!(m.chat in tebakbendera)) return
							clearTimeout(tebakbendera[m.chat][3])
							delete tebakbendera[m.chat]
							return reply(m.chat, 'Payah lu, gitu aja nyerah', footer_text, '.tebakbendera', 'Soal baru', m)
						}
						break
case 'caklontong': { 
	if (caklontong[m.chat]) return herta.sendMessage(m.chat, {
		text: "Soal ini belum selesai"
		}, {
			quoted: caklontong[m.chat][0]
			})
			var anu = await fetch(api('alfa', '/api/game/caklontong', {}, 'apikey'))
			if(!anu.ok) throw anu.text()
			var result = await anu.json()
			var result = result.result
			console.log("Jawaban: " + result.jawaban)
			caklontong[m.chat] = [
			await herta.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 4999,
			setTimeout(() => {
				if (caklontong[m.chat]) {
					reply(waktuHabis(result.jawaban + '\n' + result.deskripsi) + "\n\nkirim perintah .caklontong untuk bermain lagi!")
					    delete caklontong[m.chat]
						}
					}, 120000)
				]
			}
			break
			case 'telo': {
				if (!(m.chat in caklontong)) return
				let json = caklontong[m.chat][1]
				reply(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footer_text, '.ytelo', 'Dahlah Nyerah Aja', m)
			}
			break
			case 'ytelo': {
				if (!(m.chat in caklontong)) return
				clearTimeout(caklontong[m.chat][3])
				delete caklontong[m.chat]
				return herta.send1ButMes(m.chat, 'Payah lu, gitu aja nyerah', footer_text, '.caklontong', 'Soal baru', m)
			}
			break
			case 'susunkata': {
				if (susunkata[m.chat]) return herta.sendMessage(m.chat, {
					text: "Soal ini belum selesai"
					}, {
						quoted: susunkata[m.chat][0]
						})
						var anu = await fetch(api('alfa', '/api/game/susunkata', {}, 'apikey'))
						if(!anu.ok) throw anu.text()
						var result = await anu.json()
						var result = result.result
						console.log("Jawaban: " + result.jawaban)
						susunkata[m.chat] = [
						await herta.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 4999,
						setTimeout(() => {
							if (susunkata[m.chat]) {
								reply(waktuHabis(result.jawaban) + "\n\nkirim perintah .susunkata untuk bermain lagi!")
								delete susunkata[m.chat]
								}
							}, 120000)
						]
					}
					break
					case 'tesuka': {
						if (!(m.chat in susunkata)) return
						let json = susunkata[m.chat][1]
						reply(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footer_text, '.ytesuka', 'Dahlah Nyerah Aja', m)
					}
					break
					case 'ytesuka': {
						if (!(m.chat in susunkata)) return
						clearTimeout(susunkata[m.chat][3])
						delete susunkata[m.chat]
						return reply(m.chat, 'Payah lu, gitu aja nyerah', footer_text, '.susunkata', 'Soal baru', m)
					}
					break
					case 'tebakkalimat': {
						if (tebakkalimat[m.chat]) return herta.sendMessage(m.chat, {
							text: "Soal ini belum selesai"
							}, {
								quoted: tebakkalimat[m.chat][0]
								})
								var anu = await fetch(api('alfa', '/api/game/tebakkalimat', {}, 'apikey'))
								if(!anu.ok) throw anu.text()
								var result = await anu.json()
								var result = result.result
								console.log("Jawaban: " + result.jawaban)
								tebakkalimat[m.chat] = [
								await herta.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 4999,
								setTimeout(() => {
									if (tebakkalimat[m.chat]) {
										reply(waktuHabis(result.jawaban) + "\n\nkirim perintah .tebakkalimat untuk bermain lagi!")
											delete tebakkalimat[m.chat]
										}
									}, 120000)
								]
							}
							break
							case 'tekatu': {
								if (!(m.chat in tebakkalimat)) return
								let json = tebakkalimat[m.chat][1]
								reply(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footer_text, '.ytekatu', 'Dahlah Nyerah Aja', m)
							}
							break
							case 'ytekatu': {
								if (!(m.chat in tebakkalimat)) return
								clearTimeout(tebakkalimat[m.chat][3])
								delete tebakkalimat[m.chat]
								return reply(m.chat, 'Payah lu, gitu aja nyerah', footer_text, '.tebakkalimat', 'Soal baru', m)
							}
							case 'tebaksiapa': {
								if (siapaaku[m.chat]) return herta.sendMessage(m.chat, {
									text: "Soal ini belum selesai"
									}, {
										quoted: siapaaku[m.chat][0]
										})
										var anu = await fetch(api('alfa', '/api/game/siapakahaku', {}, 'apikey'))
										if (!anu.ok) throw anu.text()
										var result = await anu.json()
										var result = result.result
										console.log("Jawaban: " + result.jawaban)
										siapaaku[m.chat] = [
										await herta.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 4999,
										setTimeout(() => {
											if (siapaaku[m.chat]) {
												reply(waktuHabis(result.jawaban) + "\n\nkirim perintah .tebaksiapa untuk bermain lagi!")
												delete siapaaku[m.chat]
											}
										}, 120000)
									]
							}
							break
case 'swm': case 'stickerwm': case 'wm': case 'take': {  
if (!args.join(" ")) return reply(`Contoh :\nswm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
herta.downloadAndSaveMediaMessage(quoted, "gifee")
herta.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await herta.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await herta.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
case "wuyifan":
case "suga":
case "parkchanyeol":
case "ohsehun":
case "luhan":
case "kimtaehyung":
case "kimseok":
case "kimnanjoon":
case "kimminseok":
case "kimjunmyeon":
case "kimjong":
case "kimjondae":
case "jungkook":
case "jimin":
case "jhope":
case "huangzitao":
case "dohkyungsoo":
case "baekhyung": {
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	reply("Sedang Di Proses")
	let res = await fetch(global.api('alfa', '/api/cogan/' + command, {}, 'apikey'))
	if (!res.ok) throw await res.text()
	let img = await res.buffer()
	herta.sendFile(m.chat, img, 'cogan.jpg', `GANTENG GA KA ?`, m)
	}
	break
	case 'group': case 'grup': {
		if (!m.isGroup) return reply('Fitur Khusus Group!')
		if (!isAdmins) return reply('Fitur Khusus admin!')
		if (!isBotAdmins) return reply("Jadikan bot sebagai admin terlebih dahulu")
		if (args[0] === 'close'){
			await herta.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Successfully Closed The Group*`)).catch((err) => m.reply(jsonformat(err)))
			} else if (args[0] === 'open'){
				await herta.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Successfully Opened The Group*`)).catch((err) => m.reply(jsonformat(err)))
				} else {
					reply(`Kirim perintah ${prefix + command} open/close\n\nContoh: ${prefix + command} open`)
					}
					}
					break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
Jer_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await herta.sendMessage(m.chat, { audio: Jer_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'horror':
            case 'game8bit':
            case 'layered':
            case 'glitch2':
            case 'cool-graffiti':
            case 'cool-wall-graffiti':
            case 'realistic':
            case 'space3d':
            case 'glitch-tiktok':
            case 'stone':
            case 'marvel':
            case 'marvel2':
            case "metal-rose-gold":
            case 'pornhub':
            case 'avengers':
            case 'metal-rainbow':
            case 'metal-gold':
            case 'metal-galaxy':
            case 'lion':
            case 'wolf-black-white':
            case 'wolf-galaxy':
            case 'ninja':
            case '3dsteel':
            case 'horror2':
            case 'lava':
            case 'bagel': {
            	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
            	if (!text) return reply(`Kirim perintah:\n${prefix+command} teks1|teks2\n\nContoh penggunaan:\n${prefix+command} jer|ofc`)
            if (!text.includes('|')) return reply(`Kirim perintah:\n${prefix+command} teks1|teks2\n\nContoh penggunaan:\n${prefix+command} jer|ofc`)
            mm = args.join(' ')
            m1 = mm.split("|")[0];
            m2 = mm.split("|")[1];
            reply("Sedang Di Proses")
            let res = await fetch(global.api("alfa", '/api/textpro/' + command, {
            	text: m1,
            text2: m2
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            herta.sendFile(m.chat, img, 'textpro.jpg', 'DONE', m)
            }
            break
            case 'anticall': {
            	if (!m.key.fromMe && !isCreator) return reply("Fitur khusus owner!")
            if (args[0] === "on") {
            	if (global.anticall === true) return reply(`Sudah Di Aktifkan Sebelumnya`)
            global.anticall = true
            reply(`Berhasil Mengaktifkan Anticall`)
            } else if (args[0] === "off") {
            	if (global.anticall === false) return reply(`Sudah Di Nonaktifkan Sebelumnya`)
            global.anticall = false
            reply(`Sukses Nonaktifkan Anticall`)
            } else {
            	reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
            }
            }
            break
            case 'nomerhoki': case 'nomorhoki': {
            	if (!Number(text)) throw `Contoh : ${prefix + command} 6281315252010`
            let anu = await primbon.nomer_hoki(Number(text))
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Nomor HP :* ${anu.message.nomer_hp}\n *Angka Shuzi :* ${anu.message.angka_shuzi}\n *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
            	if (!text) throw `Contoh : ${prefix + command} belanja`
            let anu = await primbon.tafsir_mimpi(text)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Mimpi :* ${anu.message.mimpi}\n *Arti :* ${anu.message.arti}\n *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Nama Suami :* ${anu.message.suami.nama}\n *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n *Nama Istri :* ${anu.message.istri.nama}\n *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Sisi Positif :* ${anu.message.sisi_positif}\n *Sisi Negatif :* ${anu.message.sisi_negatif}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
            	if (!text) throw `Contoh : ${prefix + command} Dika Ardianta`
            let anu = await primbon.arti_nama(text)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Arti :* ${anu.message.arti}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Life Path :* ${anu.message.life_path}\n *Destiny :* ${anu.message.destiny}\n *Destiny Desire :* ${anu.message.destiny_desire}\n *Personality :* ${anu.message.personality}\n *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
            	if (!text) throw `Contoh : ${prefix + command} Dika|Novia`
            let [nama1, nama2] = text.split`|`
            let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendImage(m.chat,  anu.message.gambar, ` *Nama Anda :* ${anu.message.nama_anda}\n *Nama Pasangan :* ${anu.message.nama_pasangan}\n *Sisi Positif :* ${anu.message.sisi_positif}\n *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
            	if (!text) throw `Contoh : ${prefix + command} 6, 12, 2020`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Tanggal Pernikahan :* ${anu.message.tanggal}\n *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
            	if (!ext)throw `Contoh : ${prefix+ command} 28, 12, 2021`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Rezeki :* ${anu.message.rejeki}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Pekerjaan :* ${anu.message.pekerjaan}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
            	if (!text) throw `Contoh : 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.ramalan_nasib(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Analisa :* ${anu.message.analisa}\n *Angka Akar :* ${anu.message.angka_akar}\n *Sifat :* ${anu.message.sifat}\n *Elemen :* ${anu.message.elemen}\n *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Analisa :* ${anu.message.analisa}\n *Sektor :* ${anu.message.sektor}\n *Elemen :* ${anu.message.elemen}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendImage(m.chat, anu.message.image, ` *Lahir :* ${anu.message.tgl_lahir}\n *Simbol Tarot :* ${anu.message.simbol_tarot}\n *Arti :* ${anu.message.arti}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
            let [nama, gender, tahun] = text.split`,`
            let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tahun_lahir}\n *Gender :* ${anu.message.jenis_kelamin}\n *Angka Kua :* ${anu.message.angka_kua}\n *Kelompok :* ${anu.message.kelompok}\n *Karakter :* ${anu.message.karakter}\n *Sektor Baik :* ${anu.message.sektor_baik}\n *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.petung_hari_baik(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Lahir :* ${anu.message.tgl_lahir}\n *Kala Tinantang :* ${anu.message.kala_tinantang}\n *Info :* ${anu.message.info}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Lahir :* ${anu.message.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Info :* ${anu.message.info}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *Tanggal Lahir :* ${anu.message.tgl_lahir}\n *Hari Naas :* ${anu.message.hari_naas}\n *Info :* ${anu.message.catatan}\n *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *Tanggal Lahir :* ${anu.message.tgl_lahir}\n *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *tanggal Lahir :* ${anu.message.tgl_lahir}\n *Arah Rezeki :* ${anu.message.arah_rejeki}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
            	if (!text) throw `Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
            let [nama, tgl, bln, thn, untuk] = text.split`,`
            let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.weton_jawa(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Tanggal :* ${anu.message.tanggal}\n *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n *Watak Hari :* ${anu.message.watak_hari}\n *Naga Hari :* ${anu.message.naga_hari}\n *Jam Baik :* ${anu.message.jam_baik}\n *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
            	if (!text) throw `Contoh : ${prefix + command} 12, 1, 2022`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Tanggal :* ${anu.message.tgl_memancing}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
            	if (!text) throw `Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
            let [tgl, bln, thn, siklus] = text.split`,`
            let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
            	if (!text) throw `Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
            let anu = await primbon.shio(text)
            if (anu.status == false) return m.reply(anu.message)
            herta.sendText(m.chat, ` *Hasil :* ${anu.message}`, m)
            }
            break
            //Asupan
            case 'chika':
            case 'rikagusriani':
            case 'bocil':
            case 'geayubi':
            case 'santuy':
            case 'ukhty':
            case 'asupan':
            case 'delvira':
            case 'ayu':
            case 'bunga':
            case 'aura':
            case 'nisa':
            case 'ziva':
            case 'yana':
            case 'viona':
            case 'syania':
            case 'riri':
            case 'syifa':
            case 'mama-gina':
            case 'alcakenya':
            case 'mangayutri': {
            	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
            	reply("Sedang Di Proses")
            let res = await fetch(global.api('alfa', '/api/asupan/' + command, {}, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            herta.sendFile(m.chat, img, 'asupan.mp4', 'DONE', m)
            }
            break
            case 'jodohku': {
            	if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Jodoh mu adalah

@${me.split('@')[0]}  @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: '.jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await herta.sendMessage(m.chat, buttons, jawab, herta.user.name, m, {mentions: ments})
}
break
case 'jadian': {
	if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
	let member = participants.map(u => u.id)
	let orang = member[Math.floor(Math.random() * member.length)]
	let jodoh = member[Math.floor(Math.random() * member.length)]
	let jawab = `Ciee yang Jadian Jangan lupa pajak jadiannya

@${orang.split('@')[0]}  @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: '.jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await herta.sendMessage(m.chat, buttons, jawab, herta.user.name, m, {mentions: menst})
}
break
case 'setexif': {
	if (!isCreator && !m.key.fromMe) return reply("Fitur khusus owner!")
	if (!text) throw `Contoh : ${prefix + command} packname|author`
	global.packname = text.split("|")[0]
	global.author = text.split("|")[1]
	m.reply(`Exif berhasil diubah menjadi\n\nPackname : ${global.packname}\nAuthor : ${global.author}`)
	}
	break
	case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
	if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
	ter = command[1].toLowerCase()
	tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
	m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
	break
	case 'tiktok2':{ 
		if (!text) return m.reply( `Example : ${prefix + command} link`)
		if (!q.includes('tiktok')) return m.reply(`Link Tiktok Bukan Kayak Gtu Cuy !!`)
		reply("Sedang Di Proses")
		require('./lib/tiktok').Tiktok(q).then( data => {
			var button = [{ buttonId: `.tiktokaudio2 ${q}`, buttonText: { displayText: `AUDIO` }, type: 1 }, { buttonId: `.grubbot`, buttonText: { displayText: `GRUB BOT` }, type: 1 }]
			herta.sendMessage(m.chat, { caption: `DONE!`, video: { url: data.watermark }, buttons: button, footer: namabot, mentions: [m.sender] })
			})
			}
			break
			// Fun Menu
case 'memek':
case 'bego':
case 'goblok':
case 'janda':
case 'perawan':
case 'babi':
case 'tolol':
case 'pinter':
case 'pintar':
case 'asu':
case 'bodoh':
case 'gay':
case 'lesby':
case 'bajingan':
case 'jancok':
case 'anjing':
case 'ngentod':
case 'ngentot':
case 'monyet':
case 'mastah':
case 'newbie':
case 'bangsat':
case 'bangke':
case 'sange':
case 'sangean':
case 'dakjal':
case 'horny':
case 'wibu':
case 'puki':
case 'peak':
case 'pantex':
case 'pantek':
case 'setan':
case 'iblis':
case 'cacat':
case 'yatim':
case 'piatu':{
	if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
	let member = participants.map((u) => u.id)
	let org = member[Math.floor(Math.random() * member.length)]
	herta.sendMessage(from, { text: `anak ${command} di sini adalah @${org.split('@')[0]}`, mentions: [org] }, { quoted: m })
	}
	break
	case 'goblok':
	case 'gblk':
	case 'kontol':
	case 'kntl':
	case 'kmtl':
	case 'ngtd':
	case 'ngentod':
	case 'ajg':
	case 'anjg':
	case 'anjing':
	case 'mmk':
	case 'memek':
	case 'meki':
	case 'puki':
	case 'jancok':
	case 'babi':
	case 'tolol':
	case 'yapit': 
	case 'yatim':
	case 'piatu':
	case 'bodoh':
	case 'tolol':
	case 'ngentot':
	case 'sange':
	case 'bangsat':
	case 'gblk':
	case 'goblok':
	case 'pantek':
	case 'pantex':
	case 'asu':
	case 'bego':
	case 'sangean':{
	herta.sendMessage(m.chat, {audio: fs.readFileSync(gabolehtoxic), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
	}
	break
	
            default:
if (budy.startsWith('>')) {
                    if (!isCreator) return
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(util.format(err))
                    }
                }
       }
        
    } catch (err) {
        m.reply(util.format(err))
    }
}
