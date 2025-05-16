import React from "react";

class Item extends React.Component {
    handChangeVote = (id) => {
        if (!this.props.clickable) {
            return;
        }
        this.props.changeVote(id);
    }

    render() {

        return (
            <div className="emoji-item" onClick={(e) => this.handChangeVote(this.props.item.id)}>
                <p className="emoji"> {this.props.item.smile}</p>
                <p className="vote-count"> {this.props.item.vote}</p>
            </div>
        )
    }
}

export default Item;
