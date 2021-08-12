import commonMainSlider from './commonMainSlider';
import { checkExistParent } from './checkExistParent';
import { unlockScroll } from './scrollBlocker';

export default function componentPopap(popapElem) {
  const hostElem = popapElem;
  const sliderComponentDeskElem = hostElem.querySelectorAll('.popap-swiper-component-desk');
  const sliderComponentMobileElem = hostElem.querySelectorAll('.popap-swiper-component-mobile');
  const closeBtn = hostElem.querySelectorAll('.gl-close-btn-wrapper');
  const popapContentElem = hostElem.querySelectorAll('.popap__content');
  const btnPopapItemNext = hostElem.querySelector('.popap-item__btn-next');
  const btnPopapItemPrev = hostElem.querySelector('.popap-item__btn-prev');
  const btnOpenForm = hostElem.querySelector('.popap__btn');

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

  const wrapInClassPaddingContent = (elem, additionalWrapper) => {
    const newWrapper = document.createElement('div');
    if (elem.className !== 'gl-close-btn-wrapper'
      && elem.className !== 'gl-transparent-btn popap__btn gl-tablet-hide'
      && !elem.className.includes('popap-item__btn-next')
      && !elem.className.includes('popap-item__btn-prev')) {
      newWrapper.classList.add('popap__padding-content');
    }
    if (elem.className !== 'gl-close-btn-wrapper'
      && elem.className !== 'gl-transparent-btn popap__btn gl-tablet-hide'
      && !elem.className.includes('popap-item__btn-next')
      && !elem.className.includes('popap-item__btn-prev')) {
      newWrapper.classList.add('popap__margin-content');
    }
    if (additionalWrapper) {
      newWrapper.classList.add('popap__additional-margin-content');
    }
    elem.parentNode.insertBefore(newWrapper, elem);
    newWrapper.appendChild(elem);
  }

  const closeModal = () => {
    hostElem.classList.remove('mod-show');
    unlockScroll(hostElem);
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
    wrapInClassPaddingContent(elem, true);
  })

  tagButton.forEach(elem => {
    wrapInClassPaddingContent(elem);
  })

  closeBtn.forEach(elem => {
    elem.onclick = () => {
      closeModal();
    }
  })

  hostElem.onclick = (e) => {
    let clickPopapContent = false;

    popapContentElem.forEach(btnPrev => {
      if (checkExistParent(e.target, btnPrev)) {
        clickPopapContent = true;
      }
    });

    if (!clickPopapContent && !checkExistParent(e.target, btnPopapItemNext) && !checkExistParent(e.target, btnPopapItemPrev)) {
      closeModal();
    }
  }

  document.onkeydown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  btnOpenForm.onclick = () => {
    closeModal();
  }

  const additionally = {
    classCustomBtnPrev: '.popap__btn-prev',
    classCustomBtnNext: '.popap__btn-next'
  }

  popapContentElem.forEach((el, index) => {
    commonMainSlider(sliderComponentDeskElem[index], sliderComponentMobileElem[index], additionally);
  })
};
