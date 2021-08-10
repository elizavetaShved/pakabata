import { lockScroll } from './scrollBlocker';

export default function openPopap(indexPopap) {
  const popapComponent = document.querySelector(`#popap-${ indexPopap }`);
  popapComponent.classList.add('mod-show');

  lockScroll(popapComponent);
};
