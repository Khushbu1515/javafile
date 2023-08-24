

import React, { useMemo, useState } from 'react';

const  App=()=> {
    const [number, setNumber] = useState(0)
    // Using useMemo
    const squaredNum = useMemo(()=> {
      return squareNum(number);
    }, [number])
    
   
   // Change the state to the input
    const onChangeHandler = (e) => {
      setNumber(e.target.value);
    }
     
    return (
      <div>
       
        <input type="number" placeholder="Enter a number"
            value={number} onChange={onChangeHandler}>
        </input>
        <h1>output:{squaredNum}</h1>
      </div>
    );
  }
   
  // function to square the value
  function squareNum(number){
    console.log("Squaring will be done!");
    return Math.pow(number, 2);
  }
   
  export default App;