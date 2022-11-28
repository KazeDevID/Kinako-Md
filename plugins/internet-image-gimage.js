import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendHydrated(m.chat,`
*${htki} GOOGLE IMAGE ${htka}*
🔎 *Result:* ${text}
🌎 *Source:* Google
`, wm, link, link, '🔗 URL', [['➡️ Next', `.image ${text}`],[null,null],[null,null]],m)
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet']
handler.command = /^(gimage|image)$/i
handler.register = true
handler.limit = true

export default handler