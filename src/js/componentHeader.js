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

  const openSidebar = () => {
    sidebarContainerElem.classList.add('mod-open');
    lockScroll(sidebarWrapperElem);
  }
  const closeSidebar = () => {
    sidebarContainerElem.classList.remove('mod-open');
    unlockScroll(sidebarWrapperElem);
  }
}
