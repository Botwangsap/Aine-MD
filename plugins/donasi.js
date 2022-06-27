let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0838-6107-9743] pulsa axis 15k
│ •  [0838-6107-9743] pulsa axis 100k
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
