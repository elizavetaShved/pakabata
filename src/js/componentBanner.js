import commonMainSlider from './commonMainSlider';
import { lockScroll } from './scrollBlocker';

export default function componentBanner() {
  const hostElem = document.querySelector('#banner-host');
  const sliderComponentDeskElem = hostElem.querySelector('#banner-swiper-component-desk');
  const sliderComponentMobileElem = hostElem.querySelector('#banner-swiper-component-mobile');
  const popapComponent = document.querySelectorAll('.popap');
  const slidesList = hostElem.querySelectorAll('.banner__slide');

  const btnNext = hostElem.querySelector('.banner__btn-next');
  const btnPrev = hostElem.querySelector('.banner__btn-prev');

  const additionally = {
    classPagination: '.swiper-pagination'
  }

  slidesList.forEach((slideElem, index) => {
    slideElem.onclick = (e) => {
      if (e.target !== btnNext && e.target !== btnPrev) {
        let actualIndexSlide = index;
        if (window.innerWidth <= 1024) {
          actualIndexSlide = index - (slidesList.length / 2);
        }
        console.log(actualIndexSlide)
        popapComponent[actualIndexSlide].classList.add('mod-show');
        lockScroll(hostElem);
      }
    }
  })

  commonMainSlider(sliderComponentDeskElem, sliderComponentMobileElem, additionally);
}
