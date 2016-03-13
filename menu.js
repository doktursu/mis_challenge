var Menu = function() {
    this.menuEl = document.querySelector('#menu');

    this.iconEl = document.querySelector('#menu-icon');
    this.iconEl.onclick = this.toggle.bind(this);

    this.isDisplaying = window.innerWidth >= 768;
    this.menuEl.style.marginLeft = (this.isDisplaying ? '0px' : '-300px');
};

Menu.prototype = {

    toggle: function() {
        if (this.isDisplaying) {
            this.isDisplaying = false;
            this.close();
        } else {
            this.isDisplaying = true;
            this.open();
        }
    },

    open: function() {
        this.menuEl.style.marginLeft = '0px';
    },

    close: function() {
        this.menuEl.style.marginLeft = '-300px';
    }

};