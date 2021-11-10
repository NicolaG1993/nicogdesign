import styles from "./style/ContactCard.module.css";

export default function ContactCard() {
    return (
        <div className={styles["contact-footer"]}>
            <h4>Contact me</h4>
            <div className={styles["contact-wraper"]}>
                {/* <p>Via Primo Stucchi, 78/G</p>
                <p>20872 - Cornate d&apos;Adda (MB)</p> */}
                <p>
                    <a href="mailto:nicog.designer@gmail.com">
                        nicog.designer@gmail.com
                    </a>
                </p>
                <p>
                    <a href="tel:+4915737270232">+49 (0)157 3727 0232</a>
                </p>
            </div>
        </div>
    );
}
