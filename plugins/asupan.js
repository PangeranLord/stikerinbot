let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, API('amel', '/asupan', {}, 'apikey'), 'asupan.mp4', wm)
}
handler.help = ['asupan']
handler.tags = ['fun']
handler.command = /^(asupan)$/i
handler.limit = true
handler.premium = true

module.exports = handler
