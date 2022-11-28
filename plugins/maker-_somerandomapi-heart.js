let handler = async (m, { conn, usedprefix, command }) => {
await m.reply(global.wait)
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendButton(m.chat, cptnya, wm, global.API('https://some-random-api.ml', '/canvas/heart', {
        avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), [['🔄 Again', `.${command}`]], m)
}

handler.help = ['heart']
handler.tags = ['maker']

handler.command = /^(heart)$/i
handler.register = true
handler.limit = true

export default handler