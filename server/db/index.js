
console.log('DB/index.js: begin of file');

const mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

dbConnection.connect();

module.exports = dbConnection;
