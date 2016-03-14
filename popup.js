var Popup = function(overlay) {
    this.popupEl = document.querySelector('#popup');
    this.textEl = document.querySelector('#popup-message');
    this.closeEl = document.querySelector('#popup-close');
    this.closeEl.onclick = function() {
        this.hide();
    }.bind(this);

    this.overlay = overlay;
};

Popup.prototype = {

    display: function(message) {
        this.textEl.innerText = message;
        this.popupEl.className = 'popup-display';
        this.overlay.display();
    },

    hide: function() {
        this.popupEl.className = 'popup-hidden';
        this.overlay.hide();
    }

};