import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import TypeWriter from "@/components/TypeWriter/TypeWriter";
import styles from "@/styles/Home.module.css";
import useScrollPosition from "@/shared/custom-hooks/useScrollPosition";
import axios from "axios";

export default function Home() {
    const [gitHubData, setGitHubData] = useState();
    const [stackOverflowData, setStackOverflowData] = useState();

    const { scrollTop } = useScrollPosition();

    const fetchGitHubData = async () => {
        const username = "NicolaG1993";
        const headers = {
            Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        };
        const body = {
            query: `query {
            user(login: "${username}") {
              name
              createdAt
              contributionsCollection {
                  contributionCalendar {
                      totalContributions 
                  }  
                totalPullRequestContributions 
              }
              repositories(affiliations: OWNER) { totalCount }              
            }
          }`,
        };

        const response = await fetch("https://api.github.com/graphql", {
            method: "POST",
            body: JSON.stringify(body),
            headers: headers,
        });
        const { data } = await response.json();

        // console.log("data: ", data);
        setGitHubData(data.user);
    };
    const fetchStackOverflowData = async () => {
        const url =
            "https://api.stackexchange.com/2.2/users/16337778?order=desc&sort=reputation&site=stackoverflow";

        const { data } = await axios.get(url);
        // const response = await fetch(url, {
        //     method: "GET",
        // });
        // const { data } = await response.json();

        console.log("data: ", data);
        setStackOverflowData(data.items[0]);
    };

    useEffect(() => {
        fetchGitHubData();
        fetchStackOverflowData();
    }, []);

    useEffect(() => {
        const element = document.getElementById("HeadlineChange");
        const content = document.getElementById("HeadlineContent");
        let topPos = element.offsetTop;

        scrollTop >= topPos - 500
            ? (content.innerHTML = "CODING")
            : (content.innerHTML = "DESIGN");
    }, [scrollTop]);

    return (
        <div id={styles["Home"]}>
            <Head>
                <title>NGD | Nicola Gaioni Design</title>
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="NGD | Nicola Gaioni Design"
                />
            </Head>

            <section className={styles["section-banner"]}>
                <TypeWriter />
            </section>

            <section className={styles["section-intro"]}>
                <p>
                    &quot;NGD was created on a belief in the power of
                    &apos;ideas&apos; and the fact that they create a huge
                    impact through their development.&quot;
                </p>
            </section>

            <section className={styles["section-skills"]}>
                <div id={styles["Headline"]}>
                    <h2 id="HeadlineContent">DESIGN</h2>
                </div>

                <div>
                    <p>
                        Design is about creating solutions for people. I started
                        my career in 2014, moving to Berlin from Italy to study
                        design and illustration, successfully graduating in 2018
                        at AID Berlin. Right from the start I was interested in
                        Webdesign and the development of interfaces, websites
                        and applications, showing good results and gaining
                        experience working to date on various projects both as a
                        freelancer and for companies.
                    </p>
                </div>

                <div id="HeadlineChange">
                    <p>
                        Web development is a fundamental skill these days. In my
                        case it was natural to get interested in programming in
                        parallel with my studies and after having worked as a
                        webdesigner. After several years of learning HTML, CSS
                        and JavaScript I decided to join SPICED ACADEMY to
                        become a full-stack developer in 2021.
                    </p>
                </div>
            </section>

            <section className={styles["section-me"]}>
                <div>
                    <div></div>
                    <div>
                        <Link passHref href={`/about`}>
                            <button className={styles["link-box"]}>
                                About me
                            </button>
                        </Link>
                        <Link passHref href={`/portfolio`}>
                            <button className={styles["link-box"]}>
                                portfolio
                            </button>
                        </Link>

                        <a
                            href={"/documents/Nicola Gaioni • CV 2023.pdf"}
                            alt="alt text"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className={styles["link-box"]}>CV</button>
                        </a>
                    </div>
                </div>
            </section>

            <section className={styles["section-data"]}>
                <div>
                    <div id={styles["PulsatingDot"]} />
                    <h2>LIVE STATS</h2>
                </div>

                <h3>GitHub</h3>
                {gitHubData && (
                    <>
                        <div className={styles["data-displayer"]}>
                            <div>
                                <p className={styles["data-value"]}>
                                    {gitHubData.repositories.totalCount}
                                </p>
                                <h4>Projects</h4>
                            </div>
                            <div>
                                <p className={styles["data-value"]}>
                                    {
                                        gitHubData.contributionsCollection
                                            .contributionCalendar
                                            .totalContributions
                                    }
                                </p>
                                <h4>Deploys</h4>
                                <p>last 12 months</p>
                            </div>
                            <div>
                                <p className={styles["data-value"]}>
                                    {
                                        gitHubData.contributionsCollection
                                            .totalPullRequestContributions
                                    }
                                </p>
                                <h4>Contributions</h4>
                                <p>last 12 months</p>
                            </div>
                        </div>

                        <a
                            href="https://github.com/NicolaG1993"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className={styles["link-box"]}>
                                My GitHub Profile
                            </button>
                        </a>
                    </>
                )}

                {/* <div>
                            <a href="https://stackoverflow.com/users/16337778/nicola-gaioni">
                                <img
                                    src="https://stackoverflow.com/users/flair/16337778.png?theme=dark"
                                    width="208"
                                    height="58"
                                    alt="profile for Nicola Gaioni at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
                                    title="profile for Nicola Gaioni at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
                                />
                            </a>
                        </div> */}
                <h3>Stackoverflow</h3>
                {stackOverflowData && (
                    <>
                        <div className={styles["data-displayer"]}>
                            <div>
                                <p className={styles["data-value"]}>
                                    {stackOverflowData.badge_counts.gold}
                                </p>
                                <h4>Gold</h4>
                            </div>
                            <div>
                                <p className={styles["data-value"]}>
                                    {stackOverflowData.badge_counts.silver}{" "}
                                </p>
                                <h4>Silver</h4>
                            </div>
                            <div>
                                <p className={styles["data-value"]}>
                                    {stackOverflowData.badge_counts.bronze}{" "}
                                </p>
                                <h4>Bronze</h4>
                            </div>
                        </div>

                        <div>
                            <div>
                                <p>
                                    Reputation: {stackOverflowData.reputation}
                                </p>
                            </div>
                            <div>
                                <p>
                                    Member since:{" "}
                                    {
                                        new Date(
                                            stackOverflowData.creation_date *
                                                1000
                                        )
                                            .toLocaleString()
                                            .split(",")[0]
                                    }
                                </p>
                            </div>
                        </div>

                        <a
                            href="https://stackoverflow.com/users/16337778/nicola-gaioni"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className={styles["link-box"]}>
                                My StackOverflow Profile
                            </button>
                        </a>
                    </>
                )}
            </section>
            {/*
            <section className={styles["section-data"]}>
                <h2>PROGETTI</h2>
                <div>
                    <div>
                        <h3>Deploys</h3>
                        <p>1.000</p>
                    </div>
                </div>
            </section>

            <section className={styles["section-data"]}>
                <h2>IMMAGINI</h2>
                <p>Preview di qualche progetto</p>
                <p>Si potrebbe usare anche parallax</p>
            </section> */}
        </div>
    );
}

// BIO, DESIGN, WEBDEV
// PROGETTI, IMMAGINI, IMMAGINI CON PARALLAX, GITHUB STATS,
