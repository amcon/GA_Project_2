const MongoClient = require('mongodb');

const connectionURL = process.env.MONGODB_URI || 'mongodb://localhost/guitar_tabs';

function getDB() {
  return MongoClient.connect(connectionURL);
}

module.exports = {
  getDB
};
