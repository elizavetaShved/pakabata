import { lockScroll, unlockScroll } from './scrollBlocker';
import { checkExistParent } from './checkExistParent';

export default function componentHeader() {
  const hostElem = document.querySelector('#header-host');
  const burgerBtn = hostElem.querySelector('.header__burger-wrapper');
  const sidebarContainerElem = hostElem.querySelector('.header__sidebar-container');
  const sidebarWrapperElem = hostElem.querySelector('.header__sidebar-wrapper');
  const closeBtn = hostElem.querySelector('.header__sidebar-close-btn-wrapper');
  const geolocationLinkSidebar = sidebarContainerElem.querySelector('.header__geolocation');
  const menuItemsArr = hostElem.querySelectorAll('.header__menu-item');
  const writeBtns = hostElem.querySelectorAll('.header__write-btn');
  const orderHolidaysBtns = hostElem.querySelectorAll('.header__order-holidays-btn');

  const modalWhiteElem = document.querySelector('#modal-white-host');
  const modalWhiteWrapperElem = modalWhiteElem.querySelector('.modal-white__content-wrapper');

  const modalOrderHolidaysElem = document.querySelector('#modal-order-holidays-host');
  const modalOrderFormWrapperElem = modalOrderHolidaysElem.querySelector('.modal-order-holidays__content');

  burgerBtn.onclick = () => {
    openSidebar();
  }

  sidebarContainerElem.onclick = (e) => {
    if (e.target === sidebarContainerElem || checkExistParent(e.target, closeBtn)) {
      closeSidebar();
    }
  }

  geolocationLinkSidebar.onclick = () => {
    closeSidebar();
  }

  closeBtn.onclick = () => {
    openSidebar();
  }

  menuItemsArr.forEach(menuItem => {
    menuItem.onclick = () => {
      closeSidebar();
    }
  })

  orderHolidaysBtns.forEach(writeBtn => {
    writeBtn.onclick = () => {
      modalWhiteElem.classList.add('mod-show');
      lockScroll(modalWhiteWrapperElem);
    }
  })

  writeBtns.forEach(writeBtn => {
    writeBtn.onclick = () => {
      modalOrderHolidaysElem.classList.add('mod-show');
      lockScroll(modalOrderFormWrapperElem);
    }
  })

  const openSidebar = () => {
    sidebarContainerElem.classList.add('mod-open');
    lockScroll(sidebarWrapperElem);
  }
  const closeSidebar = () => {
    sidebarContainerElem.classList.remove('mod-open');
    unlockScroll(sidebarWrapperElem);
  }
}
