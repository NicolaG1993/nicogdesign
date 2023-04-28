import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "@/styles/Library.module.css";
import jsUtils from "@/shared/data/js-utils.js";
import {
    extractGroups,
    regroupObjects,
    sortArrByObjValue,
    sortObjByKey,
} from "@/shared/utils/utils";
import useWindowDimensions from "@/shared/custom-hooks/useWindowDimensions";

export default function JSUtils() {
    const { width } = useWindowDimensions();
    const [isSmallDevice, setIsSmallDevice] = useState(false);
    const [navActive, setNavActive] = useState(true);

    const groups = regroupObjects(jsUtils, "group");
    const [navStatus, setNavStatus] = useState(extractGroups(jsUtils, "group"));
    const [selected, setSelected] = useState();
    const [result, setResult] = useState();

    const renderFunction = (selected) => {
        const fn = selected.function;
        let args = JSON.parse(JSON.stringify(selected.arguments)); // JSON.parse and JSON.stringify to COPY arguments
        let allArgs = Object.values(args); // Object.values to SEPARATE all arguments in an array
        setResult(JSON.stringify(fn(...allArgs), null, 4)); // spread syntax to RUN separate arguments
    };

    const toggleNav = (key) =>
        setNavStatus((prev) => ({
            ...prev,
            [key]: !navStatus[key],
        }));
    const toggleNavUI = () =>
        isSmallDevice ? setNavActive(!navActive) : setNavActive(true);

    useEffect(
        () => (selected ? renderFunction(selected) : setResult()),
        [selected]
    );
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
                <title>JS Utilities - NGD | Nicola Gaioni Design</title>
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="JS Utilities - NGD | Nicola Gaioni Design"
                />
            </Head>

            <section>
                <nav
                    className={styles["side-nav"]}
                    style={{
                        transform: navActive
                            ? "translateX(0)"
                            : "translateX(-300px)",
                    }}
                >
                    <div className={styles["nav"]}>
                        {Object.entries(sortObjByKey(groups)).map(
                            ([key, arr]) => (
                                <div key={key} className={styles["group-box"]}>
                                    <div
                                        key={key}
                                        className={styles.group}
                                        onClick={() => toggleNav(key)}
                                    >
                                        {key}
                                    </div>
                                    {navStatus[key] &&
                                        arr.map((el) => (
                                            <div
                                                key={el.title}
                                                className={
                                                    selected &&
                                                    el.title === selected.title
                                                        ? `${styles["el"]} ${styles["selected"]}`
                                                        : styles["el"]
                                                }
                                                onClick={() => (
                                                    setSelected(
                                                        selected &&
                                                            el.title ===
                                                                selected.title
                                                            ? ""
                                                            : el
                                                    ),
                                                    toggleNavUI()
                                                )}
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
                    {selected ? (
                        <>
                            <div className={styles["headings-wrap"]}>
                                <h1>{selected.title}</h1>
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
                                    <pre>{result}</pre>
                                </div>
                            </div>

                            <div className={styles["description-wrap"]}>
                                <h2>Info</h2>
                                <div className={styles["category-wrap"]}>
                                    <p>
                                        <strong>CATEGORY: </strong>{" "}
                                        {selected.group}
                                    </p>
                                </div>
                                <div>
                                    {/* <div
                                        className={styles["thumbnail-wrap"]}
                                    ></div>
                                    <div
                                        className={styles["description"]}
                                    ></div> */}
                                    <div className={styles["info-wrap"]}>
                                        <p>
                                            <strong>DOCUMENTATION:</strong>
                                        </p>
                                        {selected.documentation}
                                    </div>
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
