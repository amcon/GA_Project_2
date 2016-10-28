const fetch = require('node-fetch');

const API_URL = 'https://www.songsterr.com/a/ra/songs/byartists.json?artists=Sia';

function getTabInfo(req, res, next) {
  fetch(API_URL)
  .then(r => r.json())
  .then((result) => {
    res.tab = result;
    // console.log(result);
    next();
  })
    .catch((err) => {
      res.err = err;
      next();
    })
}

function getSongsterrFavorite(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
    .find({})
    .sort({ title: 1 })
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
  getTabInfo,
  getSongsterrFavorite
};

// http://www.songsterr.com/a/wa/bestMatchForQueryString?s={song title}&a={artist name}
