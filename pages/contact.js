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

            <section className={styles[""]}></section>
        </div>
    );
}
