import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button/Button";
import Banner from "../components/Home/Banner/Banner";
import styles from "../shared/styles/Home.module.css";

export default function Home() {
    return (
        <main>
            <Head>
                <title>NGD | Nicola Gaioni Design</title>
            </Head>
            <Banner></Banner>
            <section id={styles.Bio}>
                <div>
                    <h2>Who i am.</h2>
                    <p>
                        My name is Nicola Gaioni and I&apos;m a graphic designer
                        and a websites developer. I graduated as designer in
                        2018 and currently I work as a freelancer on a wide
                        range of graphic content including illustration,
                        branding, graphic and UI/UX.
                    </p>
                    <p>
                        During the last years I have also had the opportunity to
                        work as a Webdesigner and to approach the world of
                        programming, graduating as FullStack Developer in 2021.
                        I have achieved a good understanding of many coding
                        languages and frameworks,{" "}
                        <a>
                            <strong>check my CV</strong>
                        </a>{" "}
                        to see them all!
                    </p>
                    <p>
                        At the moment I am available for job positions and
                        commissioned works.
                    </p>
                </div>
            </section>
            {/* <section className={styles.smth}>
                Qui ci va una bella grid con delle immagini
            </section> */}
            <section className={styles.smth3}>
                <Button
                    page="/portfolio"
                    text="Go to my portfolio"
                    type="internal"
                    style="inverted-btn"
                />
                <br />
                <Button
                    page="/portfolio"
                    text="Download my CV"
                    type="internal"
                    style="inverted-btn"
                />
                <br />
                <Button
                    page="/gallery"
                    text="See my work"
                    type="internal"
                    style="inverted-btn"
                />
            </section>
        </main>
    );
}
