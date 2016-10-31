const router = require('express').Router();
const { authenticate } = require('../lib/auth');
const dbService = require('../models/favorites');
const { getArtistInfo } = require('./../services/itunes');
const { getTabInfo } = require('./../services/songsterr');
const { getLyricInfo } = require('./../services/lyricsNMusic');

router.get('/', authenticate, getArtistInfo, getTabInfo, /*getLyricInfo,*/ dbService.getFavorite, (req, res) => {
  res.render('application', {
    favorites: res.favorites || [],
    artist: res.artist,
    tab: res.tab,
    lyric: res.lyric,
  });
});


module.exports = router;
