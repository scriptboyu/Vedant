/*CMD
  command: /logo_2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Logo
  answer: Send something to make a logo..

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var m = "https://techzbotsapi.herokuapp.com/logo?text=" + message + ""
Api.sendPhoto({
  photo: m,
  caption: "*YOUR LOGO DESIGN DONE👍...\n\nGENERATED BY @" + bot.name + "*",
  parse_mode: "Markdown"
})