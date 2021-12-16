/* Copyright (C) 2020 Yusuf Usta.
WhatsAsena - Yusuf Usta
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v7.3.6',
    CHANNEL: 'https://t.me/remasterplugin',
    SESSION: process.env.MAALUTTY_CODE === undefined ? '' : process.env.MAALUTTY_CODE,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'TR' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    WELCOME: process.env.WELCOME === undefined ? 'pp' : process.env.WELCOME,
    OWNER: process.env.OWNER_NAME === undefined ? '💖Nijin and Husni💖' : process.env.OWNER_NAME,
    BC: process.env.BROADCAST_NAME === undefined ? 'ɪ̄.ᴀᴍ/ꪶ͢ᴍᴀᴀʟᴜᴛᴛʏ_ᴠ3ꫂ⁩' : process.env.BROADCAST_NAME,
    PHONE: process.env.NUMBER === undefined ? '+917025868709' : process.env.NUMBER,   
    OA_NAME: process.env.DEPLOYER === undefined ? 'Nijin,Husni' : process.env.DEPLOYER,
    ALL: process.env.ALL_CAPTION === undefined ? 'Made By MAALUTTY' : process.env.ALL_CAPTION,
    MENTION: process.env.TAG_REPLY === undefined ? '917025868709@s.whatsapp.net' : process.env.TAG_REPLY,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    PLKS: process.env.THERI_LIST === undefined ? false : process.env.THERI_LIST,
    AFPLK: process.env.MAALUTTY_PASSWORD === undefined ? false : process.env.MAALUTTY_PASSWORD,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    BGMFILTER: process.env.BGM_FILTER === undefined ? false : convertToBool(process.env.BGM_FILTER),
    LG_LOGO: process.env.LG_LOGO === undefined ? 'https://i.ibb.co/3ypJ8QW/20211209-194953.jpg' : process.env.LG_LOGO,
    LOGO_NAME: process.env.LOGO_NAME === undefined ? 'MAALUTTY_V3' : process.env.LOGO_NAME,
    INBO: process.env.INBO_BLOCK === undefined ? 'false' : process.env.INBO_BLOCK,
    INBO1: process.env.INBO_BLOCK === undefined ? 'true' : process.env.INBO_BLOCK,
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER,
    STICKERP: process.env.AUTO_STICKER === undefined ? true : convertToBool(process.env.AUTO_STICKER),
    DISSTICKER: process.env.DISABLE_STICKER === undefined ? false : process.env.DISABLE_STICKER,
    BOT: process.env.BOT_NAME === undefined ? '⊢‒‒‒ 💝 MAALUTTY_V3 💝 ‒‒‒⊣' : process.env.BOT_NAME,
    BOTSK: process.env.BOT_NAME === undefined ? 'Miss Helena' : process.env.BOT_NAME,
    LOGOSK: process.env.ALL_IMG === undefined ? 'https://i.ibb.co/3ypJ8QW/20211209-194953.jpg' : process.env.ALL_IMG,
    SKDL: process.env.DIALOGUE === undefined ? '🤩 All The Dreams Like Twinkle Stars 🤩' : process.env.DIALOGUE,
    JID: process.env.VERIFIED === undefined ? '0@s.whatsapp.net' : process.env.VERIFIED,
    NOLOG: process.env.NO_LOG === undefined ? 'true' : process.env.NO_LOG,
    THERI_KICK: process.env.THERI_KICK === undefined ? 'false' : process.env.THERI_KICK,
    SONGD: process.env.SONGD === undefined ? 'ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGD,
    SONGU: process.env.SONGU === undefined ? 'ᴜᴘʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGU,
    TALKING_MAALUTTY: process.env.TALKING_MAALUTTY === undefined ? 'false' : process.env.TALKING_MAALUTTY,
    SAID: process.env.BGM_DURATION === undefined ? '39999600' : process.env.BGM_DURATION,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    GEAR: process.env.CHANGE_BGM_TO === undefined ? 'one' : process.env.CHANGE_BGM_TO,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BOT_PRESENCE: process.env.BOT_PRESENCE === undefined ? 'online' : process.env.BOT_PRESENCE,
    PLK: process.env.OWNER_NAME === undefined ? 'default' : process.env.OWNER_NAME,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    WEL_GIF: process.env.WEL_GIF === undefined ? 'https://i.imgur.com/nErXUGj.mp4' : process.env.WEL_GIF,
    GIF_BYE: process.env.GIF_BYE === undefined ? 'https://i.imgur.com/Z1jCYGN.mp4' : process.env.GIF_BYE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    TAGPLK: process.env.TAG_HEADER === undefined ? 'Note this' : process.env.TAG_HEADER,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    YAK: process.env.YAK === undefined ? '919605741366,0,917994909899,0' : process.env.YAK,
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "919072790587-1635775355",
    SUPPORT2: "905511384572-1617736751",
    SUPPORT3: "905511384572-1621015274"
};
