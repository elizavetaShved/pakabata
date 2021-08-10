import componentPopap from './componentPopap';

export default function componentPopapList() {
  const popapList = document.querySelectorAll('.popap');

  popapList.forEach(popapElem => {
    componentPopap(popapElem);
  })
}
