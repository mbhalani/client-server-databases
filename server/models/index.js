
console.log('SERVER/MODELS/index.js: begin of file');

const db = require('../db');

var insertUser = function(data, callback) {
  var queryStr = 'INSERT INTO users (username) VALUES (?)';
  db.query(queryStr, data, function(err) {
    if (err) {
      throw err;
    } else if (callback) {
      callback();
    }
  });
};

var insertMessage = function(data, callback) {
  var queryStr = 'INSERT INTO messages (userid, text, roomname) \
                        VALUES ((SELECT id FROM users WHERE username = ? limit 1), ?, ?)';

  db.query(queryStr, data, function(err, results) {
    if (err) {
      insertUser(data);
      insertMessage(data, callback);
    } else if (callback) {
      callback();
    }
  });
};

module.exports = {
  messages: {
    // get all messages
    get: function(callback) {
      console.log('MODELS: msg-GET: ');
      var queryStr = 'SELECT messages.id, messages.text, messages.roomname, users.username \
                    FROM messages LEFT OUTER JOIN users ON (messages.userid = users.id) order by messages.id desc';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    // post message
    post: function(data, callback) {
      insertMessage(data, callback);
    }
  },

  users: {
    // get all users
    get: function(callback) {
      var queryStr = 'SELECT * FROM users';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    // post user
    post: function(data, callback) {
      var queryStr = 'INSERT INTO users (username) VALUES (?)';
      db.query(queryStr, data, function(err, results) {
        callback(err, results);
      });
    }
  }
};
