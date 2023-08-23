

import React from 'react';
import {useState,useEffect}  from  "react"



const App = () =>{
   const[count,setCount]=useState(0);
   useEffect(()=>{
    document.title=`you click {count} times`
   },[count])

  return (
    <div>
    <hq  style={{color:"chocolate"}}>{count} </hq>
    <br/>
    <br/>
    <button   style ={{color:'blueviolet'}}  onClick={()=>{setCount(count+1)}}>click {count} times</button>
    </div>)
}
export default App;

