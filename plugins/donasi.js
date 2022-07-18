let handler = async (m, { conn }) => {
let info = `
*${htki} DONASI ${htka}*

𝕵𝖎𝖎𝖐𝖚𝖆𝖓 | 𝙕𝙮𝙠𝙪𝙖𝙣 
`
const sections = [
   {
	title: `METODE`,
	rows: [
	    {title: "?Allpay", rowId: '.donasiallpay', description: 'Bayar melalui apa saja' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "DONASI",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ðŸŒŽ Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['donasi', 'donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
handler.private = true

export default handler
