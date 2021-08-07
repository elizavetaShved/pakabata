import { EffectFade, Mousewheel, Navigation, Pagination, Swiper } from 'swiper';

Swiper.use([Navigation]);
Swiper.use([Pagination]);
Swiper.use([EffectFade]);
Swiper.use([Mousewheel]);

export default function componentBanner() {
  const hostElem = document.querySelector('#banner-host');
  const sliderDeskElem = hostElem.querySelector('#banner-swiper-desk');
  const slidesDeskListElems = sliderDeskElem.querySelectorAll('.banner__slide');
  const sliderMobileElem = hostElem.querySelector('#banner-swiper-mobile');

  const commonSwiperParams = {
    pagination: {
      el: '.swiper-pagination'
    },
    centeredSlides: true,
    virtual: true,
    lazy: true,
    keyboard: true,
    speed: 400,
  }

  const swiperDesk = new Swiper(sliderDeskElem, {
    ...commonSwiperParams,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 8,
    effect: 'fade',
  })

  swiperDesk.on('slideNextTransitionStart', () => {
    slidesDeskListElems[swiperDesk.activeIndex].classList.add('mod-next-slide');
  });

  swiperDesk.on('slideNextTransitionEnd', () => {
    clear();
  });

  swiperDesk.on('slidePrevTransitionStart', () => {
    slidesDeskListElems[swiperDesk.activeIndex].classList.add('mod-prev-slide');
    slidesDeskListElems[swiperDesk.activeIndex + 1].classList.add('mod-prev-slide-up');
  });

  swiperDesk.on('slidePrevTransitionEnd', () => {
    clear();
  });

  const clear = () =>
    slidesDeskListElems.forEach(elem =>
      elem.classList.remove('mod-next-slide', 'mod-prev-slide', 'mod-prev-slide-up'));

  const swiperMobile = new Swiper(sliderMobileElem, {
    ...commonSwiperParams,
    slidesPerView: 1.12,
    spaceBetween: 8,
    mousewheel: true,
    breakpoints: {
      640: {
        slidesPerView: 1.08,
        spaceBetween: 16,
      },
    }
  })
}
