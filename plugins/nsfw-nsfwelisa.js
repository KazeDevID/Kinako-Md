import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
await m.reply(global.wait)
let res = await fetch('https://raw.githubusercontent.com/KazeDevID/results/master/acak/nsfw/nsfwelisa.json')
let txt = await res.json()
let arr = txt
let cita = arr[Math.floor(Math.random() * arr.length)]
  await conn.sendButton(m.chat, cptnya, wm, cita, [[`➡️ Next`, `.${command}`]], m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
handler.tags = ['nsfw','premium']
handler.help = ['nsfwelisa']
handler.command = /^(nsfwelisa|elisa)$/i
handler.premium = true
handler.register = true
handler.limit = true

export default handler