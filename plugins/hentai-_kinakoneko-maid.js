import kinakoneko from "kinakoneko";
import fetch from 'node-fetch'

let handler = async (m, { conn, command}) => {
await m.reply(global.wait)
const wall = await kinakoneko.nsfw.maid();
  conn.sendButton(m.chat, cptnya, wm, wall, [['➡️ Next', `.${command}`]], m)
}
handler.help = ['maid']
handler.tags = ['hentai','premium']
handler.command = /^(maid)$/i
handler.premium = true
handler.register = true

export default handler 