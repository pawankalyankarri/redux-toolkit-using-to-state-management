import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
    value : number
}

const initialState : CounterState = {
    value : 0
}

const counterslice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment : (state)=>{
            state.value += 1
        },
        decrement : (state) => {
            state.value -= 1
        },
        reset : (state) => {
            state.value = 0;
        },
        addValue : (state,action: PayloadAction<number>) => {
            state.value += action.payload
        }

    }

})

export const {increment,decrement,reset,addValue} = counterslice.actions

export default counterslice.reducer