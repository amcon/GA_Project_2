const express = require('express');
const logger = require('morgan');

const homeRoute = require('./routes/home.js');
const apiRoute = require('./routes/api.js');
const dbService = require('./models/favorites');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const methodOverride  = require('method-override');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(methodOverride('_method'));

app.use(express.static('./public'));

app.use('/', homeRoute);
app.use('/application', apiRoute);

app.post('/favorites', dbService.saveFavorite, (req, res) => {
  res.redirect('/application');
});

app.delete('/favorites/:id', dbService.deleteFavorite, (req, res) => {
  res.redirect('/application');
});

app.listen(PORT, () => console.log('Server is listening on port ', PORT));

