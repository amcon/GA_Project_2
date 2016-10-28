const fetch = require('node-fetch');

const API_URL = 'http://api.lyricsnmusic.com/songs?api_key=';
const API_KEY = process.env.LYRICS_N_MUSIC_KEY

function getLyricInfo(req, res, next) {
  fetch(`${API_URL}${API_KEY}&artist=sia&track=cheap`)
  .then(r => r.json())
  .then((result) => {
    res.lyrics = result;
    // console.log(result);
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  });
}

function getLyricFavorite(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
    .find({})
    .sort({ snippet: 1 })
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
  getLyricInfo
  getLyricFavorite
};
