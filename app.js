

window.onload = function() {
    console.log('app started');

    var menu = new Menu();
    var popup = new Popup();

    menu.onOptionClick = function(key) {
        var inputEl = document.querySelector('#name-input');
        var name = inputEl.value;
        var message = "Please enter a name first";
        if (name) {
            message = "Hello " + name;
        }
        popup.display(message);

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