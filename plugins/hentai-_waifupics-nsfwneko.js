import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	conn.reply(m.chat, wait)
	let res = await fetch('https://api.waifu.pics/nsfw/neko')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, cptnya, wm, json.url, [['➡️ Next', `.${command}`]], m)
}
handler.command = /^(nsfwneko)$/i
handler.tags = ['hentai','premium']
handler.help = ['nsfwneko']
handler.register = true
handler.premium = true
handler.limit = true

export default handler