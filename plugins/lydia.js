/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta 
*/

/*
const Asena = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const {LydiaDB} = require('./sql/lydia');
const {LydiaAI} = require('coffeehouse');

const Language = require('../language');
const Lang = Language.getString('lydia');

Asena.addCommand({pattern: 'addlydia$', fromMe: true, desc: Lang.ADDLYDIA_DESC}, (async (message, match) => {
    if (!message.reply_message) return await message.reply(Lang.NEED_REPLY);
    if (Config.COFFEEHOUSE_API_KEY == 'true') return await message.client.sendMessage(message.jid, '```You Must Set an API KEY!```\nhttps://github.com/phaticusthiccy/WhatsAsenaDuplicated/wiki/LYDIA-API-KEY', MessageType.text);

    var unix = Date.now() / 1000 | 0;

    var veriler = await LydiaDB.findAll();
    var lydia = new LydiaAI(Config.COFFEEHOUSE_API_KEY);

    if (veriler.length < 1) {
        var session = await lydia.createSession();
        await LydiaDB.create({session_id: session.id, expires: session.expires, users: message.reply_message.jid.split('@')[0]});
    } else {
        if (unix > veriler[0].dataValues.expires) {
            var session = await lydia.createSession();
            await veriler[0].update({session_id: session.id, expires: session.expires, users: veriler[0].dataValues.users + ',' + message.reply_message.jid.split('@')[0]});
        } else {
            await veriler[0].update({users: veriler[0].dataValues.users + (veriler[0].dataValues.users != '' ? ',' : '') + message.reply_message.jid.split('@')[0]});
        }
    }

    return await message.reply(Lang.ENABLED_LYDIA);
}));

Asena.addCommand({pattern: 'rmlydia$', fromMe: true, desc: Lang.RMLYDIA_DESC}, (async (message, match) => {
    if (!message.reply_message) return await message.reply(Lang.NEED_REPLY);
    if (Config.COFFEEHOUSE_API_KEY == 'true') return await message.client.sendMessage(message.jid, '```You Must Set an API KEY!```\nhttps://github.com/phaticusthiccy/WhatsAsenaDuplicated/wiki/LYDIA-API-KEY', MessageType.text);

    var unix = Date.now() / 1000 | 0;

    var veriler = await LydiaDB.findAll();
    var lydia = new LydiaAI(Config.COFFEEHOUSE_API_KEY);

    if (veriler.length < 1) {
        return await message.reply(Lang.ALREADY_EMPTY)
    } else {
        if (veriler[0].dataValues.users == '') return await message.reply(Lang.ALREADY_EMPTY)
        var users = veriler[0].dataValues.users.split(',');
        if (users.includes(message.reply_message.jid.split('@')[0])) { users = users.remove(message.reply_message.jid.split('@')[0]).join(','); } else {
            return await message.reply(Lang.NOT_ADDED);
        }*/


/* coded by raashii

*/

/*
 const Rashi = require('../events');

 const { MessageType, Mimetype } = require('@adiwajshing/baileys');

 const fs = require('fs');

 const ffmpeg = require('fluent-ffmpeg');

 const { execFile } = require('child_process');

 const Config = require('../config');

          var mode = ''

if (Config.PLK == 'default') mode = 'ᴅᴇᴠᴇʟᴏᴘᴇʀ : NIJJN AND HUSNI'

else mode = 'ғᴏʀᴡᴀʀᴅᴇᴅ ʙʏ ' + Config.PLK

            const raashi = {

                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "ZARA MWOL", "caption": mode , 'jpegThumbnail': fs.readFileSync('./media/image/logo.jpg')}}

             

             

            }

Rashi.addcommand({pattern: 'mforward ?(.*)', fromMe: true, desc: 'its foraward replied audio'}, (async (message, match) => {    

    if (message.reply_message === false);

    

    if(message.reply_message.video ||

      message.reply_message.sticker ||

      message.reply_message.pdf

    )

      return message.sendMessage("*Not supported!*\n\n   only support audio files🌚");

      

        if (match == "") return await message.sendMessage("*Give me a jid*\nExample .mforward jid1 jid2 jid3 jid4 ...");

       

    var location = await message.client.downloadAndSaveMediaMessage({

        key: {

            remoteJid: message.reply_message.jid,

            id: message.reply_message.id

        },

        message: message.reply_message.data.quotedMessage

    });

let id = match[1];

    ffmpeg(location)

        .format('mp3')

        .save('output.mp3')

        .on('end', async () => {

            await message.client.sendMessage(id, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: raashi,contextInfo: { forwardingScore: 2, isForwarded: true}});

});

}));
*/

/*

        if (unix > veriler[0].dataValues.expires) {
            var session = await lydia.createSession();
            await veriler[0].update({'session_id': session.id, 'expires': session.expires, 'users': users});
        } else {
            await veriler[0].update({'users': users});
        }
    }

    return await message.reply(Lang.DISABLED);
}));

Asena.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {   
    if (Config.COFFEEHOUSE_API_KEY === false) return;
    var unix = Date.now() / 1000 | 0;

    var fromId;
    if (message.jid.includes('-')) {
        if (message.reply_message === false && message.mention === false) return;
        if (message.reply_message && (message.reply_message.jid.split('@')[0] != message.client.user.jid.split('@')[0])) return;
        if (message.mention !== false && message.mention.length >= 1 && (message.mention[0].split('@')[0] != message.client.user.jid.split('@')[0])) return;
    }

    if (message.data.participant) { fromId = message.data.participant.split('@')[0]; } else { fromId = message.jid.split('@')[0]; }
    var veriler = await LydiaDB.findAll();
    var lydia = new LydiaAI(Config.COFFEEHOUSE_API_KEY);
    var session;

    if (veriler.length < 1) {
        return;
    } else {
        if (unix > veriler[0].dataValues.expires) {
            session = await lydia.createSession();
            await veriler[0].update({session_id: session.id, expires: session.expires});
        } else {
            session = await lydia.getSession(veriler[0].dataValues.session_id);
        }
        
        var isLydiaEnabled = false;
        if (veriler[0].users.includes(',')) {
            veriler[0].users.split(',').map((user) => {
                if (user == fromId) isLydiaEnabled = true;
            });
        } else {
            if (veriler[0].users == fromId) isLydiaEnabled = true;
        }

        if (isLydiaEnabled) {
            await message.sendTyping();

            await session.think_thought(message.message).then(async (data) => {

                await message.client.sendMessage(message.jid,data.output, MessageType.text, {quoted: message.data});

            })
        }
    }
}));
*/
