import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	conn.reply(m.chat, wait)
	let res = await fetch('https://nekos.rest/api/neko')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.output.url) throw 'Error!'
    conn.sendButton(m.chat, cptnya, wm, json.output.url, [['➡️ Next', `.${command}`]], m)
}
handler.command = /^(neko2)$/i
handler.tags = ['anime']
handler.help = ['neko2']
handler.premium = false
handler.register = true
handler.limit = true

export default handler