var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    debugger;
    // var template = _.template('<div><%=username%> said <%=text%> at <%=createdAt%></div>')
    for (var key in Messages) {
      var message = Messages[key];
      var node = $(this.render(message));
      node.appendTo($('#chats'));
    }
  },

  render: _.template(`

      <div class="chat">
        <div class="username"><%=username%></div>

      </div>

    `)

};
