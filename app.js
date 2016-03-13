

window.onload = function() {
    console.log('app started');

    var menu = new Menu();

    window.onresize = function() {
        if (this.innerWidth > 768) {
            menu.open();
        }
    };

};