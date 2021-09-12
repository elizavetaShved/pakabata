export default function componentCostVisit() {
  const TRANSLATE_X_STEP_CAPTION = 20;
  const TRANSLATE_X_STEP_CAPTION_MOBILE = 14;
  const TRANSLATE_X_STEP_VALUE = 18;

  const hostElem = document.querySelector('#cost-visit-host');
  const toggleBtns = hostElem.querySelectorAll('.cost-visit__toggle-item');
  const toggleBackground = hostElem.querySelector('.cost-visit__toggle-background');
  const captionsSliderWrapper = hostElem.querySelectorAll('.cost-visit__price-grid-caption-slider');
  const valuesSliderWrapper = hostElem.querySelectorAll('.cost-visit__price-grid-values-slider');

  const valuesSmallArr = hostElem.querySelectorAll('.cost-visit__price-grid-value-small');
  const valuesFullArr = hostElem.querySelectorAll('.cost-visit__price-grid-value-full');

  const priceItemElems = hostElem.querySelectorAll('.cost-visit__price-grid-item');

  let activeSlide = 0;

  toggleBtns.forEach((btnItem, index) => {
    btnItem.onclick = () => {
      if (index !== activeSlide) {
        setActiveSlide(index);
      }
    }
  })

  const setActiveSlide = (index) => {
    activeSlide = index;
    if (index === 0) {
      toggleBtns[0].classList.add('mod-active');
      toggleBtns[1].classList.remove('mod-active');
      toggleBackground.classList.remove('mod-right');
      captionsSliderWrapper.forEach(captionSliderWrapperItem => {
        captionSliderWrapperItem.style.transform = 'translateX(0rem)';
      })
      valuesSliderWrapper.forEach(valuesSliderWrapperItem => {
        valuesSliderWrapperItem.style.transform = 'translateX(0rem)';
      })
      valuesSmallArr.forEach(valueSmallItem => {
        valueSmallItem.classList.add('mod-active');
      })
      valuesFullArr.forEach(valuesFullItem => {
        valuesFullItem.classList.remove('mod-active');
      })

      priceItemElems[1].classList.remove('mod-hide');
    } else {
      toggleBtns[0].classList.remove('mod-active');
      toggleBtns[1].classList.add('mod-active');
      toggleBackground.classList.add('mod-right');
      captionsSliderWrapper.forEach(captionSliderWrapperItem => {
        if (window.innerWidth >= 567) {
          captionSliderWrapperItem.style.transform = `translateX(-${ TRANSLATE_X_STEP_CAPTION }rem`;
        } else {
          captionSliderWrapperItem.style.transform = `translateX(-${ TRANSLATE_X_STEP_CAPTION_MOBILE }rem`;
        }
      })
      valuesSliderWrapper.forEach(valuesSliderWrapperItem => {
        valuesSliderWrapperItem.style.transform = `translateX(-${ TRANSLATE_X_STEP_VALUE }rem`;
      })
      valuesSmallArr.forEach(valueSmallItem => {
        valueSmallItem.classList.remove('mod-active');
      })
      valuesFullArr.forEach(valuesFullItem => {
        valuesFullItem.classList.add('mod-active');
      })

      priceItemElems[1].classList.add('mod-hide');
    }
  }
}
