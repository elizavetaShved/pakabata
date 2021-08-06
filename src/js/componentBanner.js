import { EffectFade, Mousewheel, Navigation, Pagination, Swiper } from 'swiper';

Swiper.use([Navigation]);
Swiper.use([Mousewheel]);
Swiper.use([Pagination]);
Swiper.use([EffectFade]);

export default function componentBanner() {
  const hostElem = document.querySelector('#banner-host');
  const slidesListElems = hostElem.querySelectorAll('.banner__slide');

  let currentSlide = 0;

  const swiper = new Swiper(hostElem.querySelector('.banner__container'), {
    pagination: {
      el: '.swiper-pagination'
    },
    effect: 'fade',
    speed: 0.000000001,
    grabCursor: true,
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

  swiper.on('slideChange', () => {
    if (currentSlide < swiper.activeIndex) {
      slidesListElems[swiper.activeIndex].classList.add('mod-next-slide');
      setTimeout(() => {
        slidesListElems[swiper.activeIndex].classList.remove('mod-next-slide');
      }, 250)
      currentSlide++;
    } else {
      slidesListElems[swiper.activeIndex].classList.add('mod-prev-slide');
      setTimeout(() => {
        slidesListElems[swiper.activeIndex].classList.remove('mod-prev-slide');
      }, 250)
      currentSlide--;
    }
  });
}
