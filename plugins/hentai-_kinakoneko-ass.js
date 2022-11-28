import fetch from 'node-fetch'
import kinakoneko from "kinakoneko";

let handler = async (m, { conn, command}) => {
await m.reply(global.wait)
const wall = await kinakoneko.nsfw.ass();
  conn.sendButton(m.chat, cptnya, wm, wall, [['➡️ Next', `.${command}`]], m)
}
handler.command = /^(ass)$/i
handler.tags = ['premium','hentai']
handler.help = ['ass']
handler.premium = true
handler.registed = true

export default handler
