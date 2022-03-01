let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw '_*Siape Yang Koko Pangeran Ga Mao Entod❓*_'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `_*Asik Ga Di Entod Koko Pangeran Lagi😚*_`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.rowner = true

module.exports = handler
