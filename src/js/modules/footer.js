const footerLogo = document.querySelector('.footer__logo');
const footerTop = document.querySelector('.footer__top');
const footerBottom = document.querySelector('.footer__bottom');

const breakpoint = window.matchMedia('(max-width: 576px)');


if (breakpoint.matches) {
  footerBottom.prepend(footerLogo);
}

breakpoint.addEventListener('change', function (e) {
  if (e.matches) {
    footerBottom.prepend(footerLogo);
  } else {
    footerTop.prepend(footerLogo);
  }
})
