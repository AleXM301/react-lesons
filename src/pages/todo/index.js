    import {useSelector} from "react-redux";
    import {useContext, useEffect,} from "react";
    import {ThemeContext} from "../../contexts/ThemeContext";
    import {useDispatch} from "react-redux";
    import {getAllTodo} from "../../store/thunks/todoThunk";

    import TodoForm from "./components/todoForm";

    import style from "./todo.module.css";

    export default function Todo() {
const dispatch = useDispatch();
        const {todos} = useSelector(state => state.todos);
        useEffect(()=>{
            dispatch(getAllTodo());
        },[dispatch]);

        const {theme} = useContext(ThemeContext);
        return (
            <div className={style[`todo-wrapper`]}>
                <div className={style[`todos-container`]}>
                    <TodoForm/>
                    {todos.map((todo) =>
                        <div
                            className={`${style[`todo`]} ${style[`mode-${theme}`]}`}
                            key={todo.id}>
                            {todo.title}
                        </div>)

                    }
                </div>
            </div>
        );
    };