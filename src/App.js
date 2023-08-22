

import React , {useState} from 'react'
import  Coll from "./Coll"

const App= () =>{
   
  const[data, setData]=useState("amaruu")
   const dattype = "hello world"

  return (
    <div>
    <h1>hello react {dattype}</h1>
    <Coll name={data}></Coll>
    <button onClick ={()=>{setData("amar nath sharma is java developer")}}>update data</button>
    </div>)
}
export default App;

