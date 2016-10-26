const router = require('express').Router();
const { getArtistInfo } = require('../models/itunesDB');

router.get('/', getArtistInfo, (req, res) => {
  res.render('artist', {
    artist: res.weather,
  });
});

module.exports = router;
