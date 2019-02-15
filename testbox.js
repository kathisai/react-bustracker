import React from "react"
var textBox=(props)=>{
    return(
        <input type={props.type} placeholder={props.name}></input>
    );
}
export default textBox;