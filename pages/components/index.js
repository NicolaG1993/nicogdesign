import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "@/styles/Library.module.css";
import customComponents from "@/shared/data/components.js";

export default function Components() {
    const [selected, setSelected] = useState();

    const renderComponent = (selected) => {
        let { Component } = selected;
        return <Component />;
    };

    return (
        <div id={styles["Library"]}>
            <Head>
                <title>Components - NGD | Nicola Gaioni Design</title>
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Components - NGD | Nicola Gaioni Design"
                />
            </Head>

            <section>
                <nav className={styles["side-nav"]}>
                    {/* side nav dove selezionare component da renderizzare */}
                    {customComponents.map((el) => (
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
                                {renderComponent(selected)}
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
