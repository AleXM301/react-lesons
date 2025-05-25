import {useContext} from "react";

import {ThemeContext} from "../contexts/ThemeContext.js";

import styles from "./Header.module.css";

export default function Header() {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <header className={`${styles.header} ${styles[`mode-${theme}`]}`}>
            <h2 className={styles[`header-title`]}>Header</h2>
            <div className={styles[`header-themes`]}>
                <h3 className={styles[`header-themes`]}> {theme}</h3>
                <button className={`${styles[`header-button`]} ${styles[`mode-${theme}`]}`}
                        onClick={toggleTheme}>Toggle Theme
                </button>
            </div>

        </header>
    );

};