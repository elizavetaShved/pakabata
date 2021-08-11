import commonDatepicker from './commonDatepicker';
import { MAX_LENGTH_CHILDREN, MIN_LENGTH_CHILDREN } from './consts';
import phoneMask from './phoneMask';

export default function commonOrderForm(container, datepickerId, modalInfoElems) {
  let INPUT_WIDTH;
  const hostElem = container;

  const datepickerElem = hostElem.querySelector('.gl-datepicker');
  const childrenMinusBtn = hostElem.querySelector('.children-btn-minus');
  const childrenPlusBtn = hostElem.querySelector('.children-btn-plus');
  const childrenInput = hostElem.querySelector('.children-input');

  const inputNameWrapper = hostElem.querySelector('.order-form__input-name-wrapper');
  const inputChildrenWrapper = hostElem.querySelector('.order-form__input-children-wrapper');
  const inputsHideMobileArr = hostElem.querySelectorAll('.order-form__input-hide-mobile');

  const checkSizeMobile = () => {
    if (window.innerWidth <= 768) {
      INPUT_WIDTH = 52;
    } else {
      INPUT_WIDTH = 42;
    }
    childrenInput.style.width = `${ INPUT_WIDTH }px`;
  }

  const setWidthInputChildren = () => {
    const additionalWidth = (String(childrenInput.value).length - 1) * 8;
    childrenInput.style.width = `${ INPUT_WIDTH + additionalWidth }px`;
  }

  const openOtherFields = () => {
    if (window.innerWidth <= 1400) {
      inputsHideMobileArr.forEach(inputHideMobileItem => {
        inputHideMobileItem.classList.add('mod-show');
      })
    }
  }

  checkSizeMobile();
  commonDatepicker(datepickerElem, datepickerId);
  phoneMask();

  window.addEventListener('resize', () => {
    checkSizeMobile();
    setWidthInputChildren();
  });

  childrenMinusBtn.onclick = () => {
    if (childrenInput.value > MIN_LENGTH_CHILDREN) {
      childrenInput.value--;
      setWidthInputChildren();
    }
  }

  childrenPlusBtn.onclick = () => {
    if (childrenInput.value < MAX_LENGTH_CHILDREN) {
      childrenInput.value++;
      setWidthInputChildren();
    }
  }

  childrenInput.oninput = () => {
    switch (true) {
      case childrenInput.value === '':
        break;

      case childrenInput.value < MIN_LENGTH_CHILDREN:
        childrenInput.value = MIN_LENGTH_CHILDREN;
        break;

      case childrenInput.value > MAX_LENGTH_CHILDREN:
        childrenInput.value = MAX_LENGTH_CHILDREN;
        break;
    }
    setWidthInputChildren();
  }

  childrenInput.onchange = () => {
    if (childrenInput.value === '') {
      childrenInput.value = MIN_LENGTH_CHILDREN;
      setWidthInputChildren();
    }
  }

  inputNameWrapper.onclick = () => {
    openOtherFields();
  }

  inputChildrenWrapper.onclick = () => {
    openOtherFields();
  }

  hostElem.onsubmit = () => {
    // event.preventDefault();

    if (modalInfoElems) {
      modalInfoElems[0].classList.remove('mod-show');
      modalInfoElems[1].classList.add('mod-show');
    }

    if ($(hostElem).parsley().isValid()) {
      hostElem.reset();
      $(hostElem).parsley().reset();
    }
  }
}
