export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`𝑯𝒐𝒍𝒂 @${m.sender.split`@`[0]}, 𝑬𝒔𝒕𝒂 𝑷𝒓𝒐𝒉𝒊𝒃𝒊𝒅𝒐 𝑯𝒂𝒃𝒍𝒂𝒓𝒎𝒆 𝑨𝒍 𝑷𝒓𝒊𝒗, 𝑺𝒊 𝑫𝒆𝒔𝒆𝒂𝒔 𝑪𝒐𝒎𝒑𝒓𝒂𝒓𝒎𝒆 𝑬𝒔𝒄𝒓𝒊𝒃𝒆 𝑨𝒍 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 𝑵𝒖𝒎𝒆𝒓𝒐 : +52 81 8076 6681 o entra al siguiente grupo https://chat.whatsapp.com/Gatazjl4kWi8TZlvxXfosF`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
