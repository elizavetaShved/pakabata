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
    simulateTouch: true,
    keyboard: true,
    speed: 400,
  }

  const swiperDesk = new Swiper(sliderContainerDeskElem, {
    ...commonSwiperParams,
    slidesPerView: 1,
    navigation: {
      nextEl: additionally.classCustomBtnNext || '.swiper-button-next',
      prevEl: additionally.classCustomBtnPrev || '.swiper-button-prev',
    },
    spaceBetween: 8,
    effect: 'fade',
  })

  swiperDesk.on('slideNextTransitionStart', () => {
    slidesDeskListElems[swiperDesk.activeIndex].classList.add('mod-next-slide');
    checkForDisabledBtns()
  });

  swiperDesk.on('slideNextTransitionEnd', () => {
    clear();
  });

  swiperDesk.on('slidePrevTransitionStart', () => {
    slidesDeskListElems[swiperDesk.activeIndex].classList.add('mod-prev-slide');
    slidesDeskListElems[swiperDesk.activeIndex + 1].classList.add('mod-prev-slide-up');
    checkForDisabledBtns()
  });

  swiperDesk.on('slidePrevTransitionEnd', () => {
    clear();
  });

  const checkForDisabledBtns = () => {
    if (swiperDesk.activeIndex === slidesDeskListElems.length - 1) {
      sliderComponentDeskElem.classList.add('gl-slider-end');
    } else {
      sliderComponentDeskElem.classList.remove('gl-slider-end');
    }

    if (swiperDesk.activeIndex === 0) {
      sliderComponentDeskElem.classList.add('gl-slider-start');
    } else {
      sliderComponentDeskElem.classList.remove('gl-slider-start');
    }
  }

  checkForDisabledBtns();

  const clear = () =>
    slidesDeskListElems.forEach(elem =>
      elem.classList.remove('mod-next-slide', 'mod-prev-slide', 'mod-prev-slide-up'));

  const swiperMobile = new Swiper(sliderContainerMobileElem, {
    ...commonSwiperParams,
    slidesPerView: 1,
    spaceBetween: 8,
    mousewheel: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
    }
  })

  let interval;
  const changeSlide = () => {
    if (window.innerWidth > 768) {
      if (slidesDeskListElems[swiperDesk.activeIndex + 1]) {
        swiperDesk.slideTo(swiperDesk.activeIndex + 1);
        swiperMobile.slideTo(swiperDesk.activeIndex + 1);
      } else {
        swiperDesk.slideTo(0, 0);
        swiperMobile.slideTo(0, 0);
      }
    } else {
      if (slidesDeskListElems[swiperMobile.activeIndex + 1]) {
        swiperDesk.slideTo(swiperMobile.activeIndex + 1);
        swiperMobile.slideTo(swiperMobile.activeIndex + 1);
      } else {
        swiperDesk.slideTo(0);
        swiperMobile.slideTo(0);
      }
    }
  }

  const startAutoChangeSlide = () => {
    interval = setInterval(changeSlide, 5000);
  }

  const clearAutoChangeSlide = () => {
    if (interval) {
      clearInterval(interval);
    }
  }

  swiperDesk.on('slideChange', () => {
    clearAutoChangeSlide();
    startAutoChangeSlide();
  });

  swiperMobile.on('slideChange', () => {
    clearAutoChangeSlide();
    startAutoChangeSlide();
  });

  startAutoChangeSlide();
};
