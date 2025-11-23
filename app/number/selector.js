'use client'
import { createSelector } from "@reduxjs/toolkit";

//selectNumbers extracts the array from state.
const selectNumbers = state => state.numbers.numbers;
//selectEvenNumbers filters only even numbers and is memoized.
export const selectEventNumbers = createSelector([selectNumbers], (numbers)=> numbers.filter(num=>num%2 ===0));

export const selectOldNumbers = createSelector([selectNumbers], (numbers)=> numbers.filter(num=>num%2 !==0));