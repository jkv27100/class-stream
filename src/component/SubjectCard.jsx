import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "../css/card.css";

const SubjectCard = (props) => {
  return (
    <div className="cards">
      <div className="header">
        <h1>{props.subName.sub}</h1>
        <h2>{props.subName.code}</h2>
      </div>
      <div className="content">
        <p>Check out Vidoes and Pdf of {props.subName.sub}</p>
      </div>
      <div className="bottom">
        <div className="btn">
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to={`/${props.subName.code}pdf`}
          >
            Pdf
          </Button>
        </div>
        <div className="btn">
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={`/${props.subName.code}videos`}
          >
            Videos
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SubjectCard;
