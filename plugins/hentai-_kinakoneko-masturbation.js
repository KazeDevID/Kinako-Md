import fetch from 'node-fetch'
import kinakoneko from "kinakoneko";

let handler = async (m, { conn, command}) => {
await m.reply(global.wait)
const wall = await kinakoneko.nsfw.masturbation();
  conn.sendButton(m.chat, cptnya, wm, wall, [['➡️ Next', `.${command}`]], m)
}
handler.command = /^(masturbation)$/i
handler.tags = ['premium','hentai']
handler.help = ['masturbation']
handler.premium = true
handler.register = true

export default handler