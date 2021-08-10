import { unlockScroll } from './scrollBlocker';
import { checkExistParent } from './checkExistParent';
import commonOrderForm from './commonOrderForm';

export default function componentModalWhite() {
  const hostElem = document.querySelector('#modal-white-host');
  const orderFormElem = document.querySelector('#order-form-modal-white-host');
  const closeBtn = hostElem.querySelector('.modal-white__close-btn');
  const modalWrapperElem = hostElem.querySelector('.modal-white__content-wrapper');
  const modalInfoElems = hostElem.querySelectorAll('.modal-white__info');

  const onUnlockScroll = () => {
    hostElem.classList.remove('mod-show');
    modalInfoElems[0].classList.add('mod-show');
    modalInfoElems[1].classList.remove('mod-show');
    unlockScroll(hostElem);
  }

  closeBtn.onclick = () => {
    onUnlockScroll();
  }

  commonOrderForm(orderFormElem, '#datepicker-modal-white', modalInfoElems)

  hostElem.onclick = (e) => {
    if (!(checkExistParent(e.target, modalWrapperElem))) {
      onUnlockScroll();
    }
  }
};
