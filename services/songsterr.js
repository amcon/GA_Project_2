/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const fetch   = require('node-fetch');

const API_URL = 'https://www.songsterr.com/a/ra/songs.json?pattern=';

/* The getTabInfo function searches the Songsterr API based on the search results,
converts the information to json and makes the result available as res.tab for
ejs use. */

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
}

module.exports = { getTabInfo };
