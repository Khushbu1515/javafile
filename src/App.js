

import React from 'react';
import {useState}  from  "react"



const App = () =>{
   const[data,setData]=useState("khushbu");

  return (
    <div>
    <hq  style={{color:"chocolate"}}>{data} </hq>
    <br/>
    <br/>
    <button   style ={{color:'blueviolet'}}  onClick={()=>{setData("khushbu kumari")}}>update data</button>
    </div>)
}
export default App;

