import React from "react";
import VideoPlayer from "./VideoPlayer";
import styles from "../../css/playlist.module.css";

import * as UrlData from "../../services/UrlData";

const PlayList = (props) => {
  const data = UrlData.getUrl(props.code);
  let classNo = 1;

  return (
    <div className={styles.list}>
      {data.url.map((url) => (
        <VideoPlayer
          key={props.code}
          url={url}
          subName={props.subName}
          classNo={classNo++}
        />
      ))}
    </div>
  );
};

export default PlayList;
