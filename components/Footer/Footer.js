import Link from "next/link";
import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";

export default function Footer() {
    return (
        <>
            {/* <div id={styles["Footer"]}>
                <div>AAA</div>
            </div> */}
            <Copyrights />
        </>
    );
}

function Copyrights() {
    const currentYear = new Date().getFullYear();
    return (
        <div className={styles["copyrights"]}>
            <h5>NGDesign, © {currentYear}</h5>
            <div>
                <Link href={`/contact`}>
                    <a>
                        <h5>Contact</h5>
                    </a>
                </Link>

                <Link href={`/about`}>
                    <a>
                        <h5>Info</h5>
                    </a>
                </Link>
            </div>
        </div>
    );
}
