import { EffectFade, Mousewheel, Navigation, Pagination, Swiper } from 'swiper';

Swiper.use([Navigation]);
Swiper.use([Pagination]);
Swiper.use([EffectFade]);

export default function componentBanner() {
  const hostElem = document.querySelector('#banner-host');
  const slidesListElems = hostElem.querySelectorAll('.banner__slide');

  // const commonSwiperParams = {
  //   pagination: {
  //     el: '.swiper-pagination'
  //   },
  //   centeredSlides: true,
  //   virtual: true,
  //   lazy: true,
  //   keyboard: true,
  //   speed: 400,
  // }

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
    effect: 'fade',
    speed: 400,
    breakpoints: {
      640: {
        effect: 'slide',
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

  const onResize = () => {
    if (window.innerWidth <= 1024) {

    }
  }

  swiper.on('slideNextTransitionStart', () => {
    slidesListElems[swiper.activeIndex].classList.add('mod-next-slide');
  });

  swiper.on('slideNextTransitionEnd', () => {
    clear();
  });

  swiper.on('slidePrevTransitionStart', () => {
    slidesListElems[swiper.activeIndex].classList.add('mod-prev-slide');
    slidesListElems[swiper.activeIndex + 1].classList.add('mod-prev-slide-up');
  });

  swiper.on('slidePrevTransitionEnd', () => {
    clear();
  });

  const clear = () =>
    slidesListElems.forEach(elem =>
      elem.classList.remove('mod-next-slide', 'mod-prev-slide', 'mod-prev-slide-up'));

  window.addEventListener('resize', () => {
    onResize();
  })
}
