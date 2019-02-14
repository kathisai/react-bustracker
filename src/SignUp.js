import React from "react"
import TextBox from "./textBox"
import Button from "./button"
import "./styles.css"


function SignUp() {
  return (
    <div class ="Text">
    <center>
    <form>
    <h1>SignUp Form</h1>
    <textBox
    type="Text"  placeholder ="userName" /> <br />
    <textBox
    type="email"  placeholder ="E-mail"/><br />
    <textBox 
    type="password"  placeholder="password"/><br />
    <textBox 
    type="password" placeholder ="confirm password"/><br />
    <button name="Sign Up"/>
    
    </form>
    </center>
    </div>
  )
}
export default SignUp