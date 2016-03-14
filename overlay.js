var Overlay = function() {
    this.overlayEl = document.querySelector('#overlay');
    this.overlayEl.onclick = function() {
        this.onOverlayClick();
    }.bind(this);
};

Overlay.prototype = {

    display: function() {
        this.overlayEl.style.display = 'block';
    },

    hide: function() {
        this.overlayEl.style.display = 'none';
    }

}