var Menu = function() {
    this.menuEl = document.querySelector('#menu');

    this.iconEl = document.querySelector('#menu-icon');
    this.iconEl.onclick = this.toggle.bind(this);

    this.isDisplaying = window.innerWidth >= 768;
    this.isDefaultDisplaying = window.innerWidth >= 768;

    this.menuEl.style.left = (this.isDisplaying ? '0px' : '-300px');
    this.iconEl.style.backgroundImage = (this.isDisplaying ? 'url("images/1457924590_ic_close_48px.svg")' : 'url("images/1457921783_menu.svg")');
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
        this.menuEl.style.left = '0px';
        this.iconEl.style.backgroundImage = 'url("images/1457924590_ic_close_48px.svg")';
        this.isDisplaying = true;
    },

    close: function() {
        this.menuEl.style.left = '-300px';
        this.iconEl.style.backgroundImage = 'url("images/1457921783_menu.svg")';
        this.isDisplaying = false;
    },

    setDefaultOpen: function() {
        this.isDefaultDisplaying = true;
    },

    setDefaultClosed: function() {
        this.isDefaultDisplaying = false;
    }

};