
console.log('SERVER/app.js: begin of file');

// setup express server
const express = require('express');
// database
const db = require('./db');
// router
const router = require('./routes');

// Middleware
const morgan = require('morgan');
const parser = require('body-parser');

const app = express();
module.exports.app = app;

// set up port we are listening
app.set('port', 3000);

// logging and parsing
app.use(morgan('dev'));
app.use(parser.json());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// set up our routes
app.use('/classes', router);

// serve the client files
app.use(express.static(__dirname + '/../client'));

// if we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log(`SERVER: Listening on port: "${app.get('port')}"`);
}
