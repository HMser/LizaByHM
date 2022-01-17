const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/X43MOqu.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `bit.ly/abouthm`}) 

}));
