import commonDatepicker from './commonDatepicker';
import { MAX_LENGTH_CHILDREN, MIN_LENGTH_CHILDREN } from './consts';

export default function componentOrderForm() {
  const hostElem = document.querySelector('#order-form-host');
  const datepickerElem = hostElem.querySelector('.gl-datepicker');
  const childrenMinusBtn = hostElem.querySelector('#children-btn-minus');
  const childrenPlusBtn = hostElem.querySelector('#children-btn-plus');
  const childrenInput = hostElem.querySelector('#children-input');

  childrenMinusBtn.onclick = () => {
    if (childrenInput.value >= MIN_LENGTH_CHILDREN) {
      childrenInput.value--;
      setWidthInputChildren();
    }
  }

  childrenPlusBtn.onclick = () => {
    if (childrenInput.value <= MAX_LENGTH_CHILDREN) {
      childrenInput.value++;
      setWidthInputChildren();
    }
  }

  childrenInput.oninput = () => {
    switch (true) {
      case childrenInput.value < MIN_LENGTH_CHILDREN:
        childrenInput.value = MIN_LENGTH_CHILDREN;
        break;

      case childrenInput.value > MAX_LENGTH_CHILDREN:
        childrenInput.value = MAX_LENGTH_CHILDREN;
        break;
    }
    setWidthInputChildren();
  }

  const setWidthInputChildren = () => {
    const additionalWidth = (String(childrenInput.value).length - 1) * 8;
    childrenInput.style.width = `${ 42 + additionalWidth }px`;
  }

  commonDatepicker(datepickerElem);
}
