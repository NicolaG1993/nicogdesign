import { useCallback, useEffect, useState } from "react";
import { setTheme } from "../../shared/utils/themes";
import styles from "./Header.module.css";

// REDUX
import { useDispatch } from "react-redux";
import { setColorButton } from "../../redux/ToggleLayout/toggleLayout.actions";

export default function ColorModeButton() {
    const [selectedTheme, setSelectedTheme] = useState();
    // let theme;

    const dispatch = useDispatch();
    const stabilizer = useCallback((arg) =>
        dispatch(setColorButton({ color: arg }))
    );
    //mi serve per usare dispatch (hook) in callback (useEffect)

    const setColor = (arg) => {
        if (arg === "light") {
            setTheme("theme-light");
            setSelectedTheme("theme-light");
            dispatch(setColorButton({ color: "theme-light" }));
        } else if (arg === "dark") {
            setTheme("theme-dark");
            setSelectedTheme("theme-dark");
            dispatch(setColorButton({ color: "theme-dark" }));
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
            <span onClick={() => setColor("light")}>Light</span> <p>/</p>{" "}
            <span onClick={() => setColor("dark")}>Dark</span>
        </div>
    );
}
