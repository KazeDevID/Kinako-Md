import fetch from 'node-fetch'
import kinakoneko from "kinakoneko";

let handler = async (m, { conn, command}) => {
await m.reply(global.wait)
const wall = await kinakoneko.nsfw.bdsm();
  conn.sendButton(m.chat, cptnya, wm, wall, [['➡️ Next', `.${command}`]], m)
}
handler.command = /^(bdsm)$/i
handler.tags = ['premium','hentai']
handler.help = ['bdsm']
handler.premium = true
handler.register = true

export default handler