import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
await m.reply(global.wait)
let res = await fetch('https://raw.githubusercontent.com/KazeDevID/results/master/random/anime/random.txt')
let txt = await res.text()
let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
  await conn.sendButton(m.chat, cptnya, wm, cita, [[`➡️ Next`, `.${command}`]], m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
handler.tags = ['anime']
handler.help = ['randomanime']
handler.command = /^(randomanime|animerandom)$/i

handler.register = true
handler.limit = true

export default handler