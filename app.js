const dotEnv = require('dotenv').config({silent: true});
const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index.js');
const apiRoute = require('./routes/api.js');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const dbService = require('./models/favorites');
const path = require('path');

const app = express();
const SECRET = 'doineedthis3000';

const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(express.static('./public'));
app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET
}));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/application', apiRoute);

app.post('/favorites', dbService.saveFavorite, (req, res) => {
  res.redirect('/application');
});

app.delete('/favorites/:id', dbService.deleteFavorite, (req, res) => {
  res.redirect('/application');
});

app.listen(PORT, () => console.log('Server is listening on port ', PORT));
