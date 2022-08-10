// Подключение свайпера
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

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
