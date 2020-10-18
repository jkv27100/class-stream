import React from "react";
import YouTube from "react-youtube";
import styles from "../../css/videoplayer.module.css";
import github from "../../Images/icon.svg";

const vidoeOnReady = (event) => {
  setTimeout(() => {
    event.target.stopVideo();
  }, 2000);
  event.target.seekTo(0.1);

  console.log(event.target);
};

const VideoPlayer = (props) => {
  const opts = {
    height: "300",
    width: "300",
  };

  return (
    <div className={styles.thumbnail}>
      <YouTube videoId={props.url} opts={opts} onReady={vidoeOnReady} />
      <div className={styles.video_details}>
        <img className={styles.channel_icon} src={github} alt="icon" />
        <p className={styles.title}>
          {props.subName} Session: {props.classNo}
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
