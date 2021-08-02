import { Swiper } from 'swiper';

export default function componentHolidays() {
  const hostElem = document.querySelector('#holidays-host');
  const mainLinkContainer = hostElem.querySelectorAll('.gl-main-link-container');

  const swiper = new Swiper(hostElem.querySelector('.holidays__swiper-container'), {
    cssMode: true,
    navigation: {
      nextEl: '.holidays__btn-next',
      prevEl: '.holidays__btn-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
  });

  const setHeightLinksContainers = () => {
    let containerHeight = 0;

    mainLinkContainer.forEach(item => {
      const itemHeight = item.clientHeight;
      containerHeight = itemHeight > containerHeight ? itemHeight : containerHeight;
    })

    mainLinkContainer.forEach(item => {
      item.style.height = `${containerHeight}px`;
    })
  }

  setHeightLinksContainers();
}
