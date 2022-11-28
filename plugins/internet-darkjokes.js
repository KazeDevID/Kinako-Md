import fetch from 'node-fetch'
import bo from 'dhn-api'
let handler = async (m, { conn }) => {
const res = await bo.Darkjokes()
await conn.sendButton(m.chat, cptnya, wm, res, [['➡️ Next','.darkjoke']] ,m)
}
handler.help = ['darkjoke']
handler.tags = ['internet']
handler.command = /^(darkjoke)$/i
handler.register = true
handler.limit = true

export default handler