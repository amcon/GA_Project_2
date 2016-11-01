const fetch = require('node-fetch');

const API_URL = 'http://api.lyricsnmusic.com/songs?api_key=';
const API_KEY = process.env.LYRICS_N_MUSIC_KEY;

/* THIS API IS DEAD... THE SITE WENT OFFLINE MID PROJECT. THIS IS A FUNCTION
THAT WAS SUPPOSED TO TAKE THE SEARCH RESULT AND MAKE THAT JSON INFORMATION
AVAILABLE IN THE EJS. */

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
