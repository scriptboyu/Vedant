/*CMD
  command: Vote
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

var tyes = Libs.ResourcesLib.anotherChatRes("TYes", "global")
var tno = Libs.ResourcesLib.anotherChatRes("TNo", "global")
var but = [[{title: "๐ Yes "+tyes.value()+"", command: "VoteResult yes"},{title: "๐โโ๏ธNo "+tno.value()+"",command: "VoteResult no"}]]
Bot.sendInlineKeyboard(but,"*ARE YOU GOOD*")
