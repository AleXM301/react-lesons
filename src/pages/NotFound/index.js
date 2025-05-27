import {ThemeContext} from "../../contexts/ThemeContext";
import styles from './NotFound.module.css';
import {useContext} from "react";

export default function NotFound() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={`${styles.NotFound} ${styles[`mode-${theme}`]}`}>
            <h1>404</h1>
        </div>
    );
};