

import React, { useRef } from 'react';


const App = () =>{
   const ref=useRef(0);  // return current object and also accept current value
   const handler=()=>{
    ref.current++
    console.log(`click ${ref.current} times`)
   }
   
  console.log("i rendered")
  return (
    <div>
    
    <button   style ={{color:'blueviolet'}}  onClick={handler}>click </button>
    </div>)
}
export default App;

