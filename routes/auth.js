const express = require('express');
const { logIn } = require('../lib/auth');

const authRouter = express.Router();

authRouter.post('/', logIn, (req, res) => {
  res.redirect('users/profile');
});

authRouter.delete('/', (req,res) => {
  req.session.userId = null;
  res.redirect('/');
});

module.exports = authRouter;
