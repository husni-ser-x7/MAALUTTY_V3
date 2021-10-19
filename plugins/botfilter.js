Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
            var uri = encodeURI(match[1])
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
const array = ['Uff']

array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./text/' + a + '.txt'), MessageType.text, { mimetype: Mimetype.txt,quoted: message.data,})
}
