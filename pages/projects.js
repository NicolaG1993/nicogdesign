import Head from "next/head";
import { useState } from "react";
import styles from "../shared/styles/Projects.module.css";

const projectLists = {
    design: [
        {
            title: "NGD",
            tags: ["Brand ID", "Graphic Design"],
            description: "Lorem Ipsum",
            link: "/projects",
            external: null,
        },
    ],
    coding: [
        {
            title: "da Mamy a Mamy",
            tags: [
                "E-Commerce",
                "NextJS",
                "Fullstack App",
                "Website",
                "Brand ID",
            ],
            description: "Lorem Ipsum",
            link: "/projects",
            external: "https://www.damamyamamy.com/",
        },
        {
            title: "Bordogna Silvano Snc",
            tags: ["NextJS", "Website", "Brand ID"],
            description: "Lorem Ipsum",
            link: "/projects",
            external: "https://www.damamyamamy.com/",
        },
    ],
};
export default function Projects() {
    const [selection, setSelection] = useState("design");

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

            <section className={styles["headings"]}>
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
                    onClick={() => setSelection("coding")}
                    className={
                        selection === "coding"
                            ? styles["selected"]
                            : styles["not-selected"]
                    }
                >
                    CODING
                </h1>
            </section>

            <section className={styles["projects"]}>
                {projectLists[selection].map((el) => (
                    <div className={styles["project-box"]} key={el.title}>
                        <div>
                            <h2>{el.title}</h2>
                        </div>
                        <div>
                            <h3>PICTURE HERE</h3>
                        </div>
                        <div>
                            <h4>
                                {el.tags.map((str) => (
                                    <span key={str}>{str}</span>
                                ))}
                            </h4>
                            <p>{el.description}</p>

                            <button>{el.link}</button>
                            {el.external && <button>{el.external}</button>}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
