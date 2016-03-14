var Overlay = function(element) {
    this.overlayEl = element;
    this.overlayEl.onclick = function() {
        this.onOverlayClick();
    }.bind(this);
};

Overlay.prototype = {

    display: function() {
        this.overlayEl.className = 'overlay-display';
    },

    hide: function() {
        this.overlayEl.className = 'overlay-hidden';
    }

}