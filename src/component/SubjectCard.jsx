import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import styles from "../css/card.module.css";

const SubjectCard = (props) => {
  return (
    <div className={styles.cards}>
      <div className={styles.header}>
        <h1 className={styles.h1}>{props.subName.sub}</h1>
        <h2 className={styles.h2}>{props.subName.code}</h2>
      </div>
      <div className={styles.content}>
        <p>Check out Vidoes and Pdf of {props.subName.sub}</p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.btn}>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            component={Link}
            to={`/${props.subName.code}pdf`}
          >
            Pdf
          </Button>
        </div>
        <div className={styles.btn}>
          <Button
            size="small"
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
