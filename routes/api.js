const router = require('express').Router();
const { getArtistInfo } = require('../models/itunesDB');
const { getTabInfo } = require('./../models/songsterrDB');
const { getLyricInfo } = require('./../models/lyricsNMusicDB')

router.get('/', getArtistInfo, getTabInfo, getLyricInfo, (req, res) => {
  res.render('application', {
    artist: res.artist,
    tab: res.tab,
    lyrics: res.lyrics,
  });
});

module.exports = router;
