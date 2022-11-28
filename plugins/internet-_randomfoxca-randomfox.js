import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	conn.reply(m.chat, wait)
	let res = await fetch('https://randomfox.ca/floof/')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.image) throw 'Error!'
    conn.sendButton(m.chat, cptnya, wm, json.image, [['➡️ Next', `.${command}`]], m)
}
handler.command = /^(randomfox)$/i
handler.tags = ['internet']
handler.help = ['randomfox']
handler.register = true
handler.limit = true

export default handler