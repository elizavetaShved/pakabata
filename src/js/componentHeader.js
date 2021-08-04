import { lockScroll, unlockScroll } from './scrollBlocker';

export default function componentHeader() {
  const hostElem = document.querySelector('#header-host');
  const burgerBtn = hostElem.querySelector('.header__burger-wrapper');
  const sidebarContainer = hostElem.querySelector('.header__sidebar-container');
  const sidebarWrapper = hostElem.querySelector('.header__sidebar-wrapper');

  burgerBtn.onclick = () => {
    sidebarContainer.classList.add('mod-open');
    lockScroll(sidebarWrapper);
  }

  sidebarContainer.onclick = (e) => {
    if (e.target === sidebarContainer) {
      sidebarContainer.classList.remove('mod-open');
    }
  }
}
