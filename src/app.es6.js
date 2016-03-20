'use strict';

import Overlay from './overlay.es6.js';
import Menu from './menu.es6.js';
import Popup from './popup.es6.js';

window.onload = () => {

    document.registerElement('pop-up', Popup);
    document.registerElement('over-lay', Overlay);

    // const menuOverlay = new Overlay(document.querySelector('#menu-overlay'));
    const menu = new Menu();
    // const popupOverlay = new Overlay(document.querySelector('#popup-overlay'));
    const popup = document.querySelector('pop-up');
    console.log('popup', popup);

    // menuOverlay.onOverlayClick = () => menu.hide();

    // popupOverlay.onOverlayClick = () => popup.hide();

    menu.onOptionClick = key => {
        let inputEl = document.querySelector('#name-input');
        let name = inputEl.value.trim();
        let message = "Please enter a name first";

        if (name) {
            switch (key) {
                case 'say-hello':
                    message = `Hello ${name}`;
                    break;

                case 'say-goodbye':
                    message = `Goodbye ${name}`;
                    break;

                case 'say-thanks':
                    message = `Thanks ${name}`;
                    break;

                default:
            }
        }
        console.log('message', message);
        popup.display(message);

    };

    window.onresize = () => {
        if (window.innerWidth > 768) {
            menu.setDefaultOpen();
            menu.display();
        } else if (menu.isDefaultDisplaying) {
            menu.setDefaultClosed();
            menu.hide();
        }
    };

};