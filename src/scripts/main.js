import 'normalize-css';
import '../styles/index.styl';

$(() => {

  $('.card').css('padding-top', $('.left').offset().top);

  var showHome = (fade) => {
    if (!fade) {
      $('#about').hide();
      $('#publications').hide();
      $('#home').show();
    } else {
      $('#about').fadeOut('fast');
      $('#publications').fadeOut('fast');
      $('#home').fadeIn('fast');
    }
    $('#navi-about a').removeClass('navi-active');
    $('#navi-publications a').removeClass('navi-active');
    $('#navi-home a').addClass('navi-active');
  }

  var showAbout = (fade) => {
    if (!fade) {
      $('#about').show();
      $('#publications').hide();
      $('#home').hide();
    } else {
      $('#about').fadeIn('fast');
      $('#publications').fadeOut('fast');
      $('#home').fadeOut('fast');
    }
    $('#navi-home a').removeClass('navi-active');
    $('#navi-publications a').removeClass('navi-active');
    $('#navi-about a').addClass('navi-active');
  }

  var showPublications = (fade) => {
    if (!fade) {
      $('#about').hide();
      $('#publications').show();
      $('#home').hide();
    } else {
      $('#about').fadeOut('fast');
      $('#publications').fadeIn('fast');
      $('#home').fadeOut('fast');
    }
    $('#navi-about a').removeClass('navi-active');
    $('#navi-home a').removeClass('navi-active');
    $('#navi-publications a').addClass('navi-active');
  }

  var renderFromHash = function(fade) {
    if (location.href.indexOf('#about') >= 0) {
      showAbout(fade);
    } else if (location.href.indexOf('#publications') >= 0) {
      showPublications(fade);
    } else {
      showHome(fade);
    }
  };

  renderFromHash(false);

  $('#navi-home a').click(() => {
    history.pushState(null, 'Mor Naaman', '#');
    showHome(true);
  });

  $('#navi-about a').click(() => {
    history.pushState(null, 'Mor Naaman', '#about');
    showAbout(true);
  });

  $('#navi-publications a').click(() => {
    history.pushState(null, 'Mor Naaman', '#publications');
    showPublications(true);
  });

  window.onpopstate = function(e) {
    renderFromHash(true);
  }

});
