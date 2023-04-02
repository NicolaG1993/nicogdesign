import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/About.module.css";

export default function About() {
    const [selection, setSelection] = useState("coding");

    const Text = () =>
        selection === "design" ? (
            <section className={styles["text"]}>
                <p>
                    Design is about creating solutions for people. I started my
                    career in 2014, moving to Berlin from Italy to study design
                    and illustration, successfully graduating in 2018 at AID
                    Berlin. Right from the start I was interested in Webdesign
                    and the development of interfaces, websites and
                    applications, showing good results and gaining experience
                    working to date on various projects both as a freelancer and
                    for companies.
                </p>

                <p>
                    During my studies at the academy I had the opportunity to
                    practice in various sectors and aspects of the study of
                    design, supported by teachers and professionals in the
                    sector, which was my goal when I decided to move to Germany.
                    Among the various skills that I studied and learned during 7
                    semesters are:
                </p>

                <ul>
                    <li>Graphic Design</li>
                    <li>Web Design</li>
                    <li>Illustration</li>
                    <li>Publishing Design</li>
                    <li>Photograpy</li>
                    <li>Animation</li>
                    <li>Printing Techniques</li>
                    <li>UX/UI</li>
                    <li>3D Modeling</li>
                    <li>Package Design</li>
                    <li>Branding</li>
                </ul>

                <p>
                    I also have hundreds of hours spent working with the
                    following softwares:
                </p>

                <ul>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe InDesign</li>
                    <li>Adobe AfterEffect</li>
                    <li>Adobe Premiere</li>
                    <li>Maxon Cinema 4D</li>
                    <li>FL Studio</li>
                </ul>

                <p>
                    My experience in this sector was then enriched with my work
                    experiences, during and after studies; I started with
                    freelance jobs for individuals or small businesses, such as
                    logos for shops, advertising graphics or the development of
                    small internet sites. Later I was hired in 2 startups.
                </p>
                <p>
                    In my first experience I had to develop and optimize
                    websites for a number of clients, mainly on WordPress,
                    adding value through my design knowledge. In the second
                    experience, however, I was hired to direct and renew the
                    whole concept of a company, taking care of advertising,
                    website, ads, posters, merchandise, company t-shirts,
                    photography, videos, animations and posts on social media.
                    To date, I can say that I know what a company needs to have
                    a great design and effective communication.
                </p>
            </section>
        ) : selection === "coding" ? (
            <section className={styles["text"]}>
                <p>
                    Webdevelopment is a fundamental skill these days. In my case
                    it was natural to get interested in web development in
                    parallel with my studies and after having worked as a
                    webdesigner I was able to receive a scholarship to
                    specialize as a fullstack programmer. Obviously I
                    immediately took the opportunity given my passion for web
                    design and web development. I decided to join SPICED ACADEMY
                    to become a full-stack developer in 2021, after several
                    years of learning HTML, CSS and Javascript
                </p>
                <p>
                    After my studies I was able to personally take care of the
                    development and management of the websites of 2 different
                    companies, including an e-commerce completely created from
                    scratch, using Next.js, also developing its API and
                    database.
                </p>
                <p>
                    Among the various skills I have practiced and learned are:
                </p>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript ES6</li>
                    <li>React.js (with Hooks and Redux)</li>
                    <li>Next.js</li>
                    <li>Vue.js</li>
                    <li>SQL (Postgress, Prisma)</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>jQuery</li>
                    <li>Handlebars</li>
                    <li>Webpack</li>
                    <li>npm</li>
                    <li>Git, GitHub</li>
                    <li>Command-Line</li>
                    <li>VS Code</li>
                    <li>
                        AWS (Amplify, API Gateway, IAM, DynamoDB, Lambda, S3,
                        Route53)
                    </li>
                    <li>Heroku, Vercel, Netlify</li>
                    <li>Security: CSRF, Clickjacking</li>
                    <li>API&apos;s</li>
                    <li>WordPress</li>
                </ul>

                <p>
                    In the future I would like to delve into the fields of
                    software engineering, electronic engineering, machine
                    learning and artificial intelligence.
                </p>
            </section>
        ) : (
            selection === "myself" && (
                <section className={styles["text"]}>
                    <p>
                        My full name is Nicola Gaioni and I come from a small
                        town in the province of Verona, Italy. I moved to
                        Berlin, Germany in 2014 to continue my studies after I
                        finished high school and after working and traveling for
                        a couple of years.
                    </p>

                    <p>
                        At the moment I speak three languages: Italian, English
                        and German.
                    </p>

                    <p>
                        During high school I first chose an electrical
                        engineering course for the first year, changing the
                        following year to a tourist institute, where I studied
                        English, German and French. It can be said that I have
                        always liked electronics and languages ​​since I was a
                        teenager, as if it were a prelude to my subsequent study
                        of computer languages.
                    </p>

                    <p>
                        In addition to languages ​​I had to study art history
                        during those years, which led me to have a strong
                        interest in the world of drawing and design afterwards.
                        This interest has become so strong that it pushed me to
                        come to Berlin to start my studies at the academy to
                        become a graphic designer and illustrator.
                    </p>

                    <p>
                        During my studies at the academy I was already working
                        on small projects, the first ones were mainly logos for
                        shops or websites for small businesses, which is why I
                        started to focus mainly on web design and branding.
                        After my studies I was hired by two startups, as a
                        frontend developer in the first, and as a graphic
                        designer and web designer in the second, which gave me
                        the work experience I needed. In 2020 I received a
                        government scholarship to specialize as a fullstack
                        developer in a botcamp course that I undertook and
                        completed in early 2021, after subsequently passing the
                        admission tests.
                    </p>

                    <p>
                        About me and my story there is little left to say, a few
                        more curiosities:
                    </p>

                    <ul>
                        <li>
                            I consider myself creative with a positive mindset,
                            teamplayer
                        </li>
                        <li>
                            During my free time I like to develop and design
                            apps
                        </li>

                        <li>I like unpopular opinions</li>
                        <li>My favorite color is black</li>
                        <li>I prefer dogs to cats</li>
                        <li>Music and football are my greatest passions</li>
                    </ul>
                </section>
            )
        );

    return (
        <div id={styles["About"]}>
            <Head>
                <title>About - NGD | Nicola Gaioni Design</title>
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="About - NGD | Nicola Gaioni Design"
                />
            </Head>

            <section className={styles["headings"]}>
                <h1
                    onClick={() => setSelection("coding")}
                    className={
                        selection === "coding"
                            ? styles["selected"]
                            : styles["not-selected"]
                    }
                >
                    CODING
                </h1>
                <h1
                    onClick={() => setSelection("design")}
                    className={
                        selection === "design"
                            ? styles["selected"]
                            : styles["not-selected"]
                    }
                >
                    DESIGN
                </h1>
                <h1
                    onClick={() => setSelection("myself")}
                    className={
                        selection === "myself"
                            ? styles["selected"]
                            : styles["not-selected"]
                    }
                >
                    MORE
                </h1>
            </section>

            <Text />
        </div>
    );
}
