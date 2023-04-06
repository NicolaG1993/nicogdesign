import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "@/styles/Library.module.css";
import reactComponents from "@/shared/data/react-components.js";

export default function ReactComponents() {
    const [selected, setSelected] = useState();

    const renderComponent = (selected) => {
        let { Component } = selected;
        return <Component />;
    };

    return (
        <div id={styles["Library"]}>
            <Head>
                <title>React Components - NGD | Nicola Gaioni Design</title>
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="React Components - NGD | Nicola Gaioni Design"
                />
            </Head>

            <section>
                <nav className={styles["side-nav"]}>
                    {/* side nav dove selezionare component da renderizzare */}
                    {reactComponents.map((el) => (
                        <div
                            key={el.title}
                            className={
                                selected && el.title === selected.title
                                    ? `${styles["comp"]} ${styles["selected"]}`
                                    : styles["comp"]
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
                    {/* zona render component */}
                    {selected ? (
                        <>
                            <div className={styles["headings-wrap"]}>
                                <h1 lang="en-US">{selected.title}</h1>
                                {/* <h4>
                                    {selected.tags.map((str, i) =>
                                        i === selected.tags.length - 1 ? (
                                            <span key={str}>{str}</span>
                                        ) : (
                                            <span key={str}>{str}, </span>
                                        )
                                    )}
                                </h4> */}
                            </div>

                            <div className={styles["component-wrap"]}>
                                <h2>Component</h2>
                                {renderComponent(selected)}
                            </div>

                            <div className={styles["description-wrap"]}>
                                <h2>Info</h2>
                                <div>
                                    <div className={styles["thumbnail-wrap"]}>
                                        {selected.thumbnail ? (
                                            <Image
                                                src={selected.thumbnail}
                                                alt={selected.title}
                                                fill
                                                style={{ objectFit: "cover" }}
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </div>

                                    <div className={styles["description"]}>
                                        <p>{selected.full_description}</p>

                                        {selected.stack && (
                                            <div className={styles["stack"]}>
                                                <p>Stack: </p>
                                                <p>
                                                    {selected.stack.map(
                                                        (str, i) =>
                                                            i ===
                                                            selected.stack
                                                                .length -
                                                                1
                                                                ? `${str}.`
                                                                : `${str}, `
                                                    )}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className={styles["documentation-wrap"]}>
                                <h2>Documentation</h2>
                                {selected.readme ? (
                                    <div>Render readme file come su github</div>
                                ) : (
                                    <div>
                                        Documentation is not yet available.
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <h1>NGD • React Components</h1>
                            </div>
                            <div>
                                <p>Library of all my components...</p>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
}
