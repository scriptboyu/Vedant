/*CMD
  command: /banwords
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Command

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /banwords@grouphelpmrbeebot, /banwords
CMD*/





Api.deleteMessage({ message_id: request.message_id })
if (chat.chat_type == "private") {
  Bot.sendInlineKeyboard(
    [
      [
        {
          title: "๐ Add Me To A Group ๐",
          url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
        }
      ]
    ],
    "This bot work only in [group](https://t.me/Bee_Family )!"
  )
  return
}
var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
if (params) {
  if (admin.list[user.telegramid] == user.telegramid) {
    var GroupAdmin_ban = Bot.getProperty("banned_" + request.chat.id, [])
    GroupAdmin_ban.push(params)
    Bot.setProperty("banned_" + request.chat.id, GroupAdmin_ban, "json")
    Bot.sendInlineKeyboard(
      [[{ title: "๐๏ธClear/BanWords๐๏ธ", command: "/banClear " + request.chat.id }]],
      "๐*Banned Words List*๐!\n\n" + inspect(GroupAdmin_ban)
    )
    return
  }
  //
  return
}
Bot.sendMessage("โ ๏ธ Incorrect Format use\n`/banwords example!`")

