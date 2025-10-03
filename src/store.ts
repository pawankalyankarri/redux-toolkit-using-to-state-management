import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice'
import TodoSlice from './TodoSlice'


const store = configureStore({
    reducer : {
        counter : counterReducer,
        todo : TodoSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch

export default store


