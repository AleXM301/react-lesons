import {useContext} from "react";
import {ThemeContext} from "../../../contexts/ThemeContext";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";

import styles from "../style/Footer.module.css";

export default function Footer() {

    const {theme} = useContext(ThemeContext);
    const {pathname} = useLocation();
    const todos = useSelector(state => state.todo);

    return (
        <footer className={`${styles.footer} ${styles[`mode-${theme}`]}`}>
            <h2 className={styles[`footer-title`]}>Footer</h2>
            {pathname === "/todo" && (<p className={`${styles[`footer-counter-todo`]}`}> Todos:{todos.length}</p>)}
        </footer>
    )
}