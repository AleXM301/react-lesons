import {Routes, Route} from "react-router";
import {useContext} from "react";

import Layout from "./components/layout/index";
import {ThemeContext} from "./contexts/ThemeContext";
import VotingContainer from "./pages/voting/index.js";
import Contacts from "./pages/contacts";
import NotFound from "./pages/NotFound";
import Post from "./pages/post";
import Counter from "./pages/counter";
import Todo from "./pages/todo";

function App() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={`App mode-${theme}`}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<VotingContainer/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                    <Route path="post" element={<Post/>}/>
                    <Route path="counter" element={<Counter/>}/>
                    <Route path="todo" element={<Todo/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
