import { checkExistParent } from './checkExistParent';
import { lockScroll, unlockScroll } from './scrollBlocker';

export default function commonVideoModal(hostElem) {
  const openVideoBtn = hostElem.querySelector('.gl-video-open');
  const closeVideoBtn = hostElem.querySelector('.gl-close-btn-wrapper');
  const videoContainerElem = hostElem.querySelector('.gl-modal-container');
  const videoModalWrapperElem = hostElem.querySelector('.gl-modal-wrapper');

  const videoMp4Elems = document.querySelectorAll('.gl-video-mp4');

  const onOpen = () => {
    videoContainerElem.classList.add('mod-show');
    lockScroll(videoContainerElem);
  }
  const onClose = () => {
    videoContainerElem.classList.remove('mod-show');
    unlockScroll(videoContainerElem);
    videoMp4Elems.forEach(video => {
      video.pause();
      video.currentTime = 0;
    })
  }

  openVideoBtn.onclick = () => {
    onOpen();
  }

  closeVideoBtn.onclick = () => {
    onClose();
  }

  videoContainerElem.onclick = (e) => {
    if (!(checkExistParent(e.target, videoModalWrapperElem))) {
      onClose();
    }
  }
}
