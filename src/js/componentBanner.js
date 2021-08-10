import commonMainSlider from './commonMainSlider';
import openPopap from './openPopap';

export default function componentBanner() {
  const hostElem = document.querySelector('#banner-host');
  const sliderComponentDeskElem = hostElem.querySelector('#banner-swiper-component-desk');
  const sliderComponentMobileElem = hostElem.querySelector('#banner-swiper-component-mobile');
  const bannerSlidesList = hostElem.querySelectorAll('.banner__slide');

  const btnNext = hostElem.querySelector('.banner__btn-next');
  const btnPrev = hostElem.querySelector('.banner__btn-prev');

  const additionally = {
    classPagination: '.swiper-pagination'
  }

  bannerSlidesList.forEach((slideElem, index) => {
    slideElem.onclick = (e) => {
      if (e.target !== btnNext && e.target !== btnPrev) {
        openPopap(index);
      }
    }
  })

  commonMainSlider(sliderComponentDeskElem, sliderComponentMobileElem, additionally);
}
