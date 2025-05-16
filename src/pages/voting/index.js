import React from 'react';
import EmojiList from './components/EmojiList';
import Item from "./components/Item";
import './index.css';

class VotingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            voting: [
                {id: 1, smile: "🫠", vote: 0,},
                {id: 2, smile: "😊", vote: 0,},
                {id: 3, smile: "😂", vote: 0,},
                {id: 4, smile: "🙃", vote: 0,},
            ],
            showWinner: false,
            winner: [],

        }
    }

    viewWinner = async () => {
        await this.setState(prevState => {
            let max = 0
            let maxSmile = []
            prevState.voting.forEach(voting => {
                if (voting.vote > max) {
                    max = voting.vote
                    maxSmile = [voting]
                } else if (voting.vote === max) {
                    max = voting.vote
                    maxSmile.push(voting)
                }
            });

            return {
                winner: maxSmile,
                showWinner: !prevState.showWinner,
            }
        });
    }
    reset = () => {
        const resetVotes = this.state.voting.map(item => ({...item, vote: 0}));
        localStorage.removeItem('smiles');
        this.setState({voting: resetVotes, winner: [], showWinner: false});
    };

    componentDidMount() {
        const saved = localStorage.getItem('smiles');
        if (saved) {
            this.setState({voting: JSON.parse(saved), showWinner: false});
        }
    }

    changeVote = (id) => {
        this.setState(prevState => {
            const updatedVotes = prevState.voting.map(item => {
                if (item.id === id) {
                    return {...item, vote: item.vote + 1};
                }
                return item;
            });
            localStorage.setItem("smiles", JSON.stringify(updatedVotes));
            return {voting: updatedVotes};
        });
    }

    render() {
        return (
            <div className="voting-container">
                <h1>Voting emoji</h1>
                <EmojiList voting={this.state.voting} changeVote={this.changeVote}/>
                <div className="button-container">
                    <button className="button" onClick={this.viewWinner}>View/Show Winner</button>
                    <button className="button" onClick={this.reset}>reset</button>
                </div>
                <h3>Emoji winners</h3>
                <div className="emoji-winner-list">

                    {this.state.showWinner ? this.state.winner.map(winner =>
                        <Item key={winner.id} item={winner} clickable={false}/>) : null}
                </div>
            </div>
        )
    }

}

export default VotingContainer;


