
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
    app.$roomSelect.on('change', app.handleRoomChange);
    app.$chats.on('click', '.username', app.handleUsernameClick);

    // fetch previous messages
    app.fetch(false);

    // poll for new messages
    setInterval(function() {
      app.fetch(true);
    }, 5000);
  },

  // POST the message to the server
  send: function(message) {
    app.startSpinner();
    $.ajax({
      url: app.server,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(message),
      success: function(data) {
        app.$message.val(''); // clear input field message
        // trigger a fetch to update the message
        // pass true to animate
        app.fetch(true);
      },
      error: function(error) {
        console.error("Chat's client: Failed to SEND message", error);
      }
    });
  },

  // update messages list
  fetch: function(animate) {
    // app.startSpinner();

    $.ajax({
      url: app.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: function(data) {
        if (!data || !data.length) { return; }
        // store messages for caching later...
        app.message = data;

        // get the last message
        var mostRecentMessage = data[data.length - 1];
        // update DOM only if we have a new message
        if (mostRecentMessage.id !== app.lastMessageId) {


          app.renderMessages(data, animate);
          app.lastMessageId = mostRecentMessage.id;
        }
      },

      error: function(error) {
        console.log("Chat's client: Failed to FETCH message", error);
      }
    });

    app.stopSpinner();
  },

  clearMessages: function() {
    app.$chats.html('');
  },

  renderMessages: function(messages, animate) {
    app.clearMessages();

    if (Array.isArray(messages)) {
      // only add messages that are in our current room
      messages.filter(function(message) {
        return message.roomname === app.roomname || app.roomname === 'lobby' && !message.roomname;
      }).forEach(app.renderMessage);

    }

    if (animate) {
      $('body').animate({scrollTop: '0px'}, 'fast');
    }
  },

  renderMessage: function(message) {
    if (!message.roomname) {
      message.roomname = 'lobby';
    }

    // Create a div to hold the chats
    var $chat = $('<div class="chat"/>');

    // Add in the message data using DOM methods to avoid XSS
    // Store the username in the element's data attribute
    var $username = $('<span class="username"/>');
    $username.text(message.username + ': ').attr('data-roomname', message.roomname).attr('data-username', message.username).appendTo($chat);

    // Add the friend class
    if (app.friends[message.username] === true) {
      $username.addClass('friend');
    }

    var $message = $('<br><span/>');
    $message.text(message.text).appendTo($chat);

    // Add the message to the UI
    app.$chats.append($chat);

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
  },

  handleRoomChange: function(event) {

  },

  handleUsernameClick: function(event) {

  },



  startSpinner: function() {
    $('.spinner img').show();
    $('from input[type=submit').attr('disabled', 'true');
  },
  stopSpinner: function() {
    $('.spinner img').fadeOut('fast');
    $('from input[type=submit').attr('disabled', null);
  },
};