import componentPopap from './componentPopap';
import { EffectFade, Mousewheel, Navigation, Swiper } from 'swiper';

Swiper.use([Navigation]);
Swiper.use([Mousewheel]);
Swiper.use([EffectFade]);

export default function componentPopapList() {
  const popapList = document.querySelectorAll('.popap');

  popapList.forEach(popapElem => {
    componentPopap(popapElem);
  })

  window.swiperPopap = new Swiper(document.querySelector('.popap-item__swiper-container'), {
    simulateTouch: true,
    centeredSlides: true,
    virtual: true,
    lazy: true,
    speed: 400,
    slidesPerView: 1,
    preventInteractionOnTransition: true,
    keyboard: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.popap-item__btn-next',
      prevEl: '.popap-item__btn-prev',
    }
  })
}
