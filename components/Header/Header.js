import dynamic from "next/dynamic";
import Link from "next/link";

import { useState, useEffect } from "react";

import useWindowDimensions from "../../shared/utils/useWindowDimensions";
import styles from "./style/Header.module.css";

import Logo from "../Logo/Logo";
import Nav from "./Nav/Nav";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
// import ColorModeButton from "../ColorModeButton/ColorModeButton";
// const Nav = dynamic(() => import("./Nav/Nav"), {
//     ssr: false,
// }); // ?
// const HamburgerButton = dynamic(
//     () => import("../HamburgerButton/HamburgerButton"),
//     {
//         ssr: false,
//     }
// ); // ?
const ColorModeButton = dynamic(
    () => import("../ColorModeButton/ColorModeButton"),
    {
        ssr: false,
    }
); // ?

// REDUX
import { useDispatch } from "react-redux";
import { toggleLayout } from "../../redux/ToggleLayout/toggleLayout.actions";

function Header() {
    const [windowSize, setWindowSize] = useState(721);
    const { width } = useWindowDimensions();

    console.log("HEADER RENDERS");

    useEffect(() => {
        setWindowSize(width);
    }, []);

    // const [navIsActive, setNavIsActive] = useState(false);
    // const toggleNav = async () => setNavIsActive(!navIsActive);
    // const closeNav = async () => setNavIsActive(false);

    // REDUX
    const dispatch = useDispatch();
    const toggleNav = () => {
        dispatch(toggleLayout({ id: "nav", fn: "toggle" }));
    };
    const closeNav = () => {
        dispatch(toggleLayout({ id: "nav", fn: "close" }));
    };

    useEffect(() => {
        setWindowSize(width);
        width > 720 && closeNav();
        //reset the state in case we go back to screen
    }, [width]);

    const LogoLink = () => (
        <Link href={"/"} onClick={closeNav}>
            <a>
                <Logo size={{ height: "22px", width: "75px" }} />
            </a>
        </Link>
    );

    const MobileHeader = () => (
        <div className={styles["header-wrap"]}>
            <LogoLink />
            <HamburgerButton toggleNav={toggleNav} />
        </div>
    );
    const DesktopHeader = () => (
        <div className={styles["header-wrap"]}>
            <LogoLink />

            <div className={styles["header-right-box"]}>
                <Nav width={windowSize} />
                <ColorModeButton />
            </div>
        </div>
    );

    return (
        <div id={styles["Header"]}>
            <div className={styles["header-component"]}>
                {windowSize <= 720 ? <MobileHeader /> : <DesktopHeader />}
            </div>
            {windowSize <= 720 && (
                <Nav width={windowSize} closeNav={closeNav} />
            )}
        </div>
    );
}

export default Header;
