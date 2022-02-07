import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import TypeWriter from "../components/Home2/TypeWriter";
import styles from "../shared/styles/Home2.module.css";
import useScrollPosition from "../shared/utils/useScrollPosition";

export default function Home() {
    const { scrollTop } = useScrollPosition();

    useEffect(() => {
        const element = document.getElementById("HeadlineChange");
        const content = document.getElementById("HeadlineContent");
        let topPos = element.offsetTop;

        scrollTop >= topPos - 500
            ? (content.innerHTML = "CODING")
            : (content.innerHTML = "DESIGN");
    }, [scrollTop]);

    return (
        <div id={styles["Home"]}>
            <Head>
                <title>NGD | Nicola Gaioni Design</title>
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="NGD | Nicola Gaioni Design"
                />
            </Head>

            <section className={styles["section-banner"]}>
                <TypeWriter />
            </section>

            <section className={styles["section-intro"]}>
                <p>
                    NGD was founded on a belief in the power of
                    &apos;live&apos;. We connect, inspire and create massive
                    impact through music, culture and space.
                </p>
            </section>

            <section className={styles["section-skills"]}>
                <div id={styles["Headline"]}>
                    <h2 id="HeadlineContent">DESIGN</h2>
                </div>

                <div>
                    <p>
                        Design é ... . Ho iniziato il mio percorso nel 2014,
                        trasferendomi a Berlino dall&apos;Italia per studiare
                        design e illustrazione, laureandomi con successo nel
                        2018 a AID Berlin. Fin da subito mi é interessato il
                        Webdesign e lo sviluppo di interfaccie, siti web e
                        applicazioni, mostrando buoni risultati e maturando
                        esperienza lavorando fino ad oggi su diversi progetti
                        sia da freelancer che per aziende.
                    </p>
                </div>

                <div id="HeadlineChange">
                    <p>
                        Webdevelopment é una skill fondamentale ai nostri tempi.
                        Nel mio caso é stato naturale iniziare ad interessarmi
                        alla programmazione in parallelo ai miei studi e dopo
                        aver lavorato come webdesigner. Dopo diversi anni
                        passati ad imparare HTML, CSS e Javascript ho deciso di
                        iscrivermi a SPICED ACADEMY per diventare un
                        programmatore full-stack nel 2021.
                    </p>
                </div>
            </section>

            <section className={styles["section-data"]}>
                <h2>GITHUB STATS</h2>
                <div>
                    <div>
                        <h3>Deploys</h3>
                        <p>1.000</p>
                    </div>
                    <div>
                        <h3>Projects</h3>
                        <p>20</p>
                    </div>
                    <div>
                        <h3>Collabs</h3>
                        <p>1</p>
                    </div>
                    <div>
                        <h3>Stackoverflow</h3>
                        <p>1 Silver</p>
                        <p>8 Bronze</p>
                        <p>Since 01/01/2020</p>
                    </div>
                </div>
            </section>
            {/*
            <section className={styles["section-data"]}>
                <h2>PROGETTI</h2>
                <div>
                    <div>
                        <h3>Deploys</h3>
                        <p>1.000</p>
                    </div>
                </div>
            </section>

            <section className={styles["section-data"]}>
                <h2>IMMAGINI</h2>
                <p>Preview di qualche progetto</p>
                <p>Si potrebbe usare anche parallax</p>
            </section> */}
        </div>
    );
}

// BIO, DESIGN, WEBDEV
// PROGETTI, IMMAGINI, IMMAGINI CON PARALLAX, GITHUB STATS,
