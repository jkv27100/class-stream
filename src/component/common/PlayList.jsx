import React from "react";
import VideoPlayer from "./VideoPlayer";
import { makeStyles } from "@material-ui/core/styles";

import * as UrlData from "../../services/UrlData";
const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});
const PlayList = (props) => {
  const classes = useStyles();
  const data = UrlData.getUrl(props.code);
  console.log(props.code);
  return (
    <div className={classes.root}>
      {data.url.map((url) => (
        <VideoPlayer key={props.code} url={url} />
      ))}
    </div>
  );
};

export default PlayList;
