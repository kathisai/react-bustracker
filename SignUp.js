import React from "react"
import TextBox from "./textBox"
import Button from "./button"
import Title from "./Title";

const SignUp=()=> {
  return (
    <div class ="Text">
    <center>
    <Title name="SIGN UP"/>
    <TextBox
    type="Text" placeholder ="userName"/> <br/><br/>
    <TextBox
    type="email" placeholder="E-mail"/><br /><br/>
    <TextBox 
    type="password" placeholder="password"/><br/><br/>
    <TextBox 
    type="password" placeholder ="confirm password"/><br /><br/><br/>
    <Button name="submit"/>
    </center>
    </div>
  )
}
export default SignUp