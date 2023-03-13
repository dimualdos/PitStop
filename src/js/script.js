'use strict';
// require('es6-promise').polyfill();
// import 'nodelist-foreach-polyfill';

// import tabs from './modules/tabs';
import navBarElement from './modules/nav-bar';
import modal from './modules/modal';
import footerElem from './modules/modal-form';
import footerElementDiv from './modules/footer';
// import timer from './modules/timer';
// import cards from './modules/cards';
import formSelector from './modules/forms';
// import calc from './modules/calc';
// import slider from './modules/slider';
import { openModalJs } from './modules/modal';

document.addEventListener("DOMContentLoaded", () => {


    const modalTimerId = setTimeout(() => openModalJs('.modal', modalTimerId), 50000);
    navBarElement;
    footerElementDiv;

    footerElem;
    // tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    //timer('.timer', '2022-08-15');
    //cards();
    formSelector('form', modalTimerId);

    //calc();
    // slider({
    //     container: '.offer__slider',
    //     nextArrow: '.offer__slider-next',
    //     prevArrow: '.offer__slider-prev',
    //     slide: '.offer__slide',
    //     totalCounter: '#total',
    //     currentCounter: '#current',
    //     wrapper: '.offer__slider-wrapper',
    //     field: '.offer__slider-inner'
    // });
});
