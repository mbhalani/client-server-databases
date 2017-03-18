
console.log('CONTROLLERS/index.js: begin of file');

const models =require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function(request, response) {
      console.log('CONTROLLERS: msg-GET: ');
      models.messages.get(function(err, results) {
        if (err) { throw err; }
        response.json(results);
      });
    },
    // a function which handles posting a message to the database
    post: function(request, response) {
      console.log('CONTROLLERS: msg-POST: ', request);
    }
  },

  users: {
    // a function which handles a get request for all users
    get: function(request, response) {

    },
    // a function which handles posting a message to the users
    post: function(request, response) {

    }
  }
};