'use strict';

class Overlay {

    constructor(element) {
        this.overlayEl = element;
        this.overlayEl.onclick = () => this.onOverlayClick();
    }

    display() {
        this.overlayEl.className = 'overlay-display';
    }

    hide() {
        this.overlayEl.className = 'overlay-hidden';
    }

}