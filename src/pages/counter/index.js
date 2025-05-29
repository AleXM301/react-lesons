import {useDispatch, useSelector} from "react-redux";

import {increment, decrement} from "../../store/actions/counterActions";
import stales from "./Couter.module.css"
export default function Counter(){
const dispatch = useDispatch();
const counter = useSelector(state=> state.counter);

    return (
        <div className={`${stales[`counter-container`]}`}>
        <h3 className={`${stales[`counter-value`]}`}> Value: {counter}</h3>
           <div className={`${stales[`button-container`]}`}>
               <button className={stales[`button-counter`]} onClick={() => dispatch(increment())}> Increment</button>
               <button className={stales[`button-counter`]} onClick={() => dispatch(decrement())}> Decrement</button></div>

        </div>
    )
};