/*CMD
  command: statedited
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

var date = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy")
var timee = Libs.DateTimeFormat.format(new Date(), "h:M:s T") + "M"
var stat = Libs.ResourcesLib.anotherChatRes("totalusers", "global")
var depostat = Libs.ResourcesLib.anotherChatRes("active", "global")
var bots = Libs.ResourcesLib.anotherChatRes("bots", "global")
var codes = Libs.ResourcesLib.anotherChatRes("codes", "global")

let msg_id = options.result.message_id
var k = Bot.getProperty("management")
if (k == "on") {
  Api.sendPhoto({
    photo: "https://imbt.ga/0qL1iJuryt",
    caption:
      "<b> We are currently Saving power, Please use this command after some Hours</b>",
    parse_mode: "HTML"
  })

  return
} else var to = Bot.getProperty("maintenance")
if (to == "on") {
  Bot.sendMessage(
    "*π Sorry*, The Bot is currently π  *Under Maintenance*\n_π€ Please wait it may take up to 1-12 Hour._"
  )
  return
} else var ban = Bot.getProperty(user.telegramid + "/ban")
if (ban == true) {
  var button = [
    { title: "π£οΈContact Support", url: "https://t.me/Bee_Family" }
  ]
  Bot.sendInlineKeyboard(button, "*You are banned from using this bot*")
  return
} else Bot.editMessage("_ββββββββββββββ 0%_", msg_id)
Bot.editMessage("_ββββββββββββββ 10%_", msg_id)
Bot.editMessage("_ββββββββββββββ 25%_", msg_id)
Bot.editMessage("_ββββββββββββββ 40%_", msg_id)
Bot.editMessage("_ββββββββββββββ 56%_", msg_id)
Bot.editMessage("_ββββββββββββββ 67%_", msg_id)
Bot.editMessage("_ββββββββββββββ 88%_", msg_id)
Bot.editMessage("_ββββββββββββββ 100%_", msg_id)
Bot.editMessage("*Updated*", msg_id)
Bot.editMessage(
  "*π Bot Live Statistics*\n\n*β‘ Live  Users:* `" +
    status +
    
    
    "`\n\n *π Data for*: (_Today_)" +
    "\n* π Date: *_" +
    date +
    "_\n* π Time: *_" +
    timee +
    "_",
  msg_id


  
)
Bot.runCommand("photo_stat")


  
