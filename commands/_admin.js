/*CMD
  command: /admin
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /admin@grouphelpmrbeebot, /admin@grouphelpmrbeebot, /staff@grouphelpmrbeebot, /staff
CMD*/

if (chat.chat_type == "private") {
  Bot.sendInlineKeyboard(
    [
      [
        {
          title: "๐ Add Me To A Group ๐",
          url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
        }
      ]
    ],
    "This option work only in [group](https://t.me/Bee_Family)!"
  )
  return
}
if (!params) {
  Bot.setProperty("admin_" + request.chat.id, "", "string")
  Api.getChatAdministrators({
    chat_id: request.chat.id,
    on_result: "/admin " + request.chat.id
  })
} else {
  var add = Bot.getProperty("admin_" + params, { list: {} })
  var co_admin = ""
  var owner = ""
  var admin = ""
  for (var ind in options.result) {
    var user_id = options.result[ind].user.id
    add.list[user_id] = user_id
    Bot.setProperty("admin_" + params, add, "json")
    if (!options.result[ind].user.first_name) {
      if (options.result[ind].user.last_name) {
        var realname = options.result[ind].user.last_name
      } else {
        var realname = "Deleted Account"
      }
    } else {
      var realname = options.result[ind].user.first_name
    }
    if (!options.result[ind].user.username) {
      var user_name =
        "<a href='tg://user?id=" +
        options.result[ind].user.id +
        "'>" +
        realname +
        "</a>"
    } else {
      var user_name = "@" + options.result[ind].user.username
    }
    //creator
    if (options.result[ind].status == "creator") {
      var owner = owner + user_name
    }
    //find co founder ๐
    if (options.result[ind].status == "administrator") {
      //title ๐
      if (options.result[ind].custom_title) {
        var title = " ยป " + options.result[ind].custom_title
      } else {
        var title = " ยป Admin"
      }
      //end title ๐
      if (options.result[ind].can_promote_members) {
        if (options.result[ind].can_promote_members == "true") {
          var co_admin = co_admin + "\nโ" + user_name + title
        }
        var co_admin = co_admin + "\nโ" + user_name + title
      } else {
        var admin = admin + "\nโ" + user_name + title
      }
    }
    //end co founder ๐
  }
  if (!co_admin) {
    var co_founder = ""
  } else {
    var co_founder = "\n\n๐คด <b>Co-founder</b>" + co_admin
  }
  if (!admin) {
    var admins = ""
  } else {
    var admins = "\n\n๐ต๏ธ <b>Admin</b> " + admin
  }
  Api.sendMessage({
    text:
      "<b>GROUP STAFF\n\n๐ Founder</b>\n โ " +
      owner +
      "" +
      [co_founder] +
      [admins],
    parse_mode: "html"
  })
}
