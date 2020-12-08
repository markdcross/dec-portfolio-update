//* =================================
//* Dependencies
//* =================================
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();

//* =================================
//* EJS
//* =================================
// set the view engine to ejs
app.set('view engine', 'ejs');

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Set static folder
app.use(express.static(process.cwd() + '/public'));

require('./routes/index')(app);

const PORT = process.env.PORT || 4040;

app.listen(PORT, console.log(`http://localhost:${PORT} is the magic port`));
