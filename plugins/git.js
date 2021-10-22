const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const GM = "it sends good morning message"

const GN = "it sends good night message"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "*To check update .update   To update Bot .update now*\n\n*𝐆𝐢𝐭𝐡𝐮𝐛 𝐋𝐢𝐧𝐤 : https://github.com/Luciferking1/Miss-Helenaa*\n\n*𝐀𝐮𝐝𝐢𝐨 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 : https://github.com/Luciferking1/Miss-Helenaa/tree/master/uploads*\n\n*𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 : https://github.com/Luciferking1/Miss-Helenaa/tree/master/Amalser*\n\n\n⚠️𝐓𝐡𝐢𝐬 𝐁𝐨𝐭 𝐈𝐬 𝐀 𝐅𝐨𝐫𝐤 𝐀𝐧𝐝 𝐌𝐨𝐝𝐞𝐝 𝐁𝐨𝐭 𝐅𝐫𝐨𝐦 𝐀𝐦𝐚𝐥𝐬𝐞𝐫_𝐕2";

    var i = Math.floor(2*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));
    

    }

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {

            var r_text = new Array ();

      r_text[1] = "*To check update .update   To update Bot .update now*\n\n*𝐆𝐢𝐭𝐡𝐮𝐛 𝐋𝐢𝐧𝐤 : https://github.com/Luciferking1/Miss-Helenaa*\n\n*𝐀𝐮𝐝𝐢𝐨 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 : https://github.com/Luciferking1/Miss-Helenaa/tree/master/uploads*\n\n*𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 : https://github.com/Luciferking1/Miss-Helenaa/tree/master/Amalser*\n\n\n⚠️𝐓𝐡𝐢𝐬 𝐁𝐨𝐭 𝐈𝐬 𝐀 𝐅𝐨𝐫𝐤 𝐀𝐧𝐝 𝐌𝐨𝐝𝐞𝐝 𝐁𝐨𝐭 𝐅𝐫𝐨𝐦 𝐀𝐦𝐚𝐥𝐬𝐞𝐫_𝐕2";


            var i = Math.floor(2*Math.random())

            await message.client.sendMessage(

                message.jid,(r_text[i]), MessageType.text);

            }));

        
}
