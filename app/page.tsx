'use client'
import React from 'react';
import { increment, decrement, incrementByAmount } from "./features/counterSlice";
import { useAppDispatch, useAppSelector } from "./store/store";

export default function Home() {
  const [amount, setAmount] = React.useState(0);
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Increment</button>
      <input onChange={(e)=>setAmount(e.target.value)} value={amount} />
      <button onClick={()=>dispatch(incrementByAmount(amount))}>+ Add Amount</button>
      <h1>Home Page: {count}</h1>
    </>
  );
}
