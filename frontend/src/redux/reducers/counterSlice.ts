import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "react-redux-typescript";
import {RootState} from "./index";

export type CounterState = {
    value: number;
};
const initialState: CounterState = {
    value: 0,
};

const reducers = {
    increment(state: CounterState) {
        if (state) state.value += 1;
    },
    decrement(state: CounterState) {
        if (state) state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount(state: CounterState | undefined, action: PayloadAction<string, number>) {
        if (state) state.value += action.payload;
    },
};

const counterSlice = createSlice({
    // name used in action types
    name: 'counter',
    // initial state
    initialState,
    // an object of "case reducers"
    reducers,
});

export const {increment, incrementByAmount, decrement} = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value


export default counterSlice.reducer;
