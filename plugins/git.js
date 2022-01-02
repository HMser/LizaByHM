const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/0MwO1yz.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*≈≈≈≈≈≈≈≈≈≈☟︎︎︎ Links ☟︎︎︎≈≈≈≈≈≈≈≈≈≈≈≈*
*≈≈≈≈≈≈≈≈≈≈☟︎︎︎ Links ☟︎︎︎≈≈≈≈≈≈≈≈≈≈≈≈* 
*owner number wa.me/918113921898*
   
*owner number wa.me/918592061828*
 
 *CONTACT MY OWNERS FOR SOURCE CODE*
`}) 

}));
