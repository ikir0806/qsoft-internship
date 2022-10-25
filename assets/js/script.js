/**
 * Vendors
 */
import $ from 'jquery';
window.$ = $;
import initializeTabs from './modules/tabs';
import select2 from 'select2';
import Inputmask from 'inputmask';

import 'slick-carousel/slick/slick.min';

// Пример подключения плагина
// import pluginName from 'plugin-name';
import slick from './modules/slick';
import dotdotdot from './modules/dotdotdot';

/**
 * Modules
 */
// Пример подключения модуля
// import myModule from './modules/my-module-function';
import select2_module from './modules/select2';
import inputmask from './modules/inputmask';
import validate from './modules/validate';

const app = {
    ready() {
        // Пример вызова импортированнывх функций
        // pluginName();
        inputmask();
        slick();
        select2_module();
        validate();

        // myModule();
    },

    load() {
        
    },

    resize() {

    },

    scroll() {

    },
};



$(() => {
    app.ready();

    $(window)
        .on('load', app.load)
        .on('resize', app.resize)
        .on('scroll', app.scroll);
});

document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();
    dotdotdot();
});