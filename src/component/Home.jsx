import React, { Fragment } from "react";
import Notification from "./Notification";
import styles from "../css/home.module.css";
import main from "../Images/icon.svg";
import facebook from "../Images/facebook.svg";
import instagram from "../Images/instagram.svg";
import reddit from "../Images/reddit.svg";
import linkedin from "../Images/linkedin.svg";
import github from "../Images/github.svg";

const Home = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <img className={styles.img} src={main} alt="svg" />
        <div>
          <div className={styles.typewriter}>
            <h1 className={styles.h1} id="h">
              Welcome To Class Stream
            </h1>
          </div>
          <div className={styles.pwriter}>
            <p className={styles.type}>
              Check out the latest announcements from VTU. Online classes are
              available for streaming
            </p>
          </div>
          <div className={styles.icons}>
            <a href="https://www.facebook.com">
              <img className={styles.icon} src={facebook} alt="fb" />
              <a href="https://www.instagram.com">
                <img className={styles.icon} src={instagram} alt="fb" />
              </a>
              <a href="https://www.reddit.com">
                <img className={styles.icon} src={reddit} alt="fb" />
              </a>
              <a href="https://www.linkedin.com">
                <img className={styles.icon} src={linkedin} alt="fb" />
              </a>
              <a href="https://www.github.com">
                <img className={styles.icon} src={github} alt="fb" />
              </a>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.sidebar}>
        <Notification />
      </div>
    </div>
  );
};

export default Home;
