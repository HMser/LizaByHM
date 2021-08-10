const Asena = require('../events')

const { MessageType } = require('@adiwajshing/baileys')

const axios = require('axios')

const cn = require('../config');

const Language = require('../language')

const { errorMessage, infoMessage } = require('../helpers')

const Lang = Language.getString('instagram')

const Tlang = Language.getString('mediafire')

Asena.addCommand({ pattern: 'mediafire ?(.*)', fromMe: false, dontAddCommandList: true}, async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid, Tlang.NEED, MessageType.text)

        await message.client.sendMessage(message.jid, Tlang.DOWN, MessageType.text)

        await axios

          .get(`https://api.xteam.xyz/dl/mediafire?url=${userName}&APIKEY=1fd8f49191915fef`)

          .then(async (response) => {

            const {

              server_1,

            } = response.data

            const profileBuffer = await axios.get(server_1, {

              responseType: 'arraybuffer',

            })

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.png, {

              caption: 'apk downloader\n Sophia| ©2021👻',

            })

          })

          .catch(

            async (err) => await message.client.sendMessage(message.jid, Tlang.NOT + userName, MessageType.text),

          )

      },

    )
