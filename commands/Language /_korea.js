/*CMD
  command: /korea
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Language 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.deleteMessage({ message_id: request.message.message_id })
Api.deleteMessage({ message_id: request.message.message_id })
var buttons = [
  [{ title: "Help", command: "/help" }],
  [{ title: "Back๐", command: "/start_Ko" }]
]
Bot.sendInlineKeyboard(
  buttons,
  "๊ทธ๋ผ ์ด์ ๋ถํฐ ํ๊ตญ์ด๐ฐ๐ท ๋ก ์ธ์ฌ๋๋ฆฌ๊ฒ ์ต๋๋ค."
)
// command post runs a command
// where the url is written opens a link:/

