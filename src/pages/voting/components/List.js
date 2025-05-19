import Item from "./Item";
export default function List ({voting, changeVote}) {

    return (
        <div className="emoji-list">
            {voting.map((item) => {
                return (
                    <Item
                        key={item.id}
                        item={item}
                        changeVote={changeVote}
                    />
                );
            })}
        </div>
    );
};