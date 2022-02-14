import Head from "next/head";
import Image from "next/image";
import styles from "../../shared/styles/Project.module.css";
import projectLists from "../../shared/data/allProjects.js";

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

            {/* QUI VA ICONS COMPONENT 🧠 */}
            <div className={styles["links-box"]}>
                {project.urls && (
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

            <p>{project.full_description}</p>

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
                            objectFit="cover"
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
    let project = allProjects.filter((el) => el.slug === slug);

    console.log("slug:", slug);
    console.log("project:", project);

    return {
        props: { project: project[0] },
    };
}