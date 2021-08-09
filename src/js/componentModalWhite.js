import { unlockScroll } from './scrollBlocker';
import { checkExistParent } from './checkExistParent';
import componentOrderForm from './componentOrderForm';

export default function componentModalWhite() {
  const hostElem = document.querySelector('#modal-white-host');
  const orderFormElem = document.querySelector('#order-form-host');
  const closeBtn = hostElem.querySelector('.modal-white__close-btn');
  const modalWrapperElem = hostElem.querySelector('.modal-white__content-wrapper');
  const modalInfoElem = hostElem.querySelectorAll('.modal-white__info');

  const onUnlockScroll = () => {
    hostElem.classList.remove('mod-show');
    unlockScroll(hostElem);
  }

  closeBtn.onclick = () => {
    onUnlockScroll();
  }

  componentOrderForm()

  hostElem.onclick = (e) => {
    if (!(checkExistParent(e.target, modalWrapperElem))) {
      onUnlockScroll();
    }
  }

  orderFormElem.onsubmit = event => {
    modalInfoElem[0].classList.remove('mod-show');
    modalInfoElem[1].classList.add('mod-show');
  }
};
