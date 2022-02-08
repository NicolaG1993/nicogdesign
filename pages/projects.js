import Head from "next/head";
import styles from "../shared/styles/Projects.module.css";

export default function Projects() {
    return (
        <div id={styles["Projects"]}>
            <Head>
                <title>Projects - NGD | Nicola Gaioni Design</title>
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Projects - NGD | Nicola Gaioni Design"
                />
            </Head>

            <section className={styles[""]}></section>
        </div>
    );
}
