import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

const Login = () => {
  const [pin, setPin] = useState();
  const history = useHistory();
  const changeHandler = (e) => {
    setPin(e.target.value); // not needed.. refactoring neeeded.
    if (e.target.value === "1234") {
      history.push("/succ"); //placeholder for admin page.
    }
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Enter the 4 digit PIN</h2>

        <input type="text" onChange={changeHandler} />
        {/* <button onClick={checkPin}>Go</button> */}
      </div>
    </>
  );
};
export default Login;
