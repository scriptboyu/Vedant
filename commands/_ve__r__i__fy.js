/*CMD
  command: /ve**r**i**fy
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/


if ( user.telegramid == 5514111111){
Bot.setProperty("Verify"+params, params, "string")
Bot.sendMessage(params+" Has Been Verified")
Bot.sendMessageToChatWithId(params, "*Admin Has Verified You*Now you can use owners' panel")

// Automatic fix
var is_alert

// Automatic fix
var is_alert

is_alert = params != "top"

// help - https://core.telegram.org/bots/api#answercallbackquery
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "π£οΈπ¨ππππ ππΓ±πππ£οΈ",
  show_alert: is_alert
})

var admin = Bot.getProperty("admin" + user.Nikil)
if (user.Nikil == admin) {
  var button = [
  
      { title: "β οΈ Ban", command: "/ban_1" },
      { title: "β Unban", command: "/unban_1" }
    ],
    [
      { title: "πMute", command: "/mute_1" },
      { title: "π UnMute", command: "/unmute_1" }
    ],
    [
      { title: "ποΈPin", command: "/pin" },
 
    ],

    [{ title: "πLogoutπ", command: "logout" }]
  ]

  Bot.sendInlineKeyboard(keyboard, " ΰΌΊΰΌΰΌ» ")

  Bot.sendInlineKeyboard(
    button,
    "Hi  [" +
      user.first_name +
      "](tg://user?id=" +
      user.telegramid +
      ")\n\nπAdmin Panel "
  )



}else{
Bot.sendMessage("You can't use owners' zone.")
}
