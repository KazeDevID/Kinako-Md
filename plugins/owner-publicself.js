let handler = async(m, { conn, command }) => {
  let isPublic = command === "public";
  let self = global.opts["self"]

  if(self === !isPublic) return m.reply(`Sudah ${!isPublic ? "Self" : "Public"}`)

  global.opts["self"] = !isPublic

  m.reply(`Berhasil ${!isPublic ? "Self" : "Public"} bot!`)
}

handler.help = ["self", "public"]
handler.tags = ["owner"]

handler.rowner = true

handler.command = /^(self|public)/i

export default handler 