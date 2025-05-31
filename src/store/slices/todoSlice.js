import {createSlice} from "@reduxjs/toolkit";
import {getAllTodo, postTodo} from "../thunks/todoThunk";

const initialState = {
    todos: [{
        id: 23213,
        title: "Coding",
    }],
    loadingTodos: false,
    error: "",
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllTodo.pending, (state) => {
                state.loadingTodos = true;
                state.error = "";
            })
            .addCase(getAllTodo.fulfilled, (state, action) => {
                state.loadingTodos = false;
                state.todos = action.payload;
            })
            .addCase(getAllTodo.rejected, (state, action) => {
                state.loadingTodos = false;
                state.error = action.payload;
            })

            .addCase(postTodo.pending, (state) => {
                state.loadingTodos = true;
                state.error = "";
            })
            .addCase(postTodo.fulfilled, (state, action) => {
                state.loadingTodos = false;
                state.todos.push(action.payload);
            })
            .addCase(postTodo.rejected, (state, action) => {
                state.loadingTodos = false;
                state.error = action.payload;
            });
    }
});

export default todoSlice.reducer;