import {configureStore} from '@reduxjs/toolkit';

import counterReducer from './slices/counterSlice';
import todoSlice from './slices/todoSlice';
import postsSlice from "./slices/postsSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsSlice,
        todos: todoSlice,
    }
})

export default store;