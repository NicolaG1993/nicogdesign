import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "@/styles/Projects.module.css";
import designProjects from "@/shared/data/design.js";
import codingProjects from "@/shared/data/coding.js";

export default function Projects() {
    const [selection, setSelection] = useState("coding");
    const projectLists = { coding: codingProjects, design: designProjects };

    useEffect(() => {
        window.sessionStorage.getItem("ngd-projects") &&
            setSelection(sessionStorage.getItem("ngd-projects"));
    }, []);

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
                    onClick={() => handleChange("coding")}
                    className={
                        selection === "coding"
                            ? styles["selected"]
                            : styles["not-selected"]
                    }
                >
                    CODING
                </h1>
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

                                    {el.stack && (
                                        <p className={styles["stack"]}>
                                            Stack:{" "}
                                            {el.stack.map((str, i) =>
                                                i === el.stack.length - 1
                                                    ? `${str}.`
                                                    : `${str}, `
                                            )}
                                        </p>
                                    )}

                                    <div className={styles["links-box"]}>
                                        <Link passHref href={`${el.slug}`}>
                                            <button
                                                className={styles["link-box"]}
                                            >
                                                More info
                                            </button>
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
                                                    Visit website
                                                </button>
                                            </a>
                                        )}

                                        {el.urls && el.urls.library && (
                                            <Link
                                                passHref
                                                href={`${el.urls.library}`}
                                            >
                                                <button
                                                    className={
                                                        styles["link-box"]
                                                    }
                                                >
                                                    Open Library
                                                </button>
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                {el.recommended && (
                                    <div id={styles["Recommended"]}>
                                        <p>recommended</p>
                                    </div>
                                )}
                            </div>

                            <div className={styles["picture-box"]}>
                                {el.thumbnail ? (
                                    <Image
                                        src={el.thumbnail}
                                        alt={el.title}
                                        fill
                                        style={{ objectFit: "cover" }}
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
