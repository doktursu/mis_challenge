'use strict';

class Popup {

    constructor(overlay) {
        this.popupEl = document.querySelector('#popup');
        this.textEl = document.querySelector('#popup-message');
        this.closeEl = document.querySelector('#popup-close');
        this.closeEl.onclick = () => this.hide();

        this.overlay = overlay;
    }

    display(message) {
        this.textEl.innerText = message;
        this.popupEl.className = 'popup-display';
        this.overlay.display();
    }

    hide() {
        this.popupEl.className = 'popup-hidden';
        this.overlay.hide();
    }

}

export default Popup