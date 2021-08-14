const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😈ʙʟᴀͥᴄͭᴋᷤ ᴅᷟᴇͤᴠɪʟ😈═════╗*\n           \n*⚜═ʙʟᴀͥᴄͭᴋᷤ ᴅᷟᴇͤᴠɪʟ═⚜*\n\n*owner ᴀͥɴͭᴇᷤᴇᷟsͤ - http://Wa.me/+917356378949*\n* *\n🔰instagram:- : synazX.op*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Anees-Muhammed*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═ʙʟᴀͥᴄͭᴋᷤ ᴅᷟᴇͤᴠɪʟ Owner Anees-Muhammed═💥*\n\n*💘https://github.com/aneeslub/Black-Devil*\n*     *\n💓Liyamol═Owner Saidali═*\n\n*⚜https://github.com/saidalisaid2/LiyaMol*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'creator', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😈ʙʟᴀͥᴄͭᴋᷤ ᴅᷟᴇͤᴠɪʟ😈═════╗*\n           \n*⚜═ʙʟᴀͥᴄͭᴋᷤ ᴅᷟᴇͤᴠɪʟ═⚜*\n\n*owner ᴀͥɴͭᴇᷤᴇᷟsͤ - http://Wa.me/+917356378949*\n* *\n🔰instagram:- : synazX.op*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Anees-Muhammed*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═ʙʟᴀͥᴄͭᴋᷤ ᴅᷟᴇͤᴠɪʟ Owner Anees-Muhammed═💥*\n\n*💘https://github.com/aneeslub/Black-Devil*\n*     *\n💓Liyamol═Owner Saidali═*\n\n*⚜https://github.com/saidalisaid2/LiyaMol*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }
