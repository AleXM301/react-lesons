import Item from "./Item";

import {useContext} from "react";
import {EmojiContext} from "../../../contexts/EmojiContext";

import styles from "../styles/List.module.css";


export default function List() {

    const {emojis, changeVote} = useContext(EmojiContext);

    return (
        <div className={styles[`emoji-list`]}>
            {emojis.map((emoji) => (
                <Item
                    key={emoji.id}
                    emoji={emoji}
                    changeVote={changeVote}
                />
            ))}
        </div>
    );
};