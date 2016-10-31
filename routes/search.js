const express = require('express');

const searchRouter = express.Router();

const dbService = require('../models/favorites');
const { authenticate } = require('../lib/auth');
const { getArtistInfo } = require('./../services/itunes');
const { getTabInfo } = require('./../services/songsterr');

searchRouter.get('/', authenticate, (req, res, next) =>{
  res.render('search', { user: res.user });
})

searchRouter.post('/results', authenticate, getArtistInfo, getTabInfo, dbService.getFavorite, (req,res) => {
  res.render('application', {
    user: res.user,
    favorites: res.favorites || [],
    artist: res.artist || [],
    tab: res.tab || [],
  });
});

module.exports = searchRouter;
