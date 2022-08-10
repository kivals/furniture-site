// Подключение свайпера
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

/**
 * Конфигурация слайдера для блока hero
 */
new Swiper(".hero__swiper", {
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
});

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
