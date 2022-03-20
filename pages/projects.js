import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../shared/styles/Projects.module.css";
import projectLists from "../shared/data/allProjects.js";

export default function Projects() {
    const [selection, setSelection] = useState("design");

    useEffect(
        () =>
            window.sessionStorage.getItem("ngd-projects") &&
            setSelection(sessionStorage.getItem("ngd-projects")),
        []
    );

    const handleChange = (str) => {
        setSelection(str);
        sessionStorage.setItem("ngd-projects", str);
    };

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
                    onClick={() => handleChange("design")}
                    className={
                        selection === "design"
                            ? styles["selected"]
                            : styles["not-selected"]
                    }
                >
                    DESIGN
                </h1>
                <h1
                    onClick={() => handleChange("coding")}
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
                                <h2>{el.title}</h2>
                                <h4>
                                    {el.tags &&
                                        el.tags.map((str, i) =>
                                            i === el.tags.length - 1 ? (
                                                <span key={str}>{str}</span>
                                            ) : (
                                                <span key={str}>{str}, </span>
                                            )
                                        )}
                                </h4>

                                <div>
                                    <p>{el.description}</p>

                                    <div className={styles["links-box"]}>
                                        <Link href={`${el.slug}`}>
                                            <a>
                                                <button
                                                    className={
                                                        styles["link-box"]
                                                    }
                                                >
                                                    More info
                                                </button>
                                            </a>
                                        </Link>

                                        {el.urls && el.urls.website && (
                                            <a
                                                href={el.urls.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <button
                                                    className={
                                                        styles["link-box"]
                                                    }
                                                >
                                                    Go to the project
                                                </button>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className={styles["picture-box"]}>
                                {el.thumbnail ? (
                                    <Image
                                        src={el.thumbnail}
                                        alt={el.title}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

// Potrei fare in modo che le due liste siano grandi ognuna 100vw e che slidano quando selezionate
