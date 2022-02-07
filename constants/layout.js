import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { keepTheme } from "../shared/utils/themes";
import Nav from "../components/Header/Nav";
import { toggleLayout } from "../redux/ToggleLayout/toggleLayout.actions";
import useWindowDimensions from "../shared/utils/useWindowDimensions";
const selectLayouts = (state) => state.toggleLayout.layouts[1];

export default function Layout({ children }) {
    const { width } = useWindowDimensions();
    let { active } = useSelector(selectLayouts, shallowEqual);

    const dispatch = useDispatch();
    const toggle = () => {
        dispatch(toggleLayout({ id: "nav", fn: "toggle" }));
    };
    const close = () => {
        dispatch(toggleLayout({ id: "nav", fn: "close" }));
    };

    useEffect(() => keepTheme(), []);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="author" content="NGDesign - Nicola Gaioni" />
                <meta charSet="UTF-8" />
            </Head>

            <Header close={close} toggle={toggle} />
            <Nav close={close} />
            <main
                style={
                    active
                        ? { transform: "translateX(-30vw)" }
                        : { transform: "translateX(0%)" }
                }
            >
                {children}
            </main>

            <Footer />
        </>
    );
}

/*
per qualche motivo lo state viene ricaricato anche in Header, quando invece non dovrebbe, che sia per redux useSelector?
stando alla documentazione di Nextjs lo state del layout dovrebbe preservarsi e rimanere costante, ma durante la navigazione fa il refresh
*/
