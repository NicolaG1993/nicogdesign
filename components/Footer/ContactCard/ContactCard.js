import styles from "./style/ContactCard.module.css";

export default function ContactCard() {
    return (
        <div className={styles["contact-footer"]}>
            <h4>Contatto</h4>
            <div className={styles["contact-wraper"]}>
                <p>Via Primo Stucchi, 78/G</p>
                <p>20872 - Cornate d&apos;Adda (MB)</p>
                <p>
                    <a href="mailto:bs@bordognasilvano.it">
                        bs@bordognasilvano.it
                    </a>
                </p>
                <p>
                    <a href="tel:+390396060806">039 606 08 06</a>
                </p>
            </div>
        </div>
    );
}
