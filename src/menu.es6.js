'use strict';

class Menu { 

    constructor(overlay) {
        this.menuEl = document.querySelector('#menu');

        this.iconEl = document.querySelector('#menu-icon');
        this.iconEl.onclick = () => this.toggle();

        this.menuOptions = document.querySelector('#menu-options');
        this.menuOptions.onclick = e => {
            if (!this.isDefaultDisplaying) {
                this.hide();
            }
            let key = e.target.dataset.menuOptionKey;
            this.onOptionClick(key);
        };
        
        this.onOptionClick = null;

        this.isDisplaying = window.innerWidth >= 768;
        this.isDefaultDisplaying = window.innerWidth >= 768;

        this.menuEl.className = (this.isDisplaying ? 'opened' : 'closed');

        this.overlay = overlay;
    }

    toggle() {
        if (this.isDisplaying) {
            this.hide();
        } else {
            this.display();
        }
    }

    display() {
        this.menuEl.className = 'opened';
        this.isDisplaying = true;
        if (this.isDefaultDisplaying) {
            this.overlay.hide();
        } else {
            this.overlay.display();
        }
    }

    hide() {
        this.menuEl.className = 'closed';
        this.isDisplaying = false;
        this.overlay.hide();
    }

    setDefaultOpen() {
        this.isDefaultDisplaying = true;
    }

    setDefaultClosed() {
        this.isDefaultDisplaying = false;
    }

}


export default Menu