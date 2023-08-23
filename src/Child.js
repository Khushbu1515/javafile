import  React from  "react"


const Child = (props) =>
{
 
    return (
        <div>
        <h1 style={{color:"blueviolet"}}>This is a child component</h1>
        <h1 style ={{color:"blueviolet"}}>my name is {props.name} and age  is {props.age}</h1>
        </div>
    )
}

export default Child;