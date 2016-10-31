const fetch = require('node-fetch');

const API_URL = 'https://itunes.apple.com/search?';

function getArtistInfo(req, res, next) {
  console.log(req.body.searchTerm);
  fetch(`${API_URL}term=${req.body.searchTerm}&entity=musicTrack&medium=music&limit=1`)
  .then(r => r.json())
    .then((result) => {
      // console.log(result);
    res.artist = result;
    // console.log(result);
    next();
  })
    .catch((err) => {
      res.err = err;
      next();
    });
};

module.exports = { getArtistInfo };
