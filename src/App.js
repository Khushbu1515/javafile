

import React from 'react';
import {usestate} from "react";

const App = () =>{
   
    const[data,setData]=usestate("khushbu");
 
   return (
     <div>
     <hq  style={{color:"chocolate"}}>{data} </hq>
     <br/>
     <br/>
     <button   style ={{color:'blueviolet'}}  onClick={()=>{setData("khushbu kumari")}}>update data</button>
     </div>)
 }
 

export default App;

