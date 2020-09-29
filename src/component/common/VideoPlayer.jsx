import React from "react";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: 30,
  },
});

const VideoPlayer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ReactPlayer height="300px" width="300px" controls url={props.url} />
    </div>
  );
};

export default VideoPlayer;
