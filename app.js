window.onload = function() {
    console.log('app started');

    var menuEl = document.querySelector('#menu');
    var iconEl = document.querySelector('#menu-icon');

    iconEl.onclick = function() {
        var newMargin = (menuEl.style.marginLeft === '0px' ? '-300px' : '0px');
        menuEl.style.marginLeft = newMargin;
    }

}