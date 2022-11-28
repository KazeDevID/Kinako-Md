import fetch from 'node-fetch'
import moment from 'moment-timezone'
import fs from 'fs'
let handler = async (m, { conn, command, text }) => {
  let name = await conn.getName(m.sender)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/a6b2ccf14c2007652faec.jpg")
await conn.sendButton(m.chat, `Halo juga kak ${name} Ada Yang ${await conn.getName(conn.user.jid)} Bisa Bantu?\n*Ini nomor bot yah bukan org*\n\nKlik Button Di bawah untuk memunculkan menu bot`,wm + '\n\n' + botdate, giflogo2, [['📌MENU','.menu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: sig,
                        mediaType: 2,
                        description: 'anu',
                        title: global.titlebot,
                        body: wm2,          previewType: 0,
                        thumbnail: await (await fetch(pp)).buffer(),
                        sourceUrl: sig
                      }}
})
}
handler.customPrefix = /^(Hallo|halo|Halo|hallo|hi|helo|hai|hi|Hai|Helo|Hello|Bot|bot|Kinako|kinako)$/i
handler.command = new RegExp

export default handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari 🎑"
    if (time >= 4) {
        res = "Good Morning 🌅"
    }
    if (time > 10) {
        res = "Good Afternoon 🏞️"
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
        res = "Good Evening 🌃" 
    }
    return res
}
