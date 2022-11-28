import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
  const ultah = new Date(ultahown)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let ultoh = `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`
    let vn = `./mp3/menu.opus`
  conn.sendButton(m.chat, `
╭───━━─╼❑〔 *Donasi* 〕❑╾─━━──
│ ☂︎ Pulsa  [${ppulsa}]
│ ☂︎ Dana  [${pdana}]]
│ ☂︎ Gopay  [${pgopay}]
│ ☂︎ Saweria  [ ${psaweria} ]
╰──━━━─❍
╭───━━─╼❑〔 *NOTE* 〕❑╾─━━──
│ _Hasil donasi akan digunakan buat beli panel_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰──━━━─❍
`.trim(), wm, [['☕ DEVELOPER',`/owner`]],m) // Tambah sendiri kalo mau
conn.sendFile(m.chat, vn, 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: ultoh, body: bottime, sourceUrl: syt, thumbnail: await (await fetch(thumb)).buffer(),}} 
     }) 
}
handler.command = /^(pay|payment|bayar)$/i
handler.tags = ['info']
handler.help = ['payment']
handler.premium = false
handler.limit = true

export default handler
