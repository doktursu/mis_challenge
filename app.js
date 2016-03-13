

window.onload = function() {
    console.log('app started');

    var menu = new Menu();
    var popup = new Popup();

    menu.onOptionClick = function(key) {
        console.log('clicked option:', key)
    };

    window.onresize = function() {
        if (this.innerWidth > 768) {
            menu.setDefaultOpen();
            menu.open();
        } else if (menu.isDefaultDisplaying) {
            menu.close();
            menu.setDefaultClosed();
        }
    };

};