/*CMD
  command: š Exchange
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: exchange BB points š to iterations

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(chat.chat_type!="private"){ return }

let res = Libs.ResourcesLib.userRes("BBPoint");

if(!BBAdmin.curUser.parentAccount){
  Bot.runCommand("/no-linked-account");
}else{
  Bot.sendMessage("You have: " + res.value() + "š BB Points (BBP)." + 
   "\n\n1 š - it is 50 ā” Extra Points (EP)." +
   "\n\nYou can change your:\n" + res.value() + "š BBP to " + 50*res.value() + " ā” EP." +
   "\n\n\nAlso you can change your EP to BBP: " +
    "\nā” 60 EP - it is š 1 BBP"
  );
  Bot.runCommand("/doexchange");
}

