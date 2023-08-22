

import React , {useState} from 'react'
import  Coll from "./Coll"

const App = () =>{
   
  const[data, setData]=useState("amaruu")

  const Click =()=>
  {
    setData("amarnath sharma")
  }
  return (
    <div>
    <h1>hello react</h1>
    <Coll name={data}></Coll>
    <button onClick ={Click}>update data</button>
    </div>)
}
export default App;

