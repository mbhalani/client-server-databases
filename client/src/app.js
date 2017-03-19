
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

  }
};