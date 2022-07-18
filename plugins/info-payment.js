let handler = async (m, { conn }) => {
let info = `
*${htki} PAYMENT ${htka}*

©𝕵𝖎𝖎𝖐𝖚𝖆𝖓 | 𝙕𝙮𝙠𝙪𝙖𝙣 
`
const sections = [
   {
	title: `✃ sᴇᴡᴀ`,
	rows: [
	    {title: "💳qris", rowId: '.qris', description: 'Bayar melalui aplikasi support qris' },
	    {title: "💳saweria", rowId: '.saweria', description: 'Bayar melalui apa saja' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['pay', 'payment']
handler.tags = ['info']
handler.command = /^(pay(ment)?|payment)$/i
handler.private = true

export default handler
