import React from "react"
function textBox(props){
    return(
        <input type={props.type} placeholder={props.name}></input>
    );
}
export default textBox;