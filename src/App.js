import VotingContainer from "./pages/voting/index.js";


import {useContext} from "react";
import {ThemeContext} from "./contexts/ThemeContext";

function App() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={`App mode-${theme}`}>
            <VotingContainer/>
        </div>
    );
}

export default App;
