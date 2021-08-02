import { Swiper } from 'swiper';

export default function componentHolidays() {
  const hostElem = document.querySelector('#holidays-host');

  const swiper = new Swiper(hostElem.querySelector('.holidays__swiper-container'), {
    cssMode: true,
    navigation: {
      nextEl: '.holidays__btn-next',
      prevEl: '.holidays__btn-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
  });
}
