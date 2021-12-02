/* Codded by @phaticusthiccy

WhatsAsena - Word Finder Game
Contains of AI Message Similarity

WhatsAsena © 2021
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

function editDistance(comm, wr) {
  comm = comm.toLowerCase();
  wr = wr.toLowerCase();
  var costs = new Array();
  for (var i = 0; i <= comm.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= wr.length; j++) {
      if (i == 0)
        costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (comm.charAt(i - 1) != wr.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue),
              costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0)
      costs[wr.length] = lastValue;
  }
  return costs[wr.length];
}
function gametimerai(comm, wr) {
  var longer = comm;
  var shorter = wr;
  if (comm.length < wr.length) {
    longer = wr;
    shorter = comm;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}
var info$ = { whatsasena: { repo_git: 'github.com/phaticusthiccy/WhatsAsenaDuplicated', stack: { plugin_way: '/root/WhatsAsenaDuplicated/plugins/__', worker: '/root/' }, code_owner: '@phaticusthiccy' }, helpers: 'ai' }
var OYUN = {
    inGame: false,
    actionTimer: false,
    reamingTime: 0,
    identify: '',
    description: Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Başladığında rastgele kelime seçer ve oyuncuların tahmin etmesi istenir. Zaman belirli değildir!' : 'When it starts, it randomly chooses words and players are asked to guess. The time is uncertain!',
    caution: Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Bu modül t.me/phaticusthiccy tarafından geliştirilmiştir.' : 'This plugin maded by t.me/phaticusthiccy',
    words: {
        forbiddenuser: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Kelimeyi Söyleyemezsin!* \n*Oyun Bitti ❌*' : '*You cannot write the given word!* \n*Game Over ❌*',
        alreadyinGame: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Devam Eden Bir Oyun Var!*\n*Lütfen Oyunun Bitmesini Bekle!*' : '*There is a Game in Progress!*\n*Please Wait for it to Finish!*',
        successguess: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Tebrikler! Kelimeyi Buldun. Oyunu sen Kazandın 🎉*\n*Sonraki Oyunda Bol Şans!*' : '*Congratulations! You Guess The Word. You Won! 🎉*',
        unsuccessguess: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Oyun Bitti! Kimse Kelimeyi Bulamadı!*' : '*Game Over! No One Guess The Word!*',
        starting: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Oyun 8 Saniye Sonra Başlıyor. Numarana gelen mesajı kontrol et. Oyuncuların bunu tahmin etmesini sağla!*' : '*The Game Begins After 8 Seconds. Check the message to your number. Let the players guess this!*',
        timeinfo: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Unutma, süren her an bitebilir! Yasaklı Kelimelere Dikkat Et. Hızlı davran.*' : '*Dont forget! Your time can run out at any moment. Beware of Forbidden Words. Act fast!*',
        word: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '=== *Kelime* ===\n>>> ' : '=== *Word* ===\n>>> ',
        word_forbiddens: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n\n=== *Yasaklı Kelimeler* ===\n' : '\n\n=== *Forbidden Words* ===\n',
        began: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Oyun Başladı!*' : '*Game has Started!*',
        instantOver: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Oyunu Ba şlatan Kişi Hata Yaptı! Oyun Sona Erdi!*' : '*The Person who Started the Game Made a Mistake. The Game is Over!*',
        msg: 'base64',
        forbiddens: {
            msg1: '',
            msg2: '',
            msg3: '',
            w1: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Su - Sürüngen - Etçil_' : '_Water - Reptile - Carnivorous_',
            w2: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Sihir - İksir - Kimya_' : '_Magic - İxir - Chemistry_',
            w3: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Dağ - Lav - Volkan_' : '_Mountain - Lava - Explosion_',
            w4: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Bomba - Patlama - Askeri_' : '_Bomb - Explosion - Army_',
            w5: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Odun - Kütük - Ağaç_' : '_Wood - Tree - Minecraft_',
            w6: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Benzin - Araba - Roket_' : '_Gasoline - Car - Rocket_',
            w7: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Tüp - Hava - Araba_' : '_Air - Car - Mix_',
            w8: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Çizim - Fizik - Logo_' : '_Art - Physic - Logo_',
            w9: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Uzay - Ozon - Dünya_' : '_Space - Ozon - World_',
            w10: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Kesmek - Kağıt - Sivri_' : '_Cut - Paper - Pointed_',
            w11: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Minecraft - Eşya - Gelin_' : '_Minecraft - Clothes - Bride_',
            w12: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Meclis - TBMM - Siyasi_' : '_Council - Parliament - Politics_',
            w13: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Koşu - Efor - Güç_' : '_Run - Effort - Power_',
            w14: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Sanal - Bant - Gözlük_' : '_Virtual - Headband - Glasses_',
            w15: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_İş - Eylem - Çeviklik_' : '_Work - Action - Agility_',
            w16: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Parmak - Çift - Nişan_' : '_Finger - Wedding - Married_',
            w17: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Minecraft - Lav - Siyah_' : '_Minecraft - Lava - Black_',
            w18: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Ağaç - Pürüzsüz - Kahverengi_' : '_Wood - Smooth - Brown_',
            w19: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Kapı - Araba - Anahtar_' : '_Door - Car - Key_',
            w20: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Koku - Gaz - Sıkmak_' : '_Smell - Gas - Tighten_',
            w21: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Vantilatör - Pervane - Hava_' : '_Propeller - Air - Wind_',
            w22: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Gaz - Balon - Uçucu_' : '_Gas - Balloon - Volatile_',
            w23: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Ev - Salon - Uzun_' : '_Home - Living - Hall_',
            w24: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Sevgi - Huzur - His_' : '_Feeling - Serenity - Darling_',
            w25: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Zengin - Huzur - Almak_' : '_Rich - Serenity - Buy_',
            w26: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '_Ok - Sivri - Minecraft_' : '_Arrow - Pointed - Minecraft_'
        }
    }
}
Asena.addCommand({pattern: 'gametimer$', fromMe: true, desc: OYUN.description, warn: OYUN.caution}, (async (message, match) => {
    const id = message.jid
    const txt = MessageType.text
    if (OYUN.inGame) return await message.client.sendMessage(id,OYUN.words.alreadyinGame,txt)
    await new Promise(r => setTimeout(r, 1000))
    await message.client.sendMessage(id,OYUN.words.starting,txt)
    await new Promise(r => setTimeout(r, 170))
    var word = new Array ();
    word[0] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Timsah' : 'Alligator'
    word[1] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Simya' : 'Alchemy'
    word[2] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Yanardağ' : 'Volcano'
    word[3] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Mayın' : 'Mine'
    word[4] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Meşe' : 'Oak'
    word[5] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Yakıt' : 'Fuel'
    word[6] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Gaz' : 'Gas'
    word[7] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Vektör' : 'Vector'
    word[8] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Atmosfer' : 'Atmosphere'
    word[9] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Makas' : 'Scissors'
    word[10] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Sandık' : 'Chest'
    word[11] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Milletvekili' : 'Deputy'
    word[12] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Enerji' : 'Energy'
    word[13] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'VR' : 'VR'
    word[14] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Mobilite' : 'Mobility'
    word[15] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Yüzük' : 'Ring'
    word[16] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Obsidyen' : 'Obsidian'
    word[17] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Zımpara' : 'Emery'
    word[18] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Kilit' : 'Lock'
    word[19] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Parfüm' : 'Perfume'
    word[20] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Fan' : 'Fan'
    word[21] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Helyum' : 'Helium'
    word[22] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Koridor' : 'Corridor'
    word[23] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Aşk' : 'Love'
    word[24] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Para' : 'Money'
    word[25] = Config.LANG == 'TR' || Config.LANG == 'AZ' ? 'Yay' : 'Bow'
    var i = Math.floor(25*Math.random())
    if (word[i] == 'Timsah' || word[i] == 'Alligator') {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w1
        await message.client.sendMessage(message.client.user.jid,nmsg,txt)
        OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w1.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
        OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w1.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
        OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w1.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Yay' || word[i] == 'Bow' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w26
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w26.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w26.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w26.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Para' || word[i] == 'Money' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w25
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w25.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w25.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w25.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Aşk' || word[i] == 'Love' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w24
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w24.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w24.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w24.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Koridor' || word[i] == 'Corridor' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w23
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w23.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w23.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w23.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Helyum' || word[i] == 'Helium' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w22
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w22.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w22.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w22.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Fan' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w21
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w21.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w21.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w21.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Parfüm' || word[i] == 'Perfume' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w20
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w20.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w20.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w20.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Kilit' || word[i] == 'Lock' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w19
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w19.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w19.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w19.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Zımpara' || word[i] == 'Emery' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w18
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w18.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w18.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w18.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Obsidyen' || word[i] == 'Obsidian' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w17
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w17.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w17.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w17.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Yüzük' || word[i] == 'Ring' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w16
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w16.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w16.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w16.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Mobilite' || word[i] == 'Mobility' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w15
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w15.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w15.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w15.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'VR') {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w14
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w14.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w14.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w14.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Enerji' || word[i] == 'Energy' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w13
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w13.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w13.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w13.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Milletvekili' || word[i] == 'Deputy' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w12
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w12.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w12.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w12.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Sandık' || word[i] == 'Chest' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w11
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w11.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w11.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w11.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Makas' || word[i] == 'Scissors' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w10
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w10.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w10.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w10.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Vektör' || word[i] == 'Vector' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w8
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w8.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w8.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w8.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Atmosfer' || word[i] == 'Atmosphere' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w9
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w9.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w9.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w9.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Gaz' || word[i] == 'Gas' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w7
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w7.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w7.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w7.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Yakıt' || word[i] == 'Fuel' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w6
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w6.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w6.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w6.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Alchemy' || word[i] == 'Simya') {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w2  
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w2.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w2.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w2.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Volcano' || word[i] == 'Yanardağ') {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w3
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w3.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w3.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w3.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
        
    }
    else if (word[i] == 'Mayın' || word[i] == 'Mine') {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w4
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w4.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w4.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w4.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
    }
    else if (word[i] == 'Oak' || word[i] == 'Meşe') {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w5
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w5.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w5.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w5.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
    }
    await new Promise(r => setTimeout(r, 2000))
    await message.client.sendMessage(id,OYUN.words.timeinfo,txt)
    await new Promise(r => setTimeout(r, 2000))
    await message.client.sendMessage(id,'*5*',txt)
    await new Promise(r => setTimeout(r, 1000))
    await message.client.sendMessage(id,'*4*',txt)
    await new Promise(r => setTimeout(r, 1000))
    await message.client.sendMessage(id,'*3*',txt)
    await new Promise(r => setTimeout(r, 1000))
    await message.client.sendMessage(id,'*2*',txt)
    await new Promise(r => setTimeout(r, 1000))
    await message.client.sendMessage(id,'*1*',txt)
    await new Promise(r => setTimeout(r, 1000))
    await message.client.sendMessage(id,OYUN.words.began,txt)
    OYUN.inGame = true
    OYUN.actionTimer = true
    OYUN.identify = id
    OYUN.words.msg = word[i]
    var max = 90000;
    var min = 19000;
    var time = Math.floor(Math.random() * (+max - +min) + +min); 
    OYUN.reamingTime = time
    await new Promise(r => setTimeout(r, OYUN.reamingTime))
    if (OYUN.actionTimer) {
        OYUN.inGame = false
        OYUN.actionTimer = false
        OYUN.identify = ''
        OYUN.words.msg = 'base64'
        return await message.client.sendMessage(id,OYUN.words.unsuccessguess,txt)
    } else { return }
}));
Asena.addCommand({on: 'text', fromMe: false, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {
    const gid = OYUN.identify
    const counter = OYUN.reamingTime
    var guessing = await gametimerai(OYUN.words.msg, message.message)
    if (message.jid == gid && OYUN.inGame && guessing > 0.8) {
        OYUN.inGame = false
        OYUN.actionTimer = false
        OYUN.identify = ''
        OYUN.words.msg = 'base64'
        return await message.client.sendMessage(message.jid,OYUN.words.successguess, MessageType.text, { quoted: message.data })
    }
}));
Asena.addCommand({on: 'text', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {
    const gid = OYUN.identify
    const counter = OYUN.reamingTime
    if (message.jid == gid && OYUN.inGame) {
        var mssage1 = await gametimerai(OYUN.words.forbiddens.msg1, message.message)
        var mssage2 = await gametimerai(OYUN.words.forbiddens.msg2, message.message)
        var mssage3 = await gametimerai(OYUN.words.forbiddens.msg3, message.message)
        var mssage4 = await gametimerai(OYUN.words.msg, message.message)
        if (mssage1 > 0.7 || mssage2 > 0.7 || mssage3 > 0.7 || mssage4 > 0.7) {
            OYUN.inGame = false
            OYUN.actionTimer = false
            OYUN.identify = ''
            OYUN.words.msg = 'base64'
            return await message.client.sendMessage(message.jid,OYUN.words.forbiddenuser, MessageType.text, { quoted: message.data })
        }
    }
}));

/* 
~ Telegram: t.me/phaticusthiccy
~ YouTube: https://youtube.com/channel/UCoqYkVlXyQqkgFazeVBtZbQ
*/
