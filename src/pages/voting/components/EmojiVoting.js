import List from "./List";
import Item from "./Item";

import {useContext} from "react";
import {EmojiContext} from "../../../contexts/EmojiContext";
import {ThemeContext} from "../../../contexts/ThemeContext";

import styles from "../styles/EmojiVoting.module.css";


export default function EmojiVoting() {

    const {theme} = useContext(ThemeContext);
    const {
        emojis,
        winners,
        changeVote,
        showWinners,
        viewWinners,
        reset
    } = useContext(EmojiContext);

    return (
        <div className={`${styles[`voting-container`]} ${styles[`mode-${theme}`]}`}>
            <h1 className={styles[`voting-title`]}>Voting emoji</h1>
            <List voting={emojis} changeVote={changeVote}/>
            <div className={styles[`button-container`]}>
                <button className={styles.button}
                        onClick={viewWinners}>{showWinners ? "Hide Winner" : "View Winner"}</button>
                <button className={styles.button} onClick={reset}>Reset</button>
            </div>
            <h3>Emoji winners</h3>
            <div className={styles[`emoji-winner-list`]}>
                {showWinners && winners.map(winner => <Item key={winner.id} emoji={winner}/>)}
            </div>
        </div>
    );
};