const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const GM = "it sends good morning message"

const GN = "it sends good night message"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

asena.addCommand({pattern: 'Rafi', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "𝙸 𝙺𝚗𝚘𝚠 𝙷𝚎 𝙸𝚜 𝙼𝚢 𝙾𝚠𝚗𝚎𝚛";

    var i = Math.floor(2*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));

asena.addCommand({pattern: 'Ameen', fromMe: true, deleteCommand: true, desc: GN,}, (async (message, match) => {

        var r_text = new Array ();

        r_text[1] = "𝙸 𝙺𝚗𝚘𝚠 𝙷𝚎 𝙸𝚜 𝙼𝚢 𝙰𝚜𝚜𝚒𝚜𝚝𝚊𝚗𝚍";

        var i = Math.floor(2*Math.random())

        await message.client.sendMessage(

            message.jid,(r_text[i]), MessageType.text);

        }));    

    }

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'Rafi', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {

            var r_text = new Array ();

            r_text[1] = "𝙸 𝙺𝚗𝚘𝚠 𝙷𝚎 𝙸𝚜 𝙼𝚢 𝙲𝚛𝚎𝚊𝚝𝚘𝚛🥰";

            var i = Math.floor(2*Math.random())

            await message.client.sendMessage(

                message.jid,(r_text[i]), MessageType.text);

            }));

        asena.addCommand({pattern: 'Ameen', fromMe: false, deleteCommand: true, desc: GN,}, (async (message, match) => {

                var r_text = new Array ();

                r_text[1] = "𝙸 𝙺𝚗𝚘𝚠 𝙷𝚎 𝙸𝚜 𝙼𝚢 𝙰𝚜𝚜𝚒𝚜𝚝𝚎𝚗𝚍";
          
                var i = Math.floor(2*Math.random())

                await message.client.sendMessage(

                    message.jid,(r_text[i]), MessageType.text);

                }));    

                asena.addCommand({pattern: 'helena', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {

                    var r_text = new Array ();

                    r_text[1] = "𝚈𝚎𝚜 𝚃𝚎𝚕𝚕 𝙼𝚎 𝙷𝚘𝚠 𝙲𝚊𝚗 𝙸 𝙷𝚎𝚕𝚙 𝚈𝚘𝚞";

                    var i = Math.floor(2*Math.random())

                    await message.client.sendMessage(

                        message.jid,(r_text[i]), MessageType.text);

                    }));


}
