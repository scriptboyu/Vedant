/*CMD
  command: night
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Betting

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.deleteMessage({ message_id: request.message_id })
var bot = request.chat.username
if (chat.chat_type == "private") {
  Bot.sendInlineKeyboard(
    [
      [
        {
          title: "ð Add Me To A Group ð",
          url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
        }
      ]
    ],
    "This bot work only in group!"
  )
  return
}
var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
if (admin.list[user.telegramid] == user.telegramid) {
  function canRun() {
    var last_run_at = User.getProperty("last_run_at")
    if (!last_run_at) {
      return true
      var messages = User.getProperty("night"+ request.chat.id)
    }

    var minutes = (Date.now() - last_run_at) / 1000 / 60

    var minutes_in_day = 0.50 * 60
    var next = minutes_in_day - minutes
    var wait_hours = Math.floor(next / 60)
    next -= wait_hours * 60
    var wait_minutes = Math.floor(next)
    var seconds = Math.floor((next - wait_minutes) * 60)
    if (minutes < minutes_in_day) {
      Bot.sendMessage(
        "*ð Night mode Already Started.....ð«\n\nâ¶ï¸ Come Back After â³ " +
          wait_hours +
          " h " +
          wait_minutes +
          " m " +
          seconds +
          " s*"
      )
      return
    }
    return true
  }

  if (!canRun()) {
    return
  }
  User.setProperty("last_run_at" + request.chat.id, "", Date.now(), "integer")
  Bot.sendMessage(
    "ðNight mode enabled by the admin @" +
      user.username +
      "\n \n ðNight Mode Started \n Chat closed : â From now on users can't send media (photos, videos, files...) and links in the group again."
  )
}



