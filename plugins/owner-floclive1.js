import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"

let handler  = async (m, { conn }) => {

 let pp = 'https://i.ibb.co/P6gSxBm/Menu-Kinako-Bot.jpg'
  try {
    pp = await conn.profilePictureUrl(m.sender, 'image')
  } catch (e) {
  }

let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  name: nameown,
  address: wm,
  url: sgh,
  isLive: true,
  accuracyInMeters: 0,
  speedInMps: 0,
  degreesClockwiseFromMagneticNorth: 2,
  comment: '',
  jpegThumbnail: await( await fetch(pp)).buffer()
}}, { quoted: m })

return conn.relayMessage(m.chat, msg.message, {})
}

handler.help = ["loc1"]
handler.tags = ["owner"]
handler.command = /^loc1$/
handler.owner = false
export default handler
