// src/features/posts/postsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostsRequest: (state) => {
      state.loading = true;
    },
    fetchPostsSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    fetchPostsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createPostRequest: (state) => { state.loading = true; },
    createPostSuccess: (state, action) => {
      state.loading = false;
      state.posts.push(action.payload);
    },
    createPostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updatePostRequest: (state) => { state.loading = true; },
    updatePostSuccess: (state, action) => {
      state.loading = false;
      const index = state.posts.findIndex(p => p.id === action.payload.id);
      if (index !== -1) state.posts[index] = action.payload;
    },
    updatePostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deletePostRequest: (state) => { state.loading = true; },
    deletePostSuccess: (state, action) => {
      state.loading = false;
      state.posts = state.posts.filter(p => p.id !== action.payload);
    },
    deletePostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
  createPostRequest,
  createPostSuccess,
  createPostFailure,
  updatePostRequest,
  updatePostSuccess,
  updatePostFailure,
  deletePostRequest,
  deletePostSuccess,
  deletePostFailure,
} = postsSlice.actions;

export default postsSlice.reducer;
