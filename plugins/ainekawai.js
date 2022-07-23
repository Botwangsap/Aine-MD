let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./mp3/AUD-20220329-WA0662.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(Kawai|Kawaii|Cu|ahhh|Yameteh|💦|Masukin ayang|Ahh|Crott💦|)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
