'use strict';

class Popup extends HTMLElement {

    createdCallback(overlay) {
        this.innerHTML = Popup.TEMPLATE;
        this.popupEl = this.querySelector('.popup');
        this.textEl = this.querySelector('.popup-message');
        this.closeEl = this.querySelector('.popup-close');
        this.overlay = this.querySelector('over-lay');

        this.closeEl.onclick = () => this.hide();
        this.overlay.onclick = () => this.hide();
    }

    display(message) {
        this.textEl.innerText = message;
        this.popupEl.className = 'popup popup-display';
        this.overlay.display();
    }

    hide() {
        this.popupEl.className = 'popup popup-hidden';
        this.overlay.hide();
    }

}

Popup.TEMPLATE = `
    <div class="popup popup-display">
        <div class="popup-close"></div>
        <div class="popup-message"></div>
    </div>
    <over-lay></over-lay>
`

export default Popup