let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *ADA APA* ${htka}

              𝕵𝖎𝖎𝖐𝖚𝖆𝖓 | 𝙕𝙮𝙠𝙪𝙖𝙣
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Chat', url: 'https://wa.me/6282133532380'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.customPrefix = /^(woi|hallo|p|haii|haee)$/i
handler.command = new RegExp

export default handler
