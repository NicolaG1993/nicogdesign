import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "@/styles/Library.module.css";
import jsUtils from "@/shared/data/js-utils.js";

export default function JSUtils() {
    const [selected, setSelected] = useState();

    const renderFunction = (selected) => {
        const fn = selected.function;
        let args = JSON.parse(JSON.stringify(selected.arguments)); // JSON.parse and JSON.stringify to COPY arguments
        let allArgs = Object.values(args); // Object.values to SEPARATE all arguments in an array
        return JSON.stringify(fn(...allArgs), null, 4); // spread syntax to RUN separate arguments
    };

    return (
        <div id={styles["Library"]}>
            <Head>
                <title>JS Utilities - NGD | Nicola Gaioni Design</title>
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="JS Utilities - NGD | Nicola Gaioni Design"
                />
            </Head>

            <section>
                <nav className={styles["side-nav"]}>
                    {jsUtils.map((el) => (
                        <div
                            key={el.title}
                            className={
                                selected && el.title === selected.title
                                    ? styles["selected"]
                                    : ""
                            }
                            onClick={() =>
                                setSelected(
                                    selected && el.title === selected.title
                                        ? ""
                                        : el
                                )
                            }
                        >
                            {el.title}
                        </div>
                    ))}
                </nav>

                <div className={styles["render-area"]}>
                    {selected ? (
                        <>
                            <div className={styles["headings-wrap"]}>
                                <h1 lang="en-US">{selected.title}</h1>
                            </div>

                            <div className={styles["component-wrap"]}>
                                <h2>Function</h2>
                                <div className={styles["args-wrap"]}>
                                    <p>Arguments</p>
                                    <pre>
                                        {JSON.stringify(
                                            selected.arguments,
                                            null,
                                            4
                                        )}
                                    </pre>
                                </div>

                                <div className={styles["fn-wrap"]}>
                                    <p>Function</p>
                                    <pre>
                                        <code>{`${selected.function}`}</code>
                                    </pre>
                                </div>

                                <div className={styles["result-wrap"]}>
                                    <p>Result</p>
                                    <pre>{renderFunction(selected)}</pre>
                                </div>
                            </div>

                            <div className={styles["description-wrap"]}>
                                <h2>Info</h2>
                                <div>
                                    <div
                                        className={styles["thumbnail-wrap"]}
                                    ></div>
                                    <div
                                        className={styles["description"]}
                                    ></div>
                                    <div
                                        className={styles["documentation-wrap"]}
                                    ></div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <h1>NGD • JS Utilities</h1>
                            </div>
                            <div>
                                <p>Library of all my JavaScript utilities...</p>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
}
