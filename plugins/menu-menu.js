import fs from 'fs'
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [del] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

let menu =`
 ╭━       𝑹𝒖𝒃𝒚 𝑩𝒐𝒕
 ┃
 ┃    𝑯𝒐𝒍𝒂, ${taguser}
 ┃
 ┃   𝗖𝗿𝗲𝗮𝗱𝗼𝗿 : 𝑫𝒂𝒏𝒏𝒚 𝑽𝒏𝒕𝒔
 ┃   𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 : wa.me/528180766681
 ┃   𝐓𝐢𝐞𝐦𝐩𝐨 𝐀𝐜𝐭𝐢𝐯𝐨 : ${uptime}
 ╰━━━━━━━━━━━━


 
  
  
 ╭━    𝑱𝒖𝒆𝒈𝒐𝒔 
 ┃
 ┃   ${usedPrefix}mates | matemáticas | math
 ┃   ${usedPrefix}lanzar *cara* | *cruz*
 ┃   ${usedPrefix}ppt *piedra : papel : tijera*
 ┃   ${usedPrefix}tictactoe | ttt *sala*
 ┃   ${usedPrefix}deltictactoe | delttt
 ┃   ${usedPrefix}topgays
 ┃   ${usedPrefix}fake
 ┃   ${usedPrefix}toppajer@s
 ┃   ${usedPrefix}topput@s
 ┃   ${usedPrefix}topintegrantes | topintegrante
 ┃   ${usedPrefix}toplagrasa | topgrasa
 ┃   ${usedPrefix}toppanasfrescos | toppanafresco
 ┃   ${usedPrefix}topshiposters | topshipost
 ┃   ${usedPrefix}toplindos | toplind@s
 ┃   ${usedPrefix}topfamosos | topfamos@s
 ┃   ${usedPrefix}topparejas | top5parejas
 ┃   ${usedPrefix}gay | gay *@tag*
 ┃   ${usedPrefix}gay2 *nombre : @tag*
 ┃   ${usedPrefix}lesbiana *nombre : @tag*
 ┃   ${usedPrefix}lesbi1 *nombre : @tag*
 ┃   ${usedPrefix}manca *nombre : @tag*
 ┃   ${usedPrefix}manco *nombre : @tag*
 ┃   ${usedPrefix}pajero *nombre : @tag*
 ┃   ${usedPrefix}pajera *nombre : @tag*
 ┃   ${usedPrefix}puto *nombre : @tag*
 ┃   ${usedPrefix}puta *nombre : @tag*
 ┃   ${usedPrefix}rata *nombre : @tag*
 ┃   ${usedPrefix}love *nombre : @tag*
 ┃   ${usedPrefix}doxear *nombre : @tag*
 ┃   ${usedPrefix}doxxeame
 ┃   ${usedPrefix}pregunta *texto*
 ┃   ${usedPrefix}apostar | slot *cantidad*
 ┃   ${usedPrefix}formarpareja
 ┃   ${usedPrefix}dado
 ┃   ${usedPrefix}verdad
 ┃   ${usedPrefix}acertijo
 ┃   ${usedPrefix}cancion
 ┃   ${usedPrefix}trivia
 ┃   ${usedPrefix}pelicula
 ┃   ${usedPrefix}adivinanza
 ┃   ${usedPrefix}reto
 ┃   ${usedPrefix}ruleta
 ┃   ${usedPrefix}suerte
 ┃
 ╰━━━━━━━━━━━━━

  


 ╭━    𝑨𝒋𝒖𝒔𝒕𝒆𝒔 𝑫𝒆 𝑮𝒓𝒖𝒑𝒐
 ┃
 ┃   ${usedPrefix}enable *o* disable *bienvenida | welcome*
 ┃   ${usedPrefix}enable *o* disable *avisos | detect*
 ┃   ${usedPrefix}enable *o* disable *autonivel | autolevelup*
 ┃   ${usedPrefix}enable *o* disable *restringir | restrict*
 ┃   ${usedPrefix}enable *o* disable *antillamar | anticall*
 ┃   ${usedPrefix}enable *o* disable *publico | public*
 ┃   ${usedPrefix}enable *o* disable *autovisto | autoread*
 ┃   ${usedPrefix}enable *o* disable *temporal*
 ┃   ${usedPrefix}enable *o* disable *stickers*
 ┃   ${usedPrefix}enable *o* disable *autosticker*
 ┃   ${usedPrefix}enable *o* disable *reacciones | reaction*
 ┃   ${usedPrefix}enable *o* disable *audios*
 ┃   ${usedPrefix}enable *o* disable *modocaliente | modohorny*
 ┃   ${usedPrefix}enable *o* disable *antitoxicos | antitoxic*
 ┃   ${usedPrefix}enable *o* disable *antiver | antiviewonce*
 ┃   ${usedPrefix}enable *o* disable *antieliminar | antidelete*
 ┃   ${usedPrefix}enable *o* disable *antinternacional | antifake*
 ┃   ${usedPrefix}enable *o* disable *antienlace | antilink*
 ┃   ${usedPrefix}enable *o* disable *antienlace2 | antilink2*
 ┃   ${usedPrefix}enable *o* disable *antitiktok | antitk*
 ┃   ${usedPrefix}enable *o* disable *antiyoutube | antiyt*
 ┃   ${usedPrefix}enable *o* disable *antitelegram | antitel*
 ┃   ${usedPrefix}enable *o* disable *antifacebook | antifb*
 ┃   ${usedPrefix}enable *o* disable *antinstagram | antig*
 ┃   ${usedPrefix}enable *o* disable *antitwitter | antitw*
 ┃   ${usedPrefix}enable *o* disable *soloprivados | pconly*
 ┃   ${usedPrefix}enable *o* disable *sologrupos | gconly*  
 ┃
 ╰━━━━━━━━━━━━━

 

 ╭━    𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒔 
 ┃
 ┃   ${usedPrefix}imagen | image *texto*
 ┃   ${usedPrefix}pinterest | dlpinterest *texto*
 ┃   ${usedPrefix}wallpaper|wp *texto*
 ┃   ${usedPrefix}play | play2 *texto o link*
 ┃   ${usedPrefix}play.1 *texto o link*
 ┃   ${usedPrefix}play.2 *texto o link*_
 ┃   ${usedPrefix}ytmp3 | yta *link*
 ┃   ${usedPrefix}ytmp4 | ytv *link*
 ┃   ${usedPrefix}pdocaudio | ytadoc *link*
 ┃   ${usedPrefix}pdocvieo | ytvdoc *link*
 ┃   ${usedPrefix}tw |twdl | twitter *link*
 ┃   ${usedPrefix}facebook | fb *link*
 ┃   ${usedPrefix}instagram *link video o imagen*
 ┃   ${usedPrefix}verig | igstalk *usuario(a)*
 ┃   ${usedPrefix}ighistoria | igstory *usuario(a)*
 ┃   ${usedPrefix}tiktok *link*
 ┃   ${usedPrefix}tiktokimagen | ttimagen *link*
 ┃   ${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*
 ┃   ${usedPrefix}vertiktok | tiktokstalk *usuario(a)*
 ┃   ${usedPrefix}mediafire | dlmediafire *link*
 ┃   ${usedPrefix}clonarepo | gitclone *link*
 ┃   ${usedPrefix}clima *país ciudad*
 ┃   ${usedPrefix}consejo
 ┃   ${usedPrefix}morse codificar *texto*
 ┃   ${usedPrefix}morse decodificar *morse*
 ┃   ${usedPrefix}fraseromantica
 ┃   ${usedPrefix}historia
 ┃
 ╰━━━━━━━━━━━━━



 ╭━   𝑪𝒉𝒂𝒕 𝑨𝒏𝒐𝒏𝒊𝒎𝒐 
 ┃
 ┃   ${usedPrefix}chatanonimo | anonimochat
 ┃   ${usedPrefix}anonimoch
 ┃   ${usedPrefix}start
 ┃   ${usedPrefix}next
 ┃   ${usedPrefix}leave
 ┃
 ╰━━━━━━━━━━━━━

 

 ╭━    𝑪𝒐𝒎𝒂𝒏𝒅𝒐𝒔 𝑮𝒓𝒖𝒑𝒐𝒔 
 ┃
 ┃   ${usedPrefix}add *numero*
 ┃   ${usedPrefix}sacar | ban | kick  *@tag*
 ┃   ${usedPrefix}grupo *abrir o cerrar*
 ┃   ${usedPrefix}group *open o close*
 ┃   ${usedPrefix}daradmin | promote *@tag*
 ┃   ${usedPrefix}quitar | demote *@tag*
 ┃   ${usedPrefix}banchat
 ┃   ${usedPrefix}unbanchat
 ┃   ${usedPrefix}banuser *@tag*
 ┃   ${usedPrefix}unbanuser *@tag*
 ┃   ${usedPrefix}admins *texto*
 ┃   ${usedPrefix}invocar *texto*
 ┃   ${usedPrefix}tagall *texto*
 ┃   ${usedPrefix}hidetag *texto*
 ┃   ${usedPrefix}infogrupo | infogroup
 ┃   ${usedPrefix}grupotiempo | grouptime *Cantidad*
 ┃   ${usedPrefix}advertencia *@tag*
 ┃   ${usedPrefix}deladvertencia *@tag*
 ┃   ${usedPrefix}delwarn *@tag*
 ┃   ${usedPrefix}crearvoto | startvoto *texto*
 ┃   ${usedPrefix}sivotar | upvote
 ┃   ${usedPrefix}novotar | devote
 ┃   ${usedPrefix}vervotos | cekvoto
 ┃   ${usedPrefix}delvoto | deletevoto
 ┃   ${usedPrefix}enlace | link
 ┃   ${usedPrefix}newnombre | nuevonombre *texto*
 ┃   ${usedPrefix}newdesc | descripcion *texto*
 ┃   ${usedPrefix}setwelcome | bienvenida *texto*
 ┃   ${usedPrefix}setbye | despedida *texto*
 ┃   ${usedPrefix}nuevoenlace | resetlink
 ┃   ${usedPrefix}enable
 ┃   ${usedPrefix}disable
 ┃
 ╰━━━━━━━━━━━━━

 

 ╭━    𝑷𝒂𝒓𝒆𝒋𝒂𝒔 
 ┃
 ┃   ${usedPrefix}listaparejas | listship
 ┃   ${usedPrefix}mipareja | mylove
 ┃   ${usedPrefix}pareja | couple *@tag*
 ┃   ${usedPrefix}aceptar | accept *@tag*
 ┃   ${usedPrefix}rechazar | decline *@tag*
 ┃   ${usedPrefix}terminar | finish *@tag*
 ┃
 ╰━━━━━━━━━━━━━



 ╭━    𝑽𝒐𝒕𝒂𝒅𝒐𝒓𝒆𝒔 
 ┃
 ┃   ${usedPrefix}crearvoto | startvoto *texto*
 ┃   ${usedPrefix}sivotar | upvote
 ┃   ${usedPrefix}novotar | devote
 ┃   ${usedPrefix}vervotos | cekvoto
 ┃   ${usedPrefix}delvoto | deletevoto
 ┃
 ╰━━━━━━━━━━━━━

 ╭━   𝑪𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒅𝒐𝒓𝒆𝒔 
 ┃
 ┃   ${usedPrefix}toimg | img | jpg *sticker*
 ┃   ${usedPrefix}toanime | jadianime *foto*
 ┃   ${usedPrefix}tomp3 | mp3 *video o nota de voz*
 ┃   ${usedPrefix}tovn | vn *video o audio*
 ┃   ${usedPrefix}tovideo *audio*
 ┃   ${usedPrefix}tourl *video, imagen*
 ┃   ${usedPrefix}toenlace  *video, imagen o audio*
 ┃   ${usedPrefix}tts es *texto*
 ┃
 ╰━━━━━━━━━━━━━

 ╭━    𝑳𝒐𝒈𝒐𝒔 
 ┃
 ┃   ${usedPrefix}logos *efecto texto*
 ┃   ${usedPrefix}menulogos2
 ┃
 ╰━━━━━━━━━━━━━
  
 ╭━     𝑳𝒐𝒈𝒐𝒔 
 ┃
 *┃  * _${usedPrefix}simpcard *@tag*_
 *┃  * _${usedPrefix}hornycard *@tag*_
 *┃  * _${usedPrefix}lolice *@tag*_
 *┃  * _${usedPrefix}ytcomment *texto*_
 *┃  * _${usedPrefix}itssostupid_
 *┃  * _${usedPrefix}pixelar_
 *┃  * _${usedPrefix}blur_
  ┃
  ╰━━━━━━━━━━━━━

  

 ╭━    𝑭𝒂𝒏𝒕𝒂𝒔𝒚  
 ┃
 ┃   ${usedPrefix}fantasy | fy
 ┃   ${usedPrefix}fyguia | fyguide
 ┃   ${usedPrefix}fantasyinfo | fyinfo
 ┃   ${usedPrefix}fyagregar | fyadd
 ┃   ${usedPrefix}fycambiar | fychange
 ┃   ${usedPrefix}fylista | fyl
 ┃   ${usedPrefix}fantasymy | fymy
 ┃   ${usedPrefix}fyentregar | fytransfer
 ┃
 ╰━━━━━━━━━━━━━


  
 ╭━     𝑨𝒏𝒊𝒎𝒆𝒔 
 ┃
 ┃   ${usedPrefix}chica
 ┃   ${usedPrefix}chico
 ┃   ${usedPrefix}cristianoronaldo
 ┃   ${usedPrefix}messi
 ┃   ${usedPrefix}meme
 ┃   ${usedPrefix}meme2
 ┃   ${usedPrefix}itzy
 ┃   ${usedPrefix}blackpink
 ┃   ${usedPrefix}kpop *blackpink, o exo, o bts*
 ┃   ${usedPrefix}lolivid
 ┃   ${usedPrefix}loli
 ┃   ${usedPrefix}navidad
 ┃   ${usedPrefix}ppcouple
 ┃   ${usedPrefix}neko
 ┃   ${usedPrefix}waifu
 ┃   ${usedPrefix}akira
 ┃   ${usedPrefix}akiyama
 ┃   ${usedPrefix}anna
 ┃   ${usedPrefix}asuna
 ┃   ${usedPrefix}ayuzawa
 ┃   ${usedPrefix}boruto
 ┃   ${usedPrefix}chiho
 ┃   ${usedPrefix}chitoge
 ┃   ${usedPrefix}deidara
 ┃   ${usedPrefix}erza
 ┃   ${usedPrefix}elaina
 ┃   ${usedPrefix}eba
 ┃   ${usedPrefix}emilia
 ┃   ${usedPrefix}hestia
 ┃   ${usedPrefix}hinata
 ┃   ${usedPrefix}inori
 ┃   ${usedPrefix}isuzu
 ┃   ${usedPrefix}itachi
 ┃   ${usedPrefix}itori
 ┃   ${usedPrefix}kaga
 ┃   ${usedPrefix}kagura
 ┃   ${usedPrefix}kaori
 ┃   ${usedPrefix}keneki
 ┃   ${usedPrefix}kotori
 ┃   ${usedPrefix}kurumi
 ┃   ${usedPrefix}madara
 ┃   ${usedPrefix}mikasa
 ┃   ${usedPrefix}miku
 ┃   ${usedPrefix}minato
 ┃   ${usedPrefix}naruto
 ┃   ${usedPrefix}nezuko
 ┃   ${usedPrefix}sagiri
 ┃   ${usedPrefix}sasuke
 ┃   ${usedPrefix}sakura
 ┃   ${usedPrefix}cosplay
 ┃
 ╰━━━━━━━━━━━━━

 
  
 ╭━    𝑬𝒇𝒆𝒄𝒕𝒐𝒔 
 ┃
 ┃   ${usedPrefix}bass
 ┃   ${usedPrefix}blown
 ┃   ${usedPrefix}deep
 ┃   ${usedPrefix}earrape
 ┃   ${usedPrefix}fast
 ┃   ${usedPrefix}fat
 ┃   ${usedPrefix}nightcore
 ┃   ${usedPrefix}reverse
 ┃   ${usedPrefix}robot
 ┃   ${usedPrefix}slow
 ┃   ${usedPrefix}smooth
 ┃   ${usedPrefix}tupai
 ┃
 ╰━━━━━━━━━━━━━

 
  	
 ╭━   𝑩𝒖𝒔𝒒𝒖𝒆𝒅𝒂𝒔
 ┃
 ┃   ${usedPrefix}animeinfo *texto*
 ┃   ${usedPrefix}anuel
 ┃   ${usedPrefix}conejo
 ┃   ${usedPrefix}drago
 ┃   ${usedPrefix}feid
 ┃   ${usedPrefix}narcisistas
 ┃   ${usedPrefix}mangainfo *texto*
 ┃   ${usedPrefix}google *texto*
 ┃   ${usedPrefix}googlelyrics *texto*
 ┃   ${usedPrefix}letra | lirik *texto*
 ┃   ${usedPrefix}ytsearch | yts *texto*
 ┃   ${usedPrefix}wiki | wikipedia *texto*
 ┃
 ╰━━━━━━━━━━━━━

 

 ╭━   𝑯𝒆𝒓𝒓𝒂𝒎𝒊𝒆𝒏𝒕𝒂𝒔 
 ┃
 ┃   ${usedPrefix}afk *motivo*
 ┃   _${usedPrefix}acortar *url*
 ┃   ${usedPrefix}calc *operacion math*
 ┃   ${usedPrefix}del *respondre a mensaje del Bot*
 ┃   ${usedPrefix}qrcode *texto*
 ┃   ${usedPrefix}readmore *texto1|texto2*
 ┃   ${usedPrefix}spamwa *numero|texto|cantidad*
 ┃   ${usedPrefix}styletext *texto*
 ┃   ${usedPrefix}traducir *texto*
 ┃   ${usedPrefix}morse codificar *texto*
 ┃   ${usedPrefix}morse decodificar *morse*
 ┃   ${usedPrefix}encuesta | poll *Motivo*
 ┃   ${usedPrefix}horario
 ┃
 ╰━━━━━━━━━━━━━


 
 ╭━    𝑹𝑷𝑮
 ┃
 ┃   ${usedPrefix}pase premium
 ┃   ${usedPrefix}pass premium
 ┃   ${usedPrefix}listapremium | listprem
 ┃   ${usedPrefix}transfer *tipo cantidad @tag*
 ┃   ${usedPrefix}dar *tipo cantidad @tag*
 ┃   ${usedPrefix}enviar *tipo cantidad @tag*
 ┃   ${usedPrefix}balance
 ┃   ${usedPrefix}cartera | wallet
 ┃   ${usedPrefix}experiencia | exp
 ┃   ${usedPrefix}nivel | level | lvl
 ┃   ${usedPrefix}rol | rango
 ┃   ${usedPrefix}inventario | inventory
 ┃   ${usedPrefix}aventura | adventure
 ┃   ${usedPrefix}caza | cazar | hunt
 ┃   ${usedPrefix}pescar | fishing
 ┃   ${usedPrefix}animales
 ┃   ${usedPrefix}alimentos
 ┃   ${usedPrefix}curar | heal
 ┃   ${usedPrefix}buy
 ┃   ${usedPrefix}sell
 ┃   ${usedPrefix}verificar | registrar
 ┃   ${usedPrefix}perfil | profile
 ┃   ${usedPrefix}myns
 ┃   ${usedPrefix}unreg *numero de serie*
 ┃   ${usedPrefix}minardiamantes | minargemas
 ┃   ${usedPrefix}minar𝑹𝒖𝒃𝒚 𝑩𝒐𝒕coins | minarcoins
 ┃   ${usedPrefix}minarexperiencia | minarexp
 ┃   ${usedPrefix}minar *:* minar2 *:* minar3
 ┃   ${usedPrefix}rob | robar 
 ┃   ${usedPrefix}crime
 ┃   ${usedPrefix}reclamar | regalo | claim
 ┃   ${usedPrefix}cadahora | hourly
 ┃   ${usedPrefix}cadasemana | semanal | weekly
 ┃   ${usedPrefix}cadames | mes | monthly
 ┃   ${usedPrefix}cofre | abrircofre | coffer
 ┃   ${usedPrefix}trabajar | work
 ┃   ${usedPrefix}fantasy | fy
 ┃   ${usedPrefix}fantasyinfo | fyinfo
 ┃   ${usedPrefix}fylista
 ┃
 ╰━━━━━━━━━━━━━

 

 ╭━    𝑻𝒐𝒑 
 ┃   ${usedPrefix}top
 ╰━━━━━━━━━━━━━
  
 ╭━    𝑺𝒕𝒊𝒄𝒌𝒆𝒓𝒔 
 ┃
 ┃   ${usedPrefix}sticker | s *imagen o video*
 ┃   ${usedPrefix}sticker | s *url de tipo jpg*
 ┃   ${usedPrefix}emojimix *😺+😆*
 ┃   ${usedPrefix}scircle | círculo *imagen*
 ┃   ${usedPrefix}semoji | emoji *tipo emoji*
 ┃   ${usedPrefix}attp *texto*
 ┃   ${usedPrefix}attp2 *texto*
 ┃   ${usedPrefix}ttp *texto*
 ┃   ${usedPrefix}ttp2 *texto*
 ┃   ${usedPrefix}ttp3 *texto*
 ┃   ${usedPrefix}ttp4 *texto*
 ┃   ${usedPrefix}ttp5 *texto*
 ┃   ${usedPrefix}ttp6 *texto*
 ┃   ${usedPrefix}dado
 ┃   ${usedPrefix}stickermarker *efecto : responder a imagen*
 ┃   ${usedPrefix}stickerfilter *efecto : responder a imagen*
 ┃   ${usedPrefix}cs *:* cs2
 ┃
 ╰━━━━━━━━━━━━━
  
 ╭━    𝑺𝒕𝒊𝒄𝒌𝒆𝒓𝒔2
 ┃
 ┃   ${usedPrefix}wm *packname|author*
 ┃   ${usedPrefix}wm *texto1|texto2*
 ┃
 ╰━━━━━━━━━━━━━
  
 ╭━   𝑺𝒕𝒊𝒄𝒌𝒆𝒓𝒔3 
 ┃
 ┃   ${usedPrefix}palmaditas | pat *@tag*
 ┃   ${usedPrefix}bofetada | slap *@tag*
 ┃   ${usedPrefix}golpear *@tag*
 ┃   ${usedPrefix}besar | kiss *@tag*
 ┃   ${usedPrefix}alimentar | food *@tag*
 ┃
 ╰━━━━━━━━━━━━━

 
  
 ╭━    𝑶𝒘𝒏𝒆𝒓𝒔  
 ┃
 ┃   ${usedPrefix}join *enlace*
 ┃   ${usedPrefix}unete *enlace*
 ┃   ${usedPrefix}dardiamantes *cantidad*
 ┃   ${usedPrefix}darxp *cantidad*
 ┃   ${usedPrefix}dar𝑹𝒖𝒃𝒚 𝑩𝒐𝒕coins *cantidad*
 ┃   ${usedPrefix}addprem | userpremium *@tag* *cantidad*
 ┃   ${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*
 ┃   ${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*
 ┃   ${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*
 ┃   ${usedPrefix}idioma | language
 ┃   ${usedPrefix}cajafuerte
 ┃   ${usedPrefix}comunicar | broadcastall | bc *texto*
 ┃   ${usedPrefix}broadcastchats | bcc *texto*
 ┃   ${usedPrefix}comunicarpv *texto*
 ┃   ${usedPrefix}broadcastgc *texto*
 ┃   ${usedPrefix}comunicargrupos *texto*
 ┃   ${usedPrefix}borrartmp | cleartmp
 ┃   ${usedPrefix}delexp *@tag*
 ┃   ${usedPrefix}del𝑹𝒖𝒃𝒚 𝑩𝒐𝒕coins *@tag*
 ┃   ${usedPrefix}deldiamantes *@tag*
 ┃   ${usedPrefix}reiniciar | restart
 ┃   ${usedPrefix}actualizar | update
 ┃   ${usedPrefix}addprem | +prem *@tag*
 ┃   ${usedPrefix}delprem | -prem *@tag*
 ┃   ${usedPrefix}listapremium | listprem
 ┃   ${usedPrefix}añadirdiamantes *@tag cantidad*
 ┃   ${usedPrefix}añadirxp *@tag cantidad*
 ┃   ${usedPrefix}añadir𝑹𝒖𝒃𝒚 𝑩𝒐𝒕coins *@tag cantidad*
 ┃
 ╰━━━━━━━ 𝑹𝒖𝒃𝒚 𝑩𝒐𝒕 ━━━━━━
`.trim()
await conn.sendFile(m.chat, gataImg.getRandom(), 'lp.jpg', menu, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: '𝑹𝒖𝒃𝒚 𝑩𝒐𝒕 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu.getRandom()}}})
//conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menu, fkontak)
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

//handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
handler.command = /^(menucompleto|menu|\?)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
