import React from "react"
import { Routes , Route } from 'react-router-dom';
import Homepage from "./Components/Dashboard/Homepage";
import Editbook from "./Components/Dashboard/Editbook"
import Createbook from "./Components/create/Createbook";


const App=() =>{
  return (
    
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/Create" element={<Createbook/>}/>
    <Route path="/Edit/:id" element={<Editbook/>}/>
    </Routes>
    
  );
}

export default App;
