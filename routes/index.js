/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const express     = require('express');

const indexRouter = express.Router();

/* This route runs the routes from home to the login page and the signup page. */

indexRouter.get('/', (req, res) => {
  res.render('index');
});

indexRouter.get('/login', (req, res) => {
  res.render('login');
});

indexRouter.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = indexRouter;
