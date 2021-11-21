const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const fs = require('fs');
const got = require('got');
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'audio list', fromMe: false, desc: 'command help menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[0] = Config.LG_LOGO
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, contextInfo: {mentionedJid: message.mention}, caption: `
   ` + config.LOGO_NAME + `

💎 Sinan

💎 Dud

💎 Photo

💎 fan

💎 Gd nyt

💎 koi

💎 Vatt

💎 ara

💎 Ara

💎 Name

💎 pinnalla

💎 Hai

💎 Reply

💎 Thall

💎 Song

💎 kozhi

💎 I love you

💎 line

💎 mass

💎 arulle

💎 Mirash

💎 Mirash bgm

💎 Salman

💎 Arshi

💎 Ezra

💎 nihal

💎 sticker

💎 sufaid

💎 jinn

💎 Feel

💎 lub

💎 foxy

💎 Music

💎 CR7

💎 Alan

💎 Halo

💎 Aysheri

💎 kooi

💎 Achumon

💎 ith

💎 bye

💎 Para

💎 Khais

💎 mukesh

💎 Hlo

💎 njan

💎 Njan

💎 muthe

💎 Xxxtentacion

💎 alone

💎 Converting

💎 potta

💎 menu

💎 welcome

💎 vannu

💎 Remove

💎 kyat

💎 rip

💎 remix

💎 Myr

💎 dj

💎 pever

💎 Oo

💎 XXXTENTACION

💎 Love u

💎 hate

💎 Njan vannu

💎 tto

💎 Audio

💎 veno

💎 xxxtentacion

💎 nanban

💎 Ayye

💎 Ronaldo

💎 Kundan

💎 katha

💎 hy

💎 vaanam

💎 Vanam

💎 Ivan

💎 Annan

💎 Thayoli

💎 umbi

💎 Noob

💎 Single

💎 Nanban

💎 Achu

💎 Ok

💎 Ameen

💎 Shiva

💎 ok

💎 Enth

💎 ameen

💎 enth

💎 Edi

💎 Uff

💎 Dey

💎 Cr7

💎 Poda

💎 Poli

💎 Pm

💎 Plzz

💎 girl

💎 Oi

💎 mp3

💎 nirth

💎 good nyt

💎 birthday

💎 Pattula

💎 Good night

💎 Mood

💎 Please

💎 Mm

💎 Dance

💎 Ith

💎 thech

💎 caption

💎 Polikk

💎 Aah

💎 Mrng

💎 alive

💎 Di

💎 Bro

💎 avan

💎 Allah

💎 bg

💎 help

💎 Hii

💎 odiko

💎 oho

💎 killadi

💎 oo

💎 Fuck

💎 invite

💎 Hi

💎 love

💎 Bgm

💎 Owner

💎 Group

💎 list

💎 man

💎 Nanba

💎 oii

💎 poda

💎 yo

💎 sad

💎 work

💎 set

💎 remove

💎 thukum

💎 poko

💎 kundan

💎 xmedia

💎 commands

💎 Boss

💎 vava

💎 Myre

💎 Lalitha

💎 start

💎 sing

💎 Hello

💎 Bye

💎 warn

💎 Baby

💎 who

💎 find

💎 power

💎 myr

💎 vanam

💎 tagall

💎 Re entry

💎 pass

💎 patti

💎 phaa

💎 mone

💎 look

💎 bor

💎 try

💎 owner

💎 luv

💎 feel

💎 romam

💎 potte

💎 no replay

💎 bgm

💎 vijay

💎 poli

💎 Da

💎 Vazha

💎 kunna

💎 Sorry

💎 Bot

💎 song

💎 Uyir

💎 myre

💎 thayoli

💎 Love

💎 Hy

💎 Sed

💎 Sad

💎 Ayn
`}) 

}));
