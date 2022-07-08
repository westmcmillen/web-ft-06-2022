const key = config.API_KEY;

const menu = document.getElementById("app-menu");
const menuBtn = document.getElementById("app-menu-btn");

menuBtn.onclick = () => {
    switch (menu.dataset.state) {
        case "collapsed":
            menu.dataset.state = "expanded";
            menuBtn.dataset.state = "expanded";
            break;
        default:
            menu.dataset.state = "collapsed";
            menuBtn.dataset.state = "collapsed";
    }
};
