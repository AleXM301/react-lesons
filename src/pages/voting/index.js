import {useState, useEffect} from "react";
import List from './components/List';
import Item from "./components/Item";
import './index.css';

export default function VotingContainer() {

    const [winners, setWinners] = useState([]);
    const [showWinners, setShowWinners] = useState(false);
    const [emoji, setEmoji] = useState(() => {
        const stored = localStorage.getItem('emoji');
        return stored ? JSON.parse(stored) : [
            {id: 1, smile: "🫠", vote: 0,},
            {id: 2, smile: "😊", vote: 0,},
            {id: 3, smile: "😂", vote: 0,},
            {id: 4, smile: "🙃", vote: 0,},
        ];
    });

    useEffect(() => {
        localStorage.setItem('emoji', JSON.stringify(emoji));
    }, [emoji]);

    const changeVote = (id) => {
        setEmoji(prevState => {
            return prevState.map(item => {
                if (item.id === id) {
                    return {...item, vote: item.vote + 1};
                }
                return item;
            });
        });
    };

    const viewWinners = () => {
        let max = 0;
        let maxSmile = [];
        emoji.forEach(item => {
            if (item.vote > max) {
                max = item.vote;
                maxSmile = [item];
            } else if (item.vote === max) {
                maxSmile.push(item);
            }
        });
        setWinners(() => maxSmile);
        setShowWinners(() => !showWinners);
    };

    const reset = () => {
        const resetVotes = emoji.map(item => ({...item, vote: 0}));
        setEmoji(() => resetVotes);
        setWinners([]);
        setShowWinners(false);
    };

    return (
        <div className="voting-container">
            <h1>Voting emoji</h1>
            <List voting={emoji} changeVote={changeVote}/>
            <div className="button-container">
                <button className="button" onClick={viewWinners}>{showWinners ? "Hide Winner" : "View Winner"}</button>
                <button className="button" onClick={reset}>Reset</button>
            </div>
            <h3>Emoji winners</h3>
            <div className="emoji-winner-list">
                {showWinners && winners.map(winner => <Item key={winner.id} item={winner}/>)}
            </div>
        </div>
    );
};