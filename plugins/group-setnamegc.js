let handler = async (m, { conn, args, usedPrefix, command }) => {

  await conn.groupUpdateSubject(m.chat, `${args.join(" ")}`);
  m.reply('📮Sukses mengganti nama group')
}

handler.help = ['Setnamegc <text>']
handler.tags = ['group','admin']
handler.register = true 
handler.command = /^setnamegc$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true

export default handler