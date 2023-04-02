import styles from "./Header.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
const ColorModeButton = dynamic(() => import("./ColorModeButton"), {
    ssr: false,
});
// const selectLayouts = (state) => state.toggleLayout.layouts[1];
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { selectLayoutsState } from "@/redux/slices/uiSlice";

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
    // let { active } = useSelector(selectLayouts, shallowEqual);
    let layouts = useSelector(selectLayoutsState, shallowEqual);

    return (
        <nav
            id={styles["Nav"]}
            style={
                layouts[1].status
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
                        <Link passHref href={link.to} key={i} onClick={close}>
                            <li>{link.title} </li>
                        </Link>
                    ))}
                </ul>
            </div>

            <ColorModeButton />
        </nav>
    );
}

export default Nav;
