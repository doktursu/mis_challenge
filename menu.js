var Menu = function() {
    this.menuEl = document.querySelector('#menu');

    this.iconEl = document.querySelector('#menu-icon');
    this.iconEl.onclick = this.toggle.bind(this);

    this.isDisplaying = window.innerWidth >= 768;
    this.isDefaultDisplaying = window.innerWidth >= 768;

    this.menuEl.className = (this.isDisplaying ? 'opened' : 'closed');
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
        this.isDisplaying = true;
    },

    close: function() {
        this.menuEl.className = 'closed';
        this.isDisplaying = false;
    },

    setDefaultOpen: function() {
        this.isDefaultDisplaying = true;
    },

    setDefaultClosed: function() {
        this.isDefaultDisplaying = false;
    }

};