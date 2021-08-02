export default function commonMainLinks(mainLinkContainer) {
  const setHeightLinksContainers = () => {
    let containerHeight = 0;

    mainLinkContainer.forEach(item => {
      const itemHeight = item.clientHeight;
      containerHeight = itemHeight > containerHeight ? itemHeight : containerHeight;
    })

    mainLinkContainer.forEach(item => {
      item.style.height = `${ containerHeight }px`;
    })
  }
  setHeightLinksContainers();

  window.addEventListener('resize', setHeightLinksContainers);
}
