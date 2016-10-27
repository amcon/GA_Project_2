const fetch = require('node-fetch');

const API_URL = 'https://www.songsterr.com/a/ra/songs/byartists.json?artists=Sia';

function getTabInfo(req, res, next) {
  fetch(API_URL)
  .then(r => r.json())
  .then((result) => {
    res.tab = result;
    console.log(result);
    next();
  })
    .catch((err) => {
      res.err = err;
      next();
    })
}

module.exports = { getTabInfo };
