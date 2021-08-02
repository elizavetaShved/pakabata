import commonDatepicker from './commonDatepicker';

export default function componentOrderForm() {
  const hostElem = document.querySelector('#order-form-host');
  const datepicker = hostElem.querySelector('.gl-datepicker');

  commonDatepicker(datepicker);
}
