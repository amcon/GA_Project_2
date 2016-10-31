// const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');
const { getDB } = require('../lib/dbConnect.js');

// const dbConnection = 'mongodb://localhost:27017/guitar_tabs';

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

function deleteFavorite(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
      .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, doc) => {
        if (removeErr) return next(removeErr);

        // return the data
        res.removed = doc;
        db.close();
        return next();
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
