import { checkExistParent } from './checkExistParent';
import { lockScroll, unlockScroll } from './scrollBlocker';

export default function commonVideoModal(hostElem) {
  const openVideoBtn = hostElem.querySelector('.gl-video-open');
  const closeVideoBtn = hostElem.querySelector('.gl-close-btn-wrapper');
  const videoContainerElem = hostElem.querySelector('.gl-video-modal-container');
  const videoModalWrapperElem = hostElem.querySelector('.gl-video-modal-wrapper');
  const videoIframeElem = hostElem.querySelector('.gl-video-iframe');

  openVideoBtn.onclick = () => {
    onLockScroll();
  }

  closeVideoBtn.onclick = () => {
    onUnlockScroll();
    videoIframeElem.stopVideo()
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
