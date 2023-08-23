import React,{component} from "react"


 class Coll extends component 
{

render()
{
    console.log(this.props)
    return(
        <div>
        <h1> hello {this.props.name}</h1>
        </div>
    )
}
}
export default Coll;