let handler = async (m, { conn, text }) => {
  let [t1, t2] = text.split `|`
    let name = conn.getName(m.sender)
 conn.fakeReply(m.chat,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' , '0@s.whatsapp.net', t1+ 'Hai' ,'6285215988509-1629093115@g.us')
}
 
handler.help = ['fakespam']

handler.tags = ['main']

handler.command = /^fakespam$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.register = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

export default handler
