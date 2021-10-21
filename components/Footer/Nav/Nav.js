import Link from "next/link";
import styles from "./style/Nav.module.css";

export default function Nav() {
    return (
        <nav className={styles["footer-nav"]}>
            <h4>Links</h4>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/servizi">Tutti i servizi</Link>
                </li>
                <li>
                    <Link href="/document">Document</Link>
                </li>
                <li>
                    <Link href="/FAQ">FAQ</Link>
                </li>
            </ul>
        </nav>
    );
}
