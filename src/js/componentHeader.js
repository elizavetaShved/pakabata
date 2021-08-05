import { lockScroll } from './scrollBlocker';
import { checkExistParent } from './checkExistParent';
import scrollByAnchor from './scrollByAnchor';

export default function componentHeader() {
  const hostElem = document.querySelector('#header-host');
  const burgerBtn = hostElem.querySelector('.header__burger-wrapper');
  const sidebarContainerElem = hostElem.querySelector('.header__sidebar-container');
  const sidebarWrapperElem = hostElem.querySelector('.header__sidebar-wrapper');
  const closeBtn = hostElem.querySelector('.header__sidebar-close-btn-wrapper');

  burgerBtn.onclick = () => {
    sidebarContainerElem.classList.add('mod-open');
    lockScroll(sidebarWrapperElem);
  }

  sidebarContainerElem.onclick = (e) => {
    if (e.target === sidebarContainerElem || checkExistParent(e.target, closeBtn)) {
      sidebarContainerElem.classList.remove('mod-open');
    }
  }

  closeBtn.onclick = () => {
    sidebarContainerElem.classList.add('mod-open');
    lockScroll(sidebarWrapperElem);
  }

  scrollByAnchor();
}
