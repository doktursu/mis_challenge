var Overlay = function(element) {
    this.overlayEl = element;
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