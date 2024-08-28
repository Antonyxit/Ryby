const handler = async (m, {conn}) => {
  m.reply(global.Masc00);
};
handler.command = /^(4vs4|Masc00)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Masc00 = `
🌟 Lista 4 VS 4 Masculino 🌟

🕘 Horario:
🇲🇽 8:00 PM
🇨🇴 9:00 PM

         Jugadores

🪐- 
🪐- 
🪐- 
🪐- 

          Suplentes

🌕- 
🌕- 

 Donador: 

💫-
`;

