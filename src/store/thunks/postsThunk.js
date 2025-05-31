import {createAsyncThunk} from "@reduxjs/toolkit";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

export const getAllPosts = createAsyncThunk(
    "posts/getAllPosts",
    async (_, {rejectWithValue}) => {
        try {
            const res = await fetch(`${POST_URL}?_limit=120`);
            if (!res.ok) {
                throw new Error("Could not fetch posts.");
            }
            return await res.json();
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);