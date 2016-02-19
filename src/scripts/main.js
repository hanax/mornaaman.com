import 'normalize-css';
import '../styles/index.styl';

$(() => {

  $('.card').css('padding-top', $('.left').offset().top);

  var showHome = (fade) => {
    if (!fade) {
      $('#bio').hide();
      $('#publications').hide();
      $('#home').show();
    } else {
      $('#bio').fadeOut('fast');
      $('#publications').fadeOut('fast');
      $('#home').fadeIn('fast');
    }
    $('#navi-bio a').removeClass('navi-active');
    $('#navi-publications a').removeClass('navi-active');
    $('#navi-home a').addClass('navi-active');
  }

  var showBio = (fade) => {
    if (!fade) {
      $('#bio').show();
      $('#publications').hide();
      $('#home').hide();
    } else {
      $('#bio').fadeIn('fast');
      $('#publications').fadeOut('fast');
      $('#home').fadeOut('fast');
    }
    $('#navi-home a').removeClass('navi-active');
    $('#navi-publications a').removeClass('navi-active');
    $('#navi-bio a').addClass('navi-active');
  }

  var showPublications = (fade) => {
    if (!fade) {
      $('#bio').hide();
      $('#publications').show();
      $('#home').hide();
    } else {
      $('#bio').fadeOut('fast');
      $('#publications').fadeIn('fast');
      $('#home').fadeOut('fast');
    }
    $('#navi-bio a').removeClass('navi-active');
    $('#navi-home a').removeClass('navi-active');
    $('#navi-publications a').addClass('navi-active');
  }

  if (location.hash === '#bio') {
    showBio(false);
  } else if (location.hash === '#publications') {
    showPublications(false);
  } else {
    showHome(false);
  }

  $('#navi-home a').click(() => {
    showHome(true);
  });

  $('#navi-bio a').click(() => {
    showBio(true);
  });

  $('#navi-publications a').click(() => {
    showPublications(true);
  });

});
