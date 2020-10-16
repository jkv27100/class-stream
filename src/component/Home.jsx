import React from "react";
import styles from "../css/home.module.css";
import main from "../Images/icon.svg";
import facebook from "../Images/facebook.svg";
import instagram from "../Images/instagram.svg";
import reddit from "../Images/reddit.svg";
import linkedin from "../Images/linkedin.svg";
import github from "../Images/github.svg";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={main} alt="svg" />
      <div>
        <h1 className={styles.h1}>Welcome to Class Stream</h1>
        <p className={styles.p}>
          This website is created by chandler and monica. please support us on
          below platforms. feel free to give your sugguestions
        </p>
        <div className={styles.icons}>
          <a href="https://www.google.com">
            <img className={styles.icon} src={facebook} alt="fb" />
            <a href="https://www.google.com">
              <img className={styles.icon} src={instagram} alt="fb" />
            </a>
            <a href="https://www.google.com">
              <img className={styles.icon} src={reddit} alt="fb" />
            </a>
            <a href="https://www.google.com">
              <img className={styles.icon} src={linkedin} alt="fb" />
            </a>
            <a href="https://www.google.com">
              <img className={styles.icon} src={github} alt="fb" />
            </a>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
