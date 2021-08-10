import { checkExistParent } from './checkExistParent';
import { unlockScroll } from './scrollBlocker';

export default function componentModalOrderHolidays() {
  const hostElem = document.querySelector('#modal-order-holidays-host');
  const formElem = hostElem.querySelector('.modal-order-holidays__form-wrapper');
  const modalContentWrapperElem = hostElem.querySelector('.modal-order-holidays__content-wrapper');
  const modalContentElems = hostElem.querySelectorAll('.modal-order-holidays__content');
  const closeBtn = hostElem.querySelector('.modal-order-holidays__close-btn');

  const openModalBtns = document.querySelectorAll('.header__order-holidays-btn');

  const setMarginModal = () => {
    if (window.innerWidth > 1024) {
      let btnPosition;
      if (window.innerWidth > 1400) {
        btnPosition = openModalBtns[0].getBoundingClientRect();
      } else if (window.innerWidth <= 1400) {
        btnPosition = openModalBtns[1].getBoundingClientRect();
      }
      modalContentWrapperElem.style.paddingTop = `${ btnPosition.y + btnPosition.height + 20 }px`;
      modalContentWrapperElem.style.paddingRight = `${ window.innerWidth - (btnPosition.x + btnPosition.width + 10) }px`;
    }
  };

  const onUnlockScroll = () => {
    hostElem.classList.remove('mod-show');
    modalContentElems[0].classList.add('mod-show');
    modalContentElems[1].classList.remove('mod-show');
    unlockScroll(hostElem);
  }

  formElem.onsubmit = event => {
    event.preventDefault();
    modalContentElems[0].classList.remove('mod-show');
    modalContentElems[1].classList.add('mod-show');

    if ($(formElem).parsley().isValid()) {
      formElem.reset();
      $(formElem).parsley().reset();
    }
  }

  closeBtn.onclick = () => {
    onUnlockScroll();
  }

  hostElem.onclick = (e) => {
    let touchedByElement = true;
    modalContentElems.forEach(elem => {
      if (checkExistParent(e.target, elem)) {
        touchedByElement = false;
      }
    })

    if (touchedByElement) {
      onUnlockScroll();
    }
  }

  window.addEventListener('resize', () => {
    setMarginModal();
  })

  setMarginModal();
}
