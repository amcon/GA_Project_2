const fetch = require('node-fetch');

const API_URL = 'http://api.lyricsnmusic.com/songs?api_key=';
const API_KEY = process.env.LYRICS_N_MUSIC_KEY;

function getLyricInfo(req, res, next) {
  fetch(`${API_URL}${API_KEY}&artist=sia&track=cheap`)
  .then(r => r.json())
  .then((result) => {
    res.lyric = result;
    // console.log(result);
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  });
}

module.exports = { getLyricInfo };
