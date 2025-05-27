import {NavLink} from "react-router";
import {useContext} from "react";

import {ThemeContext} from "../../../contexts/ThemeContext.js";

import styles from "../style/Header.module.css";
import ThemeToggleButton from "../../buttons/theme/ThemeToggleButton";

export default function Header() {
    const status = ({isActive}) => isActive ? "nav-link active-link" : " nav-link inactive-link"

    const {theme} = useContext(ThemeContext);

    return (
        <header className={`${styles.header} ${styles[`mode-${theme}`]}`}>
            <h2 className={styles[`header-title`]}>Header</h2>

            <div className={`${styles[`header-container`]} ${styles[`mode-${theme}`]}`}>
                <div className={styles[`header-links`]}>
                    <NavLink className={status} to="/">Home</NavLink>
                    <NavLink className={status} to="/contacts">Contacts</NavLink>
                    <NavLink className={status} to="/post">Post</NavLink>
                </div>

                <ThemeToggleButton/>
            </div>

        </header>
    );

};