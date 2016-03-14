var Popup = function() {
    this.popupEl = document.querySelector('#popup');
    this.textEl = this.popupEl.querySelector('p');
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