const appNav = document.getElementById("app-nav");
const hamburger = document.getElementById("hamburger");

hamburger.onclick = () => {
    switch (hamburger.dataset.state) {
        case "collapsed":
            hamburger.dataset.state = "expanded";
            appNav.dataset.state = "expanded";
            break;
        default:
            hamburger.dataset.state = "collapsed";
            appNav.dataset.state = "collapsed";
    }
};
