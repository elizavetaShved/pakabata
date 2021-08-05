import { checkExistParent } from './checkExistParent';
import { lockScroll, unlockScroll } from './scrollBlocker';

export default function componentVideo() {
  const hostElem = document.querySelector('#video-host');
  const openVideoBtn = hostElem.querySelector('.video__btn');
  const closeVideoBtn = hostElem.querySelector('.video__close-btn');
  const videoContainerElem = hostElem.querySelector('.video__modal-container');
  const videoModalWrapperElem = hostElem.querySelector('.gl-video-modal-wrapper');

  openVideoBtn.onclick = () => {
    onLockScroll();
  }

  closeVideoBtn.onclick = () => {
    onUnlockScroll();
  }

  videoContainerElem.onclick = (e) => {
    if (!(checkExistParent(e.target, videoModalWrapperElem))) {
      onUnlockScroll();
    }
  }

  const onLockScroll = () => {
    videoContainerElem.classList.add('mod-show');
    lockScroll(videoContainerElem);
  }
  const onUnlockScroll = () => {
    videoContainerElem.classList.remove('mod-show');
    unlockScroll(videoContainerElem);
  }
}
