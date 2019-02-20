import React from "react"
const TextBox=(props)=>{
    return(
        <input type={props.type} placeholder={props.placeholder}></input>
    );
}
export default TextBox;