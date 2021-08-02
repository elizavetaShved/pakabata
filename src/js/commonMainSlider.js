import { Swiper } from 'swiper';

export default function commonMainSlider(swiperContainer, navigationBtnsArr, navigationBtnWrappersArr) {
  const swiper = new Swiper(swiperContainer, {
    cssMode: true,
    navigation: {
      nextEl: '.holidays__btn-next',
      prevEl: '.holidays__btn-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
  });

  if (navigationBtnsArr && navigationBtnWrappersArr) {
    navigationBtnsArr.forEach((btnItem, btnIndex) => {
      btnItem.onclick = () => {
        console.log(123)
        navigationBtnWrappersArr.forEach((btnWrapperItem, btnWrapperIndex) => {
          if (btnIndex === btnWrapperIndex) {
            btnWrapperItem.classList.add('mod-active');
            console.log(btnWrapperItem)
          } else {
            btnWrapperItem.classList.remove('mod-active');
          }
        })
        swiper.slideTo(btnIndex);
      }
    })
  }
}
