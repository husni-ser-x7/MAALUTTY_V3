const Maalutty = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

Maalutty.addCommand({pattern: 'help', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: '💝MENU💝 \n╭───────────────╮\n│ ɴᴀᴍᴇ:◄━⦁💝 MAALUTTY_V3💝⦁━► \n | *DEVELOPER* :ꪶ͢ʜᴜsɴɪ ÃÑD ɴɪᴊɪɴꫂ \n│ *TIME* : ```' + plk_here + '```  \n│\n│ *CREDITS* ```NIJIN AND HUSNI💝``` \n│ \n╰───────────────╯'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: '💝XMEDIA💝 \n\nXMEDIA COMMANDS ARE.\n\n\n💻Usage: *.mp4enhance*\nℹ️Desc:Enhance video’s quality.\n\n💻Usage: *.interp*\nℹ️Desc:Increases the FPS of the video.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc:Applies true-slowmo to non-slow motion videos.\n\n💻Usage: *.x4mp4*\nℹ️Desc:Reduce video’s quality by 75%.\n\n💻Usage: *.x2mp4*\nℹ️Desc: Reduce video’s quality by 50%.\n\n💻Usage: *.gif*\nℹ️Desc:Converts video to gif.\n\n💻Usage: *.agif*\nℹ️Desc:Converts video to voiced gif.\n\n💻Usage: *.mp4blur*\nℹ️Desc: Blurs the background of the video.\n\n💻Usage: *.mp4stab*\nℹ️Desc: Decreases the vibration of the video.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: Applies a rainbow effect to video.\n\n💻Usage: *.mp4color*\nℹ️Desc:Makes the colors of the video more vivid and beautiful.\n\n💻Usage: *.mp4art*\nℹ️Desc:Applies a art effect to the video.\n\n💻Usage: *.mp4negative*\nℹ️Desc:Applies a negative color filter to the video.\n\n💻Usage: *.mp4vintage*\nℹ️Desc:Applies a nostalgic effect to video.\n\n💻Usage: *.mp4bw*\nℹ️Desc: Applies a monochrome effect to video.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: Plays the video in reverse.\n\n💻Usage: *.mp4edge*\nℹ️Desc:Applies a edge effect to the video.\n\n💻Usage: *.mp4image*\nℹ️Desc: Converts photo to 5 sec video.\n\n💻Usage: *.spectrum*\nℹ️Desc: Converts the spectrum of sound into video.\n\n💻Usage: *.waves*\nℹ️Desc: Converts the wave range of sound to video.\n\n💻Usage: *.frequency*\nℹ️Desc: Converts the frequency range of sound to video.\n\n💻Usage: *.avec*\nℹ️Desc: Converts the histogram of sound to video.\n\n💻Usage: *.volumeaudio*\nℹ️Desc: Converts the decibel value of the sound into video.\n\n💻Usage: *.cqtaudio*\nℹ️Desc: Converts the CQT value of audio to video.\n\n💻Usage: *.mp3eq*\nℹ️Desc: Adjusts the sound to a crystal clear level.\n\n💻Usage: *.mp3crusher*\nℹ️Desc:Distorts the sound, makes ridiculous.\n\n💻Usage: *.mp3reverse*\nℹ️Desc:Plays the sound in reverse.\n\n💻Usage: *.mp3pitch*\nℹ️Desc:Makes the sound thinner and faster.\n\n💻Usage *.mp3low*\nℹ️Desc:Makes the sound deep and slower.\n\n💻Usage: *.x2mp3*\nℹ️Desc:  Makes the sound twice as fast.\n\n💻Usage: *.mp3volume*\nℹ️Desc: 🇹🇷 Ses seviyesini fazalca arttırır.\n🇬🇧 Increase sound level so much.\n\n💻Usage: *.bwimage*\nℹ️Desc: 🇹🇷 Fotoğrafa monochrome efekti uygular.\n🇬🇧 Applies a monochrome effect to image.\n\n💻Usage: *.vintageimage*\nℹ️Desc: 🇹🇷 Fotoğrafa vintage efekti uygular.\n🇬🇧 Applies a vinatge effect to video.\n\n💻Usage: *.edgeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa edge efekti uygular.\n🇬🇧 Applies a edge effect to the photo.\n\n💻Usage: *.enhanceimage*\nℹ️Desc: 🇹🇷 Fotoğrafı daha net hale getirir.\n🇬🇧 Makes the photo clearer.\n\n💻Usage: *.blurimage*\nℹ️Desc: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n🇬🇧 Blurs the background of the photo.\n\n💻Usage: *.grenimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gren efekti uygular.\n🇬🇧 Applies grain effect to the photo.\n\n💻Usage: *.negativeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa negatif renk filtresi uygular.\n🇬🇧 Applies a negative color filter to the photo.\n\n💻Usage: *.rainbowimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gökkuşağı efekti uygular.\n🇬🇧 Applies rainbow effect to the photo.\n\n💻Usage: *.colorimage*\nℹ️Desc: 🇹🇷 Fotoğrafın renklerini daha canlı ve çekici yapar.\n🇬🇧 It makes the colors of the photo more vivid and attractive.\n\n💻Usage: *.artimage*\nℹ️Desc: 🇹🇷 Fotoğrafa çizim efekti uygular.\n🇬🇧 Applies a art effect to the photo\n\n '}, type: 1},
        {buttonId: 'id3', buttonText: {displayText: '💝GIT💝 \n\n```creater Husni and nijin```\n\n```owner number wa.me/917025868709```\n\n```owner number wa.me/919446672120```\n\n```whatsapp group : https://chat.whatsapp.com/KJWUNpT7lBzDuPGnlV69Vp```\n\n```githublink       https://github.com/nijin-husni/Maalutty_V3```\n\n```audio commads    https://github.com/nijin-husni/uploads/tree/master/bgm```\n\n```sticker commads  https://github.com/nijin-husni/uploads/tree/master/stickers```\n'  }, type: 1},

      ]
      
      const buttonMessage = {
          contentText: '◄━⦁💝 MAALUTTY_V3💝⦁━►

 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​🔮 .xmedia
💘  ```It is a plugin with more than 25 media tools.``` 

🔮 .ownercmnd
💘  ```set of commands for bot user or sudo``` 

🔮 .codtts
💘  ```language code to change the voice in .tts & also for .trt translation``` 

🔮 .adan 
💘  ```Finds prayer time.``` 
*⌨️ Eg:- :* ```.prayer <city>```

🔮 .rename 
💘  ```[object Object]``` 

🔮 .anime
💘  ```random anime image ``` 

🔮 .aforward 
💘  ```Forwards replied audio as voice note with verified info``` 

🔮 .apkmod

🔮 .fatp

🔮 .ask

🔮 .infoask

🔮 .love

🔮 .infolove

🔮 .ttp 
💘  ```Converts text to plain painting.``` 

🔮 .attp 
💘  ```Adds rainbow effect to the text as a sticker.``` 

🔮 .emoji 

🔮 .pmaudio 
💘  ```Forwards replied audio as voice note with verified info as broadcast to all participants``` 

🔮 .nijin
💘  ```.``` 

🔮 .husni
💘  ```.``` 

🔮 .bgm 
💘  ```turn on and turn off bgm. -bot owner command``` 
*⌨️ Eg:- :* ```.bgm on / off```

🔮 .sendi
💘  ```Download status from wa``` 

🔮 .sendv
💘  ```Download status from wa``` 

🔮 .carbon
💘  ```It sends carbon picture``` 

🔮 .bgm 
💘  ```change reply message BGM mode``` 
*⌨️ Eg:- :* ```.bgm one / two```

🔮 .mp3
💘  ```maalutty Converts video to audio.``` 

🔮 .photo
💘  ```Converts the sticker to a photo.``` 

🔮 .mp4
💘  ```Converts animated stickers to video.``` 

🔮 .doc 
💘  ```CONVERT TO DOCUMENT AND ADD GIVEN NAME``` 
*⌨️ Eg:- :* ``````.doc Maalutty *replace Maalutty with desired name*``````

🔮 .dict 
💘  ```Use it as a dictionary.
Eg: .dict en_US;lead
 For supporting languages send *.lngcode*``` 

🔮 .roll
💘  ```Roll dice randomly.``` 

🔮 .emo 
💘  ```You Can Png From Any Emoji``` 

🔮 .png 

🔮 .git
💘  ```It sends high resolution wallpapers.``` 

🔮 .welcome
💘  ```It sets the welcome message. If you leave it blank it shows the welcome message.``` 

🔮 .goodbye
💘  ```Sets the goodbye message. If you leave blank, it show's the goodbye message.``` 

🔮 .print 
💘  ```Prints the inside of the file on the server.``` 

🔮 .bashmedia 
💘  ```Sends audio, video and photos inside the server.``` 
*⌨️ Eg:- :* ```video.mp4 && media/gif/pic.mp4```

🔮 .addserver
💘  ```Uploads image, audio or video to the server.``` 

🔮 .term1 
💘  ```Allows to run the command on the server's shell.``` 

🔮 .findvid
💘  ```Shows the technical information of the replied video.``` 

🔮 .pm 
💘  ```Sends a private message to the replied person.``` 

🔮 .pmsend 
💘  ```Sends a private voice message to the respondent.``` 

🔮 .antilink 
💘  ```Activates the Antilink tool.``` 
*⌨️ Eg:- :* ```.antilink on / off```

🔮 .menu
💘  ```it send bot menu``` 

🔮 .maaluforward 
💘  ```its foraward replied audio``` 

🔮 .moretxt
💘  ```more txtit commands``` 

🔮 .ffire 
💘  ```add your text to random freefire logo``` 

🔮 .emo 
💘  ```emogi to png``` 

🔮 .news 

🔮 .notes
💘  ```Shows all your existing notes.``` 

🔮 .save 
💘  ```Reply a message and type .save or just use .save <Your note> without replying``` 

🔮 .deleteNotes
💘  ```Deletes *all* your saved notes.``` 

🔮 .owner
💘  ```shows the detail of bot owner``` 

🔮 .pdf 
💘  ```Get screenshot of links in pdf``` 

🔮 .presence 
💘  ```You can set Bot Presence. -owner command``` 
*⌨️ Eg:- :* ```.presence online / offline / typing / recording```

🔮 .jid 
💘  ```Giving user's JID.``` 

🔮 .random 
💘  ```word image``` 

🔮 .rashmika
💘  ```random rashmika images ``` 

🔮 .brdmore 
💘  ```add readmore before your text``` 

🔮 .rdmore 
💘  ```add readmore before your text``` 

🔮 .removebg 
💘  ```Removes the background of the photos.``` 

🔮 .warn 
💘  ```Sends reports to group admins.``` 

🔮 .scan 
💘  ```Checks whether the entered number is registered on WhatApp.``` 

🔮 .trt
💘  ```It translates with Google Translate. You must reply any message.``` 
*⌨️ Eg:- :* ```.trt tr it (From Turkish to Italian)```

🔮 .detectlang
💘  ```Guess the language of the replied message.``` 

🔮 .currency

🔮 .tts 
💘  ```It converts text to sound.``` 

🔮 .song 
💘  ```Uploads the song you wrote.``` 

🔮 .video 
💘  ```Downloads video from YouTube.``` 

🔮 .sing 
💘  ```It sings song that you have written``` 

🔮 .song 
💘  ```Uploads the song you wrote for ios users.``` 

🔮 .wiki 
💘  ```Searches query on Wikipedia.``` 

🔮 .img 
💘  ```Searches for related pics on Google.``` 

🔮 .github 
💘  ```Collects github information from the given username.
⌨️ Example: .github phaticusthiccy``` 

🔮 .lyric 
💘  ```Finds the lyrics of the song.``` 

🔮 .covid 
💘  ```Shows the daily and overall covid table of more than 15 countries.``` 

🔮 .sweather 
💘  ```Gives you the weekly interpretations of space weather observations provided by the Space Weather Research Center (SWRC) for a p.``` 

🔮 .compliment 
💘  ```It sends complimentry sentenses``` 

🔮 .hmod 
💘  ```Finds mod apps from happymod``` 

🔮 .insult 
💘  ```It sends insulted words``` 

🔮 .movie 
💘  ```Shows movie info.``` 

🔮 .joke 
💘  ```It sends random jokes``` 

🔮 .vava 
💘  ```Chat with Maalutty.
 Use .maalu <message>``` 

🔮 .owner
💘  ```shows the detail of bot owner``` 

🔮 .quote 
💘  ```It shares famous quotes``` 

🔮 .ss 
💘  ```Takes a screenshot from the page in the given link.``` 

🔮 .setvar
💘  ```It sends high resolution wallpapers.``` 

🔮 .show 
💘  ```Get info related to tv series and shows``` 

🔮 .ig 
💘  ```Fetches user informations from instagram``` 

🔮 .animesay 
💘  ```It writes the text inside the banner the anime girl is holding``` 

🔮 .changesay 
💘  ```Turns the text into the change my mind poster.``` 

🔮 .trumpsay 
💘  ```Converts the text to Trump's tweet.``` 

🔮 .bgm 
💘  ```turn on and turn off bgm. -bot owner command``` 
*⌨️ Eg:- :* ```.bgm on / off```

🔮 .autosticker 
💘  ```turn on and turn off bgm. -bot owner command``` 
*⌨️ Eg:- :* ```.sticker on / off```

🔮 .sudo 
💘  ```changes sudo numbers``` 
*⌨️ Eg:- :* ```.sudo *your number*```

🔮 .caption 
💘  ```changes all captions``` 
*⌨️ Eg:- :* ```.caption *Made by JulieMwol*```

🔮 .number 
💘  ```change user number``` 
*⌨️ Eg:- :* ```.number *Made by Amalser*```

🔮 .deployer 
💘  ```change user name``` 
*⌨️ Eg:- :* ```.deployer *Made by Amalser*```

🔮 .handlers 
💘  ```changes handlers``` 
*⌨️ Eg:- :* ```.handler ^[.!] ```

🔮 .botname 
💘  ```change your bot name``` 
*⌨️ Eg:- :* ```.botname *name* ```

🔮 .theri  
💘  ```change your theri commands``` 
*⌨️ Eg:- :* ```.theri command,command```

🔮 .sticker
💘  ```It converts your replied photo or video to sticker.``` 

🔮 .ffpack
💘  ```Free Fire logo maker``` 

🔮 .ffpack
💘  ```Free Fire logo maker``` 

🔮 .alive
💘  ```Does bot work?``` 

🔮 .sysd
💘  ```Shows the system properties.``` 

🔮 .tagadmin
💘  ```Tags group admins.``` 

🔮 .bc
💘  ```Sends the replied message to all members in the group.``` 

🔮 .txtit
💘  ```Shows text to image tools with unlimited access.``` 

🔮 .antibadword 
💘  ```turn on & off anti-badword To remove members when they use bad words``` 
*⌨️ Eg:- :* ```.antibadword on / off```

🔮 .a 
💘  ```Converts audio to sound recording.``` 

🔮 .unvoice
💘  ```Converts audio to sound recording.``` 

🔮 .update
💘  ```Checks the update.``` 

🔮 .update now
💘  ```It makes updates.``` 

🔮 .url 

🔮 .wallpaper
💘  ```It sends high resolution wallpapers.``` 

🔮 .wame 
💘  ```Get a link to the user chat.``` 

🔮 .weather 
💘  ```Shows the weather.``` 

🔮 .speedtest
💘  ```Measures Download and Upload speed.``` 

🔮 .ping
💘  ```Measures your ping.``` 

🔮 .short 
💘  ```Shorten the long link.``` 

🔮 .calc 
💘  ```Performs simple math operations.``` 

🔮 .whois
💘  ```Displays metadata data of group or person.``` 

🔮 .gdmrng
💘  ```it sends good morning message``` 

🔮 .gdni8
💘  ```it sends good night message``` 

🔮 .xxxtentacion
💘  ```random xxxtentacion images ``` 

🔮 .ytv 
💘  ```Downloads youtube video faster along with views, channel name and other info``` ',
          footerText: '©ꪶ͢ʜᴜsɴɪ ÂÑD ɴɪᴊɪɴꫂ™',
          buttons: buttons,
          headerType: 1
      }
      
     await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { mimetype: Mimetype.buttonsMessage, quoted: message.data, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 9999999999, status: 200, thumbnail: fs.readFileSync('./photo/maalutty.jpg'), surface: 200, message: Config.BOT, orderTitle: Config.BOT, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1080, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photo/maalutty.jpg')}}}});

}));
