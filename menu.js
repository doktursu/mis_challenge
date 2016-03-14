var Menu = function(overlay) {
    this.menuEl = document.querySelector('#menu');

    this.iconEl = document.querySelector('#menu-icon');
    this.iconEl.onclick = function() {
        this.toggle();
    }.bind(this);

    this.menuOptions = document.querySelector('#menu-options');
    this.menuOptions.onclick = function(e) {
        if (!this.isDefaultDisplaying) {
            this.close();
        }
        var key = e.target.dataset.menuOptionKey;
        this.onOptionClick(key);
    }.bind(this);
    this.onOptionClick = null;

    this.isDisplaying = window.innerWidth >= 768;
    this.isDefaultDisplaying = window.innerWidth >= 768;

    this.menuEl.className = (this.isDisplaying ? 'opened' : 'closed');

    this.overlay = overlay;
};

Menu.prototype = {

    toggle: function() {
        if (this.isDisplaying) {
            this.close();
        } else {
            this.open();
        }
    },

    open: function() {
        this.menuEl.className = 'opened';
        if (this.isDefaultDisplaying) {
            this.overlay.hide();
        } else {
            this.overlay.display();
        }
        this.isDisplaying = true;
    },

    close: function() {
        this.menuEl.className = 'closed';
        this.overlay.hide();
        this.isDisplaying = false;
    },

    setDefaultOpen: function() {
        this.isDefaultDisplaying = true;
    },

    setDefaultClosed: function() {
        this.isDefaultDisplaying = false;
    }

};