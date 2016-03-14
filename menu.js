var Menu = function() {
    this.menuEl = document.querySelector('#menu');

    this.iconEl = document.querySelector('#menu-icon');
    this.iconEl.onclick = this.toggle.bind(this);

    this.menuOptions = document.querySelector('#menu-options');
    this.menuOptions.onclick = function(e) {
        var key = e.target.dataset.menuOptionKey;
        this.onOptionClick(key);
    }.bind(this);
    this.onOptionClick = null;

    this.isDisplaying = window.innerWidth >= 768;
    this.isDefaultDisplaying = window.innerWidth >= 768;

    this.menuEl.className = (this.isDisplaying ? 'opened' : 'closed');

    this.overlay = document.querySelector('#overlay');
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
        if (!this.isDefaultDisplaying) {
            this.overlay.style.display = 'block';
        }
        this.isDisplaying = true;
    },

    close: function() {
        this.menuEl.className = 'closed';
        this.overlay.style.display = 'none';
        this.isDisplaying = false;
    },

    setDefaultOpen: function() {
        this.isDefaultDisplaying = true;
    },

    setDefaultClosed: function() {
        this.isDefaultDisplaying = false;
    }

};