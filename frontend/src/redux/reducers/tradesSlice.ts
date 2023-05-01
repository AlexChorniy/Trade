import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "react-redux-typescript";
import {RootState} from "./index";


export type Trade = {
    id: string;
    currency: string;
    amount: number;
}

export type TradesState = {
    trades: Trade[];
};


const initialState: TradesState = {
    trades: [],
};

const reducers = {
    addTrade(state: TradesState, action: PayloadAction<string, Trade>) {
        state.trades.push(action.payload);
    }
};

const tradeSlice = createSlice({
    name: 'tradeCurrency',
    initialState,
    reducers,
});

export const {addTrade} = tradeSlice.actions;

export const selectTrades = (state: RootState) => state.trades.trades;

export default tradeSlice.reducer