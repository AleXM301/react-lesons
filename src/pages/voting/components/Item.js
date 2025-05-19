export default function Item({item = {}, changeVote = () => {}}) {
    const handChangeVote = (id) => {
        changeVote(id);
    };

    return (
        <div className="emoji-item" onClick={() => {handChangeVote(item.id)}}>
            <p className="emoji"> {item.smile}</p>
            <p className="vote-count"> {item.vote}</p>
        </div>
    );
};