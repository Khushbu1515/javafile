import  React from  "react"


const  Parent = (props) =>
{
 
    return (
        <div>
        <h1 style={{color:"skyblue"}}>This is a parent component</h1>
        <h1 style={{color:"skyblue"}}>my name is {props.name}  and age is {props.age}</h1>
        </div>
    )
}

export default Parent;