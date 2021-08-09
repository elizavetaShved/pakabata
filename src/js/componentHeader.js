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

  const modalWhiteElem = document.querySelector('#modal-white-host');
  const modalWrapperElem = hostElem.querySelector('.modal-white__content-wrapper');

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

  writeBtns.forEach(writeBtn => {
    writeBtn.onclick = () => {
      modalWhiteElem.classList.add('mod-show');
      lockScroll(modalWrapperElem);
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
