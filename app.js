

window.onload = function() {
    console.log('app started');

    var overlay = new Overlay();
    var menu = new Menu(overlay);
    var popup = new Popup(overlay);

    overlay.onOverlayClick = function() {
        menu.close();
        popup.hide();
    };

    menu.onOptionClick = function(key) {
        var inputEl = document.querySelector('#name-input');
        var name = inputEl.value;
        var message = "Please enter a name first";

        var greeting;
        if (name) {
            switch (key) {
                case 'say-hello':
                    greeting = "Hello ";
                    break;

                case 'say-goodbye':
                    greeting = "Goodbye ";
                    break;

                case 'say-thanks':
                    greeting = "Thanks ";
                    break;

                default:
            }
            message = greeting + name;
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