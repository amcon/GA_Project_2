/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const express = require('express');
const { createUser } = require('../models/user.js');
const { authenticate } = require('../lib/auth');

const usersRouter = express.Router();

// This route runs the middleware necessary for the profile page to render. It runs the createUser function which
// saves the user to the database and authenticates that a session is active.

usersRouter.post('/', createUser, (req, res) => {
  res.redirect('/');
});

usersRouter.get('/profile', authenticate, (req, res) => {
  res.render('profile', { user: res.user });
});

module.exports = usersRouter;
