

import React ,{useState} from 'react';
import Child from './Child';


const App = () =>{  //parent component
  const[datafromchild , setDataFromChild]=useState("khushbu")
const handledtoc=(inputdata)=>
{
  setDataFromChild(inputdata);
  
}
  return (
    <div>
    <h1>data from child:{datafromchild}</h1>
    <Child   onDataUpdate={handledtoc}></Child>
       </div>
  )
}
export default App;

