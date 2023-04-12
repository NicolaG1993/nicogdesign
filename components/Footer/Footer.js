import Link from "next/link";
import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";

export default function Footer() {
    return (
        <footer id={styles.Footer}>
            {/* <div id={styles["Footer"]}>
                <div>AAA</div>
            </div> */}
            <Copyrights />
        </footer>
    );
}

function Copyrights() {
    const currentYear = new Date().getFullYear();
    return (
        <div className={styles["copyrights"]}>
            <h5>NGDesign, © {currentYear}</h5>
            <div>
                <Link passHref href={`/contact`}>
                    <h5>Contact</h5>
                </Link>

                <Link passHref href={`/about`}>
                    <h5>Info</h5>
                </Link>
            </div>
        </div>
    );
}
