/*CMD
  command: /start_Ko
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Start

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.sendMessage({ text: 'β¨οΈ Keyboard Removed',
reply_markup: JSON.stringify({
hide_keyboard: true
})
})
Api.deleteMessage({ message_id: request.message.message_id })
Api.deleteMessage({ message_id: request.message.message_id })


var joinbuttons = [
  [
    { text: "Updates Channel", url: "https://t.me/Bee_Family" },
    { text: "Support Group", url: "https://t.me/Bee_Family" }
  ]
]
Api.sendPhoto({
  photo: "https://telegra.ph/file/95baa0ced3f09593e2866.jpg",
  caption:
    "Hello there  " +
    user.first_name +
    "[β§](https://telegra.ph/file/95baa0ced3f09593e2866.jpg)\n*Hi π°π· Group Helper λ νμ μ½κ³  μμ νκ² κ΄λ¦¬νλ λ° λμμ΄ λλ λ΄μλλ€.  \n\n β λͺλ Ήμ΄λ λ¬΄μμλκΉ?  β\n  /help λ₯Ό ν΄λ¦­νμ¬ λͺ¨λ  λͺλ Ήκ³Ό μλ λ°©μμ μμλ³΄μΈμ!* ",

  reply_markup: {
    inline_keyboard: joinbuttons
  },
  parse_mode: "Markdown",
  disable_web_page_preview: true
})
var buttons = [
  [{ title: "βλͺλ Ήβ", command: "/help" }],
  [{ title: "βνμ¬ μκ°β", command: "/about_Ko" }]
]
Bot.sendInlineKeyboard(buttons, "βα­κ¦Ώα­κ¦Ώ    πΊπππ’π π»πππππ  βα­κ¦Ώα­κ¦Ώ ")

