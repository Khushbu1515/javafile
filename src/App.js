

import React from 'react';
import {useState}  from  "react"



const App = () =>{
   const[data,setData]=useState("khushbu");

  return (
    <div>
    <hq>{data} </hq>
    <button onClick={()=>{setData("khushbu kumari")}}>update data</button>
    </div>)
}
export default App;

