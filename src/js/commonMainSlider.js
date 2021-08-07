import { EffectFade, Mousewheel, Navigation, Pagination, Swiper } from 'swiper';

Swiper.use([Navigation]);
Swiper.use([Pagination]);
Swiper.use([EffectFade]);
Swiper.use([Mousewheel]);

// fixme
//  interface additionally {
//    classCustomBtnPrev: string,
//    classCustomBtnNext: string,
//    classPagination: string
//  }

export default function commonMainSlider(sliderComponentDeskElem, sliderComponentMobileElem, additionally) {
  const sliderContainerDeskElem = sliderComponentDeskElem.querySelector('.swiper-container');
  const sliderContainerMobileElem = sliderComponentMobileElem.querySelector('.swiper-container');
  const slidesDeskListElems = sliderComponentDeskElem.querySelectorAll('.swiper-slide');

  const commonSwiperParams = {
    pagination: {
      el: additionally.classPagination || '.swiper-pagination'
    },
    centeredSlides: true,
    virtual: true,
    lazy: true,
    keyboard: true,
    speed: 400,
  }

  const swiperDesk = new Swiper(sliderContainerDeskElem, {
    ...commonSwiperParams,
    slidesPerView: 1,
    navigation: {
      nextEl: additionally.classCustomBtnNext ||  '.swiper-button-next',
      prevEl: additionally.classCustomBtnPrev || '.swiper-button-prev',
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

  const swiperMobile = new Swiper(sliderContainerMobileElem, {
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
