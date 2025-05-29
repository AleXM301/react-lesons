import {ADD_TODO} from "./actionTypes";

export const todoAdd = (title, body)=> {
    return {
        type: ADD_TODO,
        payload: {
            id: `${title}-${Math.random()}`,
            body: `${body}`,
        }
    }
}