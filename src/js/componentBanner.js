import commonMainSlider from './commonMainSlider';
import { lockScroll } from './scrollBlocker';

export default function componentBanner() {
  const hostElem = document.querySelector('#banner-host');
  const sliderComponentDeskElem = hostElem.querySelector('#banner-swiper-component-desk');
  const sliderComponentMobileElem = hostElem.querySelector('#banner-swiper-component-mobile');
  const popapComponent = document.querySelector('#popap');

  const additionally = {
    classPagination: '.swiper-pagination'
  }

  hostElem.onclick = () => {
    popapComponent.classList.add('mod-show');
    lockScroll(hostElem);
  }

  commonMainSlider(sliderComponentDeskElem, sliderComponentMobileElem, additionally);
}
