//* =================================
//* Dependencies
//* =================================
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//* =================================
//* EJS
//* =================================
// set the view engine to ejs
app.set('view engine', 'ejs');
// index page
app.get('/', function (req, res) {
  res.render('pages/index');
});
// Portfolio page
app.get('/portfolio', function (req, res) {
  res.render('pages/portfolio');
});

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 4040;

app.listen(PORT, console.log(`http://localhost:${PORT} is the magic port`));
