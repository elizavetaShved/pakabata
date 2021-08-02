import commonMainLinks from './commonMainLinks';

export default function componentsBulletinBoard() {
  const hostElem = document.querySelector('#bulletin-board-host');
  const mainLinkContainer = hostElem.querySelectorAll('.gl-main-link-container');

  commonMainLinks(mainLinkContainer);
}
