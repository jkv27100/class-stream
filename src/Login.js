import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const changeHandler = (e) => {
    if (e.target.value === "1234") {
      history.push("/admin"); //placeholder for admin page.
      localStorage.setItem("isLoggedIn", "true");
      window.location.reload();
    }
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Enter the 4 digit PIN</h2>
        <input type="text" onChange={changeHandler} />
      </div>
    </>
  );
};
export default Login;
