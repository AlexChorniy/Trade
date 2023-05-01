import {combineReducers} from 'redux';
import counterSlice, {CounterState} from './counterSlice';
import tradesSlice, {TradesState} from "./tradesSlice";


const rootReducer = combineReducers({
    counter: counterSlice,
    trades: tradesSlice,
});

export interface RootState {
    counter: CounterState;
    trades: TradesState;
}


export default rootReducer;
