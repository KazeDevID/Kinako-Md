import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

let urut = text.split`|`
  let thm = urut[0]
  let text1 = urut[1]
  let text2 = urut[2]
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} tema|teks

*List tema:*
• kucing
• senyum
• monyet
`
let res = `https://ik.imagekit.io/aygemuy/tr:ot-${text1},ots-400,otc-ffff00,or-50/${thm}.jpg`
await m.reply(wait)
conn.sendButton(m.chat, cptnya, author, res, [['Tema', `.imagekit ${text1}`]], m, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: wm,jpegThumbnail: Buffer.alloc(0)}}}})

}
handler.help = ['imagekit <tema|teks>']
handler.tags = ['tools']
handler.register = true
handler.command = /^(imagekit)$/i

export default handler