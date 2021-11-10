import Button from "../../Button/Button";
import styles from "./Banner.module.css";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div></div>
            <div>
                <div>
                    <h1 className={styles.smallHeading}>Hi, I&apos;m Nick.</h1>
                    <br />
                    <h3 className={styles.bigHeading}>
                        Webdeveloper. Graphic Designer.
                    </h3>
                    <br />
                    <Button
                        page="/portfolio"
                        text="Learn more"
                        type="internal"
                    />
                </div>
            </div>
        </div>
    );
}
