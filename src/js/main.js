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
import componentsBulletinBoard from './componentsBulletinBoard';
import componentAboutFamilyPakaf from './componentAboutFamilyPakaf';
import componentCostVisit from './componentCostVisit';
import componentMap from './componentMap';
import componentHeader from './componentHeader';
import scrollByAnchor from './scrollByAnchor';
import componentModalWhite from './componentModalWhite';
import componentModalOrderHolidays from './componentModalOrderHolidays';
import componentPopapList from './componentPopapList';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    phoneMask();
    onlyNumeric();
    fileUpload();
    scrollByAnchor();

    componentHeader();
    componentBanner();
    componentsBulletinBoard();
    componentVideo();
    componentAboutPark();
    componentHolidays();
    componentAboutFamilyPakaf();
    componentCostVisit();
    componentMap();
    componentPopapList();
    componentModalWhite();
    componentModalOrderHolidays();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})
