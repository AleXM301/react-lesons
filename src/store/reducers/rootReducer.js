import {combineReducers} from "redux";
import counterReducer from "./counterReduser";
import toDoReducer from "./toDoReducer";

 const rootReducer = combineReducers({
  counter: counterReducer,
  todo: toDoReducer
 });
export default rootReducer;