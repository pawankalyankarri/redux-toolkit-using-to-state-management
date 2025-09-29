import { createSlice,configureStore, type PayloadAction } from "@reduxjs/toolkit"

interface Counter {
    count : number
}

const initialState : Counter = {count : 0}

const countSlice = createSlice({
    name : 'counter',
    initialState,
    reducers :{
        increment : (state,action : PayloadAction<number>) => {
            state.count += action.payload
        },
        decrement : (state,action : PayloadAction<number>) => {
            state.count -= action.payload
        }
    }
})

const store = configureStore({
    reducer : {
        cnt : countSlice.reducer
    }
})
export default store;

export const {increment,decrement} = countSlice.actions

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch