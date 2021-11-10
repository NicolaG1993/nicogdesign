import dynamic from "next/dynamic";
import Link from "next/link";

import styles from "./style/Nav.module.css";
import ColorModeButton from "../../ColorModeButton/ColorModeButton";
// const ColorModeButton = dynamic(
//     () => import("../../ColorModeButton/ColorModeButton"),
//     {
//         ssr: false,
//     }
// ); // ?

import { useSelector, shallowEqual } from "react-redux";
const selectLayouts = (state) => state.toggleLayout.layouts[1];

const links = [
    {
        to: "/",
        title: "About me",
    },
    {
        to: "/portfolio",
        title: "Portfolio",
    },
    {
        to: "/#contact",
        title: "Contact",
    },
];

export default function Nav({ width, closeNav, color }) {
    let state = useSelector(selectLayouts, shallowEqual);
    let navIsActive = state.active;

    if (width <= 720) {
        return (
            <nav
                className={`${styles["mobile-nav"]} ${
                    navIsActive ? styles["nav-on"] : ""
                }`}
            >
                <ul>
                    {links.map((link, i) => (
                        <li key={i}>
                            <Link href={link.to}>
                                <a onClick={() => closeNav()}>{link.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ColorModeButton />
            </nav>
        );
    } else {
        return (
            <nav className={styles["screen-nav"]}>
                <ul>
                    {links.map((link, i) => (
                        <li key={i}>
                            <Link href={link.to}>
                                <a>{link.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}
