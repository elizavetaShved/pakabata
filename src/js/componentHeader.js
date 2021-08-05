import { lockScroll, unlockScroll } from './scrollBlocker';
import { checkExistParent } from './checkExistParent';

export default function componentHeader() {
  const hostElem = document.querySelector('#header-host');
  const burgerBtn = hostElem.querySelector('.header__burger-wrapper');
  const sidebarContainerElem = hostElem.querySelector('.header__sidebar-container');
  const sidebarWrapperElem = hostElem.querySelector('.header__sidebar-wrapper');
  const closeBtn = hostElem.querySelector('.header__sidebar-close-btn-wrapper');

  burgerBtn.onclick = () => {
    onLockScroll();
  }

  sidebarContainerElem.onclick = (e) => {
    if (e.target === sidebarContainerElem || checkExistParent(e.target, closeBtn)) {
      onUnlockScroll();
    }
  }

  closeBtn.onclick = () => {
    onLockScroll();
  }

  const onLockScroll = () => {
    sidebarContainerElem.classList.add('mod-open');
    lockScroll(sidebarWrapperElem);
  }
  const onUnlockScroll = () => {
    sidebarContainerElem.classList.remove('mod-open');
    unlockScroll(sidebarWrapperElem);
  }
}
