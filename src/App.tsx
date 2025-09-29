import { useDispatch, useSelector } from "react-redux";
import { type appDispatch, type RootState } from "./store";
import { increment,decrement,reset, addValue } from "./CounterSlice";

function App() {
  let data =  useSelector((state : RootState) => state.counter.value)
  const dispatch : appDispatch = useDispatch()
  return <>
    <div>
      <h1>{data}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
      <button onClick={()=>dispatch(addValue(10))}>add 10 to it</button>
    </div>
  </>;
}

export default App;
