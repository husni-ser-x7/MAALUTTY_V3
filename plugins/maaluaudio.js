const Maalutty = require("../Utilis/events");
const { forwardOrBroadCast } = require("../Utilis/groupmute");
const { getBuffer } = require('../Utilis/download');
const { parseJid } = require("../Utilis/vote");
// ◄━⦁💝 MAALUTTY_V3💝⦁━►
const url = 'https://i.ibb.co/YT0pW4x/Screenshot-2021-11-10-09-29-10-1-1.png'
Maalutty.addCommand({ pattern: 'maaluaudio ?(.*)', fromMe: true, desc: "Forward replied msg." },
  async (message, match) => {
    if (match == "") return await message.sendMessage("*Give me a jid*\nExample .mforward jid1 jid2 jid3 jid4 ...");
    if (!message.reply_message)
      return await message.sendMessage("*Reply to a Message*");
    const buff = await getBuffer(url)
    let options = {}
    options.ptt = true 
    options.quoted = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        
      },
      message: {
        "orderMessage": {
        	"itemCount" : 79029,
             "status": 1,
           "surface" : 1,
           "message": "◄━⦁💝 MAALUTTY_V3💝⦁━►",
           "orderTitle": "",
           "thumbnail": buff.buffer,
           "sellerJid": '0@s.whatsapp.net' 
        }
      }
    }
      options.contextInfo = {
           forwardingScore: 999,
           isForwarded: true 
        } 
    options.duration = 999999, 
    match.match(parseJid).map((jid) => {
      forwardOrBroadCast(jid, message, options);
    });
  }
);
