import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	conn.reply(m.chat, wait)
	let res = await fetch('https://random-d.uk/api/v2/random')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, cptnya, wm, json.url, [['➡️ Next', `.${command}`]], m)
}
handler.command = /^(bebek)$/i
handler.tags = ['internet']
handler.help = ['bebek']
handler.register = true
handler.limit = true

export default handler