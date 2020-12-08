//* =================================
//* Dependencies
//* =================================
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/index')

const app = express();


//* =================================
//* EJS
//* =================================
// set the view engine to ejs
app.set('view engine', 'ejs');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
// Set static folder
app.use(express.static(process.cwd() + '/public'));

routes(app);

const PORT = process.env.PORT || 4040;

app.listen(PORT, console.log(`http://localhost:${PORT} is the magic port`));
