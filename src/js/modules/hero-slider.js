// Подключение свайпера
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar]);

const desktopConfig = {
  pagination: {
    el: '.hero__pagination',
    clickable: true,
    bulletClass: 'hero__pagination-bullet',
    bulletActiveClass: "hero__pagination-bullet--active",
    renderBullet: function (index, className) {
      const number = index < 9 ? `0${index + 1}` : index + 1;
      return `<span class="${className}">${number}</span>`
    },
  }
}

const mobileConfig = {
  spaceBetween: 10,
  pagination: {
    el: '.hero__pagination',
    type: 'fraction',
  },
  scrollbar: {
    el: '.hero__scrollbar',
  },
}

const breakpoint = window.matchMedia('(max-width: 768px)');
let heroSlider = new Swiper(".hero__swiper", breakpoint.matches ? mobileConfig : desktopConfig);

breakpoint.addEventListener('change', (e) => {
  heroSlider.destroy();
  heroSlider = new Swiper(".hero__swiper", e.matches ? mobileConfig : desktopConfig);
})
