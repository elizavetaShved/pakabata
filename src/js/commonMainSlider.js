import { Swiper } from 'swiper';

export default function commonMainSlider(swiperContainer, btnNextClassName, btnPrevClassName) {
  const swiper = new Swiper(swiperContainer, {
    cssMode: true,
    navigation: {
      nextEl: btnNextClassName,
      prevEl: btnPrevClassName,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
  });
}
