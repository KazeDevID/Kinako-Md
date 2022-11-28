import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
    const ultah = new Date(ultahown)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let ultoh = `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `Total Fitur Bot Saat ini: ${totalf}\n`,wm + '\n\n' + botdate, giflogo, [['🌹 Menu','.menu']], m, {
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: syt,
                        mediaType: 2,
                        description: bottime,
                        title: ultoh,
                        body: bottime,          previewType: 0,
                        thumbnail: await (await fetch(giflogo2)).buffer(),
                        mediaUrl: syt
                        
                      }}
})
  }


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
export default handler
