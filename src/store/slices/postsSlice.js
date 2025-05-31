import {createSlice} from "@reduxjs/toolkit";

import {getAllPosts} from "../thunks/postsThunk";

const initialState = {
    posts: [],
    loadingPosts: false,
    error: "",

};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllPosts.pending, (state) => {
                state.loadingPosts = true;
                state.error = "";
            })
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.loadingPosts = false;
                state.posts = action.payload;
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.loadingPosts = false;
                state.error = action.payload;
            });

    }
});
export default postSlice.reducer;