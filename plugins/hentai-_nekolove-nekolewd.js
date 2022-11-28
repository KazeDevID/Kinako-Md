import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
conn.reply(m.chat, wait)
	let res = await fetch('https://neko-love.xyz/api/v1/nekolewd')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, cptnya, wm, json.url, [['➡️ Next', `.${command}`]], m)
}
handler.command = /^(nekolewd)$/i
handler.tags = ['hentai','premium']
handler.help = ['nekolewd']
handler.premium = true
handler.register = true
handler.limit = true

export default handler