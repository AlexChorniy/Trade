import {configureStore} from '@reduxjs/toolkit';

import rootReducer from "../reducers";

export const store = configureStore({
    reducer: rootReducer,
});

// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()));
