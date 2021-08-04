import { Mousewheel, Navigation, Pagination, Swiper } from 'swiper';

Swiper.use([Navigation]);
Swiper.use([Mousewheel]);
Swiper.use([Pagination]);

export default function commonMainSlider(swiperContainer, btnNextClassName, btnPrevClassName) {
  const swiper = new Swiper(swiperContainer, {
    slidesPerView: 1.12,
    spaceBetween: 8,
    centeredSlides: true,
    virtual: true,
    navigation: {
      nextEl: btnNextClassName,
      prevEl: btnPrevClassName,
    },
    breakpoints: {
      640: {
        slidesPerView: 1.08,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 1,
      }
    }
  });
}
