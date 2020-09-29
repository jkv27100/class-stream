import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    margin: 30,
    display: "block",
  },
});

const SubjectCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <h2>{props.subName.code}</h2>
        <h1>{props.subName.sub}</h1>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="secondary"
          component={Link}
          to={`/${props.subName.code}pdf`}
        >
          Pdf
        </Button>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to={`/${props.subName.code}videos`}
        >
          Videos
        </Button>
      </CardActions>
    </Card>
  );
};
export default SubjectCard;
