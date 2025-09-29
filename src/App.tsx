import { useSelector } from "react-redux";

function App() {
  let data =  useSelector((state)=>{
    console.log(state)
    return state
  })
  return <>
    <div>{data}</div>
  </>;
}

export default App;
