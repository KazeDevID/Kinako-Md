let handler = async (m, { conn }) => {


let krtu = `╔══════════════════╗
║             「 ᴋᴀʀᴛᴜ ɪɴᴛʀᴏ 」
║➸ɴᴀᴍᴀ          =
║➸ᴜᴍᴜʀ         =
║➸ᴋᴇʟᴀꜱ         =
║➸ᴛɪɴɢɢᴀʟ     =
║➸ᴀꜱᴀʟ           =
║➸ɢᴇɴᴅᴇʀ      =
║➸ᴀɢᴀᴍᴀ       =
║➸ʜᴏʙʙʏ        =
║➸ꜱᴛᴀᴛᴜꜱ      =
╚══════════════════╝
http://bīt.ly/ᯤ
`
conn.fakeReply(m.chat, krtu, '0@s.whatsapp.net', wm)
}
handler.command = /^(intro)$/i
handler.group = true

export default handler
