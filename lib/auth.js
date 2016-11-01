// Thank you to GA Instructors for this information. THs has been copied from a reference.

const bcrypt    = require('bcryptjs');
const userModel = require('../models/user');

// This LogIn function takes username and password results, encrypts the password, and matches it to the databse password.
// If there are no errors, you will be redirected to the home page.
function logIn(req, res, next) {
  const userPayload = req.body.user;

  console.log(userPayload.password);
  userModel.getUserByUsername(userPayload.username).then((dbUser) => {
    const matches = bcrypt.compareSync(userPayload.password, dbUser.password);

    console.log(dbUser.password, matches);
    if (matches) {
      req.session.userId = dbUser._id;
      res.user = dbUser;
      next();
    } else {
      res.redirect('/');
    }
  });
}


// This authenticate function checks to see if there is an active session for a user. If the session is over
// or if there is any other error, it will redirect to the login page.
function authenticate(req, res, next) {
  if (req.session.userId) {
    userModel.getUserById(req.session.userId).then((dbUser) => {
      res.user = dbUser;
      next();
    }).catch(() => {
      res.redirect('/login');
    });
  } else {
    res.redirect('/login');
  }
}
// These are the exported functions
module.exports = {
  logIn,
  authenticate
};
