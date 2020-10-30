window.onscroll = function () {
  const nav = document.querySelector('.navigation');
  const panel = document.querySelector('.panel');

  if (!panel) {
    return false;
  }

  if (window.pageYOffset > 330) {
    panel.classList.add('panel-fixed');
  } else {
    panel.classList.remove('panel-fixed');
  }

  if (!nav) {
    return false;
  }
  if (window.pageYOffset > 50) {
    nav.classList.add('nav-on-scroll');
  } else {
    nav.classList.remove('nav-on-scroll');
  }
};

var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement('script'),
    s0 = document.getElementsByTagName('script')[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/5f99aa2f7f0a8e57c2d7fc20/default';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();
