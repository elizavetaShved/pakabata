import { Navigation, Swiper, Mousewheel } from 'swiper';

Swiper.use([Navigation]);
Swiper.use([Mousewheel]);

export default function componentAboutPark() {
  const hostElem = document.querySelector('#about-park-host');
  const infoCaptionTextElem = hostElem.querySelectorAll('.about-park__info-caption-text');

  const navigationBtnWrappersArr = hostElem.querySelectorAll('.about-park__navigation-btn-wrapper');
  const navigationBtnsArr = hostElem.querySelectorAll('.about-park__navigation-btn');

  const openVideoBtn = hostElem.querySelector('.about-park__btn-video-wrapper');
  const closeVideoBtn = hostElem.querySelector('.about-park__close-btn');
  const videoContainerElem = hostElem.querySelector('.about-park__modal-container');

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

  const swiper = new Swiper(hostElem.querySelector('.about-park__swiper-container'), {
    cssMode: true,
    navigation: {
      nextEl: '.about-park__btn-next',
      prevEl: '.about-park__btn-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
  });

  navigationBtnsArr.forEach((btnItem, btnIndex) => {
    btnItem.onclick = () => {
      navigationBtnWrappersArr.forEach((btnWrapperItem, btnWrapperIndex) => {
        if (btnIndex === btnWrapperIndex) {
          btnWrapperItem.classList.add('mod-active');
        } else {
          btnWrapperItem.classList.remove('mod-active');
        }
      })
      swiper.slideTo(btnIndex);
    }
  })
}
