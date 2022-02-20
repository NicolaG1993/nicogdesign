import Head from "next/head";
import Link from "next/link";
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

            <h1>Portfolio</h1>
            {/* 
                Voglio un parallax che mostri la mia immagine, oppure sia
                immagine che titolo, inventarmi qualcosa sul genere home , anche
                diverso, tipo banner iniziale che compare dopo scroll
             */}

            <section className={styles["experience"]}>
                <h2>Experience</h2>

                <div>
                    <h3>TIM COMPANY</h3>
                    <p>2019/2020 • Berlin, Germany</p>
                    <h4>Head of Design Department</h4>
                    <p>
                        Digital marketing company <br />- Improved the design of
                        customer websites (WordPress, Elementor, CSS, JS) <br />
                        - Branding, advertisement and social media campaigns
                    </p>
                    <p>
                        Web Design, Web Development (HTML, CSS, JS), SEO,
                        Graphic Design, Advertisement, Social Media Campaigns,
                        Adobe (Photoshop, Illustrator, AfterEffect, Premiere,
                        InDesign)
                    </p>
                </div>

                <div>
                    <h3>LAUDO AG</h3>
                    <p>2018/2019 • Berlin, Germany</p>
                    <h4>Frontend Developer</h4>
                    <p>
                        Web development agency <br />- Developed websites for
                        clients (WordPress, Beaver Builder) <br />- Improved
                        websites design, layouts and responsiveness (CSS 3)
                    </p>
                    <p>
                        Web Design, Web Development (HTML, CSS, JS), WordPress,
                        Beaver Builder, SEO
                    </p>
                </div>

                <div>
                    <h3>GINGIO</h3>
                    <p>2014/2022 • Berlin, Germany / Locarno, Switzerland</p>
                    <h4>
                        Global Database Administrator / Event Coordinator
                        (Germany) / Graphic Designer
                    </h4>
                    <p>
                        Entertainment agency <br />- Constant management and
                        updating of one of the largest global databases in the
                        music and entertainment industry (through spreadsheets)
                        <br />- Organization of promotional events in Berlin
                        <br />- Production of graphics and banners
                    </p>
                    <p>
                        Database Administration, Microsoft Excel, Graphic
                        Design, Events Coordination, Adobe (Photoshop,
                        Illustrator, InDesign)
                    </p>
                </div>
            </section>

            <section className={styles["education"]}>
                <h2>Education</h2>

                <div>
                    <h3>SPICED ACADEMY </h3>
                    <p>2020/2021 • Berlin, Germany</p>
                    <p>
                        Certificate as Full-Stack Web Developer <br />-
                        Successfully accomplished intensive 3- month coding
                        bootcamp <br />- Supported fellow students with issues
                    </p>
                    <p>
                        Full-Stack Development, HTML, CSS, JS, Node, Express, ..
                    </p>
                </div>

                <div>
                    <h3>
                        AID BERLIN – Akademie für Illustration und Design Berlin
                    </h3>
                    <p>2014/2018 • Berlin, Germany</p>
                    <p>
                        Certificate as Designer and Illustrator <br />-
                        Successfully accomplished 8-semester Studium Ausbildung
                    </p>
                    <p>
                        Graphic Design, Adobe (Photoshop, Illustrator,
                        InDesign), ..
                    </p>
                </div>
            </section>

            <section className={styles["skills"]}>
                <h2>Main Skills</h2>
                <div>
                    <h3>Coding</h3>
                    <p>• JavaScript (ES6), HTML 5, CSS 3</p>
                    <p>• React.js (with Hooks and Redux), Next.js, Vue.js</p>
                    <p>• SQL (Postgress, Prisma)</p>
                    <p>• Node.js, Express, jQuery, Handlebars</p>
                    <p>• Webpack, npm</p>
                    <p>• Git, GitHub, Command-Line, VS Code</p>
                    <p>
                        • AWS (Amplify, API Gateway, IAM, DynamoDB, Lambda, S3,
                        Route53)
                    </p>
                    <p>• Heroku, Vercel, Netlify</p>
                    <p>• Security: CSRF, Clickjacking</p>
                    <p>• API&apos;s</p>
                    <p>• WordPress</p>
                </div>
                <div>
                    <h3>Graphic Design</h3>
                    <p>• Adobe Photoshop</p>
                    <p>• Adobe Illustrator</p>
                    <p>• Adobe InDesign</p>
                    <p>• Adobe Premiere</p>
                    <p>• Adobe AfterEffect</p>
                    <p>• Maxon Cinema 4D</p>
                    <p>• Brand ID, Logo Design</p>
                    <p>• Web Design, UI, UX</p>
                    <p>• Publication Design, Editorial Design</p>
                    <p>• Illustration</p>
                </div>
            </section>

            <section className={styles["projects"]}>
                <h2>Projects</h2>
                <div>
                    <h3>DA MAMY A MAMY</h3>
                    <p>e-commerce</p>
                    <p>
                        E-commerce website for a small business in Italy, user
                        can register, buy items, shop filters, cart, different
                        payment methods and checkout options. (Next.js, Redux,
                        Node.js, AWS), contact form
                    </p>
                    <Link href={`/project/da-mamy-a-mamy`}>
                        <a>
                            <button className={styles["link-box"]}>
                                See the project
                            </button>
                        </a>
                    </Link>
                </div>
                <div>
                    <h3>SOCIAL NETWORK</h3>
                    <p>Bootcamp project</p>
                    <p>
                        Register/login, change Password (verification Email via
                        AWS), upload images, send/cancel friend requests, group
                        chat, add/edit Biography, post items and search
                        functionality. (React.js, Redux, Socket.io, Node.js,
                        PostgreSQL)
                    </p>
                    <Link href={`/project/spiced-final-project`}>
                        <a>
                            <button className={styles["link-box"]}>
                                See the project
                            </button>
                        </a>
                    </Link>
                </div>
                <div>
                    <h3>IMAGE BOARD</h3>
                    <p>Bootcamp project</p>
                    <p>
                        Upload, comment, and like images. (Vue.js, Node.js,
                        PostgreSQL)
                    </p>
                    <Link href={`/project/spiced-image-board`}>
                        <a>
                            <button className={styles["link-box"]}>
                                See the project
                            </button>
                        </a>
                    </Link>
                </div>
            </section>

            <div>
                <Link href={`/projects`}>
                    <a>
                        <button className={styles["link-box"]}>
                            All my projects
                        </button>
                    </a>
                </Link>
                <Link href={`/cv`}>
                    <a>
                        <button className={styles["link-box"]}>
                            Watch my CV
                        </button>
                    </a>
                </Link>
                <Link href={`/cv`}>
                    <a>
                        <button className={styles["link-box"]}>
                            Download my CV (PDF)
                        </button>
                    </a>
                </Link>
            </div>

            {/* <section className={styles.smth2}>
                Qui ci va una bella grid con delle immagini Poi tutto il CV e
                successivamente il portfolio. Sará scaricabile in PFD. Inoltre
                qui ci sono solo i lavori migliori. Per tutti i lavori forse mi
                conviene fare una pagina a parte. Ci deve essere un pulsante per
                scaricare il CV ed uno per tutto il portfolio.
            </section> */}
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
