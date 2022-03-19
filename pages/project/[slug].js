import Head from "next/head";
import Image from "next/image";
import styles from "../../shared/styles/Project.module.css";
import projectLists from "../../shared/data/allProjects.js";
import GitHub from "../../components/Project/assets/github.svg";
import Dribbble from "../../components/Project/assets/dribbble.svg";
import Video from "../../components/Project/assets/video.svg";

export default function Project({ project }) {
    return (
        <div id={styles["Project"]}>
            <Head>
                <title>{project.title} - NGD | Nicola Gaioni Design</title>
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={`${project.title} - NGD | Nicola Gaioni Design`}
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
                                    Go to the project
                                </button>
                            </a>
                        )}
                    </div>
                </div>
            )}

            <p className={styles["description"]}>{project.full_description}</p>

            {project.pics &&
                project.pics.map((el, i) => (
                    <div key={el + i} className={styles["picture-box"]}>
                        <Image
                            alt={`${project.title} pic ${i}`}
                            src={el}
                            onClick={undefined}
                            layout="responsive"
                            width="100%"
                            height="100%"
                            objectFit="contain"
                        />
                    </div>
                ))}
        </div>
    );
}

export async function getServerSideProps(context) {
    const { params } = context;
    const { slug } = params;
    let allProjects = [...projectLists.design, ...projectLists.coding]; //merge all projects arrays
    let project = allProjects.filter((el) => el.slug === `/project/${slug}`);
    return {
        props: { project: project[0] },
    };
}
