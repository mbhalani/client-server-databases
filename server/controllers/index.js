
console.log('SERVER/CONTROLLERS/index.js: begin of file');

const models =require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function(request, response) {
      console.log('CONTROLLERS: msg-GET: ');
      models.messages.get(function(err, results) {
        console.log('json', results, err);
        if (err) { throw err; }
        response.json(results);
      });
    },
    // a function which handles posting a message to the database
    post: function(request, response) {
      console.log('CONTROLLERS: msg-POST: ', request.body);
      var data = [request.body.username, request.body.text, request.body.roomname];
      models.messages.post(data, function(err, results) {
        if (err) { throw err; }
        response.sendStatus(201);
      });
    }
  },

  users: {
    // a function which handles a get request for all users
    get: function(request, response) {
      console.log('CONTROLLERS: users-GET: ');
      models.users.get(function(err, results) {
        if (err) { throw err; }
        response.json(results);
      });
    },
    // a function which handles posting a message to the users
    post: function(request, response) {
      console.log('CONTROLLERS: users-POST: ', request.body);
      var data = [request.body.username];
      models.users.post(data, function(err, results) {
        if (err) { throw err; }
        response.sendStatus(201);
      });
    }
  }
};