import { useDispatch, useSelector } from "react-redux";
import { type appDispatch, type RootState } from "./store";
import { increment,decrement,reset, addValue } from "./CounterSlice";
import React, { useState,} from "react";
import { createTodo, deleteTodo } from "./TodoSlice";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";


function App() {
  let data =  useSelector((state : RootState) => state.counter.value)
  let todoData = useSelector((state : RootState)=>state.todo)
  const dispatch : appDispatch = useDispatch()


  const [input,setInput] = useState("")


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      setInput(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      if(input === ""){
        alert('fill todo')
      }
      else{
         dispatch(createTodo({id:Date.now(),todo:input}))
         setInput("")
      }
     

  }

  return <>
    <div className="w-[50%]">
      <h1 className=" ml-20">{data}</h1>
      <Button onClick={()=>dispatch(increment())}>+</Button>
      <Button onClick={()=>dispatch(decrement())}>-</Button>
      <Button onClick={()=>dispatch(reset())}>reset</Button>
      <Button onClick={()=>dispatch(addValue(10))}>add 10 to it</Button>
    </div>

        

    <div>
      <form action="" onSubmit={handleSubmit} className="w-full flex justify-center items-center">
        <Input type="text" value={input} onChange={handleChange} className="w-[25%]" />
        <Button className="cursor-pointer">Add Todo</Button>
      </form>
    </div>

    <div className="flex justify-center items-center flex-col mt-5 gap-2">
      {todoData.length>0 &&
      (todoData.map(item=>(
        <div key={item.id} className="w-[25%] flex justify-around" ><strong>{item.todo}</strong> <span className="cursor-pointer" onClick={()=>dispatch(deleteTodo(item.id))}>❌</span></div>
      )))}
    </div>
  </>;
}

export default App;
