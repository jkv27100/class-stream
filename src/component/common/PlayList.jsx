import React from "react";
import VideoPlayer from "./VideoPlayer";
import { Container } from "@material-ui/core";
import * as UrlData from "../../services/UrlData";
const PlayList = (props) => {
  const data = UrlData.getUrl(props.code);
  console.log(props.code);
  return (
    <Container maxWidth="sm">
      {data.url.map((url) => (
        <VideoPlayer key={props.code} url={url} />
      ))}
    </Container>
  );
};

export default PlayList;
