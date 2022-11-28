import fetch from 'node-fetch'
import kinakoneko from "kinakoneko";

let handler = async (m, { conn, command}) => {
await m.reply(global.wait)
const wall = await kinakoneko.nsfw.uglyBastard();
  conn.sendButton(m.chat, cptnya, wm, wall, [['➡️ Next', `.${command}`]], m)
}
handler.command = /^(uglyBastard)$/i
handler.tags = ['premium','hentai']
handler.help = ['uglyBastard']
handler.premium = true
handler.register = true

export default handler