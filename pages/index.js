import Head from "next/head";
import Image from "next/image";
import styles from "../shared/styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>NGD | Nicola Gaioni Design</title>
            </Head>
        </div>
    );
}
