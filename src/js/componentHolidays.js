import commonMainLinks from './commonMainLinks';
import commonMainSlider from './commonMainSlider';
import 'bootstrap-datepicker';
import 'bootstrap-datepicker/js/locales/bootstrap-datepicker.ru';
import commonOrderForm from './commonOrderForm';

export default function componentHolidays() {
  const hostElem = document.querySelector('#holidays-host');
  const orderFormElem = document.querySelector('#order-form-holidays-host');
  const mainLinkContainer = hostElem.querySelectorAll('.gl-main-link-container');
  const sliderComponentDeskElem = hostElem.querySelector('#holidays-swiper-component-desk');
  const sliderComponentMobileElem = hostElem.querySelector('#holidays-swiper-component-mobile');

  const additionally = {
    classCustomBtnPrev: '.holidays__btn-prev',
    classCustomBtnNext: '.holidays__btn-next'
  }

  commonMainSlider(sliderComponentDeskElem, sliderComponentMobileElem, additionally);

  commonMainLinks(mainLinkContainer);

  commonOrderForm(orderFormElem, '#datepicker-holidays');
}
