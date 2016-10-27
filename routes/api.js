const router = require('express').Router();
const { getArtistInfo } = require('../models/itunesDB');
const { getTabInfo } = require('./../models/songsterrDB');

router.get('/', getArtistInfo, getTabInfo, (req, res) => {
  res.render('application', {
    artist: res.artist,
    tab: res.tab,
  });
});

module.exports = router;
