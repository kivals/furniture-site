// Подключение свайпера
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

/**
 * Конфигурация слайдера для блока reviews
 */
new Swiper(".reviews__swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".reviews__swiper-pagination",
    clickable: true,
    bulletClass: 'reviews__pagination-bullet',
    bulletActiveClass: 'reviews__pagination-bullet--active',
  },
  navigation: {
    nextEl: '.reviews__slider-btn--next',
    prevEl: '.reviews__slider-btn--prev',
  }
});
