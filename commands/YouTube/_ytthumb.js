/*CMD
  command: /ytthumb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: YouTube
  answer: *🖇 Send Your YouTube Video Link To Get Thumbnail.*

  <<KEYBOARD

  KEYBOARD
  aliases: /ytthumb@grouphelpmrbeebot
CMD*/

Api.sendPhoto({
photo: message, 
caption: "*📬 Your YouTube Video Thumbnail Generated By : @"+bot.name+".*"
})
