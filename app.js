const express = require('express');
const logger = require('morgan');

const homeRoute = require('./routes/home.js');
const apiRoute = require('./routes/api.js');
// const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
// const itunesDbService = require('./models/itunes');
// const lyricsDbService = require('./models/lyricsNMusicDB');
// const songsterrDbService = require('./models/songsterrDB');
// const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use(express.static('./public'));

app.use('/', homeRoute);
app.use('/application', apiRoute);

app.listen(PORT, () => console.log('Server is listening on port ', PORT));
