let handler = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('_*Koko Pangeran Tidak Aktif Di Group Ini😌*_')
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.owner = true

module.exports = handler
