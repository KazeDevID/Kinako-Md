let handler = async (m) => m.reply(`
*Pertanyaan:* ${m.text}
*Jawaban:* ${['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['apakah <teks>?']
handler.tags = ['kerang', 'fun']
handler.customPrefix = /(\?$)/
handler.command = /^apakah$/i
handler.register = true
export default handler
