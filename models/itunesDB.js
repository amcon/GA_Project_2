const fetch = require('node-fetch');

const API_URL = 'https://itunes.apple.com/search?term=sia&limit=5';

function getArtistInfo(req, res, next) {
  fetch(API_URL)
  .then(r => r.json())
  .then((result) => {
    res.artist = result;
    // console.log(result);
    next();
  })
    .catch((err) => {
      res.err = err;
      next();
    })
}

function getItunesFavorite(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
    .find({})
    .sort({ trackName: 1 })
    .toArray((arrayError, data) => {
      if (arrayError) return next(arrayError);
      res.favorites = data;
      db.close();
      return next();
    });
    return false;
  });
  return false;
}

module.exports = {
  getArtistInfo,
  getItunesFavorite,
};
