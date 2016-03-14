var Menu = function(overlay) {
    this.menuEl = document.querySelector('#menu');

    this.iconEl = document.querySelector('#menu-icon');
    this.iconEl.onclick = function() {
        this.toggle();
    }.bind(this);

    this.menuOptions = document.querySelector('#menu-options');
    this.menuOptions.onclick = function(e) {
        if (!this.isDefaultDisplaying) {
            this.hide();
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
            this.hide();
        } else {
            this.display();
        }
    },

    display: function() {
        this.menuEl.className = 'opened';
        this.isDisplaying = true;
        if (this.isDefaultDisplaying) {
            this.overlay.hide();
        } else {
            this.overlay.display();
        }
    },

    hide: function() {
        this.menuEl.className = 'closed';
        this.isDisplaying = false;
        this.overlay.hide();
    },

    setDefaultOpen: function() {
        this.isDefaultDisplaying = true;
    },

    setDefaultClosed: function() {
        this.isDefaultDisplaying = false;
    }

};