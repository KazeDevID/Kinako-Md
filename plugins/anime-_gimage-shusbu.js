import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Gojo Satorou\nMasukkan nama husbu dengan lengkap!!`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendHydrated(m.chat,`
*${htki} SEARCH PICS HUSBU ${htka}*
🔎 *Result:* ${text}
🌎 *Source:* Google
`, wm, link, link, '🔗 URL', null, null, [['➡️ Next', `.${command} ${text}`],[null,null],[null,null]],m)
}
handler.help = ['shusbu <query>','searchhusbu <query>']
handler.tags = ['anime']
handler.command = /^(shusbu|searchhusbu)$/i
handler.register = true
handler.limit = true

export default handler