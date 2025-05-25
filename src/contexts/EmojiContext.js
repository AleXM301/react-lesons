import {createContext, useState, useCallback, useMemo, useEffect} from "react";
import {getJSONFromStorage, setJSONToStorage, STORAGE_KEYS} from "../utils/LocalStorageUtils";
import {emojiDefault} from "../pages/voting/emoji-data";

export const EmojiContext = createContext(null);

export default function EmojiProvider({children}) {

    const [winners, setWinners] = useState([]);
    const [showWinners, setShowWinners] = useState(false);
    const [emojis, setEmojis] = useState(() => {
        return getJSONFromStorage(STORAGE_KEYS.EMOJI, emojiDefault);
    });

    useEffect(() => {
        setJSONToStorage(STORAGE_KEYS.EMOJI, emojis);
    }, [emojis]);

    const changeVote = useCallback((id) => {
        setEmojis(prevState => {
            return prevState.map(item => {
                if (item.id === id) {
                    return {...item, vote: item.vote + 1};
                }
                return item;
            });
        });
    }, []);

    const viewWinners = useCallback(() => {

        if (showWinners) {
            setShowWinners((prevState) => !prevState);
            return;
        }
        let max = 0;
        let maxEmojis = [];
        emojis.forEach(item => {
            if (item.vote > max) {
                max = item.vote;
                maxEmojis = [item];
            } else if (item.vote === max) {
                maxEmojis.push(item);
            }
        });
        setShowWinners((prevState) => !prevState);
        setWinners(() => maxEmojis);
    }, [emojis, showWinners]);

    const reset = useCallback(() => {
        setEmojis((prevState) => prevState.map(item => ({...item, vote: 0})));
        setWinners([]);
        setShowWinners(false);
    }, []);

    const contextValue = useMemo(() => ({
        emojis,
        winners,
        changeVote,
        showWinners,
        viewWinners,
        reset
    }), [emojis, winners, changeVote, showWinners, viewWinners, reset]);

    return (
        <EmojiContext.Provider value={contextValue}>
            {children}
        </EmojiContext.Provider>
    );
};