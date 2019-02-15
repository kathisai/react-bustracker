import React from "react"
import TextBox from "./textBox"
import Button from "./button"
import "./styles.css"


var SignUp=()=> {
  return (
    <div class ="Text">
    <center>
    <form id="form1">
    <h1>SignUp Form</h1>
    <textBox
    type="Text"  placeholder ="userName" /> <br />
    <textBox
    type="email"  placeholder ="E-mail"/><br />
    <textBox 
    type="password"  placeholder="password"/><br />
    <textBox 
    type="password" placeholder ="confirm password"/><br />
    <button name="submit" form ="form1"/>
    
    </form>
    </center>
    </div>
  )
}
export default SignUp