// const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');
const { getDB } = require('../lib/dbConnect.js');

// const dbConnection = 'mongodb://localhost:27017/guitar_tabs';

// The getFavotite function gets the database collection favorites, finds the userId, sorts by trackname in alphabetical
// order by trackName. This information is put into an array and then closes the database before moving forward.
function getFavorite(req, res, next) {

  getDB().then((db) => {
    db.collection('favorites')
    .find({ userId: { $eq: req.session.userId } })
    .sort({ trackName: 1 })
    .toArray((arrayError, data) => {
      if (arrayError) return next(arrayError);
      res.favorites = data;
      // console.log(data);
      db.close();
      next();
    });
    return false;
  });
  return false;
}

// the saveFavorite function takes the information from the search function and creates an object with a key/value pair
// this also inserts the userId into the object before inserting it into the favorites collection in the database.
// all userId information is credited to GA Instructors.
function saveFavorite(req, res, next) {
  const insertObj = {};

  for(key in req.body) {
    insertObj[key] = req.body[key];
  }

  insertObj.favorites.userId = req.session.userId;

  getDB().then((db) => {
    db.collection('favorites')
    .insert(insertObj.favorites, (insertErr, result) => {
      if (insertErr) return next(insertErr);
      res.saved = result;
      db.close();
      next();
    });
    return false;
  });
  return false;
}
// The deleteFavorite function deletes the specified document from the database collection. It accesses the database,
// searches by the correct Id (matching the session), and removes the document. Then it closes the database.
function deleteFavorite(req, res, next) {
  getDB().then((db) => {
    db.collection('favorites')
      .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, result) => {
        if (removeErr) return next(removeErr);

      // return the data
      res.removed = result;
      db.close();
      next();
    });
    return false;
  });
  return false;
}

module.exports = {
  getFavorite,
  saveFavorite,
  deleteFavorite,
};
