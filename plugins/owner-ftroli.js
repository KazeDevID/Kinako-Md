import fs from 'fs'
 let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = (await import("@adiwajshing/baileys")).default;
 const anu = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 404,
                            itemCoun : 404,
                            surface : 404,
                            message: botdate,
                            orderTitle: 'B',
                            thumbnail: fs.readFileSync('./thumbnail.jpg'), 
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
conn.sendMessage(m.chat,{text:wm}, {quoted: anu})
}


handler.help = ['troli']

handler.tags = ['owner']

handler.command = /^troli$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false

export default handler
