import {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";

import styles from "./Footer.module.css";

export default function Footer() {

    const {theme} = useContext(ThemeContext);
    return (
        <footer className={`${styles.footer} ${styles[`mode-${theme}`]}`}>
            <h2 className={styles[`footer-title`]}>Footer</h2>
        </footer>
    );
};