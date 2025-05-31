import {postTodo} from "../../../store/thunks/todoThunk";
import {useContext, useState} from "react";
import {useDispatch} from "react-redux";
import {ThemeContext} from "../../../contexts/ThemeContext";

import style from "../todo.module.css";

export default function TodoForm() {
    const {theme} = useContext(ThemeContext);
    const dispatch = useDispatch();
    const [newTodoTitle, setNewTodoTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTodoTitle.trim()) {
            return;
        }
        dispatch(postTodo({
            title:newTodoTitle}));


        setNewTodoTitle("");
    }

    return (
        <form className={style[`todo-form`]} onSubmit={handleSubmit}>
            <label className={style[`todo-label`]}>Todo_
                <input
                    className={`${style[`todo-input`]} ${style[`mode-${theme}`]}`}
                    type="text"
                    value={newTodoTitle}
                    onChange={(e) => setNewTodoTitle(e.target.value)}
                />
                <button className={style[`todo-button`]} type={"submit"}>Add todo_</button>
            </label>
        </form>
    );
};