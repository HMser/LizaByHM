const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════😎Pikachu Modified😎═════╗*\n           \n*⚜═Anees-Lub═⚜*\n\n*owner AneesAns- http://Wa.me/917356378949*\n*          *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Anees-Lub*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═Pikachu Owner Anees-Lub═💥*\n\n*💘https://github.com/ameer-kallumthodi/pikachu*\n*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════😎Pikachu Modified😎═════╗*\n           \n*⚜═Pikachu═⚜*\n\n*owner Anees-Lub - http://Wa.me/917356378949*\n*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Anees-Lub*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═Pikachu Owner AnessLub═💥*\n\n*💘https://github.com/ameer-kallumthodi/pikachu*\n*     

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
