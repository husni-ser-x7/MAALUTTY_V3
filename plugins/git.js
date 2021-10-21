const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/sfXnW9w.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Rafi*
*To check update .update   To update Bot .update now*
*𝐆𝐢𝐭𝐡𝐮𝐛 𝐋𝐢𝐧𝐤 : https://github.com/Luciferking1/Miss-Helenaa*
*𝐀𝐮𝐝𝐢𝐨 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 : https://github.com/Luciferking1/Miss-Helenaa/tree/master/uploads*
*𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 : https://github.com/Luciferking1/Miss-Helenaa/tree/master/Amalser*
    
        ⚠️𝐓𝐡𝐢𝐬 𝐁𝐨𝐭 𝐈𝐬 𝐀 𝐅𝐨𝐫𝐤 𝐀𝐧𝐝 𝐌𝐨𝐝𝐞𝐝 𝐁𝐨𝐭 𝐅𝐫𝐨𝐦 𝐀𝐦𝐚𝐥𝐬𝐞𝐫_𝐕2
`}) 

}));
