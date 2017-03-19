
console.log('CLIENT/SRC/app.js: begin of file');

var app = {
  server: 'http://127.0.0.1:3000/classes/messages',
  username: 'anonymous',
  roomname: 'lobby',
  lastMessageId: 0,
  friends: {},
  messages: [],

  init: function() {
    // get username
    app.username = window.location.search.substr(10);

    // cashe jQuery selectors
    app.$message = $('#message');
    app.$chats = $('#chats');
    app.$roomSelect = $('#roomSelect');
    app.$send = $('#send');

    // add listeners
    app.$send.on('submit', app.handleSubmit);
  },

  // POST the message to the server
  send: function(message) {

  },

  handleSubmit: function(event) {
    var message = {
      username: app.username,
      text: app.$message.val(),
      roomname: app.roomname || 'lobby',
    };

    app.send(message);
    // stop the form from submitting
    event.preventDefault();
  }
};