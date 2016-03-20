'use strict';

class Overlay extends HTMLElement{

    createdCallback() {
        this.className = 'overlay overlay-hidden';
        this.onclick = () => this.onOverlayClick();
    }

    display() {
        this.className = 'overlay overlay-display';
    }

    hide() {
        this.className = 'overlay overlay-hidden';
    }

}

export default Overlay