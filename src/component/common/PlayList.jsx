import React from "react";
import VideoPlayer from "./VideoPlayer";
import styles from "../../css/playlist.module.css";
import { useHistory } from "react-router-dom";

const PlayList = (props) => {
  const history = useHistory();
  if (props.isFetched === false) {
    history.push("/");
    window.location.reload();
  }
  console.log(props.isFetched);
  const data = props.UrlData.find((m) => m.code === props.code);
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
