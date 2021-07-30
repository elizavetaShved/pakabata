export default function componentVideo() {
  const hostElem = document.querySelector('#video-host');
  const openVideoBtn = hostElem.querySelector('.video__btn');
  const closeVideoBtn = hostElem.querySelector('.video__close-btn');
  const videoContainerElem = hostElem.querySelector('.video__modal-container');

  openVideoBtn.onclick = () => {
    videoContainerElem.classList.add('video__modal-container--show');
  }

  closeVideoBtn.onclick = () => {
    videoContainerElem.classList.remove('video__modal-container--show');

  }
}
