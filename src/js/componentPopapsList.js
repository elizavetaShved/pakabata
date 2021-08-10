import initNewPopap from './initNewPopap';

export default function componentPopapsList() {
  const hostElem = document.querySelector('#popaps-list-host');
  const bannerSlidesList = document.querySelectorAll('.banner__slide');
  const popapElem = document.querySelector('.popap');

  bannerSlidesList.forEach((elem, index) => {
    const newPopap = popapElem.cloneNode(true);
    const id = `popap-${ index }`;
    newPopap.setAttribute('id', id)
    hostElem.appendChild(newPopap);
    initNewPopap(newPopap, index);
  })
}
