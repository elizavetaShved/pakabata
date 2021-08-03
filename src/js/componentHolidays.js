import commonMainLinks from './commonMainLinks';
import commonMainSlider from './commonMainSlider';
import 'bootstrap-datepicker';
import 'bootstrap-datepicker/js/locales/bootstrap-datepicker.ru';

export default function componentHolidays() {
  const hostElem = document.querySelector('#holidays-host');
  const mainLinkContainer = hostElem.querySelectorAll('.gl-main-link-container');
  const swiperContainer = hostElem.querySelector('.holidays__swiper-container');

  commonMainSlider(swiperContainer, '.holidays__btn-next', '.holidays__btn-prev');

  commonMainLinks(mainLinkContainer);
}
