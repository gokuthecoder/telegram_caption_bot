const { TelegramClient, Api } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input"); // npm i input
const TelegramBot = require('node-telegram-bot-api'); const dotenv = require('dotenv')
require('dotenv').config();
const express = require('express')
const app = express()

// const apiId = parseInt(process.env.API_ID);
// const apiHash = process.env.API_HASH;
// const stringSessions = process.env.STRING_SESSION;
// const token = process.env.TELEGRAM_BOT_TOKEN;
// const channelID = process.env.CHANNEL_ID;

// console.log(typeof apiId)// Error pending


// const stringSession = new StringSession(stringSessions);
// const bot = new TelegramBot(token, { polling: true });

// (async () => {
//   console.log("Loading interactive example...");
//   const client = new TelegramClient(stringSession, apiId, apiHash, {
//     connectionRetries: 5,
//   });
//   await client.start({
//     phoneNumber: async () => await input.text("Please enter your number: "),
//     password: async () => await input.text("Please enter your password: "),
//     phoneCode: async () =>
//       await input.text("Please enter the code you received: "),
//     onError: (err) => console.log(err),
//   });
//   console.log("You should now be connected.");
//   console.log(client.session.save());
// })();

// bot.on('document', (msg) => {
//   const chatId = msg.chat.id;
//   const documentId = msg.document.file_id;

//   bot.sendDocument(channelID, documentId, {

//     caption: msg.document.file_name,
//     parse_mode: 'Markdown',
//     })
//     .then((forwarded) => {
//       console.log('File forwarded successfully:', forwarded);
//     })
//     .catch((error) => {
//       console.error('Error forwarding file:', error);
//     });
// });

// bot.on('photo', async (msg) => {
//   const chatId = msg.chat.id;
//   const photoId = msg.photo[msg.photo.length - 1].file_id;

//   try {
//     const forwarded = await bot.sendPhoto(channelID, photoId, {
//       caption: msg.caption, // You can customize the caption if needed
//       parse_mode: 'Markdown', // You can change this to 'HTML' if you prefer
//     });

//     console.log('Photo forwarded successfully:', forwarded);
//   } catch (error) {
//     console.error('Error forwarding photo:', error);
//   }
// });

// bot.on('video', async (msg) => {
//   const chatId = msg.chat.id;
//   const videoId = msg.video.file_id

//   try {
//     // Forward the video to the specified channel using file_id
//     const forwarded = await bot.sendVideo(channelID, videoId, {
//       caption: msg.caption, // You can customize the caption if needed
//       parse_mode: 'Markdown', // You can change this to 'HTML' if you prefer
//     });

//     console.log('video forwarded successfully:', forwarded);
//   } catch (error) {
//     console.error('Error forwarding video:', error);
//   }
// });

// bot.on('document', (msg) => {
//   const chatId = msg.chat.id;
//   const documentId = msg.document.file_id;
//   const documentName = msg.document.file_name;

//   // Check if the document is a PDF file
//   if (documentName.endsWith('.pdf')) {
//     // Forward the PDF document to the specified channel using file_id
//     bot.sendDocument(channelID, documentId, {
//       caption: documentName,
//       parse_mode: null, // You can change this to 'HTML' if you prefer
//     })
//       .then((forwarded) => {
//         console.log('PDF file forwarded successfully:', forwarded);
//       })
//       .catch((error) => {
//         console.error('Error forwarding PDF file:', error);
//       });
//   } else {
//     console.log('Ignoring non-PDF document:', documentName);
//   }
// });


app.get('/',(req,res)=>{
  res.status(300).json({
    success:"true",
    data:{name:"vishal", roll:40},
    status:300
  })
})

app.listen(3000,()=>{
  console.log("server is successfully running");
})