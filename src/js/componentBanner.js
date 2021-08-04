import { Navigation, Swiper, Mousewheel, Pagination } from 'swiper';

Swiper.use([Navigation]);
Swiper.use([Mousewheel]);
Swiper.use([Pagination]);

export default function componentBanner() {
  const hostElem = document.querySelector('#banner-host');

  const swiper = new Swiper(hostElem.querySelector('.banner__container'), {
    pagination: {
      el: '.swiper-pagination'
    },
    slidesPerView: 1.12,
    spaceBetween: 8,
    centeredSlides: true,
    virtual: true,
    lazy: true,
    keyboard: true,
    breakpoints: {
      640: {
        slidesPerView: 1.08,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
    }
  });
}
