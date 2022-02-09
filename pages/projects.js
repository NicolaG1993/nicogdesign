import Head from "next/head";
import { useState } from "react";
import styles from "../shared/styles/Projects.module.css";

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
                    <div key={el.title}>
                        <div className={styles["project-box"]}>
                            <div>
                                <div>
                                    <h2>{el.title}</h2>
                                    <h4>
                                        {el.tags.map((str, i) =>
                                            i === el.tags.length - 1 ? (
                                                <span key={str}>{str}</span>
                                            ) : (
                                                <span key={str}>{str}, </span>
                                            )
                                        )}
                                    </h4>
                                </div>

                                <div>
                                    <h3>PICTURE HERE</h3>
                                </div>
                            </div>
                            <div>
                                <p>{el.description}</p>

                                <button>{el.link}</button>
                                {el.external && <button>{el.external}</button>}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

// Potrei fare in modo che le due liste siano grandi ognuna 100vw e che slidano quando selezionate

const projectLists = {
    design: [
        {
            title: "NGD",
            tags: ["Brand ID", "Graphic Design"],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
