$(document).ready(function () {
  //* =============================
  //* Nodemailer
  //* =============================
  $('#contactSubmit').on('click', (e) => {
    const formName = $('#formName').val().trim();
    const formEmail = $('#formEmail').val().trim();
    const formMessage = $('#formMessage').val().trim();

    const data = {
      formName,
      formEmail,
      formMessage
    };

    $.post('/contact', data, function () {
      console.log('Server received our data');
    });
  });
  //* =============================
  //* Index
  //* =============================
  // Intro animation timing
  setTimeout(introduce, 2000);
  setTimeout(getToKnow, 4000);

  // Index footer-nav click events
  $('#introBtn').click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $('#heroDiv').addClass('hide');
    $('#stackDiv').addClass('hide');
    $('#brewDiv').addClass('hide');
    $('#introDiv').removeClass('hide');
  });

  $('#stackBtn').click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $('#heroDiv').addClass('hide');
    $('#introDiv').addClass('hide');
    $('#brewDiv').addClass('hide');
    $('#stackDiv').removeClass('hide');
  });

  $('#brewBtn').click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $('#heroDiv').addClass('hide');
    $('#introDiv').addClass('hide');
    $('#stackDiv').addClass('hide');
    $('#brewDiv').removeClass('hide');
  });

  function introduce() {
    $('#imMark').animate({ fontSize: '4rem' }, 1000);
    $('#subHeading').animate({ opacity: 1 }, 1000);
    $('.heroIndex').animate({ opacity: 1 }, 1000);
  }

  function getToKnow() {
    $('#getToKnowMe').animate({ opacity: 1 }, 1000);
  }

  //* ---------------------
  //* Portfolio
  //* ---------------------
});
