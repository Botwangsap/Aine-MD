let handler = async m => m.reply(`
╭─「 Donasi • DANA 」
│ •  [0819-9842-5782] sewa 1 bulan 25k
│ •  [0819-9842-5782] sewa Permanent 30k
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
