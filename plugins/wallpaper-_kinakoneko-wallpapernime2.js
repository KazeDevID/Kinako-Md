import fetch from 'node-fetch'
import kinakoneko from "kinakoneko";

let handler = async (m, { conn, command}) => {
await m.reply(global.wait)
const wall = await kinakoneko.wallpapers();
  conn.sendButton(m.chat, cptnya, wm, wall, [['➡️ Next', `.${command}`]], m)
}
handler.command = /^(wallpapernime2)$/i
handler.tags = ['premium','wallpaper']
handler.help = ['wallpapernime2']
handler.premium = true
handler.register = true

export default handler