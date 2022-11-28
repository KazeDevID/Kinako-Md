let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = ``
const templateButtons = [
    {index: 1, urlButton: {displayText: '🔧 Laporkan di sini', url: `https://wa.me/${nomorown}`}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['report']
handler.tags = ['info']
handler.command = /^report$/i

export default handler
