import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button/Button";

import styles from "../shared/styles/Portfolio.module.css";

export default function Portfolio() {
    return (
        <div id={styles["Portfolio"]}>
            <Head>
                <title>Portfolio - NGD | Nicola Gaioni Design</title>
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Portfolio - NGD | Nicola Gaioni Design"
                />
            </Head>

            <h1>My Portfolio</h1>
            <section>
                <h2>Experience</h2>
                <div>
                    <h3>Certificates</h3>
                    <p>AID 2014-2018</p>
                    <p>SPICED 2020-2021</p>
                </div>
                <div>
                    <h3>Work experience</h3>
                    <p>TIM COMPANY 2019</p>
                    <p>2019 LAUDO?</p>
                    <p>GINGIO 2014-2021</p>
                </div>
            </section>

            <section>
                <h2>Skills</h2>
                <div>
                    <h3>Webdevelopment</h3>
                    <p>HTML, CSS, ...</p>
                </div>
                <div>
                    <h3>Graphic Design</h3>
                    <p>Adobe Photoshop, Adobe Illustrator, ...</p>
                </div>
            </section>

            <section>
                <h2>Projects</h2>
                <div>
                    <h3>Webdevelopment</h3>
                    <p>HTML, CSS, ...</p>
                </div>
                <div>
                    <h3>Graphic Design</h3>
                    <p>Adobe Photoshop, Adobe Illustrator, ...</p>
                </div>
            </section>

            <Button type="internal" text="Download my CV" />
            <br />
            <br />
            <Button type="internal" text="Download my Portfolio" />

            <section className={styles.smth2}>
                Qui ci va una bella grid con delle immagini Poi tutto il CV e
                successivamente il portfolio. Sará scaricabile in PFD. Inoltre
                qui ci sono solo i lavori migliori. Per tutti i lavori forse mi
                conviene fare una pagina a parte. Ci deve essere un pulsante per
                scaricare il CV ed uno per tutto il portfolio.
            </section>
        </div>
    );
}

/*

DaMamyAMamy (Website and Design)
BordognaSilvano snc (Website and Design)
InCircleRecords (Website and Design)
AnimalShop (Website and Design)
SPICED final project
SPICED projects (handlebars, API, node, psql, vue)

AID projects ? (forse fare una sezione gallery nel sito per i lavori puramente di design? e una per i siti/coding?)

----------------------------------------------------------------------------------
La parte superiore sará il contenuto di CV, quella inferiore il portfolio
VEDI ALTRI CV (MIKHAIL)
VEDI ALTRI PORTFOLIO (WEBSITES)
Inserire buttons per scaricare il mio CV o PORTFOLIO
*/
