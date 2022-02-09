import Head from "next/head";
import styles from "../shared/styles/Contact.module.css";

export default function Contact() {
    return (
        <div id={styles["Contact"]}>
            <Head>
                <title>Contact - NGD | Nicola Gaioni Design</title>
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Contact - NGD | Nicola Gaioni Design"
                />
            </Head>

            <section className={styles[""]}>
                <h1>CONTACT</h1>
            </section>
            <section className={styles[""]}>
                <h4>
                    E-mail:{" "}
                    <a href="mailto:nicog.designer@gmail.com">
                        nicog.designer@gmail.com
                    </a>
                </h4>
                <h4>
                    Phone: <a href="tel:+4915737270232">+49 (0) 157 37270232</a>
                </h4>
                <h4>Berlin, Germany</h4>

                <h2>SOCIALS</h2>
                <h4>
                    <a
                        href="https://github.com/NicolaG1993"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </h4>
                <h4>
                    <a
                        href="https://stackoverflow.com/users/16337778/nicola-gaioni"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Stack Overflow
                    </a>
                </h4>
                <h4>
                    <a
                        href="https://www.facebook.com/nicog.designer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        FB
                    </a>
                </h4>
                <h4>
                    <a
                        href="https://www.instagram.com/nik_gaioni/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        IG
                    </a>
                </h4>
            </section>
        </div>
    );
}
