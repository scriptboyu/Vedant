/*CMD
  command: /leave
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Command

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /leave@grouphelpmrbeebot
CMD*/


if (chat.chat_type == "private") {
  Bot.sendInlineKeyboard(
    [
      [
        {
          title: "π Add Me To A Group π",
          url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
        }
      ]
    ],
    "This option work only in group!"
  )
  return
}

var fajis = request.chat.id
  var text = "Nop,π₯\n I Shall Go Away π!..Admin "+user.first_name +  "\n Bye!"
var bot = request.chat.username
var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
if (admin.list[user.telegramid] == user.telegramid) {
Bot.sendMessage(text)
  Api.leaveChat({
    chat_id: fajis
  })

  
}else{

Bot.sendMessage(
  "πDear"+user.first_name+  "\nποΈYou aren't an admin of this group....so,you can't remove me...π in group β£ @" +
      bot)
}

