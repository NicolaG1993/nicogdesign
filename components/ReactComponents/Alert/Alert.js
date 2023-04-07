import { useEffect } from "react";
import standardStyles from "./Alert.module.css";

export default function Alert(props) {
    console.error("Alert props: ", props);
    let styles = props.styles || standardStyles;

    if (props.error) {
        //////////////////////////////
        // ERROR COMPONENT
        //////////////////////////////
        return (
            <div className={styles.err} id={styles.Alert}>
                <span>{props.error}</span>
            </div>
        );
    } else {
        //////////////////////////////
        // SUCCESS COMPONENT
        //////////////////////////////
        return (
            <div className={styles.response} id={styles.Alert}>
                <span>Success!</span>
            </div>
        );
    }
}
