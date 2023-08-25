import React , {useContext} from "react"
import {MyContext} from "./App"
// Create a child component that uses the value from the context
const Child= () => {
    const contextValue = useContext(MyContext);
    return (<div>the output is :{contextValue}</div>);
  };
  
  export default Child;