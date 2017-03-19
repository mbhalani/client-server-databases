
console.log('SERVER/MODELS/index.js: begin of file');

const db = require('../db');

module.exports = {
  messages: {
    // get all messages
    get: function(callback) {
      var queryStr = 'SELECT messages.id, users.username, messages.text, messages.roomname \
                    FROM messages LEFT OUTER JOIN users ON (messages.userid = users.id) order by messages.id desc';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    // post message
    post: function(data, callback) {
      var queryStr = 'INSERT INTO messages (userid, text, roomname) \
                            VALUES ((SELECT id FROM users WHERE username = ? limit 1), ?, ?)';

      db.query(queryStr, data, function(err, results) {
        callback(err, results);
      });

      // var userid;
      // var queryStr = 'SELECT id FROM users WHERE username = ?;';
      // db.query(queryStr, data, function(err, results) {
      //   userid = results[0].id;
      //   console.log('xxxx ', err, userid);
      // });
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
