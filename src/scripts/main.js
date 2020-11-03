window.onscroll = function () {
  const nav = document.querySelector('.navigation');
  if (!nav) {
    return false;
  }
  if (window.pageYOffset > 50) {
    nav.classList.add('nav-on-scroll');
  } else {
    nav.classList.remove('nav-on-scroll');
  }
};

// eslint-disable-next-line no-use-before-define
var Tawk_API = Tawk_API || {},
  // eslint-disable-next-line no-unused-vars
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
