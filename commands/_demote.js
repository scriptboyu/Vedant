/*CMD
  command: /demote
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

if (!params) {
  Bot.sendMessage(
    "*Params error*\n\nsend like `/demote user telegramid` \n\n*_to get telegram id use /info  command _ and get....*"
  )
} else {
  Bot.sendMessage(
    "*User*    `" +
      params +
      "`      *\n Has been  demoted*đŽď¸\n \n  đď¸`is_anonymous: false`,\nâ°ď¸`can_promote_members: false`,\nđ`can_delete_messages: false`,\nđť`can_restrict_members: false`,\nđď¸`can_edit_messages: false`,\nđ˝`can_post_messages: true`"
  )
  Api.promoteChatMember({
    chat_id: chat.telegramid,
    user_id: params,
     chat_id: chat.telegramid,
  user_id: params,
  is_anonymous: "false",
  can_promote_members: "false",
  can_delete_messages: "false",
  can_restrict_members: "false",
  can_edit_messages: "false",
  can_post_messages: "true",
  parse_mode: "markdown"
    
    
  })
}

