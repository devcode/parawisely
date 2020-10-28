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
