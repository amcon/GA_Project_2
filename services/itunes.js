const fetch = require('node-fetch');

const API_URL = 'https://itunes.apple.com/search?term=sia&limit=1';

function getArtistInfo(req, res, next) {
  fetch(API_URL)
  .then(r => r.json())
    .then((result) => {
    res.artist = result;
    console.log(result);
    next();
  })
    .catch((err) => {
      res.err = err;
      next();
    });
};

module.exports = { getArtistInfo };
