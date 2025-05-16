import React from "react";
import Item from "./Item";


class EmojiList extends React.Component {

    render() {
        const {voting, changeVote} = this.props;
        return (
            <div className="emoji-list">
                {voting.map((item) => {
                    return (
                        <Item
                        key={item.id}
                        item={item}
                        changeVote={changeVote}
                        clickable={true}
                        />
                    )
                })}

            </div>
        )
    }
}

export default EmojiList;