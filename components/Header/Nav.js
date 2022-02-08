import styles from "./Header.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
const ColorModeButton = dynamic(() => import("./ColorModeButton"), {
    ssr: false,
});
const selectLayouts = (state) => state.toggleLayout.layouts[1];

const links = [
    {
        to: "/about",
        title: "ABOUT",
    },
    {
        to: "/portfolio",
        title: "PORTFOLIO",
    },
    {
        to: "/projects",
        title: "PROJECTS",
    },
    {
        to: "/contact",
        title: "CONTACT",
    },
];

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
                <span onClick={close}>CLOSE</span>
            </div>

            <div className={styles["nav-box"]}>
                <ul className={styles["header-nav-ul"]}>
                    {links.map((link, i) => (
                        <Link href={link.to} key={i}>
                            <a onClick={() => closeNav()}>
                                <li>{link.title} </li>
                            </a>
                        </Link>
                    ))}
                </ul>
            </div>

            <ColorModeButton />
        </nav>
    );
}

export default Nav;
