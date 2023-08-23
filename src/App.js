

import React, { useCallback, useState } from 'react';

const App = () =>{
   const[count,setCount]   = useState(0) // when child want to re render again again that acceps callback  fun and dependency
   const inc=useCallback(()=>{
    setCount(count+1)
   }
  ,[count])
  const dec=useCallback(()=>{
    setCount(count-1)
   }
  ,[count])
   
  
  return (
    <div>
    <h1>count:{count}</h1>
    <button   style ={{color:'blueviolet'}}  onClick={inc}>increment </button>
    <button   style ={{color:'blueviolet'}}  onClick={dec}>decrement </button>
    </div>)
}
export default App;

