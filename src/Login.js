import React from "react";
import button from "./button";
import textBox from "./textBox";
import Title from "./Titile";
import ActionLink from "./ActionLink";

function LogIn() {
  return (
    <div style={{ color: "pink" }}>
      <center>
        <Title title="LOG IN " />
        <br />
        <br />
        <textBox type="Email" name="Email Id" />
        <br />
        <textBox type="Password" name="Password" />
        <br />
        <button name="LOG IN" />

        <br />
        <br />
        <br />
        <ActionLink />
      </center>
    </div>
  );
}
export default Login;
