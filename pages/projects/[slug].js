import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Project.module.css";
import designProjects from "@/shared/data/design.js";
import codingProjects from "@/shared/data/coding.js";
import GitHub from "@/components/Project/assets/github.svg";
import Dribbble from "@/components/Project/assets/dribbble.svg";
import Video from "@/components/Project/assets/video.svg";
import Link from "next/link";

export default function Project({ project }) {
    return (
        <div id={styles["Project"]}>
            <Head>
                <title>{project.title} • NGD | Nicola Gaioni Design</title>
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={`${project.title} • NGD | Nicola Gaioni Design`}
                />
            </Head>

            <h1>{project.title}</h1>

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
                                <div className={styles["icon-bg"]}></div>
                                <div className={styles["icon-label"]}>
                                    <span>View code</span>
                                </div>
                            </a>
                        )}
                        {project.urls.dribbble && (
                            <a
                                className={styles["icon"]}
                                href={project.urls.dribbble}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Dribbble />
                            </a>
                        )}
                        {project.urls.clips &&
                            project.urls.clips.map((el) => (
                                <a
                                    className={styles["icon"]}
                                    href={el}
                                    key={el}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Video />
                                </a>
                            ))}
                        {/* QUI VANNO NUOVI ICONS COMPONENT */}
                    </div>

                    <div className={styles["link-box-wrap"]}>
                        {project.urls.website && (
                            <a
                                href={project.urls.website}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className={styles["link-box"]}>
                                    Visit website
                                </button>
                            </a>
                        )}

                        {project.urls && project.urls.library && (
                            <Link passHref href={`${project.urls.library}`}>
                                <button className={styles["link-box"]}>
                                    Open Library
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            )}

            <div className={styles["all-text"]}>
                {project.stack && (
                    <div className={styles["stack"]}>
                        <p>Stack: </p>
                        <p>
                            {project.stack.map((str, i) =>
                                i === project.stack.length - 1
                                    ? `${str}.`
                                    : `${str}, `
                            )}
                        </p>
                    </div>
                )}

                <p className={styles["description"]}>
                    {project.full_description}
                </p>

                {project.isCode && (
                    <p className={styles["maintained"]}>
                        {project.maintained
                            ? "This project runs in production mode at the moment and it's constantly maintained and updated. Please report any bug, thanks!"
                            : "I am not maintaining and updating this code at the moment."}
                    </p>
                )}
            </div>

            {project.pics &&
                project.pics.map((el, i) => (
                    <div key={el + i} className={styles["picture-box"]}>
                        <Image
                            alt={`${project.title} pic ${i}`}
                            src={el}
                            onClick={undefined}
                            width="0"
                            height="0"
                            sizes="100vw"
                            // fill
                            style={{
                                objectFit: "contain",
                                position: "relative",
                                width: "100%",
                                height: "auto",
                            }}
                        />
                    </div>
                ))}
        </div>
    );
}

export async function getServerSideProps(context) {
    const { params } = context;
    const { slug } = params;
    let allProjects = [
        ...designProjects,
        ...codingProjects.map((el) => ({ ...el, isCode: true })),
    ]; //merge all projects arrays
    let project = allProjects.filter((el) => el.slug === `/projects/${slug}`);
    return {
        props: { project: project[0] },
    };
}
