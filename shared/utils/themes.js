function setTheme(themeName) {
    localStorage.setItem("ngd-theme", themeName);
    document.documentElement.className = themeName;
}

// REDUX
// import { useDispatch } from "react-redux";
// import { setColorButton } from "../../redux/ToggleLayout/toggleLayout.actions";

function keepTheme() {
    // const dispatch = useDispatch();
    if (localStorage.getItem("ngd-theme")) {
        if (localStorage.getItem("ngd-theme") === "theme-dark") {
            setTheme("theme-dark");
        } else if (localStorage.getItem("ngd-theme") === "theme-light") {
            setTheme("theme-light");
        } else if (localStorage.getItem("ngd-theme") === "theme-matrix") {
            setTheme("theme-matrix");
        }
    } else {
        setTheme("theme-light");
    }
}

module.exports = {
    setTheme,
    keepTheme,
};
