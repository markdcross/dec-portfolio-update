// Dependencies
const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
  res.render('pages/index');
});

// Portfolio page
app.get('/portfolio', function (req, res) {
  res.render('pages/portfolio');
});

app.listen(4040);
console.log(`https://localhost:${PORT} is the magic port`);
