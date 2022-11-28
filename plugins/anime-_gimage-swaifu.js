import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Nico Robin\nMasukkan nama waifu dengan lengkap!!`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendHydrated(m.chat,`
*${htki} SEARCH PICS WAIFU ${htka}*
🔎 *Result:* ${text}
🌎 *Source:* Google
`, wm, link, link, '🔗 URL', null, null, [['➡️ Next', `.${command} ${text}`],[null,null],[null,null]],m)
}
handler.help = ['swaifu <query>','searchwaifu <query>']
handler.tags = ['anime']
handler.command = /^(swaifu|searchwaifu)$/i
handler.register = true
handler.limit = true

export default handler