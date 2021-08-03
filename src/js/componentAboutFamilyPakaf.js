import commonMainSlider from './commonMainSlider';

export default function componentAboutFamilyPakaf() {
  const hostElem = document.querySelector('#about-family-pakaf-host');
  const swiperContainer = hostElem.querySelector('.about-family-pakaf__swiper-container');

  commonMainSlider(
    swiperContainer,
    '.about-family-pakaf__btn-next',
    '.about-family-pakaf__btn-prev'
  );
}
