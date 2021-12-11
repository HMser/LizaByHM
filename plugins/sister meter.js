/* recodded by @neera-j
Telegram: t.me/neer_j
Instagram: www.instagram.com/neer_j_
*/

const Asena = require('../events');
const con = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');

// Descriptions
const TRGAY = "Yanıtladığınız kişinin gay yüzdesini ölçer."
const ENGAY = "Measures the percentage of brotherhood to the person you respond to."
const HIGAY = "आपके द्वारा प्रतिसाद देने वाले समलैंगिकों के प्रतिशत को मापता है"
const AZGAY = "Yanıtladığınız kişinin gay yüzdesini ölçer."

// Need Reply
const TRREP = "```Herhangi Bir Mesajı Yanıtlaman Gerekiyor!```"
const ENREP = "```You Need To Reply Any Message!```"
const HIREP = "```आपको किसी भी संदेश का जवाब देने की आवश्यकता है```"
const AZREP = "```Herhangi Bir Mesajı Yanıtlaman Gerekiyor!```"

// Plugin Start 
if (con.LANG === 'TR') {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'brmeter', fromMe: true, desc: TRGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, TRREP, MessageType.text);

            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Adlı Kişinin Gay Yüzdesi Hesaplanıyor 🏳️‍🌈*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var r_text = new Array ();
            r_text[0] = "*0*";
            r_text[1] = "*1*";
            r_text[2] = "*2*";
            r_text[3] = "*3*";
            r_text[4] = "*4*";
            r_text[5] = "*5*";
            r_text[6] = "*6*";
            r_text[7] = "*7*";
            r_text[8] = "*8*";
            r_text[9] = "*9*";
            r_text[10] = "*10*";
            r_text[11] = "*11*";
            r_text[12] = "*12*";
            r_text[13] = "*13*";
            r_text[14] = "*14*";
            r_text[15] = "*15*";
            r_text[16] = "*16*";
            r_text[17] = "*17*";
            r_text[18] = "*18*";
            r_text[19] = "*19*";
            r_text[20] = "*20*";
            r_text[21] = "*21*";
            r_text[22] = "*22*";
            r_text[23] = "*23*";
            r_text[24] = "*24*";
            r_text[25] = "*25*";
            r_text[26] = "*26*";
            r_text[27] = "*27*";
            r_text[28] = "*28*";
            r_text[29] = "*29*";
            r_text[30] = "*30*";
            r_text[31] = "*31*";
            r_text[32] = "*32*";
            r_text[33] = "*33*";
            r_text[34] = "*34*";
            r_text[35] = "*35*";
            r_text[36] = "*36*";
            r_text[37] = "*37*";
            r_text[38] = "*38*";
            r_text[39] = "*39*";
            r_text[40] = "*40*";
            r_text[41] = "*41*";
            r_text[42] = "*42*";
            r_text[43] = "*43*";
            r_text[44] = "*44*";
            r_text[45] = "*45*";
            r_text[46] = "*46*";
            r_text[47] = "*47*";
            r_text[48] = "*48*";
            r_text[49] = "*49*";
            r_text[50] = "*50*";
            r_text[51] = "*51*";
            r_text[52] = "*52*";
            r_text[53] = "*53*";
            r_text[54] = "*54*";
            r_text[55] = "*55*";
            r_text[56] = "*56*";
            r_text[57] = "*57*";
            r_text[58] = "*58*";
            r_text[59] = "*59*";
            r_text[60] = "*60*";
            r_text[61] = "*61*";
            r_text[62] = "*62*";
            r_text[63] = "*63*";
            r_text[64] = "*64*";
            r_text[65] = "*65*";
            r_text[66] = "*66*";
            r_text[67] = "*67*";
            r_text[68] = "*68*";
            r_text[69] = "*69*";
            r_text[70] = "*70*";
            r_text[71] = "*71*";
            r_text[72] = "*72*";
            r_text[73] = "*73*";
            r_text[74] = "*74*";
            r_text[75] = "*75*";
            r_text[76] = "*76*";
            r_text[77] = "*77*";
            r_text[78] = "*78*";
            r_text[79] = "*79*";
            r_text[80] = "*80*";
            r_text[81] = "*81*";
            r_text[82] = "*82*";
            r_text[83] = "*83*";
            r_text[84] = "*84*";
            r_text[85] = "*85*";
            r_text[86] = "*86*";
            r_text[87] = "*87*";
            r_text[88] = "*88*";
            r_text[89] = "*89*";
            r_text[90] = "*90*";
            r_text[91] = "*91*";
            r_text[92] = "*92*";
            r_text[93] = "*93*";
            r_text[94] = "*94*";
            r_text[95] = "*95*";
            r_text[96] = "*96*";
            r_text[97] = "*97*";
            r_text[98] = "*98*";
            r_text[99] = "*99*";
            r_text[100] = "*0*";
            r_text[101] = "*50*";
            r_text[102] = "*52*";
            r_text[103] = "*53*";
            r_text[104] = "*54*";
            r_text[105] = "*55*";
            r_text[106] = "*56*";
            r_text[107] = "*57*";
            r_text[108] = "*58*";
            r_text[109] = "*59*";
            r_text[110] = "*60*";
            r_text[111] = "*61*";
            r_text[112] = "*62*";
            r_text[113] = "*63*";
            r_text[114] = "*64*";
            r_text[115] = "*65*";
            r_text[116] = "*66*";
            r_text[117] = "*67*";
            r_text[118] = "*68*";
            r_text[119] = "*69*";
            r_text[120] = "*70*";
            r_text[121] = "*71*";
            r_text[122] = "*72*";
            r_text[123] = "*73*";
            r_text[124] = "*74*";
            r_text[125] = "*75*";
            r_text[126] = "*76*";
            r_text[127] = "*77*";
            r_text[128] = "*78*";
            r_text[129] = "*79*";
            r_text[130] = "*80*";
            r_text[131] = "*81*";
            r_text[132] = "*82*";
            r_text[133] = "*83*";
            r_text[134] = "*84*";
            r_text[135] = "*85*";
            r_text[136] = "*86*";
            r_text[137] = "*87*";
            r_text[138] = "*88*";
            r_text[139] = "*89*";
            r_text[140] = "*90*";
            r_text[141] = "*91*";
            r_text[142] = "*92*";
            r_text[143] = "*93*";
            r_text[144] = "*94*";
            r_text[145] = "*95*";
            r_text[146] = "*96*";
            r_text[147] = "*97*";
            r_text[148] = "*98*";
            r_text[149] = "*99*";
            r_text[150] = "*100*";
            r_text[151] = "*51*";
            r_text[152] = "*52*";
            r_text[153] = "*53*";
            r_text[154] = "*54*";
            r_text[155] = "*55*";
            r_text[156] = "*56*";
            r_text[157] = "*57*";
            r_text[158] = "*58*";
            r_text[159] = "*59*";
            r_text[160] = "*60*";
            r_text[161] = "*61*";
            r_text[162] = "*62*";
            r_text[163] = "*63*";
            r_text[164] = "*64*";
            r_text[165] = "*65*";
            r_text[166] = "*66*";
            r_text[167] = "*67*";
            r_text[168] = "*68*";
            r_text[169] = "*69*";
            r_text[170] = "*70*";
            r_text[171] = "*71*";
            r_text[172] = "*72*";
            r_text[173] = "*73*";
            r_text[174] = "*74*";
            r_text[175] = "*75*";
            r_text[176] = "*76*";
            r_text[177] = "*77*";
            r_text[178] = "*78*";
            r_text[179] = "*79*";
            r_text[180] = "*80*";
            r_text[181] = "*81*";
            r_text[182] = "*82*";
            r_text[183] = "*83*";
            r_text[184] = "*84*";
            r_text[185] = "*85*";
            r_text[186] = "*86*";
            r_text[187] = "*87*";
            r_text[188] = "*88*";
            r_text[189] = "*89*";
            r_text[190] = "*90*";
            r_text[191] = "*91*";
            r_text[192] = "*92*";
            r_text[193] = "*93*";
            r_text[194] = "*94*";
            r_text[195] = "*95*";
            r_text[196] = "*96*";
            r_text[197] = "*97*";
            r_text[198] = "*98*";
            r_text[199] = "*99*";
            r_text[200] = "*100*";

            var i = Math.floor(201*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/brmeter.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*Gay Yüzdesi Hesaplandı!* 🏳️‍🌈\n*Sonuç:* ${r_text[i]}` }
            )
        }));
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'brmeter', fromMe: false, desc: TRGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, TRREP, MessageType.text);

            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Adlı Kişinin Gay Yüzdesi Hesaplanıyor 🏳️‍🌈*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var r_text = new Array ();
            r_text[0] = "*0*";
            r_text[1] = "*1*";
            r_text[2] = "*2*";
            r_text[3] = "*3*";
            r_text[4] = "*4*";
            r_text[5] = "*5*";
            r_text[6] = "*6*";
            r_text[7] = "*7*";
            r_text[8] = "*8*";
            r_text[9] = "*9*";
            r_text[10] = "*10*";
            r_text[11] = "*11*";
            r_text[12] = "*12*";
            r_text[13] = "*13*";
            r_text[14] = "*14*";
            r_text[15] = "*15*";
            r_text[16] = "*16*";
            r_text[17] = "*17*";
            r_text[18] = "*18*";
            r_text[19] = "*19*";
            r_text[20] = "*20*";
            r_text[21] = "*21*";
            r_text[22] = "*22*";
            r_text[23] = "*23*";
            r_text[24] = "*24*";
            r_text[25] = "*25*";
            r_text[26] = "*26*";
            r_text[27] = "*27*";
            r_text[28] = "*28*";
            r_text[29] = "*29*";
            r_text[30] = "*30*";
            r_text[31] = "*31*";
            r_text[32] = "*32*";
            r_text[33] = "*33*";
            r_text[34] = "*34*";
            r_text[35] = "*35*";
            r_text[36] = "*36*";
            r_text[37] = "*37*";
            r_text[38] = "*38*";
            r_text[39] = "*39*";
            r_text[40] = "*40*";
            r_text[41] = "*41*";
            r_text[42] = "*42*";
            r_text[43] = "*43*";
            r_text[44] = "*44*";
            r_text[45] = "*45*";
            r_text[46] = "*46*";
            r_text[47] = "*47*";
            r_text[48] = "*48*";
            r_text[49] = "*49*";
            r_text[50] = "*50*";
            r_text[51] = "*51*";
            r_text[52] = "*52*";
            r_text[53] = "*53*";
            r_text[54] = "*54*";
            r_text[55] = "*55*";
            r_text[56] = "*56*";
            r_text[57] = "*57*";
            r_text[58] = "*58*";
            r_text[59] = "*59*";
            r_text[60] = "*60*";
            r_text[61] = "*61*";
            r_text[62] = "*62*";
            r_text[63] = "*63*";
            r_text[64] = "*64*";
            r_text[65] = "*65*";
            r_text[66] = "*66*";
            r_text[67] = "*67*";
            r_text[68] = "*68*";
            r_text[69] = "*69*";
            r_text[70] = "*70*";
            r_text[71] = "*71*";
            r_text[72] = "*72*";
            r_text[73] = "*73*";
            r_text[74] = "*74*";
            r_text[75] = "*75*";
            r_text[76] = "*76*";
            r_text[77] = "*77*";
            r_text[78] = "*78*";
            r_text[79] = "*79*";
            r_text[80] = "*80*";
            r_text[81] = "*81*";
            r_text[82] = "*82*";
            r_text[83] = "*83*";
            r_text[84] = "*84*";
            r_text[85] = "*85*";
            r_text[86] = "*86*";
            r_text[87] = "*87*";
            r_text[88] = "*88*";
            r_text[89] = "*89*";
            r_text[90] = "*90*";
            r_text[91] = "*91*";
            r_text[92] = "*92*";
            r_text[93] = "*93*";
            r_text[94] = "*94*";
            r_text[95] = "*95*";
            r_text[96] = "*96*";
            r_text[97] = "*97*";
            r_text[98] = "*98*";
            r_text[99] = "*99*";
            r_text[100] = "*0*";
            r_text[101] = "*50*";
            r_text[102] = "*52*";
            r_text[103] = "*53*";
            r_text[104] = "*54*";
            r_text[105] = "*55*";
            r_text[106] = "*56*";
            r_text[107] = "*57*";
            r_text[108] = "*58*";
            r_text[109] = "*59*";
            r_text[110] = "*60*";
            r_text[111] = "*61*";
            r_text[112] = "*62*";
            r_text[113] = "*63*";
            r_text[114] = "*64*";
            r_text[115] = "*65*";
            r_text[116] = "*66*";
            r_text[117] = "*67*";
            r_text[118] = "*68*";
            r_text[119] = "*69*";
            r_text[120] = "*70*";
            r_text[121] = "*71*";
            r_text[122] = "*72*";
            r_text[123] = "*73*";
            r_text[124] = "*74*";
            r_text[125] = "*75*";
            r_text[126] = "*76*";
            r_text[127] = "*77*";
            r_text[128] = "*78*";
            r_text[129] = "*79*";
            r_text[130] = "*80*";
            r_text[131] = "*81*";
            r_text[132] = "*82*";
            r_text[133] = "*83*";
            r_text[134] = "*84*";
            r_text[135] = "*85*";
            r_text[136] = "*86*";
            r_text[137] = "*87*";
            r_text[138] = "*88*";
            r_text[139] = "*89*";
            r_text[140] = "*90*";
            r_text[141] = "*91*";
            r_text[142] = "*92*";
            r_text[143] = "*93*";
            r_text[144] = "*94*";
            r_text[145] = "*95*";
            r_text[146] = "*96*";
            r_text[147] = "*97*";
            r_text[148] = "*98*";
            r_text[149] = "*99*";
            r_text[150] = "*100*";
            r_text[151] = "*51*";
            r_text[152] = "*52*";
            r_text[153] = "*53*";
            r_text[154] = "*54*";
            r_text[155] = "*55*";
            r_text[156] = "*56*";
            r_text[157] = "*57*";
            r_text[158] = "*58*";
            r_text[159] = "*59*";
            r_text[160] = "*60*";
            r_text[161] = "*61*";
            r_text[162] = "*62*";
            r_text[163] = "*63*";
            r_text[164] = "*64*";
            r_text[165] = "*65*";
            r_text[166] = "*66*";
            r_text[167] = "*67*";
            r_text[168] = "*68*";
            r_text[169] = "*69*";
            r_text[170] = "*70*";
            r_text[171] = "*71*";
            r_text[172] = "*72*";
            r_text[173] = "*73*";
            r_text[174] = "*74*";
            r_text[175] = "*75*";
            r_text[176] = "*76*";
            r_text[177] = "*77*";
            r_text[178] = "*78*";
            r_text[179] = "*79*";
            r_text[180] = "*80*";
            r_text[181] = "*81*";
            r_text[182] = "*82*";
            r_text[183] = "*83*";
            r_text[184] = "*84*";
            r_text[185] = "*85*";
            r_text[186] = "*86*";
            r_text[187] = "*87*";
            r_text[188] = "*88*";
            r_text[189] = "*89*";
            r_text[190] = "*90*";
            r_text[191] = "*91*";
            r_text[192] = "*92*";
            r_text[193] = "*93*";
            r_text[194] = "*94*";
            r_text[195] = "*95*";
            r_text[196] = "*96*";
            r_text[197] = "*97*";
            r_text[198] = "*98*";
            r_text[199] = "*99*";
            r_text[200] = "*100*";;

            var i = Math.floor(201*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/brmeter.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*Gay Yüzdesi Hesaplandı!* 🏳️‍🌈\n*Sonuç:* ${r_text[i]}` }
            )
        }));
    }
}
else if (con.LANG === 'HI') {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'brmeter', fromMe: true, desc: HIGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, HIREP, MessageType.text);

            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *समलैंगिक के प्रतिशत की गणना 🏳️‍🌈*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var r_text = new Array ();
            r_text[0] = "*0*";
            r_text[1] = "*1*";
            r_text[2] = "*2*";
            r_text[3] = "*3*";
            r_text[4] = "*4*";
            r_text[5] = "*5*";
            r_text[6] = "*6*";
            r_text[7] = "*7*";
            r_text[8] = "*8*";
            r_text[9] = "*9*";
            r_text[10] = "*10*";
            r_text[11] = "*11*";
            r_text[12] = "*12*";
            r_text[13] = "*13*";
            r_text[14] = "*14*";
            r_text[15] = "*15*";
            r_text[16] = "*16*";
            r_text[17] = "*17*";
            r_text[18] = "*18*";
            r_text[19] = "*19*";
            r_text[20] = "*20*";
            r_text[21] = "*21*";
            r_text[22] = "*22*";
            r_text[23] = "*23*";
            r_text[24] = "*24*";
            r_text[25] = "*25*";
            r_text[26] = "*26*";
            r_text[27] = "*27*";
            r_text[28] = "*28*";
            r_text[29] = "*29*";
            r_text[30] = "*30*";
            r_text[31] = "*31*";
            r_text[32] = "*32*";
            r_text[33] = "*33*";
            r_text[34] = "*34*";
            r_text[35] = "*35*";
            r_text[36] = "*36*";
            r_text[37] = "*37*";
            r_text[38] = "*38*";
            r_text[39] = "*39*";
            r_text[40] = "*40*";
            r_text[41] = "*41*";
            r_text[42] = "*42*";
            r_text[43] = "*43*";
            r_text[44] = "*44*";
            r_text[45] = "*45*";
            r_text[46] = "*46*";
            r_text[47] = "*47*";
            r_text[48] = "*48*";
            r_text[49] = "*49*";
            r_text[50] = "*50*";
            r_text[51] = "*51*";
            r_text[52] = "*52*";
            r_text[53] = "*53*";
            r_text[54] = "*54*";
            r_text[55] = "*55*";
            r_text[56] = "*56*";
            r_text[57] = "*57*";
            r_text[58] = "*58*";
            r_text[59] = "*59*";
            r_text[60] = "*60*";
            r_text[61] = "*61*";
            r_text[62] = "*62*";
            r_text[63] = "*63*";
            r_text[64] = "*64*";
            r_text[65] = "*65*";
            r_text[66] = "*66*";
            r_text[67] = "*67*";
            r_text[68] = "*68*";
            r_text[69] = "*69*";
            r_text[70] = "*70*";
            r_text[71] = "*71*";
            r_text[72] = "*72*";
            r_text[73] = "*73*";
            r_text[74] = "*74*";
            r_text[75] = "*75*";
            r_text[76] = "*76*";
            r_text[77] = "*77*";
            r_text[78] = "*78*";
            r_text[79] = "*79*";
            r_text[80] = "*80*";
            r_text[81] = "*81*";
            r_text[82] = "*82*";
            r_text[83] = "*83*";
            r_text[84] = "*84*";
            r_text[85] = "*85*";
            r_text[86] = "*86*";
            r_text[87] = "*87*";
            r_text[88] = "*88*";
            r_text[89] = "*89*";
            r_text[90] = "*90*";
            r_text[91] = "*91*";
            r_text[92] = "*92*";
            r_text[93] = "*93*";
            r_text[94] = "*94*";
            r_text[95] = "*95*";
            r_text[96] = "*96*";
            r_text[97] = "*97*";
            r_text[98] = "*98*";
            r_text[99] = "*99*";
            r_text[100] = "*0*";
            r_text[101] = "*50*";
            r_text[102] = "*52*";
            r_text[103] = "*53*";
            r_text[104] = "*54*";
            r_text[105] = "*55*";
            r_text[106] = "*56*";
            r_text[107] = "*57*";
            r_text[108] = "*58*";
            r_text[109] = "*59*";
            r_text[110] = "*60*";
            r_text[111] = "*61*";
            r_text[112] = "*62*";
            r_text[113] = "*63*";
            r_text[114] = "*64*";
            r_text[115] = "*65*";
            r_text[116] = "*66*";
            r_text[117] = "*67*";
            r_text[118] = "*68*";
            r_text[119] = "*69*";
            r_text[120] = "*70*";
            r_text[121] = "*71*";
            r_text[122] = "*72*";
            r_text[123] = "*73*";
            r_text[124] = "*74*";
            r_text[125] = "*75*";
            r_text[126] = "*76*";
            r_text[127] = "*77*";
            r_text[128] = "*78*";
            r_text[129] = "*79*";
            r_text[130] = "*80*";
            r_text[131] = "*81*";
            r_text[132] = "*82*";
            r_text[133] = "*83*";
            r_text[134] = "*84*";
            r_text[135] = "*85*";
            r_text[136] = "*86*";
            r_text[137] = "*87*";
            r_text[138] = "*88*";
            r_text[139] = "*89*";
            r_text[140] = "*90*";
            r_text[141] = "*91*";
            r_text[142] = "*92*";
            r_text[143] = "*93*";
            r_text[144] = "*94*";
            r_text[145] = "*95*";
            r_text[146] = "*96*";
            r_text[147] = "*97*";
            r_text[148] = "*98*";
            r_text[149] = "*99*";
            r_text[150] = "*100*";
            r_text[151] = "*51*";
            r_text[152] = "*52*";
            r_text[153] = "*53*";
            r_text[154] = "*54*";
            r_text[155] = "*55*";
            r_text[156] = "*56*";
            r_text[157] = "*57*";
            r_text[158] = "*58*";
            r_text[159] = "*59*";
            r_text[160] = "*60*";
            r_text[161] = "*61*";
            r_text[162] = "*62*";
            r_text[163] = "*63*";
            r_text[164] = "*64*";
            r_text[165] = "*65*";
            r_text[166] = "*66*";
            r_text[167] = "*67*";
            r_text[168] = "*68*";
            r_text[169] = "*69*";
            r_text[170] = "*70*";
            r_text[171] = "*71*";
            r_text[172] = "*72*";
            r_text[173] = "*73*";
            r_text[174] = "*74*";
            r_text[175] = "*75*";
            r_text[176] = "*76*";
            r_text[177] = "*77*";
            r_text[178] = "*78*";
            r_text[179] = "*79*";
            r_text[180] = "*80*";
            r_text[181] = "*81*";
            r_text[182] = "*82*";
            r_text[183] = "*83*";
            r_text[184] = "*84*";
            r_text[185] = "*85*";
            r_text[186] = "*86*";
            r_text[187] = "*87*";
            r_text[188] = "*88*";
            r_text[189] = "*89*";
            r_text[190] = "*90*";
            r_text[191] = "*91*";
            r_text[192] = "*92*";
            r_text[193] = "*93*";
            r_text[194] = "*94*";
            r_text[195] = "*95*";
            r_text[196] = "*96*";
            r_text[197] = "*97*";
            r_text[198] = "*98*";
            r_text[199] = "*99*";
            r_text[200] = "*100*";;

            var i = Math.floor(201*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/brmeter.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*समलैं गिक प्रतिशत की गणना!* 🏳️‍🌈\n*परिणाम:* ${r_text[i]}` }
            )
        }));
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'brmeter', fromMe: false, desc: HIGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, HIREP, MessageType.text);

            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *समलैंगिक के प्रतिशत की गणना 🏳️‍🌈*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var r_text = new Array ();
            r_text[0] = "*0*";
            r_text[1] = "*1*";
            r_text[2] = "*2*";
            r_text[3] = "*3*";
            r_text[4] = "*4*";
            r_text[5] = "*5*";
            r_text[6] = "*6*";
            r_text[7] = "*7*";
            r_text[8] = "*8*";
            r_text[9] = "*9*";
            r_text[10] = "*10*";
            r_text[11] = "*11*";
            r_text[12] = "*12*";
            r_text[13] = "*13*";
            r_text[14] = "*14*";
            r_text[15] = "*15*";
            r_text[16] = "*16*";
            r_text[17] = "*17*";
            r_text[18] = "*18*";
            r_text[19] = "*19*";
            r_text[20] = "*20*";
            r_text[21] = "*21*";
            r_text[22] = "*22*";
            r_text[23] = "*23*";
            r_text[24] = "*24*";
            r_text[25] = "*25*";
            r_text[26] = "*26*";
            r_text[27] = "*27*";
            r_text[28] = "*28*";
            r_text[29] = "*29*";
            r_text[30] = "*30*";
            r_text[31] = "*31*";
            r_text[32] = "*32*";
            r_text[33] = "*33*";
            r_text[34] = "*34*";
            r_text[35] = "*35*";
            r_text[36] = "*36*";
            r_text[37] = "*37*";
            r_text[38] = "*38*";
            r_text[39] = "*39*";
            r_text[40] = "*40*";
            r_text[41] = "*41*";
            r_text[42] = "*42*";
            r_text[43] = "*43*";
            r_text[44] = "*44*";
            r_text[45] = "*45*";
            r_text[46] = "*46*";
            r_text[47] = "*47*";
            r_text[48] = "*48*";
            r_text[49] = "*49*";
            r_text[50] = "*50*";
            r_text[51] = "*51*";
            r_text[52] = "*52*";
            r_text[53] = "*53*";
            r_text[54] = "*54*";
            r_text[55] = "*55*";
            r_text[56] = "*56*";
            r_text[57] = "*57*";
            r_text[58] = "*58*";
            r_text[59] = "*59*";
            r_text[60] = "*60*";
            r_text[61] = "*61*";
            r_text[62] = "*62*";
            r_text[63] = "*63*";
            r_text[64] = "*64*";
            r_text[65] = "*65*";
            r_text[66] = "*66*";
            r_text[67] = "*67*";
            r_text[68] = "*68*";
            r_text[69] = "*69*";
            r_text[70] = "*70*";
            r_text[71] = "*71*";
            r_text[72] = "*72*";
            r_text[73] = "*73*";
            r_text[74] = "*74*";
            r_text[75] = "*75*";
            r_text[76] = "*76*";
            r_text[77] = "*77*";
            r_text[78] = "*78*";
            r_text[79] = "*79*";
            r_text[80] = "*80*";
            r_text[81] = "*81*";
            r_text[82] = "*82*";
            r_text[83] = "*83*";
            r_text[84] = "*84*";
            r_text[85] = "*85*";
            r_text[86] = "*86*";
            r_text[87] = "*87*";
            r_text[88] = "*88*";
            r_text[89] = "*89*";
            r_text[90] = "*90*";
            r_text[91] = "*91*";
            r_text[92] = "*92*";
            r_text[93] = "*93*";
            r_text[94] = "*94*";
            r_text[95] = "*95*";
            r_text[96] = "*96*";
            r_text[97] = "*97*";
            r_text[98] = "*98*";
            r_text[99] = "*99*";
            r_text[100] = "*0*";
            r_text[101] = "*50*";
            r_text[102] = "*52*";
            r_text[103] = "*53*";
            r_text[104] = "*54*";
            r_text[105] = "*55*";
            r_text[106] = "*56*";
            r_text[107] = "*57*";
            r_text[108] = "*58*";
            r_text[109] = "*59*";
            r_text[110] = "*60*";
            r_text[111] = "*61*";
            r_text[112] = "*62*";
            r_text[113] = "*63*";
            r_text[114] = "*64*";
            r_text[115] = "*65*";
            r_text[116] = "*66*";
            r_text[117] = "*67*";
            r_text[118] = "*68*";
            r_text[119] = "*69*";
            r_text[120] = "*70*";
            r_text[121] = "*71*";
            r_text[122] = "*72*";
            r_text[123] = "*73*";
            r_text[124] = "*74*";
            r_text[125] = "*75*";
            r_text[126] = "*76*";
            r_text[127] = "*77*";
            r_text[128] = "*78*";
            r_text[129] = "*79*";
            r_text[130] = "*80*";
            r_text[131] = "*81*";
            r_text[132] = "*82*";
            r_text[133] = "*83*";
            r_text[134] = "*84*";
            r_text[135] = "*85*";
            r_text[136] = "*86*";
            r_text[137] = "*87*";
            r_text[138] = "*88*";
            r_text[139] = "*89*";
            r_text[140] = "*90*";
            r_text[141] = "*91*";
            r_text[142] = "*92*";
            r_text[143] = "*93*";
            r_text[144] = "*94*";
            r_text[145] = "*95*";
            r_text[146] = "*96*";
            r_text[147] = "*97*";
            r_text[148] = "*98*";
            r_text[149] = "*99*";
            r_text[150] = "*100*";
            r_text[151] = "*51*";
            r_text[152] = "*52*";
            r_text[153] = "*53*";
            r_text[154] = "*54*";
            r_text[155] = "*55*";
            r_text[156] = "*56*";
            r_text[157] = "*57*";
            r_text[158] = "*58*";
            r_text[159] = "*59*";
            r_text[160] = "*60*";
            r_text[161] = "*61*";
            r_text[162] = "*62*";
            r_text[163] = "*63*";
            r_text[164] = "*64*";
            r_text[165] = "*65*";
            r_text[166] = "*66*";
            r_text[167] = "*67*";
            r_text[168] = "*68*";
            r_text[169] = "*69*";
            r_text[170] = "*70*";
            r_text[171] = "*71*";
            r_text[172] = "*72*";
            r_text[173] = "*73*";
            r_text[174] = "*74*";
            r_text[175] = "*75*";
            r_text[176] = "*76*";
            r_text[177] = "*77*";
            r_text[178] = "*78*";
            r_text[179] = "*79*";
            r_text[180] = "*80*";
            r_text[181] = "*81*";
            r_text[182] = "*82*";
            r_text[183] = "*83*";
            r_text[184] = "*84*";
            r_text[185] = "*85*";
            r_text[186] = "*86*";
            r_text[187] = "*87*";
            r_text[188] = "*88*";
            r_text[189] = "*89*";
            r_text[190] = "*90*";
            r_text[191] = "*91*";
            r_text[192] = "*92*";
            r_text[193] = "*93*";
            r_text[194] = "*94*";
            r_text[195] = "*95*";
            r_text[196] = "*96*";
            r_text[197] = "*97*";
            r_text[198] = "*98*";
            r_text[199] = "*99*";
            r_text[200] = "*100*";;

            var i = Math.floor(201*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/brmeter.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*समलैंगिक प्रतिशत की गणना!* 🏳️‍🌈\n*परिणाम:* ${r_text[i]}` }
            )
        }));
    }
}
else if (con.LANG === 'AZ') {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'brmeter', fromMe: true, desc: AZGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, AZREP, MessageType.text);

            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Adlı Kişinin Gay Yüzdesi Hesaplanıyor 🏳️‍🌈*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var r_text = new Array ();
            r_text[0] = "*0*";
            r_text[1] = "*1*";
            r_text[2] = "*2*";
            r_text[3] = "*3*";
            r_text[4] = "*4*";
            r_text[5] = "*5*";
            r_text[6] = "*6*";
            r_text[7] = "*7*";
            r_text[8] = "*8*";
            r_text[9] = "*9*";
            r_text[10] = "*10*";
            r_text[11] = "*11*";
            r_text[12] = "*12*";
            r_text[13] = "*13*";
            r_text[14] = "*14*";
            r_text[15] = "*15*";
            r_text[16] = "*16*";
            r_text[17] = "*17*";
            r_text[18] = "*18*";
            r_text[19] = "*19*";
            r_text[20] = "*20*";
            r_text[21] = "*21*";
            r_text[22] = "*22*";
            r_text[23] = "*23*";
            r_text[24] = "*24*";
            r_text[25] = "*25*";
            r_text[26] = "*26*";
            r_text[27] = "*27*";
            r_text[28] = "*28*";
            r_text[29] = "*29*";
            r_text[30] = "*30*";
            r_text[31] = "*31*";
            r_text[32] = "*32*";
            r_text[33] = "*33*";
            r_text[34] = "*34*";
            r_text[35] = "*35*";
            r_text[36] = "*36*";
            r_text[37] = "*37*";
            r_text[38] = "*38*";
            r_text[39] = "*39*";
            r_text[40] = "*40*";
            r_text[41] = "*41*";
            r_text[42] = "*42*";
            r_text[43] = "*43*";
            r_text[44] = "*44*";
            r_text[45] = "*45*";
            r_text[46] = "*46*";
            r_text[47] = "*47*";
            r_text[48] = "*48*";
            r_text[49] = "*49*";
            r_text[50] = "*50*";
            r_text[51] = "*51*";
            r_text[52] = "*52*";
            r_text[53] = "*53*";
            r_text[54] = "*54*";
            r_text[55] = "*55*";
            r_text[56] = "*56*";
            r_text[57] = "*57*";
            r_text[58] = "*58*";
            r_text[59] = "*59*";
            r_text[60] = "*60*";
            r_text[61] = "*61*";
            r_text[62] = "*62*";
            r_text[63] = "*63*";
            r_text[64] = "*64*";
            r_text[65] = "*65*";
            r_text[66] = "*66*";
            r_text[67] = "*67*";
            r_text[68] = "*68*";
            r_text[69] = "*69*";
            r_text[70] = "*70*";
            r_text[71] = "*71*";
            r_text[72] = "*72*";
            r_text[73] = "*73*";
            r_text[74] = "*74*";
            r_text[75] = "*75*";
            r_text[76] = "*76*";
            r_text[77] = "*77*";
            r_text[78] = "*78*";
            r_text[79] = "*79*";
            r_text[80] = "*80*";
            r_text[81] = "*81*";
            r_text[82] = "*82*";
            r_text[83] = "*83*";
            r_text[84] = "*84*";
            r_text[85] = "*85*";
            r_text[86] = "*86*";
            r_text[87] = "*87*";
            r_text[88] = "*88*";
            r_text[89] = "*89*";
            r_text[90] = "*90*";
            r_text[91] = "*91*";
            r_text[92] = "*92*";
            r_text[93] = "*93*";
            r_text[94] = "*94*";
            r_text[95] = "*95*";
            r_text[96] = "*96*";
            r_text[97] = "*97*";
            r_text[98] = "*98*";
            r_text[99] = "*99*";
            r_text[100] = "*0*";
            r_text[101] = "*50*";
            r_text[102] = "*52*";
            r_text[103] = "*53*";
            r_text[104] = "*54*";
            r_text[105] = "*55*";
            r_text[106] = "*56*";
            r_text[107] = "*57*";
            r_text[108] = "*58*";
            r_text[109] = "*59*";
            r_text[110] = "*60*";
            r_text[111] = "*61*";
            r_text[112] = "*62*";
            r_text[113] = "*63*";
            r_text[114] = "*64*";
            r_text[115] = "*65*";
            r_text[116] = "*66*";
            r_text[117] = "*67*";
            r_text[118] = "*68*";
            r_text[119] = "*69*";
            r_text[120] = "*70*";
            r_text[121] = "*71*";
            r_text[122] = "*72*";
            r_text[123] = "*73*";
            r_text[124] = "*74*";
            r_text[125] = "*75*";
            r_text[126] = "*76*";
            r_text[127] = "*77*";
            r_text[128] = "*78*";
            r_text[129] = "*79*";
            r_text[130] = "*80*";
            r_text[131] = "*81*";
            r_text[132] = "*82*";
            r_text[133] = "*83*";
            r_text[134] = "*84*";
            r_text[135] = "*85*";
            r_text[136] = "*86*";
            r_text[137] = "*87*";
            r_text[138] = "*88*";
            r_text[139] = "*89*";
            r_text[140] = "*90*";
            r_text[141] = "*91*";
            r_text[142] = "*92*";
            r_text[143] = "*93*";
            r_text[144] = "*94*";
            r_text[145] = "*95*";
            r_text[146] = "*96*";
            r_text[147] = "*97*";
            r_text[148] = "*98*";
            r_text[149] = "*99*";
            r_text[150] = "*100*";
            r_text[151] = "*51*";
            r_text[152] = "*52*";
            r_text[153] = "*53*";
            r_text[154] = "*54*";
            r_text[155] = "*55*";
            r_text[156] = "*56*";
            r_text[157] = "*57*";
            r_text[158] = "*58*";
            r_text[159] = "*59*";
            r_text[160] = "*60*";
            r_text[161] = "*61*";
            r_text[162] = "*62*";
            r_text[163] = "*63*";
            r_text[164] = "*64*";
            r_text[165] = "*65*";
            r_text[166] = "*66*";
            r_text[167] = "*67*";
            r_text[168] = "*68*";
            r_text[169] = "*69*";
            r_text[170] = "*70*";
            r_text[171] = "*71*";
            r_text[172] = "*72*";
            r_text[173] = "*73*";
            r_text[174] = "*74*";
            r_text[175] = "*75*";
            r_text[176] = "*76*";
            r_text[177] = "*77*";
            r_text[178] = "*78*";
            r_text[179] = "*79*";
            r_text[180] = "*80*";
            r_text[181] = "*81*";
            r_text[182] = "*82*";
            r_text[183] = "*83*";
            r_text[184] = "*84*";
            r_text[185] = "*85*";
            r_text[186] = "*86*";
            r_text[187] = "*87*";
            r_text[188] = "*88*";
            r_text[189] = "*89*";
            r_text[190] = "*90*";
            r_text[191] = "*91*";
            r_text[192] = "*92*";
            r_text[193] = "*93*";
            r_text[194] = "*94*";
            r_text[195] = "*95*";
            r_text[196] = "*96*";
            r_text[197] = "*97*";
            r_text[198] = "*98*";
            r_text[199] = "*99*";
            r_text[200] = "*100*";;

            var i = Math.floor(201*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/brmeter.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*Gay Yüzdesi Hesaplandı!* 🏳️‍🌈\n*Sonuç:* ${r_text[i]}` }
            )
        }));
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'brmeter', fromMe: false, desc: AZGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, AZREP, MessageType.text);

            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Adlı Kişinin Gay Yüzdesi Hesaplanıyor 🏳️‍🌈*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var r_text = new Array ();
            r_text[0] = "*0*";
            r_text[1] = "*1*";
            r_text[2] = "*2*";
            r_text[3] = "*3*";
            r_text[4] = "*4*";
            r_text[5] = "*5*";
            r_text[6] = "*6*";
            r_text[7] = "*7*";
            r_text[8] = "*8*";
            r_text[9] = "*9*";
            r_text[10] = "*10*";
            r_text[11] = "*11*";
            r_text[12] = "*12*";
            r_text[13] = "*13*";
            r_text[14] = "*14*";
            r_text[15] = "*15*";
            r_text[16] = "*16*";
            r_text[17] = "*17*";
            r_text[18] = "*18*";
            r_text[19] = "*19*";
            r_text[20] = "*20*";
            r_text[21] = "*21*";
            r_text[22] = "*22*";
            r_text[23] = "*23*";
            r_text[24] = "*24*";
            r_text[25] = "*25*";
            r_text[26] = "*26*";
            r_text[27] = "*27*";
            r_text[28] = "*28*";
            r_text[29] = "*29*";
            r_text[30] = "*30*";
            r_text[31] = "*31*";
            r_text[32] = "*32*";
            r_text[33] = "*33*";
            r_text[34] = "*34*";
            r_text[35] = "*35*";
            r_text[36] = "*36*";
            r_text[37] = "*37*";
            r_text[38] = "*38*";
            r_text[39] = "*39*";
            r_text[40] = "*40*";
            r_text[41] = "*41*";
            r_text[42] = "*42*";
            r_text[43] = "*43*";
            r_text[44] = "*44*";
            r_text[45] = "*45*";
            r_text[46] = "*46*";
            r_text[47] = "*47*";
            r_text[48] = "*48*";
            r_text[49] = "*49*";
            r_text[50] = "*50*";
            r_text[51] = "*51*";
            r_text[52] = "*52*";
            r_text[53] = "*53*";
            r_text[54] = "*54*";
            r_text[55] = "*55*";
            r_text[56] = "*56*";
            r_text[57] = "*57*";
            r_text[58] = "*58*";
            r_text[59] = "*59*";
            r_text[60] = "*60*";
            r_text[61] = "*61*";
            r_text[62] = "*62*";
            r_text[63] = "*63*";
            r_text[64] = "*64*";
            r_text[65] = "*65*";
            r_text[66] = "*66*";
            r_text[67] = "*67*";
            r_text[68] = "*68*";
            r_text[69] = "*69*";
            r_text[70] = "*70*";
            r_text[71] = "*71*";
            r_text[72] = "*72*";
            r_text[73] = "*73*";
            r_text[74] = "*74*";
            r_text[75] = "*75*";
            r_text[76] = "*76*";
            r_text[77] = "*77*";
            r_text[78] = "*78*";
            r_text[79] = "*79*";
            r_text[80] = "*80*";
            r_text[81] = "*81*";
            r_text[82] = "*82*";
            r_text[83] = "*83*";
            r_text[84] = "*84*";
            r_text[85] = "*85*";
            r_text[86] = "*86*";
            r_text[87] = "*87*";
            r_text[88] = "*88*";
            r_text[89] = "*89*";
            r_text[90] = "*90*";
            r_text[91] = "*91*";
            r_text[92] = "*92*";
            r_text[93] = "*93*";
            r_text[94] = "*94*";
            r_text[95] = "*95*";
            r_text[96] = "*96*";
            r_text[97] = "*97*";
            r_text[98] = "*98*";
            r_text[99] = "*99*";
            r_text[100] = "*0*";
            r_text[101] = "*50*";
            r_text[102] = "*52*";
            r_text[103] = "*53*";
            r_text[104] = "*54*";
            r_text[105] = "*55*";
            r_text[106] = "*56*";
            r_text[107] = "*57*";
            r_text[108] = "*58*";
            r_text[109] = "*59*";
            r_text[110] = "*60*";
            r_text[111] = "*61*";
            r_text[112] = "*62*";
            r_text[113] = "*63*";
            r_text[114] = "*64*";
            r_text[115] = "*65*";
            r_text[116] = "*66*";
            r_text[117] = "*67*";
            r_text[118] = "*68*";
            r_text[119] = "*69*";
            r_text[120] = "*70*";
            r_text[121] = "*71*";
            r_text[122] = "*72*";
            r_text[123] = "*73*";
            r_text[124] = "*74*";
            r_text[125] = "*75*";
            r_text[126] = "*76*";
            r_text[127] = "*77*";
            r_text[128] = "*78*";
            r_text[129] = "*79*";
            r_text[130] = "*80*";
            r_text[131] = "*81*";
            r_text[132] = "*82*";
            r_text[133] = "*83*";
            r_text[134] = "*84*";
            r_text[135] = "*85*";
            r_text[136] = "*86*";
            r_text[137] = "*87*";
            r_text[138] = "*88*";
            r_text[139] = "*89*";
            r_text[140] = "*90*";
            r_text[141] = "*91*";
            r_text[142] = "*92*";
            r_text[143] = "*93*";
            r_text[144] = "*94*";
            r_text[145] = "*95*";
            r_text[146] = "*96*";
            r_text[147] = "*97*";
            r_text[148] = "*98*";
            r_text[149] = "*99*";
            r_text[150] = "*100*";
            r_text[151] = "*51*";
            r_text[152] = "*52*";
            r_text[153] = "*53*";
            r_text[154] = "*54*";
            r_text[155] = "*55*";
            r_text[156] = "*56*";
            r_text[157] = "*57*";
            r_text[158] = "*58*";
            r_text[159] = "*59*";
            r_text[160] = "*60*";
            r_text[161] = "*61*";
            r_text[162] = "*62*";
            r_text[163] = "*63*";
            r_text[164] = "*64*";
            r_text[165] = "*65*";
            r_text[166] = "*66*";
            r_text[167] = "*67*";
            r_text[168] = "*68*";
            r_text[169] = "*69*";
            r_text[170] = "*70*";
            r_text[171] = "*71*";
            r_text[172] = "*72*";
            r_text[173] = "*73*";
            r_text[174] = "*74*";
            r_text[175] = "*75*";
            r_text[176] = "*76*";
            r_text[177] = "*77*";
            r_text[178] = "*78*";
            r_text[179] = "*79*";
            r_text[180] = "*80*";
            r_text[181] = "*81*";
            r_text[182] = "*82*";
            r_text[183] = "*83*";
            r_text[184] = "*84*";
            r_text[185] = "*85*";
            r_text[186] = "*86*";
            r_text[187] = "*87*";
            r_text[188] = "*88*";
            r_text[189] = "*89*";
            r_text[190] = "*90*";
            r_text[191] = "*91*";
            r_text[192] = "*92*";
            r_text[193] = "*93*";
            r_text[194] = "*94*";
            r_text[195] = "*95*";
            r_text[196] = "*96*";
            r_text[197] = "*97*";
            r_text[198] = "*98*";
            r_text[199] = "*99*";
            r_text[200] = "*100*";;

            var i = Math.floor(201*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/brmeter.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*Gay Yüzdesi Hesaplandı!* 🏳️‍🌈\n*Sonuç:* ${r_text[i]}` }
            )
        }));
    }
}
else {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'brmeter', fromMe: true, desc: ENGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, ENREP, MessageType.text);

            await message.client.sendMessage(message.jid, '*Calculating* ' + '@' + message.reply_message.jid.split('@')[0] + '’s *Brother Meter*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var r_text = new Array ();
            r_text[0] = "*0*";
            r_text[1] = "*1*";
            r_text[2] = "*2*";
            r_text[3] = "*3*";
            r_text[4] = "*4*";
            r_text[5] = "*5*";
            r_text[6] = "*6*";
            r_text[7] = "*7*";
            r_text[8] = "*8*";
            r_text[9] = "*9*";
            r_text[10] = "*10*";
            r_text[11] = "*11*";
            r_text[12] = "*12*";
            r_text[13] = "*13*";
            r_text[14] = "*14*";
            r_text[15] = "*15*";
            r_text[16] = "*16*";
            r_text[17] = "*17*";
            r_text[18] = "*18*";
            r_text[19] = "*19*";
            r_text[20] = "*20*";
            r_text[21] = "*21*";
            r_text[22] = "*22*";
            r_text[23] = "*23*";
            r_text[24] = "*24*";
            r_text[25] = "*25*";
            r_text[26] = "*26*";
            r_text[27] = "*27*";
            r_text[28] = "*28*";
            r_text[29] = "*29*";
            r_text[30] = "*30*";
            r_text[31] = "*31*";
            r_text[32] = "*32*";
            r_text[33] = "*33*";
            r_text[34] = "*34*";
            r_text[35] = "*35*";
            r_text[36] = "*36*";
            r_text[37] = "*37*";
            r_text[38] = "*38*";
            r_text[39] = "*39*";
            r_text[40] = "*40*";
            r_text[41] = "*41*";
            r_text[42] = "*42*";
            r_text[43] = "*43*";
            r_text[44] = "*44*";
            r_text[45] = "*45*";
            r_text[46] = "*46*";
            r_text[47] = "*47*";
            r_text[48] = "*48*";
            r_text[49] = "*49*";
            r_text[50] = "*50*";
            r_text[51] = "*51*";
            r_text[52] = "*52*";
            r_text[53] = "*53*";
            r_text[54] = "*54*";
            r_text[55] = "*55*";
            r_text[56] = "*56*";
            r_text[57] = "*57*";
            r_text[58] = "*58*";
            r_text[59] = "*59*";
            r_text[60] = "*60*";
            r_text[61] = "*61*";
            r_text[62] = "*62*";
            r_text[63] = "*63*";
            r_text[64] = "*64*";
            r_text[65] = "*65*";
            r_text[66] = "*66*";
            r_text[67] = "*67*";
            r_text[68] = "*68*";
            r_text[69] = "*69*";
            r_text[70] = "*70*";
            r_text[71] = "*71*";
            r_text[72] = "*72*";
            r_text[73] = "*73*";
            r_text[74] = "*74*";
            r_text[75] = "*75*";
            r_text[76] = "*76*";
            r_text[77] = "*77*";
            r_text[78] = "*78*";
            r_text[79] = "*79*";
            r_text[80] = "*80*";
            r_text[81] = "*81*";
            r_text[82] = "*82*";
            r_text[83] = "*83*";
            r_text[84] = "*84*";
            r_text[85] = "*85*";
            r_text[86] = "*86*";
            r_text[87] = "*87*";
            r_text[88] = "*88*";
            r_text[89] = "*89*";
            r_text[90] = "*90*";
            r_text[91] = "*91*";
            r_text[92] = "*92*";
            r_text[93] = "*93*";
            r_text[94] = "*94*";
            r_text[95] = "*95*";
            r_text[96] = "*96*";
            r_text[97] = "*97*";
            r_text[98] = "*98*";
            r_text[99] = "*99*";
            r_text[100] = "*0*";
            r_text[101] = "*50*";
            r_text[102] = "*52*";
            r_text[103] = "*53*";
            r_text[104] = "*54*";
            r_text[105] = "*55*";
            r_text[106] = "*56*";
            r_text[107] = "*57*";
            r_text[108] = "*58*";
            r_text[109] = "*59*";
            r_text[110] = "*60*";
            r_text[111] = "*61*";
            r_text[112] = "*62*";
            r_text[113] = "*63*";
            r_text[114] = "*64*";
            r_text[115] = "*65*";
            r_text[116] = "*66*";
            r_text[117] = "*67*";
            r_text[118] = "*68*";
            r_text[119] = "*69*";
            r_text[120] = "*70*";
            r_text[121] = "*71*";
            r_text[122] = "*72*";
            r_text[123] = "*73*";
            r_text[124] = "*74*";
            r_text[125] = "*75*";
            r_text[126] = "*76*";
            r_text[127] = "*77*";
            r_text[128] = "*78*";
            r_text[129] = "*79*";
            r_text[130] = "*80*";
            r_text[131] = "*81*";
            r_text[132] = "*82*";
            r_text[133] = "*83*";
            r_text[134] = "*84*";
            r_text[135] = "*85*";
            r_text[136] = "*86*";
            r_text[137] = "*87*";
            r_text[138] = "*88*";
            r_text[139] = "*89*";
            r_text[140] = "*90*";
            r_text[141] = "*91*";
            r_text[142] = "*92*";
            r_text[143] = "*93*";
            r_text[144] = "*94*";
            r_text[145] = "*95*";
            r_text[146] = "*96*";
            r_text[147] = "*97*";
            r_text[148] = "*98*";
            r_text[149] = "*99*";
            r_text[150] = "*100*";
            r_text[151] = "*51*";
            r_text[152] = "*52*";
            r_text[153] = "*53*";
            r_text[154] = "*54*";
            r_text[155] = "*55*";
            r_text[156] = "*56*";
            r_text[157] = "*57*";
            r_text[158] = "*58*";
            r_text[159] = "*59*";
            r_text[160] = "*60*";
            r_text[161] = "*61*";
            r_text[162] = "*62*";
            r_text[163] = "*63*";
            r_text[164] = "*64*";
            r_text[165] = "*65*";
            r_text[166] = "*66*";
            r_text[167] = "*67*";
            r_text[168] = "*68*";
            r_text[169] = "*69*";
            r_text[170] = "*70*";
            r_text[171] = "*71*";
            r_text[172] = "*72*";
            r_text[173] = "*73*";
            r_text[174] = "*74*";
            r_text[175] = "*75*";
            r_text[176] = "*76*";
            r_text[177] = "*77*";
            r_text[178] = "*78*";
            r_text[179] = "*79*";
            r_text[180] = "*80*";
            r_text[181] = "*81*";
            r_text[182] = "*82*";
            r_text[183] = "*83*";
            r_text[184] = "*84*";
            r_text[185] = "*85*";
            r_text[186] = "*86*";
            r_text[187] = "*87*";
            r_text[188] = "*88*";
            r_text[189] = "*89*";
            r_text[190] = "*90*";
            r_text[191] = "*91*";
            r_text[192] = "*92*";
            r_text[193] = "*93*";
            r_text[194] = "*94*";
            r_text[195] = "*95*";
            r_text[196] = "*96*";
            r_text[197] = "*97*";
            r_text[198] = "*98*";
            r_text[199] = "*99*";
            r_text[200] = "*100*";;

            var i = Math.floor(201*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/brmeter.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*Brother Meter Calculated *\n*Result:* ${r_text[i]} %` }
            )
        }));
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'brmeter', fromMe: false, desc: ENGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, ENREP, MessageType.text);

            await message.client.sendMessage(message.jid, '*Calculating* ' + '@' + message.reply_message.jid.split('@')[0] + '’s *Brother Meter*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var r_text = new Array ();
            r_text[0] = "*0*";
            r_text[1] = "*1*";
            r_text[2] = "*2*";
            r_text[3] = "*3*";
            r_text[4] = "*4*";
            r_text[5] = "*5*";
            r_text[6] = "*6*";
            r_text[7] = "*7*";
            r_text[8] = "*8*";
            r_text[9] = "*9*";
            r_text[10] = "*10*";
            r_text[11] = "*11*";
            r_text[12] = "*12*";
            r_text[13] = "*13*";
            r_text[14] = "*14*";
            r_text[15] = "*15*";
            r_text[16] = "*16*";
            r_text[17] = "*17*";
            r_text[18] = "*18*";
            r_text[19] = "*19*";
            r_text[20] = "*20*";
            r_text[21] = "*21*";
            r_text[22] = "*22*";
            r_text[23] = "*23*";
            r_text[24] = "*24*";
            r_text[25] = "*25*";
            r_text[26] = "*26*";
            r_text[27] = "*27*";
            r_text[28] = "*28*";
            r_text[29] = "*29*";
            r_text[30] = "*30*";
            r_text[31] = "*31*";
            r_text[32] = "*32*";
            r_text[33] = "*33*";
            r_text[34] = "*34*";
            r_text[35] = "*35*";
            r_text[36] = "*36*";
            r_text[37] = "*37*";
            r_text[38] = "*38*";
            r_text[39] = "*39*";
            r_text[40] = "*40*";
            r_text[41] = "*41*";
            r_text[42] = "*42*";
            r_text[43] = "*43*";
            r_text[44] = "*44*";
            r_text[45] = "*45*";
            r_text[46] = "*46*";
            r_text[47] = "*47*";
            r_text[48] = "*48*";
            r_text[49] = "*49*";
            r_text[50] = "*50*";
            r_text[51] = "*51*";
            r_text[52] = "*52*";
            r_text[53] = "*53*";
            r_text[54] = "*54*";
            r_text[55] = "*55*";
            r_text[56] = "*56*";
            r_text[57] = "*57*";
            r_text[58] = "*58*";
            r_text[59] = "*59*";
            r_text[60] = "*60*";
            r_text[61] = "*61*";
            r_text[62] = "*62*";
            r_text[63] = "*63*";
            r_text[64] = "*64*";
            r_text[65] = "*65*";
            r_text[66] = "*66*";
            r_text[67] = "*67*";
            r_text[68] = "*68*";
            r_text[69] = "*69*";
            r_text[70] = "*70*";
            r_text[71] = "*71*";
            r_text[72] = "*72*";
            r_text[73] = "*73*";
            r_text[74] = "*74*";
            r_text[75] = "*75*";
            r_text[76] = "*76*";
            r_text[77] = "*77*";
            r_text[78] = "*78*";
            r_text[79] = "*79*";
            r_text[80] = "*80*";
            r_text[81] = "*81*";
            r_text[82] = "*82*";
            r_text[83] = "*83*";
            r_text[84] = "*84*";
            r_text[85] = "*85*";
            r_text[86] = "*86*";
            r_text[87] = "*87*";
            r_text[88] = "*88*";
            r_text[89] = "*89*";
            r_text[90] = "*90*";
            r_text[91] = "*91*";
            r_text[92] = "*92*";
            r_text[93] = "*93*";
            r_text[94] = "*94*";
            r_text[95] = "*95*";
            r_text[96] = "*96*";
            r_text[97] = "*97*";
            r_text[98] = "*98*";
            r_text[99] = "*99*";
            r_text[100] = "*0*";
            r_text[101] = "*50*";
            r_text[102] = "*52*";
            r_text[103] = "*53*";
            r_text[104] = "*54*";
            r_text[105] = "*55*";
            r_text[106] = "*56*";
            r_text[107] = "*57*";
            r_text[108] = "*58*";
            r_text[109] = "*59*";
            r_text[110] = "*60*";
            r_text[111] = "*61*";
            r_text[112] = "*62*";
            r_text[113] = "*63*";
            r_text[114] = "*64*";
            r_text[115] = "*65*";
            r_text[116] = "*66*";
            r_text[117] = "*67*";
            r_text[118] = "*68*";
            r_text[119] = "*69*";
            r_text[120] = "*70*";
            r_text[121] = "*71*";
            r_text[122] = "*72*";
            r_text[123] = "*73*";
            r_text[124] = "*74*";
            r_text[125] = "*75*";
            r_text[126] = "*76*";
            r_text[127] = "*77*";
            r_text[128] = "*78*";
            r_text[129] = "*79*";
            r_text[130] = "*80*";
            r_text[131] = "*81*";
            r_text[132] = "*82*";
            r_text[133] = "*83*";
            r_text[134] = "*84*";
            r_text[135] = "*85*";
            r_text[136] = "*86*";
            r_text[137] = "*87*";
            r_text[138] = "*88*";
            r_text[139] = "*89*";
            r_text[140] = "*90*";
            r_text[141] = "*91*";
            r_text[142] = "*92*";
            r_text[143] = "*93*";
            r_text[144] = "*94*";
            r_text[145] = "*95*";
            r_text[146] = "*96*";
            r_text[147] = "*97*";
            r_text[148] = "*98*";
            r_text[149] = "*99*";
            r_text[150] = "*100*";
            r_text[151] = "*51*";
            r_text[152] = "*52*";
            r_text[153] = "*53*";
            r_text[154] = "*54*";
            r_text[155] = "*55*";
            r_text[156] = "*56*";
            r_text[157] = "*57*";
            r_text[158] = "*58*";
            r_text[159] = "*59*";
            r_text[160] = "*60*";
            r_text[161] = "*61*";
            r_text[162] = "*62*";
            r_text[163] = "*63*";
            r_text[164] = "*64*";
            r_text[165] = "*65*";
            r_text[166] = "*66*";
            r_text[167] = "*67*";
            r_text[168] = "*68*";
            r_text[169] = "*69*";
            r_text[170] = "*70*";
            r_text[171] = "*71*";
            r_text[172] = "*72*";
            r_text[173] = "*73*";
            r_text[174] = "*74*";
            r_text[175] = "*75*";
            r_text[176] = "*76*";
            r_text[177] = "*77*";
            r_text[178] = "*78*";
            r_text[179] = "*79*";
            r_text[180] = "*80*";
            r_text[181] = "*81*";
            r_text[182] = "*82*";
            r_text[183] = "*83*";
            r_text[184] = "*84*";
            r_text[185] = "*85*";
            r_text[186] = "*86*";
            r_text[187] = "*87*";
            r_text[188] = "*88*";
            r_text[189] = "*89*";
            r_text[190] = "*90*";
            r_text[191] = "*91*";
            r_text[192] = "*92*";
            r_text[193] = "*93*";
            r_text[194] = "*94*";
            r_text[195] = "*95*";
            r_text[196] = "*96*";
            r_text[197] = "*97*";
            r_text[198] = "*98*";
            r_text[199] = "*99*";
            r_text[200] = "*100*";;

            var i = Math.floor(201*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/brmeter.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*Brother Meter Calculated *\n*Result: * ${r_text[i]} %` }
            )
        }));
    }
}
// Plugin End
