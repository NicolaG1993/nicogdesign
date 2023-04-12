import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "@/styles/Library.module.css";
import reactComponents from "@/shared/data/react-components.js";
import {
    extractGroups,
    regroupObjects,
    sortObjByKey,
    sortArrByObjValue,
} from "@/shared/utils/utils";
import useWindowDimensions from "@/shared/custom-hooks/useWindowDimensions";

export default function ReactComponents() {
    const { width } = useWindowDimensions();
    const [isSmallDevice, setIsSmallDevice] = useState(false);
    const [navActive, setNavActive] = useState(true);

    const groups = regroupObjects(reactComponents, "group");
    const [navStatus, setNavStatus] = useState(
        extractGroups(reactComponents, "group")
    );
    const [selected, setSelected] = useState();
    const [dynamicProps, setDynamicProps] = useState();

    const renderComponent = (selected) => {
        let { Component, props, dynamic_props } = selected;

        if (!dynamic_props) {
            return <Component {...props} />; // 🧠 testare se mantiene pageProps cosi!
        } else if (dynamic_props && dynamicProps) {
            return <Component {...props} {...dynamicProps} />; // 🧠 testare se mantiene pageProps cosi!
        }
    };

    const toggleNav = (key) =>
        setNavStatus((prev) => ({
            ...prev,
            [key]: !navStatus[key],
        }));

    const toggleNavUI = () => setNavActive(!navActive);

    useEffect(
        () => (width > 720 ? setIsSmallDevice(false) : setIsSmallDevice(true)),
        [width]
    );
    useEffect(
        () => (isSmallDevice ? setNavActive(false) : setNavActive(true)),
        [isSmallDevice]
    );

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
                <nav
                    className={styles["side-nav"]}
                    style={{
                        transform: navActive
                            ? "translateX(0)"
                            : "translateX(-100%)",
                    }}
                >
                    <div className={styles["nav"]}>
                        {Object.entries(sortObjByKey(groups)).map(
                            ([key, arr]) => (
                                <div key={key} className={styles["group-box"]}>
                                    <div
                                        className={styles.group}
                                        onClick={() => toggleNav(key)}
                                    >
                                        {key}
                                    </div>

                                    {navStatus[key] &&
                                        sortArrByObjValue(
                                            arr,
                                            "title",
                                            "asc"
                                        ).map((el) => (
                                            <div
                                                key={el.title}
                                                className={
                                                    selected &&
                                                    el.title === selected.title
                                                        ? `${styles["el"]} ${styles["selected"]}`
                                                        : styles["el"]
                                                }
                                                onClick={() =>
                                                    setSelected(
                                                        selected &&
                                                            el.title ===
                                                                selected.title
                                                            ? ""
                                                            : el
                                                    )
                                                }
                                            >
                                                {el.title}
                                            </div>
                                        ))}
                                </div>
                            )
                        )}
                    </div>

                    {isSmallDevice && (
                        <div id={styles.NavBtn} onClick={() => toggleNavUI()}>
                            <span>{navActive ? "CLOSE" : "OPEN"}</span>
                        </div>
                    )}
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
                                <div className={styles["box"]}>
                                    {selected.props && (
                                        <div className={styles["props"]}>
                                            <p>
                                                <strong>PROPS:</strong>
                                            </p>{" "}
                                            <pre>
                                                {JSON.stringify(
                                                    selected.props,
                                                    null,
                                                    4
                                                )}
                                            </pre>
                                        </div>
                                    )}

                                    {selected.dynamic_props && (
                                        <>
                                            <div className={styles["props"]}>
                                                <p>
                                                    <strong>OPTIONS:</strong>
                                                </p>{" "}
                                                {selected.dynamic_props.map(
                                                    (el) => (
                                                        <button
                                                            key={
                                                                "button " +
                                                                el.text
                                                            }
                                                            onClick={() =>
                                                                setDynamicProps(
                                                                    el.props
                                                                )
                                                            }
                                                        >
                                                            {el.text}
                                                        </button>
                                                    )
                                                )}
                                            </div>

                                            <div className={styles["props"]}>
                                                <p>
                                                    <strong>PROPS:</strong>
                                                </p>
                                                <pre>
                                                    {JSON.stringify(
                                                        dynamicProps,
                                                        null,
                                                        4
                                                    )}
                                                </pre>
                                            </div>
                                        </>
                                    )}

                                    <div className={styles["component"]}>
                                        {(selected.props ||
                                            selected.dynamic_props) && (
                                            <p>
                                                <strong>RENDER:</strong>
                                            </p>
                                        )}
                                        {renderComponent(selected)}
                                    </div>
                                </div>
                            </div>

                            <div className={styles["description-wrap"]}>
                                <h2>Info</h2>
                                <div>
                                    <div className={styles["thumbnail-wrap"]}>
                                        {selected.thumbnail ? (
                                            <Image
                                                src={selected.thumbnail}
                                                alt={selected.title}
                                                // fill
                                                // style={{ objectFit: "cover" }}
                                                width={150}
                                                height={150}
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </div>

                                    <div className={styles["description"]}>
                                        <p>
                                            <strong>CATEGORY: </strong>{" "}
                                            {selected.group}
                                        </p>

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
