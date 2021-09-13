import { Mousewheel, Navigation, Swiper } from 'swiper';
import commonMainSlider from './commonMainSlider';

import commonAnimationCrawling from './commonAnimationCrawling';
import commonVideoModal from './commonVideoModal';

Swiper.use([Navigation]);
Swiper.use([Mousewheel]);

export default function componentAboutPark() {
  const hostElem = document.querySelector('#about-park-host');
  const infoCaptionTextElem = hostElem.querySelectorAll('.about-park__info-caption-text');

  const sliderComponentDeskElem = hostElem.querySelector('#about-park-swiper-component-desk');
  const sliderComponentMobileElem = hostElem.querySelector('#about-park-swiper-component-mobile');

  const dudeImage = hostElem.querySelector('.about-park__dude-image');

  const additionally = {
    classCustomBtnPrev: '.about-park__btn-prev',
    classCustomBtnNext: '.about-park__btn-next'
  }

  commonMainSlider(sliderComponentDeskElem, sliderComponentMobileElem, additionally);

  // commonVideoModal(hostElem);

  // вычисление высоты блока
  const setHeightInfoBlocks = () => {
    let heightCaptionText = 0;

    infoCaptionTextElem.forEach(infoCaptionTextItem =>
      heightCaptionText = heightCaptionText < infoCaptionTextItem.clientHeight
        ? infoCaptionTextItem.clientHeight : heightCaptionText);

    infoCaptionTextElem.forEach(infoCaptionTextItem => infoCaptionTextItem.style.height = `${ heightCaptionText }px`);
  };

  setHeightInfoBlocks();

  window.addEventListener('resize', setHeightInfoBlocks);
  // < вычисление высоты блока

  commonAnimationCrawling(dudeImage);
}
