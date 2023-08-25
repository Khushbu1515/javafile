

import React ,{createContext} from "react"
import Child from "./Child"
//import MyContext from "./MyContext"
// Create a context

export const MyContext = createContext();
// Create a parent component that provides a value through the context
const App = () => {
  const value = "Hello from context!";
  return (
    <MyContext.Provider value={value}>
      <Child />
    </MyContext.Provider>
  );
};

export default App;