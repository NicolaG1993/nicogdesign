import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../../shared/styles/Project.module.css";
import projectLists from "../../shared/data/allProjects.js";
import GitHub from "../../components/Project/assets/github.svg";

export default function Element({ project }) {
    const [form, setForm] = useState({
        numbers: 1,
        from: 1,
        to: 10,
        setting: "not unique",
    });
    const [result, setResult] = useState([]);
    const [lastResults, setLastResults] = useState([]);
    const [notes, setNotes] = useState();

    useEffect(() => {
        window.sessionStorage.getItem("ngd-rng") &&
            setForm(JSON.parse(sessionStorage.getItem("ngd-rng")));
        window.sessionStorage.getItem("ngd-rng-notes") &&
            setNotes(sessionStorage.getItem("ngd-rng-notes"));
    }, []);

    const handleNotes = (e) => {
        e.preventDefault();
        setNotes(e.target.value);
        sessionStorage.setItem("ngd-rng-notes", e.target.value);
    };

    const handleChange = (e) => {
        e.preventDefault();
        const formObj = new FormData(e.target.form);
        let allValues = Object.fromEntries(formObj.entries());
        if (
            allValues.numbers > allValues.to - allValues.from &&
            allValues.setting === "unique"
        ) {
            allValues.numbers = allValues.to - allValues.from;
            document.querySelector("#numbers").value = allValues.numbers;
        }
        setForm({
            ...allValues,
            numbers: Number(allValues.numbers),
            from: Number(allValues.from),
            to: Number(allValues.to),
        });
        sessionStorage.setItem(
            "ngd-rng",
            JSON.stringify({
                ...allValues,
                numbers: Number(allValues.numbers),
                from: Number(allValues.from),
                to: Number(allValues.to),
            })
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let arr = [];
        if (form.setting === "not unique") {
            for (let i = 1; i <= form.numbers; i++) {
                let randomNumber =
                    Math.floor(Math.random() * (form.to - form.from + 1)) +
                    form.from;
                arr.push(randomNumber);
            }
        } else if (form.setting === "unique") {
            while (arr.length < form.numbers) {
                let randomNumber =
                    Math.floor(Math.random() * (form.to - form.from + 1)) +
                    form.from;
                if (arr.indexOf(randomNumber) === -1) arr.push(randomNumber);
            }
        }
        setResult(arr);
        setLastResults([...lastResults, result]);
    };

    return (
        <div id={styles["Project"]}>
            <Head>
                <title>
                    Random Numbers Generator - NGD | Nicola Gaioni Design
                </title>
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={`Random Numbers Generator - NGD | Nicola Gaioni Design`}
                />
            </Head>

            <h1 lang="en-US">Random Numbe&shy;rs Genera&shy;tor</h1>

            <h4>
                {project.tags.map((str, i) =>
                    i === project.tags.length - 1 ? (
                        <span key={str}>{str}</span>
                    ) : (
                        <span key={str}>{str}, </span>
                    )
                )}
            </h4>

            {project.urls && (
                <div className={styles["links-bar"]}>
                    <div className={styles["icons-box"]}>
                        {project.urls.github && (
                            <a
                                className={styles["icon"]}
                                href={project.urls.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GitHub />
                            </a>
                        )}
                    </div>

                    <div className={styles["link-box-wrap"]}>
                        {project.urls.website && (
                            <a
                                href={project.urls.website}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className={styles["link-box"]}>
                                    Go to the project
                                </button>
                            </a>
                        )}
                    </div>
                </div>
            )}

            <div className={styles["element"]}>
                <div className={styles["form-wrap"]}>
                    <form
                        onChange={(e) => handleChange(e)}
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <div className={styles["grid-column-1to3"]}>
                            <input
                                type="number"
                                id="numbers"
                                name="numbers"
                                defaultValue={form.numbers}
                                min={1}
                                max={
                                    form.setting === "not unique"
                                        ? 20
                                        : form.to - form.from
                                }
                            />
                        </div>
                        <div className={styles["grid-column-3to5"]}>
                            <label>
                                <span>Number/s</span>
                            </label>
                        </div>

                        <div className={styles["grid-column-1to3"]}>
                            <select
                                name="setting"
                                id="setting"
                                defaultValue={form.setting}
                            >
                                <option value="not unique" label="not unique">
                                    not unique
                                </option>
                                <option value="unique" label="unique">
                                    unique
                                </option>
                            </select>
                        </div>

                        <div className={styles["grid-column-1to3"]}>
                            <label>
                                <span>from</span>
                            </label>
                        </div>
                        <div className={styles["grid-column-3to5"]}>
                            <input
                                type="number"
                                id="from"
                                name="from"
                                defaultValue={form.from}
                                min={0}
                                max={form.to - 1}
                            />
                        </div>
                        <div className={styles["grid-column-1to3"]}>
                            <label>
                                <span>to</span>
                            </label>
                        </div>
                        <div className={styles["grid-column-3to5"]}>
                            <input
                                type="number"
                                id="to"
                                name="to"
                                defaultValue={form.to}
                                min={form.from}
                            />
                        </div>

                        <div className={styles["grid-column-1to5"]}>
                            <button
                                className={styles["submit-box"]}
                                type="submit"
                            >
                                Generate
                            </button>
                        </div>
                    </form>
                </div>

                <div className={styles["form-results"]}>
                    <div className={styles[""]}>
                        <h3>Your random numbers</h3>
                        <p className={styles[""]}>
                            {result.map((el) => `${el} `)}
                        </p>
                    </div>

                    <div className={styles[""]}>
                        <h3>Last numbers</h3>
                        <div className={styles[""]}>
                            {lastResults
                                .slice(0)
                                .reverse()
                                .map(
                                    (el, i) =>
                                        i < 10 && (
                                            <p key={i} className={styles[""]}>
                                                {el.map((n) => `${n} `)}
                                            </p>
                                        )
                                )}
                        </div>
                    </div>
                </div>

                <div className={styles["notes-wrap"]}>
                    <h2>Take notes</h2>
                    <textarea
                        name="notes"
                        cols="30"
                        rows="10"
                        value={notes}
                        onChange={(e) => handleNotes(e)}
                    ></textarea>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { resolvedUrl } = context;
    let project = projectLists.coding.filter((el) => el.slug === resolvedUrl);
    return {
        props: { project: project[0] },
    };
}

// clear results button
// autofix "from" quando ?? piu grande di "to"
