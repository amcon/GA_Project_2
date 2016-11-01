const MongoClient = require('mongodb');

//This accesses the database either on the hosted Heroku site or in the local database.
const connectionURL = process.env.MONGODB_URI || 'mongodb://localhost/guitar_tabs';

// The getDB function allows the use of the database in the MVC structure.
function getDB() {
  return MongoClient.connect(connectionURL);
}

module.exports = {
  getDB
};
