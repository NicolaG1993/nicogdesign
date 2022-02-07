import styles from "./Header.module.css";
import dynamic from "next/dynamic";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
const ColorModeButton = dynamic(() => import("./ColorModeButton"), {
    ssr: false,
});
const selectLayouts = (state) => state.toggleLayout.layouts[1];

function Nav({ close }) {
    let { active } = useSelector(selectLayouts, shallowEqual);

    return (
        <nav
            id={styles["Nav"]}
            style={
                active
                    ? { transform: "translateX(-100%)" }
                    : { transform: "translateX(0%)" }
            }
        >
            <div>
                <h2 onClick={close}>CLOSE</h2>
            </div>

            <div className={styles["nav-box"]}>
                <h2>ABOUT</h2>
                <h2>PORTFOLIO</h2>
                <h2>PROJECTS</h2>
                <h2>CONTACT</h2>
            </div>

            <ColorModeButton />
        </nav>
    );
}

export default Nav;
