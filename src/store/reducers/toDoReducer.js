import {ADD_TODO} from "../actions/actionTypes";

const initialState = [];

const todoReducer = (state = initialState, action) => {
    console.log("ACTION:", action);
    switch (action.type) {
        case ADD_TODO: {
            return [...state, action.payload];
        }
        default: return state;
    }
};
export default todoReducer;