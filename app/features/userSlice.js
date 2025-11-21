import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data;
});

export const postUsers = createAsyncThunk("users/create", async (newusers) => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    newusers
  );
  return res.data;
});


export const putUsers = createAsyncThunk("users/update", async (user) => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${user.id}`,
    user
  );
  return res.data;
});


export const deleteUsers = createAsyncThunk("users/delete", async (id) => {
  await axios.delete(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return id;
});


export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error:null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postUsers.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(putUsers.fulfilled, (state, action) => {
        const index = state.users.findIndex(u => u.id === action.payload.id);
        if (index !== -1) state.users[index] = action.payload;
        state.users[index] = action.payload;
      })
      .addCase(deleteUsers.fulfilled, (state, action) => {
        state.users = state.users.filter((u) => u.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
