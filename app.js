require('dotenv').config();
const express = require('express');
const logger = require('morgan');

const itunesRoute = require('./routes/itunes.js')

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));

app.use('/', itunesRoute);

app.listen(PORT, () => console.log('Server is listening on port ', PORT));
