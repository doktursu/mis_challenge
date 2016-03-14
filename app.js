

window.onload = function() {
    console.log('app started');

    var menuOverlay = new Overlay(document.querySelector('#menu-overlay'));
    var menu = new Menu(menuOverlay);
    var popupOverlay = new Overlay(document.querySelector('#popup-overlay'));
    var popup = new Popup(popupOverlay);

    menuOverlay.onOverlayClick = function() {
        menu.hide();
    };

    popupOverlay.onOverlayClick = function() {
        popup.hide();
    }

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
            menu.display();
        } else if (menu.isDefaultDisplaying) {
            menu.setDefaultClosed();
            menu.hide();
        }
    };

};