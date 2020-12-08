module.exports = (app) => {
  // index page
  app.get('/', function (req, res) {
    res.render('pages/index');
  });
  // Portfolio page
  app.get('/portfolio', function (req, res) {
    res.render('pages/portfolio');
  });
};
