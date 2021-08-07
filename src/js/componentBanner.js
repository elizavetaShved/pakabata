import commonMainSlider from './commonMainSlider';

export default function componentBanner() {
  const hostElem = document.querySelector('#banner-host');
  const sliderComponentDeskElem = hostElem.querySelector('#banner-swiper-component-desk');
  const sliderComponentMobileElem = hostElem.querySelector('#banner-swiper-component-mobile');

  const additionally = {
    classPagination: '.swiper-pagination'
  }

  commonMainSlider(sliderComponentDeskElem, sliderComponentMobileElem, additionally);
}
