import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import phoneMask from './phoneMask';
import onlyNumeric from './onlyNumeric';
import fileUpload from './fileUpload';
import componentBanner from './componentBanner';
import componentVideo from './componentVideo';
import componentAboutPark from './componentAboutPark';
import componentHolidays from './componentHolidays';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    phoneMask();
    onlyNumeric();
    fileUpload();
    componentBanner();
    componentVideo();
    componentAboutPark();
    componentHolidays();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})
