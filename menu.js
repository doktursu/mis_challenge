var Menu = function() {
    this.menuEl = document.querySelector('#menu');
    this.iconEl = document.querySelector('#menu-icon');
    this.iconEl.onclick = function() {
        var newMargin = (this.menuEl.style.marginLeft === '0px' ? '-300px' : '0px');
        this.menuEl.style.marginLeft = newMargin;
    }.bind(this);
}