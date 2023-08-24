import  React, {useState} from  "react"



const  Child = ({onDataUpdate}) =>
{
   const[inputdata,setInputData]=useState("")
 const handleclick=()=>
 {
 onDataUpdate(inputdata);

 }
    return (
        <div>
        
       <input type="text"  value ={inputdata}  onChange={(e)=> setInputData(e.target.value)}/>
      <button  onClick={handleclick}>send data to parent</button>
        </div>
    )
}

export default Child;