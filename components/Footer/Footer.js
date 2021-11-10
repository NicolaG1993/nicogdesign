import styles from "./style/Footer.module.css";
import Logo from "../Logo/Logo";
import Nav from "./Nav/Nav";
import ContactCard from "./ContactCard/ContactCard";

export default function Footer() {
    return (
        <div id={styles["Footer"]}>
            <div className={styles["footer-wraper"]}>
                <Logo
                    size={{
                        height: "35px",
                        width: "100px",
                        marginTop: "var(--size000)",
                    }}
                />

                <Nav />

                <ContactCard />
            </div>
            <Copyrights />
        </div>
    );
}

function Copyrights() {
    const currentYear = new Date().getFullYear();
    return (
        <div className={`${styles["copyrights"]} ${styles["darker-tone"]}`}>
            <h5>
                NGDesign, © {currentYear}
                {/*|| Website by{" "} <a
                    href="https://www.nicogdesign.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    NGDesign
                </a> */}
            </h5>
        </div>
    );
}
