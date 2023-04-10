import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button/Button";

import styles from "@/styles/Portfolio.module.css";

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
                    <h3>NICOLA GAIONI DESIGN</h3>
                    <p>2021/2023 • Berlin, Germany</p>
                    <h4>Founder</h4>
                    <p>Freelance Full-Stack Developer and Graphic Designer</p>
                </div>

                <div>
                    <h3>GINGIO</h3>
                    <p>2014/2023 • Berlin, Germany / Locarno, Switzerland</p>
                    <h4>
                        Head of Web Development Department / Global Database
                        Administrator / Event Coordinator (Germany) / Graphic
                        Designer
                    </h4>
                    <p>Entertainment agency</p>
                    <div className={styles["list"]}>
                        <p className={styles["list-el"]}>
                            Constant management and updating of one of the
                            largest global databases in the music and
                            entertainment industry (through spreadsheets)
                        </p>
                        <p className={styles["list-el"]}>
                            Production of graphics and banners
                        </p>
                        <p className={styles["list-el"]}>Team coordination</p>
                        <p className={styles["list-el"]}>
                            Organization of promotional events in Berlin
                        </p>
                    </div>

                    <p>
                        Database Administration, Microsoft Excel, Graphic
                        Design, Events Coordination, Adobe (Photoshop,
                        Illustrator, InDesign)
                    </p>
                </div>

                <div>
                    <h3>TIM COMPANY</h3>
                    <p>2019/2020 • Berlin, Germany</p>
                    <h4>Head of Design Department</h4>
                    <p>Digital marketing company</p>
                    <div className={styles["list"]}>
                        <p className={styles["list-el"]}>
                            Improved the design of customer websites (WordPress,
                            Elementor, CSS, JS)
                        </p>
                        <p className={styles["list-el"]}>
                            Branding, advertisement and social media campaigns
                        </p>
                    </div>
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
                    <p>Web development agency</p>
                    <div className={styles["list"]}>
                        <p className={styles["list-el"]}>
                            Developed websites for clients (WordPress, Beaver
                            Builder)
                        </p>
                        <p className={styles["list-el"]}>
                            Improved websites design, layouts and responsiveness
                            (CSS 3)
                        </p>
                    </div>
                    <p>
                        Web Design, Web Development (HTML, CSS, JS), WordPress,
                        Beaver Builder, SEO
                    </p>
                </div>
            </section>

            <section className={styles["education"]}>
                <h2>Education</h2>

                <div>
                    <h3>SPICED ACADEMY </h3>
                    <p>2020/2021 • Berlin, Germany</p>
                    <h4>Certificate as Full-Stack Web Developer</h4>
                    <div className={styles["list"]}>
                        <p className={styles["list-el"]}>
                            Successfully accomplished intensive 3-month coding
                            bootcamp
                        </p>
                        <p className={styles["list-el"]}>
                            Supported fellow students with issues
                        </p>
                    </div>
                    <p>
                        Full-Stack Development, HTML, CSS, JavaScript, React.js
                        (with Hooks and Redux), Vue.js, SQL (Postgress),
                        Node.js, Express, jQuery, Handlebars, Webpack, npm, Git,
                        GitHub, Command-Line, VS Code, Heroku, Security: CSRF,
                        Clickjacking, API&apos;s
                    </p>
                </div>

                <div>
                    <h3>
                        AID BERLIN – Akademie für Illustration und Design Berlin
                    </h3>
                    <p>2014/2018 • Berlin, Germany</p>
                    <h4>Certificate as Designer and Illustrator</h4>
                    <div className={styles["list"]}>
                        <p className={styles["list-el"]}>
                            Successfully accomplished 8-semester Studium
                            Ausbildung
                        </p>
                    </div>
                    <p>
                        Graphic Design, Adobe (Photoshop, Illustrator, InDesign,
                        AfterEffect), Illustration, Photograpy, Branding,
                        Package Design, 3D Modeling (Maxon Cinema 4D),
                        Publishing Design, UX/UI, Printing Techniques, Animation
                    </p>
                </div>
            </section>

            <section className={styles["skills"]}>
                <h2>Main Skills</h2>
                <div>
                    <h3>Web Development</h3>
                    <p>JavaScript (ES6), HTML 5, CSS3, JSX</p>
                    <p>React.js (with Hooks and Redux), Next.js, Vue.js</p>
                    <p>SQL (Postgress, Prisma)</p>
                    <p>
                        Node.js, Express, jQuery, Handlebars, Socket.io, axios
                    </p>
                    <p>Webpack, npm</p>
                    <p>Git, GitHub, Command-Line, VS Code, Atom</p>
                    <p>
                        AWS (Amplify, API Gateway, IAM, DynamoDB, RDS, Lambda,
                        S3, Route53, SES)
                    </p>
                    <p>AWS SDK, Stripe React Native SDK, PayPal JS SDK</p>
                    <p>REST API&apos;s</p>
                    <p>Heroku, Vercel, Netlify</p>
                    <p>pgAdmin, SQLWorkbench, ElephantSQL</p>
                    <p>Security: CSRF, Clickjacking</p>
                    <p>Testing: Jest</p>
                    <p>WordPress, Shopify</p>
                    <p>Content Delivery Network: Cloudinary</p>
                    <p>SEO (Search Engine Optimization)</p>
                </div>
                <div>
                    <h3>Graphic Design</h3>
                    <p>Adobe Photoshop</p>
                    <p>Adobe Illustrator</p>
                    <p>Adobe InDesign</p>
                    <p>Adobe Premiere</p>
                    <p>Adobe AfterEffect</p>
                    <p>Maxon Cinema 4D</p>
                    <p>Brand ID, Logo Design</p>
                    <p>Web Design, UI/UX, Responsive Design</p>
                    <p>Publication Design, Editorial Design</p>
                    <p>Illustrations</p>
                </div>
            </section>

            <section className={styles["projects"]}>
                <h2>Main Projects</h2>
                <div>
                    <h3>DA MAMY A MAMY</h3>
                    <p>E-commerce</p>
                    <p>
                        Website for a brand new business in Italy. User
                        registration and login, admin reserved area, add and
                        modify products, pictures upload, shop filters, cart,
                        transactional emails, contact form, different payment
                        methods and checkout options. The website is fully
                        responsive. I was also responsible for the design and
                        branding of the company.
                    </p>
                    <Link passHref href={`/projects/da-mamy-a-mamy`}>
                        <button className={styles["link-box"]}>
                            See the project
                        </button>
                    </Link>
                </div>

                <div>
                    <h3>DB UI</h3>
                    <p>Full-stack app</p>
                    <p>
                        Web App that interfaces with a movie database,
                        containing tables for actors, movies, studios,
                        distribution, categories and tags. User can add/edit any
                        database item through the UI, there is also a counter
                        feature on each movie, to mark the day it was watched.
                        These records will provide various rankings and
                        statistics on your personal tastes in the appropriate
                        section of the site. The user must provide a password
                        and username to access.
                    </p>
                    <Link passHref href={`/projects/database-ui`}>
                        <button className={styles["link-box"]}>
                            See the project
                        </button>
                    </Link>
                </div>

                <div>
                    <h3>SOCIAL NETWORK</h3>
                    <p>Bootcamp project</p>
                    <p>
                        Register/login, change password (verification email via
                        AWS), upload images, send/cancel friend requests, group
                        chat, add/edit biography, post items and search
                        functionality. React.js, Redux, Socket.io, Node.js,
                        PostgreSQL.
                    </p>
                    <Link passHref href={`/projects/spiced-final-project`}>
                        <button className={styles["link-box"]}>
                            See the project
                        </button>
                    </Link>
                </div>
            </section>

            <div className={styles["links-wrap"]}>
                <Link passHref href={`/projects`}>
                    <button className={styles["link-box"]}>
                        All my projects
                    </button>
                </Link>

                <a
                    href={"/documents/CV.pdf"}
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className={styles["link-box"]}>
                        Download my CV (PDF)
                    </button>
                </a>
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
