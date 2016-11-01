/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const express = require('express');
const { logIn } = require('../lib/auth');

const authRouter = express.Router();

// This runs the middleware for Login information. authRouter.post posts the information and authRouter.delete deletes the session.

authRouter.post('/', logIn, (req, res) => {
  res.redirect('users/profile');
});

authRouter.delete('/', (req,res) => {
  req.session.userId = null;
  res.redirect('/');
});

module.exports = authRouter;
