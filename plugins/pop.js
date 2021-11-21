const Asena = require('../events');

const config = require('../config');

const Heroku = require('heroku-client');

const heroku = new Heroku({

    token: config.HEROKU.API_KEY

});

let baseURI = '/apps/' + config.HEROKU.APP_NAME;

    var PRE_dsc = ''

    var PRE_online = ''

    var PRE_offline = ''
    
    var PRE_typing = ''
    
    var PRE_recording = ''

    if (config.LANG == 'EN') {

        PRE_dsc = 'You can set Bot Presence. -owner command'

        PRE_online = '```ʙᴏᴛ ᴘʀᴇsᴇɴᴄᴇ ᴄʜᴀɴɢᴇᴅ ᴛᴏ ᴏɴʟɪɴᴇ```'

        PRE_offline = '```ʙᴏᴛ ᴘʀᴇsᴇɴᴄᴇ ᴄʜᴀɴɢᴇᴅ ᴛᴏ ᴏғғʟɪɴᴇ```'
        
        PRE_typing = '```ʙᴏᴛ ᴘʀᴇsᴇɴᴄᴇ ᴄʜᴀɴɢᴇᴅ ᴛᴏ ᴛʏᴘɪɴɢ```'
        
        PRE_recording = '```ʙᴏᴛ ᴘʀᴇsᴇɴᴄᴇ ᴄʜᴀɴɢᴇᴅ ᴛᴏ ʀᴇᴄᴏʀᴅɪɴɢ```'

    }

    Asena.addCommand({pattern: 'presence ?(.*)', fromMe: true, desc: PRE_dsc, usage: '.presence online / offline / typing / recording' }, (async (message, match) => {

        if (match[1] == 'online') {

                await heroku.patch(baseURI + '/config-vars', { 

                    body: { 

                        ['BOT_PRESENCE']: 'online'

                    } 

                });

                await message.sendMessage(PRE_online)

        } else if (match[1] == 'offline') {

                await heroku.patch(baseURI + '/config-vars', { 

                    body: { 

                        ['BOT_PRESENCE']: 'offline'

                    } 

                });

                await message.sendMessage(PRE_offline)

        } else if (match[1] == 'typing') {

                await heroku.patch(baseURI + '/config-vars', { 

                    body: { 

                        ['BOT_PRESENCE']: 'typing'

                    } 

                });

                await message.sendMessage(PRE_typing)

        } else if (match[1] == 'recording') {

                await heroku.patch(baseURI + '/config-vars', { 

                    body: { 

                        ['BOT_PRESENCE']: 'recording'

                    } 

                });

                await message.sendMessage(PRE_recording)

        }

    }));
