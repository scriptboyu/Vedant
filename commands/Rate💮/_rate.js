/*CMD
  command: /rate
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Rate๐ฎ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /rate@grouphelpmrbeebot
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var alreadysent = User.getProperty("alreadysent")
if (alreadysent) {
  Bot.sendMessage("You Already Rated Thanks โค๏ธ")
  return
}
var button = [
  [{ title: "โคโคโคโคโค", command: "/rate1  ๐ ๐ ๐ ๐ ๐" }],
  [{ title: "๐งก๐งก๐งก๐งก", command: "/rate1 ๐  ๐ ๐ ๐" }],
  [{ title: "๐๐๐", command: "/rate1๐๐๐" }],
  [{ title: "๐๐", command: "/rate1 ๐๐" }],
  [{ title: "๐ค", command: "/rate1๐" }]
]

Bot.sendInlineKeyboard(
  button,

  "*๐ค Please Rate Us :  @" + bot.name + "*"
)

