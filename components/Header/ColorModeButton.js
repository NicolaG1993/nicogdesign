import { useCallback, useEffect, useState } from "react";
import { setTheme } from "@/shared/utils/themes";
import styles from "./Header.module.css";

// REDUX
import { useDispatch } from "react-redux";
// import { setColorButton } from "@/redux/ToggleLayout/toggleLayout.actions";
import { selectThemeState, setColor } from "@/redux/slices/uiSlice";

export default function ColorModeButton() {
    const [selectedTheme, setSelectedTheme] = useState();
    // let theme;

    const dispatch = useDispatch();
    const stabilizer = useCallback((arg) => dispatch(setColor(arg)));
    //mi serve per usare dispatch (hook) in callback (useEffect)

    const handleColor = (arg) => {
        if (arg === "light") {
            setTheme("theme-light");
            setSelectedTheme("theme-light");
            dispatch(setColor("theme-light"));
        } else if (arg === "dark") {
            setTheme("theme-dark");
            setSelectedTheme("theme-dark");
            dispatch(setColor("theme-dark"));
        }
    };

    useEffect(() => {
        let theme = localStorage.getItem("theme");
        console.log("theme", theme);
        stabilizer(theme);
    }, []);

    useEffect(() => {
        let theme = localStorage.getItem("theme");
        console.log("theme", theme);
        stabilizer(theme);
    }, [selectedTheme]);

    return (
        <div className={styles["color-mode-wrap"]}>
            <span onClick={() => handleColor("light")}>Light</span> <p>/</p>{" "}
            <span onClick={() => handleColor("dark")}>Dark</span>
        </div>
    );
}
