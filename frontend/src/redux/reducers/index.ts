import {combineReducers} from 'redux';
import counterSlice, {CounterState} from './counterSlice';


const rootReducer = combineReducers({
    counter: counterSlice,
});

export interface RootState {
    counter: CounterState;
}


export default rootReducer;
