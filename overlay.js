var Overlay = function() {
    this.overlayEl = document.querySelector('#overlay');
};

Overlay.prototype = {

    display: function() {
        this.overlayEl.style.display = 'block';
    },

    hide: function() {
        this.overlayEl.style.display = 'none';
    }

}