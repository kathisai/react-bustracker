import React from "react";
import TextBox from "./textBox";
import Link from "./Link";
import Button from "./button";
import Title from "./Title";

const LogIn=(props)=> {
  return (
    <div style={{ color: "pink" }}>
      <center>
        <Title name="LOGIN" />
        <br />
        <br />
        <TextBox type ="Email" placeholder="Email Id" />
        <br />
        <TextBox type ="Password"placeholder="Password" />
        <br />
        <Button name="LOG IN" />

        <br />
        <br />
        <br />
        <Link />
      </center>
    </div>
  );
}
export default LogIn;
