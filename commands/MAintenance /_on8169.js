/*CMD
  command: /on8169
  help: 
  need_reply: false
  auto_retry_time: 
  folder: MAintenance 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(user.telegramid == 5514111111){
Bot.setProperty("mode","ð ï¸Onâ","string")
Bot.sendMessage("*ð ï¸ Maintainance Mode Set To On*")
}else{
Bot.sendMessage("*âï¸ You Are Not An Admin*")
}

