
import {useContext} from "react";
import {ThemeContext} from "../../../contexts/ThemeContext";

import styles from "../styles/Item.module.css";


export default function Item({emoji = {}, changeVote = () => {}}) {

    const {theme} = useContext(ThemeContext);

    return (
        <div className={`${styles["emoji-item"]} ${theme === "light" ? styles.borderLight : styles.borderDark}`}
             onClick={() => changeVote(emoji.id)}>
            <p className={styles.emoji}> {emoji.smile}</p>
            <p className={styles[`vote-count`]}> {emoji.vote}</p>
        </div>
    );
};