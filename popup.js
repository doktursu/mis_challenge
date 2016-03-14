var Popup = function() {
    this.popupEl = document.querySelector('#popup');
};

Popup.prototype = {

    display: function(message) {
        this.popupEl.innerText = message;
        this.popupEl.className = 'popup-display';
        console.log(this.popupEl.style.className);
    },

    hide: function() {
        this.popupEl.className = 'popup-hidden';
    }

};