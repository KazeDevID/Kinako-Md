import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let urut = text.split`|`
  let thm = urut[0]
  let text1 = urut[1]
  let text2 = urut[2]
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} id|teks1|teks2
*List id:*
• 21735 The
• 61516 Philosoraptor
• 61520 Futurama
• 61527 Y
• 61532 The
• 61533 X
• 61539 First
• 61544 Success
• 61546 Brace
• 61556 Grandma
• 61579 One
• 61580 Too
• 61581 Put
• 61582 Creepy
• 61585 Bad
• 97984 Disaster
• 100947 Matrix
• 100955 Confession
• 101287 Third
• 101288 Third
• 101440 10
• 101470 Ancient
• 101511 Don't
• 101716 Yo
• 109765 I'll
• 163573 Imagination
• 195389 Sparta
• 235589 Evil
• 245898 Picard
• 259680 Am
• 405658 Grumpy
• 438680 Batman
• 444501 Maury
• 460541 Jack
• 563423 That
• 718432 Back
• 766986 Aaaaand
• 922147 Laughing
• 1035805 Boardroom
• 1509839 Captain
• 3218037 This
• 4087833 Waiting
• 5496396 Leonardo
• 6235864 Finding
• 6531067 See
• 8072285 Doge Shiba
• 9440985 Face
• 12403754 Bad
• 14230520 Black
• 14371066 Star
• 16464531 But
• 21604248 Mugatu
• 27813981 Hide
• 28251713 Oprah
• 40945639 Dr
• 55311130 This
• 56225174 Be
• 79132341 Bike
• 80707627 Sad
• 84341851 Evil
• 87743020 Two
• 89370399 Roll
• 91538330 X,
• 91545132 Trump
• 93895088 Expanding
• 99683372 Sleeping
• 100777631 Is
• 101910402 Who
• 102156234 Mocking
• 110163934 I
• 112126428 Distracted
• 114585149 Inhaling
• 119139145 Blank
• 123999232 The
• 124055727 Y'all
• 124822590 Left
• 129242436 Change
• 131087935 Running
• 131940431 Gru's
• 132769734 Hard
• 134797956 American
• 135256802 Epic
• 135678846 Who
• 148909805 Monkey
• 155067746 Surprised
• 161865971 Marked
• 175540452 Unsettled
• 178591752 Tuxedo
• 180190441 They're
• 181913649 Drake
• 188390779 Woman
• 195515965 Clown
• 196652226 Spongebob
• 216951317 Guy
• 217743513 UNO
• 222403160 Bernie
• 226297822 Panik
• 247375501 Buff
• 252600902 Always
• 259237855 Laughing`
let res = await fetch(`https://api.imgflip.com/caption_image?template_id=${thm}&username=Wudysoft&password=Wudysoft&text0=${text1}&text1=${text2}`)
  let x = await res.json()
  return conn.sendButton(m.chat, cptnya, wm, await(await fetch(x.data.url)).buffer(), [['🌹 Menu', '/menu'], ['🎟️ Sticker', '.s']], m,)
}
handler.help = ['mememaker  <id|teks1|teks2>','memaker  <id|teks1|teks2>']
handler.tags = ['maker']
handler.register = true
handler.limit = true
handler.command = /^(memaker|mememaker)$/i

export default handler