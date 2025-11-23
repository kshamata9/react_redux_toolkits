import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
  name: "number",
  initialState: {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  reducers: {
    addNumber: (state, action) => state.numbers.push(action.payload),
  },
});

export const { addNumber } = numberSlice.actions;

export default numberSlice.reducer;
