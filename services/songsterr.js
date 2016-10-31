const fetch = require('node-fetch');

const API_URL = 'https://www.songsterr.com/a/ra/songs.json?pattern=';

function getTabInfo(req, res, next) {
  fetch(`${API_URL}${req.body.searchTerm}`)
  .then(r => r.json())
  .then((result) => {
    res.tab = result;
    console.log(result);
    next();
  })
    .catch((err) => {
      res.err = err;
      next();
    });
};

module.exports = { getTabInfo };
