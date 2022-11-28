import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = wait

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(), fileName: global.wm2, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: titlebot,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '🦆 TELEGRAM',
                        url: stg,
                    }
                },
                {
                    urlButton: {
                        displayText: '🦆 WHATSAPP',
                        url: `https://wa.me/${nomorown}`,

                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'OKE👍',
                        id: 'Ok'
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Report main² tidak akan di respon', sourceUrl: snh, thumbnail: await (await fetch(imagebot)).buffer()  }}})
}
handler.help = ['complaint']
handler.tags = ['group','admin']
handler.command = /^(complaint)$/i
handler.group = true
handler.admin = true
handler.register = true
handler.exp = 3

export default handler
