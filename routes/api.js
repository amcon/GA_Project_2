const router = require('express').Router();
const { authenticate } = require('../lib/auth');
const dbService = require('../models/favorites');
const { getArtistInfo } = require('./../services/itunes');
const { getTabInfo } = require('./../services/songsterr');
// const { getLyricInfo } = require('./../services/lyricsNMusic');

/* This middleware was necessary before my search function was operating.
It has been left for reference. */

router.get('/', authenticate, getArtistInfo, getTabInfo, dbService.getFavorite, (req, res) => {
  res.render('application', {
    favorites: res.favorites || [],
    artist: res.artist,
    tab: res.tab,
    lyric: res.lyric,
  });
});


module.exports = router;
