import {todoAdd} from "../../../store/actions/toDoActions";
import {useContext, useState} from "react";
import {useDispatch} from "react-redux";
import {ThemeContext} from "../../../contexts/ThemeContext";

import style from "../todo.module.css";

export default function TodoForm() {

    const {theme} = useContext(ThemeContext);
    const dispatch = useDispatch();
    const [todoValue, setTodoValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todoValue.trim()) {
            return;
        }
        dispatch(todoAdd("todo", todoValue));
        setTodoValue("");
    }

    return (
        <form className={style[`todo-form`]} onSubmit={(e) => handleSubmit(e)}>
            <label className={style[`todo-label`]}>Todo_
                <input
                    className={`${style[`todo-input`]} ${style[`mode-${theme}`]}`}
                    type="text"
                    value={todoValue}
                    onChange={(e) => setTodoValue(e.target.value)}
                />
                <button className={style[`todo-button`]} type={"submit"}>Add todo_</button>
            </label>
        </form>
    )
}