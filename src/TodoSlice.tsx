import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


type TodoType = {
    id : number,
    todo : string
}



const initialState : TodoType[] = []

const TodoSlice = createSlice({
    name : 'todo',
    initialState : initialState,
    reducers : {
        createTodo : (state,action:PayloadAction<TodoType>) => {
            state.push(action.payload)
        },
        deleteTodo : (state,action:PayloadAction<number>)=>{
            return(state.filter(item=>item.id !== action.payload))
            

        }
    }
})

export const {createTodo,deleteTodo} =  TodoSlice.actions;
export default TodoSlice.reducer
