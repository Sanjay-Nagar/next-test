import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      state.count++;
    },
    decrement: (state: CounterState) => {
      state.count--;
    },
    incrementByAmount: (
      state: CounterState,
      { payload: incrementCount }: { payload: number }
    ) => {
      state.count += incrementCount;
    },
  },
});

export const { decrement, incrementByAmount, increment } = counterSlice.actions;
export default counterSlice.reducer;
