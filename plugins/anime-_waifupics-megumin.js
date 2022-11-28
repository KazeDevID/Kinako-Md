import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
await m.reply(global.wait)
	let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
	conn.sendButton(m.chat, cptnya, wm, json.url, [['➡️ Next',`.${command}`]],m)
}
handler.command = /^(megumin)$/i
handler.tags = ['anime']
handler.help = ['megumin']
handler.register = true
handler.limit = true
export default handler