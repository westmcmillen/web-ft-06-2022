const appMenu = document.getElementById("app-menu");

hamburger.onclick = () => {
    switch (hamburger.dataset.state) {
        case "collapsed":
            appMenu.dataset.state = "expanded";
            hamburger.dataset.state = "expanded";
            break;
        default:
            appMenu.dataset.state = "collapsed";
            hamburger.dataset.state = "collapsed";
    }
};
