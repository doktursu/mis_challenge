var Popup = function() {
    this.popupEl = document.querySelector('#popup');
};

Popup.prototype = {

    display: function(message) {
        this.popupEl.innerText = message;
    }

};