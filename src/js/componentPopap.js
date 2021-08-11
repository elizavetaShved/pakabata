import commonMainSlider from './commonMainSlider';
import { checkExistParent } from './checkExistParent';
import { unlockScroll } from './scrollBlocker';

export default function componentPopap(popapElem) {
  const hostElem = popapElem;
  const sliderComponentDeskElem = hostElem.querySelector('.popap-swiper-component-desk');
  const sliderComponentMobileElem = hostElem.querySelector('.popap-swiper-component-mobile');
  const closeBtn = hostElem.querySelector('.gl-close-btn-wrapper');
  const popapContentElem = hostElem.querySelector('.popap__content');

  const tagH3 = hostElem.querySelectorAll('h3');
  const tagP = hostElem.querySelectorAll('p');
  const tagB = hostElem.querySelectorAll('b');
  const tagUl = hostElem.querySelectorAll('ul');
  const tagOl = hostElem.querySelectorAll('ol');
  const tagTable = hostElem.querySelectorAll('table');
  const tagButton = hostElem.querySelectorAll('button');

  const addClassPaddingContent = (elem) => {
    elem.classList.add('popap__padding-content');
  }

  const wrapInClassPaddingContent = (elem) => {
    const newWrapper = document.createElement('div');
    newWrapper.classList.add('popap__padding-content');
    newWrapper.classList.add('popap__margin-content');
    elem.parentNode.insertBefore(newWrapper, elem);
    newWrapper.appendChild(elem);
  }

  tagH3.forEach(elem => {
    addClassPaddingContent(elem);
  })

  tagP.forEach(elem => {
    addClassPaddingContent(elem);
  })

  tagB.forEach(elem => {
    addClassPaddingContent(elem);
  })

  tagUl.forEach(elem => {
    addClassPaddingContent(elem);
  })

  tagOl.forEach(elem => {
    addClassPaddingContent(elem);
  })

  tagTable.forEach(elem => {
    wrapInClassPaddingContent(elem);
  })

  tagButton.forEach(elem => {
    wrapInClassPaddingContent(elem);
  })

  wrapInClassPaddingContent(sliderComponentDeskElem);

  closeBtn.onclick = () => {
    closeModal();
  }

  hostElem.onclick = (e) => {
    if (!(checkExistParent(e.target, popapContentElem))) {
      closeModal();
    }
  }

  const closeModal = () => {
    hostElem.classList.remove('mod-show');
    unlockScroll(hostElem);
  }

  const additionally = {
    classCustomBtnPrev: '.popap__btn-prev',
    classCustomBtnNext: '.popap__btn-next'
  }

  commonMainSlider(sliderComponentDeskElem, sliderComponentMobileElem, additionally);
};
