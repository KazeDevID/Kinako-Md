import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://pic.re/image'
	conn.sendButton(m.chat, cptnya, wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(wallpapernime1)$/i
handler.tags = ['wallpaper']
handler.help = ['wallpapernime1']
handler.premium = false
handler.register = true
handler.limit = true

export default handler