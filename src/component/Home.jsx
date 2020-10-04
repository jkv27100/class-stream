import { Button } from "@material-ui/core";
import React from "react";
import "../css/home.css";
import svg from "../Images/icon.svg";
//import { Button } from "@material-ui/core";

const Home = (props) => {
  return (
    <div className="contain">
      <img className="img" src={svg} alt="svg" />
      <div>
        <h1 className="h1">Welcome to Class Stream</h1>
        <p className="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
          neque!
        </p>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </div>
    </div>
  );
};

export default Home;
