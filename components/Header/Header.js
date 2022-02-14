import styles from "./Header.module.css";
import Link from "next/link";
import Facebook from "./assets/facebook.svg";
import Instagram from "./assets/instagram.svg";
import WhatsApp from "./assets/whatsapp.svg";

function Header({ close, toggle }) {
    return (
        <header id={styles["Header"]}>
            <div className={styles["header-box"]}>
                <Link href="/">
                    <a className={styles["header-logo"]} onClick={close}>
                        NGD
                    </a>
                </Link>

                <div>
                    <a
                        className={styles["header-icon"]}
                        href="https://www.facebook.com/nicog.designer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Facebook />
                    </a>
                    <a
                        className={styles["header-icon"]}
                        href="https://www.instagram.com/nik_gaioni"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Instagram />
                    </a>
                    <a
                        className={styles["header-icon"]}
                        href="https://www.facebook.com/Da-Mamy-A-Mamy-105663897718034/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <WhatsApp />
                    </a>
                    <h2 onClick={toggle}>MENU</h2>
                </div>
            </div>
        </header>
    );
}

export default Header;
