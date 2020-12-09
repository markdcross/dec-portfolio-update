module.exports = (app) => {
  const nodemailer = require('nodemailer');
  //* =============================
  //* HTML
  //* =============================
  // index page
  app.get('/', (req, res) => {
    res.render('pages/index');
  });
  // Portfolio page
  app.get('/portfolio', (req, res) => {
    res.render('pages/portfolio');
  });

  //* =============================
  //* Nodemailer
  // TODO Debug - Gmail only works on chrome, yahoo doesnt work at all
  //* =============================
  // POST route from contact form
  app.post('/contact', (req, res) => {
    // Instantiate the SMTP server
    const smtpTrans = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.myEmailUser,
        pass: process.env.myEmailPass
      }
    });

    // Specify what the email will look like
    const mailOpts = {
      from: req.body.formEmail, // This is ignored by Gmail
      to: process.env.myEmail,
      subject: 'New message from contact form at markdcross.me',
      text: `${req.body.formName} (${req.body.formEmail}) says: ${req.body.formMessage}`
    };

    // Attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: ' + info.response);
      res.status(200).end();
    });
  });
};
