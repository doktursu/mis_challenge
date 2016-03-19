'use strict';

import Overlay from './overlay.es6.js';
import Menu from './menu.es6.js';
import Popup from './popup.es6.js';

window.onload = () => {

    let menuOverlay = new Overlay(document.querySelector('#menu-overlay'));
    let menu = new Menu(menuOverlay);
    let popupOverlay = new Overlay(document.querySelector('#popup-overlay'));
    let popup = new Popup(popupOverlay);

    menuOverlay.onOverlayClick = () => menu.hide();

    popupOverlay.onOverlayClick = () => popup.hide();

    menu.onOptionClick = key => {
        let inputEl = document.querySelector('#name-input');
        let name = inputEl.value;
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

        popup.display(message);

    };

    window.onresize = () => {
        if (this.innerWidth > 768) {
            menu.setDefaultOpen();
            menu.display();
        } else if (menu.isDefaultDisplaying) {
            menu.setDefaultClosed();
            menu.hide();
        }
    };

};