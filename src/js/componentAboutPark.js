import { Navigation, Swiper, Mousewheel } from 'swiper';
import commonMainSlider from './commonMainSlider';

Swiper.use([Navigation]);
Swiper.use([Mousewheel]);

export default function componentAboutPark() {
  const hostElem = document.querySelector('#about-park-host');
  const infoCaptionTextElem = hostElem.querySelectorAll('.about-park__info-caption-text');

  const openVideoBtn = hostElem.querySelector('.about-park__btn-video-wrapper');
  const closeVideoBtn = hostElem.querySelector('.about-park__close-btn');
  const videoContainerElem = hostElem.querySelector('.about-park__modal-container');

  const swiperContainer = hostElem.querySelector('.about-park__swiper-container');

  commonMainSlider(swiperContainer, '.about-park__btn-next', '.about-park__btn-prev');

  // вычисление высоты блока
  openVideoBtn.onclick = () => {
    videoContainerElem.classList.add('mod-show');
  }

  closeVideoBtn.onclick = () => {
    videoContainerElem.classList.remove('mod-show');
  }

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
}
