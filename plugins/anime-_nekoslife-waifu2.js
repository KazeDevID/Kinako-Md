import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	conn.reply(m.chat, wait)
	let res = await fetch('https://nekos.life/api/v2/img/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, cptnya, wm, json.url, [['➡️ Next', `.${command}`]], m)
}
handler.command = /^(waifu2)$/i
handler.tags = ['anime']
handler.help = ['waifu2']
handler.premium = false
handler.register = true
handler.limit = true

export default handler

