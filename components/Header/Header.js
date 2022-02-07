import styles from "./Header.module.css";
import Facebook from "./assets/facebook.svg";
import Instagram from "./assets/instagram.svg";
import WhatsApp from "./assets/whatsapp.svg";

function Header({ close, toggle }) {
    return (
        <header id={styles["Header"]}>
            <div className={styles["header-box"]}>
                <h2 onClick={close}>NGD</h2>

                <div>
                    <a
                        className={styles["header-icon"]}
                        href="https://www.instagram.com/damamyamamy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Facebook />
                    </a>
                    <a
                        className={styles["header-icon"]}
                        href="https://www.facebook.com/Da-Mamy-A-Mamy-105663897718034/"
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
