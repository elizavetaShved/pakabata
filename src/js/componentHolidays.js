import commonMainLinks from './commonMainLinks';
import commonMainSlider from './commonMainSlider';

export default function componentHolidays() {
  const hostElem = document.querySelector('#holidays-host');
  const mainLinkContainer = hostElem.querySelectorAll('.gl-main-link-container');
  const swiperContainer = hostElem.querySelector('.holidays__swiper-container');

  commonMainSlider(swiperContainer);

  commonMainLinks(mainLinkContainer);
}
