import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice'
import AccountReducer from './AccountSlice'


const store = configureStore({
    reducer : {
        counter : counterReducer,
        account : AccountReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch

export default store


