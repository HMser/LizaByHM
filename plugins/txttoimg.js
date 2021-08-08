/* Copyright (C) 2021 HishAm Muhammed .

Youtube https://youtube.com/c/ICHUTECH

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

*/

const ichu= require('../events');

const Config = require('../config');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const fs = require('fs');

const axios = require('axios');

const request = require('request');

// LIST

const Language = require('../language');

const Lang = Language.getString('effects');

if (Config.WORKTYPE == 'private') {

    ichu.applyCMD({pattern: 'glitch ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

  

  var topText, bottomText;

    if (match[1].includes('/')) {

        var split = match[1].split('/');

        bottomText = split[1];

        topText = split[0];

}

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=qamdi5652&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    }));

    ichu.applyCMD({pattern: 'cup ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    

        var webimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy1/cup?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    

        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    

    }));

    ichu.applyCMD({pattern: 'gneon ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    

        var webimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/greenneon?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    

        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    

    }));

  ichu.applyCMD({pattern: 'ml ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/mlwall?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    }));

  ichu.applyCMD({pattern: 'hacker ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    }));

    ichu.applyCMD({pattern: 'valorant ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

  

     var topText, bottomText;

      if (match[1].includes('/')) {

          var split = match[1].split('/');

          bottomText = split[2];

          midText = split[1];

          topText = split[0];

  }

      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto3/valorantbanner?apikey=qamdi5652&text1=${topText}&text2=${midText}&text3=${bottomText}`, { responseType: 'arraybuffer' })

  

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

  

      }));

    ichu.applyCMD({pattern: 'royal ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    

        var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/glossychrome?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    

        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    

    }));

    ichu.applyCMD({pattern: 'sad ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    

        var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/wetglass?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    

        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    

    }));

    

    ichu.applyCMD({pattern: 'dota ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

  

      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

  

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

  

    }));

    ichu.applyCMD({pattern: 'lol ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

  

      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

  

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

  

    }));

    ichu.applyCMD({pattern: 'aov ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

  

      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/aovwall?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

  

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

  

    }));

    

    ichu.applyCMD({pattern: 'gaming ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/logogaming?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    }));

    ichu.applyCMD({pattern: 'fpslogo ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/fpslogo?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    }));

    ichu.applyCMD({pattern: 'lovemsg ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    }));

    

    ichu.applyCMD({pattern: 'bplogo ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    }));

    ichu.applyCMD({pattern: '3dtext ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/box3d?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    }));

}

else if (Config.WORKTYPE == 'public') {

    ichu.applyCMD({pattern: 'glitch ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

  

  var topText, bottomText;

    if (match[1].includes('/')) {

        var split = match[1].split('/');

        bottomText = split[1];

        topText = split[0];

}

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=qamdi5652&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    }));

    

    ichu.applyCMD({pattern: 'cup ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    

        var webimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy1/cup?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    

        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    

    }));

    

    ichu.applyCMD({pattern: 'dota ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

  

      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

  

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

  

    }));

    

    ichu.applyCMD({pattern: 'lol ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

  

      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

  

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

  

    }));

    

    ichu.applyCMD({pattern: 'hacker ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

  

      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

  

     await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

  

      }));

    

    ichu.applyCMD({pattern: 'sad ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

  

      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/wetglass?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

  

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

  

  }));

    ichu.applyCMD({pattern: 'valorant ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

  

     var topText, bottomText;

      if (match[1].includes('/')) {

          var split = match[1].split('/');

          bottomText = split[2];

          midText = split[1];

          topText = split[0];

  }

      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto3/valorantbanner?apikey=qamdi5652&text1=${topText}&text2=${midText}&text3=${bottomText}`, { responseType: 'arraybuffer' })

  

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

  

      }));

    ichu.applyCMD({pattern: 'gaming ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/logogaming?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    }));

    ichu.applyCMD({pattern: 'gneon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    

        var webimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/greenneon?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    

        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    

    }));

    ichu.applyCMD({pattern: 'royal ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    

        var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/glossychrome?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    

        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    

    }));

    ichu.applyCMD({pattern: 'fpslogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/fpslogo?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    }));

    ichu.applyCMD({pattern: 'lovemsg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    }));

    

    ichu.applyCMD({pattern: 'ml ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

  

      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/mlwall?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

  

     await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

  

      }));

    ichu.applyCMD({pattern: 'aov ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

  

      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/aovwall?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

  

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

  

    }));

    ichu.applyCMD({pattern: 'bplogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | *Sophia Bot* '})

    }));

}
