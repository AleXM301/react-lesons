import {useSelector} from "react-redux";
import {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext";

import style from "./todo.module.css";
import TodoForm from "./components/todoForm";

export default function Todo() {

    const todos = useSelector(state => state.todo);
    const {theme} = useContext(ThemeContext);

    return (
        <div className={style[`todo-wrapper`]}>
            <div className={style[`todos-container`]}>
                <TodoForm/>
                {todos.map((todo) =>
                    <div
                        className={`${style[`todo`]} ${style[`mode-${theme}`]}`}
                        key={todo.id}>
                        {todo.body}
                    </div>
                )}
            </div>
        </div>
    )
}