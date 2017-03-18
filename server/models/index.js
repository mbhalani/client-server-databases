
console.log('MODELS/index.js: begin of file');

const db = require('../db');

module.exports = {
  messages: {
    // get all messages
    get: function(callback) {
      var queryStr = 'SELECT messages.id, users.username, messages.text, messages.roomname \
                    FROM messages LEFT OUTER JOIN users ON (messages.userid = users.id) order by messages.id desc';
      db.query(queryStr, function(err, results) {
        console.log(results);
        callback(err, results);
      });
    },
    // post message
    post: function(data, callback) {

    }
  },

  users: {
    // get all users
    get: function(callback) {

    },
    // post user
    post: function(data, callback) {

    }
  }
};
