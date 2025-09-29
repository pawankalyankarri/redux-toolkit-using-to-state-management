import { createSlice, type PayloadAction } from "@reduxjs/toolkit"


interface AccountState {
    name : string,
    amount : number
}

const initialState : AccountState = {
    name : "",
    amount : 0
}

const AccountSlice = createSlice({
    name : 'account',
    initialState,
    reducers : {
        updateName : ((state,action : PayloadAction<string>)=>{
            state.name = action.payload
        }),
        updateAmount : ((state,action : PayloadAction<number>)=>{
            state.amount += action.payload
        })

    }

})

export const {updateAmount,updateName} = AccountSlice.actions

export default AccountSlice.reducer