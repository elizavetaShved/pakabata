export default function componentCostVisit() {
    const TRANSLATE_X_STEP = 18;

    const hostElem = document.querySelector('#cost-visit-host');
    const toggleBtns = hostElem.querySelectorAll('.cost-visit__toggle-item');
    const toggleBackground = hostElem.querySelector('.cost-visit__toggle-background');
    const valuesSliderWrapper = hostElem.querySelectorAll('.cost-visit__price-grid-values-slider');
    const valuesSmallArr = hostElem.querySelectorAll('.cost-visit__price-grid-value-small');
    const valuesFullArr = hostElem.querySelectorAll('.cost-visit__price-grid-value-full');

    const priceItemElems = hostElem.querySelectorAll('.cost-visit__price-grid-item');
    const priceCaptionsElems = hostElem.querySelectorAll('.cost-visit__price-grid-caption');

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

            priceCaptionsElems.forEach(elem => {
                elem.classList.remove('mod-hide');
            })
        } else {
            toggleBtns[0].classList.remove('mod-active');
            toggleBtns[1].classList.add('mod-active');
            toggleBackground.classList.add('mod-right');
            valuesSliderWrapper.forEach(valuesSliderWrapperItem => {
                valuesSliderWrapperItem.style.transform = `translateX(-${ TRANSLATE_X_STEP }rem`;
            })
            valuesSmallArr.forEach(valueSmallItem => {
                valueSmallItem.classList.remove('mod-active');
            })
            valuesFullArr.forEach(valuesFullItem => {
                valuesFullItem.classList.add('mod-active');
            })

            priceItemElems[1].classList.add('mod-hide');

            priceCaptionsElems.forEach(elem => {
                elem.classList.add('mod-hide');
            })
        }
    }
}
