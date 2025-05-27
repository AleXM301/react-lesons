import EmojiProvider from "../../contexts/EmojiContext";
import EmojiVoting from "./components/EmojiVoting";

export default function VotingContainer() {
    return (
        <EmojiProvider>
            <EmojiVoting/>
        </EmojiProvider>
    );
};