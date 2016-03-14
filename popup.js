var Popup = function() {
    this.popupEl = document.querySelector('#popup');
    this.textEl = this.popupEl.querySelector('p');
    this.closeEl = document.querySelector('#popup-close');
    this.closeEl.onclick = this.hide.bind(this);
};

Popup.prototype = {

    display: function(message) {
        this.textEl.innerText = message;
        this.popupEl.className = 'popup-display';
    },

    hide: function() {
        this.popupEl.className = 'popup-hidden';
    }

};