import commonDatepicker from './commonDatepicker';
import { MAX_LENGTH_CHILDREN, MIN_LENGTH_CHILDREN } from './consts';

export default function componentOrderForm() {
  let INPUT_WIDTH;

  const hostElem = document.querySelector('#order-form-host');
  const datepickerElem = hostElem.querySelector('.gl-datepicker');
  const childrenMinusBtn = hostElem.querySelector('#children-btn-minus');
  const childrenPlusBtn = hostElem.querySelector('#children-btn-plus');
  const childrenInput = hostElem.querySelector('#children-input');
  // const dateInput = hostElem.querySelector('#date-input');
  // const nameInput = hostElem.querySelector('#name-input');
  // const phoneInput = hostElem.querySelector('#phone-input');
  const inputs = hostElem.querySelectorAll('.order-form__control');

  const inputNameWrapper = hostElem.querySelector('.order-form__input-name-wrapper');
  const inputChildrenWrapper = hostElem.querySelector('.order-form__input-children-wrapper');
  const inputsHideMobileArr = hostElem.querySelectorAll('.order-form__input-hide-mobile');
  // const btnSubmit = hostElem.querySelector('.order-form__btn-submit');
  // const controlContainers = hostElem.querySelectorAll('.gl-input-container');
  //
  // const form = {
  //   placeHoliday: document.getElementsByName('place-holiday'),
  //   children: document.getElementsByName('children'),
  //   date: document.getElementsByName('date'),
  //   userName: document.getElementsByName('user-name'),
  //   phone: document.getElementsByName('phone'),
  //   comment: document.getElementsByName('comment'),
  // }

  const checkSizeMobile = () => {
    if (window.innerWidth <= 768) {
      INPUT_WIDTH = 52;
    } else {
      INPUT_WIDTH = 42;
    }
    childrenInput.style.width = `${ INPUT_WIDTH }px`;
  }

  checkSizeMobile();

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
  //
  // Object.keys(form).forEach((key, index) => {
  //   const currentInput = form[key][0];
  //   currentInput.oninput = () => {
  //     switch (currentInput.getAttribute('name')) {
  //       case 'place-holiday':
  //       case 'date':
  //         break;
  //
  //       default:
  //         if (currentInput.value) {
  //           controlContainers[index].classList.remove('mod-error');
  //         }
  //     }
  //   }
  //
  //   currentInput.onblur = () => {
  //     validation(currentInput);
  //   }
  // })
  //
  // const validation = (currentInput) => {
  //   let isValid = true;
  //   if (currentInput.hasAttribute('required')) {
  //     switch (currentInput.getAttribute('name')) {
  //       case 'place-holiday':
  //         break;
  //
  //       case 'date':
  //         // todo датапикер не отобрадает, что value есть
  //         if (!$(currentInput).data().datepicker.viewDate) {
  //           controlContainers[index].classList.add('mod-error');
  //           isValid = true;
  //         }
  //         break;
  //
  //       default:
  //         if (!currentInput.value) {
  //           controlContainers[index].classList.add('mod-error');
  //           isValid = true;
  //         }
  //     }
  //   }
  //   return isValid;
  // }

  const setWidthInputChildren = () => {
    const additionalWidth = (String(childrenInput.value).length - 1) * 8;
    childrenInput.style.width = `${ INPUT_WIDTH + additionalWidth }px`;
  }

  commonDatepicker(datepickerElem);

  inputNameWrapper.onclick = () => {
    openOtherFields();
  }

  inputChildrenWrapper.onclick = () => {
    openOtherFields();
  }

  document.onclick = (e) => {
    closeOtherFields(e);
  }

  window.addEventListener('resize', () => {
    checkSizeMobile();
    setWidthInputChildren();
  })

  btnSubmit.onclick = () => {
    Object.keys(form).forEach((key, index) => {
      if (validation(form[key][0])) {
        console.log('ok')
      }
    })
  }

  const openOtherFields = () => {
    if (window.innerWidth <= 1400) {
      inputsHideMobileArr.forEach(inputHideMobileItem => {
        inputHideMobileItem.classList.add('mod-show');
      })
    }
  }

  const closeOtherFields = (e) => {
    if (window.innerWidth <= 1400) {
      if (!checkExistParent(e.target, hostElem)) {
        inputsHideMobileArr.forEach(inputHideMobileItem => {
          inputHideMobileItem.classList.remove('mod-show');
        })
      }
    }
  }
}
