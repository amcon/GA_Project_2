const express = require('express');

const searchRouter = express.Router();

const dbService = require('../models/favorites');
const { authenticate } = require('../lib/auth');
const { getArtistInfo } = require('./../services/itunes');
const { getTabInfo } = require('./../services/songsterr');

// This route runs middleware for the search page. It authenticates that the session is still intact and posts the
// results from the API searches and posts to the application page.

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
