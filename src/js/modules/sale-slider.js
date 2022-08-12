import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar]);

const config = {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.sale__pagination',
    type: 'fraction',
  },
  scrollbar: {
    el: '.sale__scrollbar',
  },
}
let swiper = null;

const breakpoint = window.matchMedia('(max-width: 576px)');

if (breakpoint.matches) {
  console.log('Swiper GO');
  swiper = new Swiper('.sale__swiper', config)
}

breakpoint.addEventListener('change', (e) => {
  swiper?.destroy();
  if (e.matches) {
    console.log('Swiper GO');
    swiper = new Swiper('', config)
  }
})
