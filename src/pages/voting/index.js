import Header from "../../components/Header";
import EmojiProvider from "../../contexts/EmojiContext";
import EmojiVoting from "./components/EmojiVoting";
import Footer from "../../components/Footer";

export default function VotingContainer() {
    return (
        <EmojiProvider>
            <Header/>
            <EmojiVoting/>
            <Footer/>
        </EmojiProvider>
    );
};