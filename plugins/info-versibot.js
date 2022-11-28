import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
  const ultah = new Date(ultahown)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
   let ultoh = `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`
  let info = `Bot ini menggunakan script by\n KazeDevID\n\n*Version:* Private Beta Tester`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: global.namebot, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: titlebot,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: 'Beli Sc? Klik',
                        url: `https://wa.me/${nomorown}`
                    }
                },
                {
                    urlButton: {
                        displayText: 'YOUTUBE',
                        url: syt,
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: syt,
                        mediaType: 2,
                        description: bottime,
                        title: ultoh,
                        body: bottime,       previewType: 0,
                        thumbnail: await (await fetch(giflogo2)).buffer(),
                        mediaUrl: syt
                        
                      }}
})
  }
handler.help = ['cekversi']
handler.tags = ['info']
handler.command =  /^(cekversi)$/i

handler.register = true
handler.premium = false
handler.limit = false

export default handler
