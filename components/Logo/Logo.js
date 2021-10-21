import styles from "./style/Logo.module.css";
// import logo from "./assets/logo-black.png";

export default function Logo({ size }) {
    return (
        <div
            className={styles["logo"]}
            style={size}
            onClick={() => window.scrollTo(0, 0)}
        >
            {/* <img src={logo} alt="logo" /> */}
        </div>
    );
}
// deve essere una svg
