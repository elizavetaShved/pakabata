import { Navigation, Swiper, Mousewheel, Pagination } from 'swiper';

Swiper.use([Navigation]);
Swiper.use([Mousewheel]);
Swiper.use([Pagination]);

export default function componentBanner() {
  const hostElem = document.querySelector('#banner-host');
  const bannerContainer = hostElem.querySelector('.banner__container');

  const swiper = new Swiper(hostElem.querySelector('.banner__container'), {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
}
