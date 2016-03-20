'use strict';

class Popup extends HTMLElement {

    createdCallback(overlay) {
        this.className = 'popup popup-display';

        this.innerHTML = Popup.TEMPLATE;
        this.textEl = this.querySelector('.popup-message');
        this.closeEl = this.querySelector('.popup-close');
        this.closeEl.onclick = () => this.hide();

        // this.overlay = overlay;
    }

    display(message) {
        this.textEl.innerText = message;
        this.className = 'popup popup-display';
        // this.overlay.display();
    }

    hide() {
        this.className = 'popup popup-hidden';
        // this.overlay.hide();
    }

}

Popup.TEMPLATE = `
    <div class="popup-close"></div>
    <div class="popup-message"></div>
`

export default Popup