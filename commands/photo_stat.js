/*CMD
  command: photo_stat
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

var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  .value()
  .toFixed(0)
//var rn = Libs.Random.randomInt(1,30)
//userPayment.add(rn)
//var run = Libs.Random.randomInt(1,30)
//status.add(run)
//userPayment.add(-1000)
var stat =
  "๐ _Total Bot Users : " +
  300 +
  " Users_  \n  ๐งพ_Total successful Withdraw : " +
  userPayment.value().toFixed(2) +
  " โน_*  \n  ๐ใใBot started on =\n= 03/08/2022ใใ๐*"

// Bot.sendMessage(stat)

var ph =
  "https://quickchart.io/chart?bkg=lightblue&c={type:%27bar%27,data:{labels:[''],datasets:[{label:%27Total-Users%27,data:[" +
  300 +
  "]},{label:%27Total-Payment%27,data:[" +
  userPayment.value().toFixed(2) +
  "]}]}}"

Api.sendPhoto({
  photo: ph,
  caption: stat,
  parse_mode: "markdown",
  disable_web_page_preview: false
})

