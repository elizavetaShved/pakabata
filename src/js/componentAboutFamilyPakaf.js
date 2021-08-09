import commonMainSlider from './commonMainSlider';
import Rellax from 'rellax';

export default function componentAboutFamilyPakaf() {
  const hostElem = document.querySelector('#about-family-pakaf-host');
  const sliderComponentDeskElem = hostElem.querySelector('#about-family-pakaf-swiper-component-desk');
  const sliderComponentMobileElem = hostElem.querySelector('#about-family-pakaf-swiper-component-mobile');

  const additionally = {
    classCustomBtnPrev: '.about-family-pakaf__btn-prev',
    classCustomBtnNext: '.about-family-pakaf__btn-next'
  }

  new Rellax('#about-family-pakaf-rellax', {
    speed: 5,
    center: true
  });

  commonMainSlider(sliderComponentDeskElem, sliderComponentMobileElem, additionally);
}
