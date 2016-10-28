const router = require('express').Router();
const dbService = require('../models/favorites');
const { getArtistInfo } = require('./../services/itunes');
const { getTabInfo } = require('./../services/songsterr');
const { getLyricInfo } = require('./../services/lyricsNMusic');
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true }));

router.get('/', getArtistInfo, getTabInfo, getLyricInfo, dbService.getFavorite, (req, res) => {
  res.render('application', {
    favorites: res.favorites || [],
    artist: res.artist,
    tab: res.tab,
    lyrics: res.lyrics,
  });
});

module.exports = router;
