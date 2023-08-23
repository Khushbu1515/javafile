

import React from 'react';
import {useState} from "react";

const App = () =>{
   
    const[data,setData]=useState("khushbu");
    const handle=()=>
    {
      setData("khushbu kumari")
    }
 
   return (
     <div>
     <hq  style={{color:"chocolate"}}>{data} </hq>
     <br/>
     <br/>
     <button   style ={{color:'blueviolet'}}  onClick={handle}>update data</button>
     </div>)
 }
 

export default App;

