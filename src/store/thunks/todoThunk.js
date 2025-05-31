import {createAsyncThunk} from "@reduxjs/toolkit";

const TODO_URL = "https://jsonplaceholder.typicode.com/todos";

export const getAllTodo = createAsyncThunk(
    "todos/getAllTodo",
    async (_, {rejectWithValue}) => {
        try {
            const res = await fetch(`${TODO_URL}?_limit=4`);
            if (!res.ok) {
                throw new Error("Could not fetch todo.");
            }
            return await res.json();
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const postTodo = createAsyncThunk(
    "todos/postAllTodo",
    async ({title}, {rejectWithValue}) => {
        try {
            let bodyString = JSON.stringify({
                userId: 1,
                id: Math.random(),
                title: title,
                completed: false
            });
            const res = await fetch(`${TODO_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: bodyString
            });
            if (!res.ok) {
                throw new Error("Could not fetch todo.");
            }

            return res.json();
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);