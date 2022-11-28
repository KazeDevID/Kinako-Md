import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
    const img = res[Math.floor(Math.random() * res.length)]
    await m.reply(wait)
    conn.sendFile(m.chat, img, 'wallpaper.jpg', cptnya, m)
}
handler.help = ['wallpaper2'].map(v => 'wallpaper' + v + ' <query>')
handler.tags = ['wallpaper']
handler.register = true
handler.limit = true
handler.command = /^(wallpaper2?)$/i

export default handler