import React from "react";
import { links } from "../../services/pdfUrls";
import styles from "../../css/card.module.css";

const PdfList = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>Download PDF Notes for {props.subName}</h1>
        {console.log(props.code)}
        {/* <p>
          Download pdf for {props.code}{" "}
          <a href={links.find((x) => x.subCode === props.code).url1}>here</a>{" "}
        </p> */}
        <div>
          <ul
            style={{
              fontFamily: "fantasy",
              listStyleType: "none",
              width: "450px",
              margin: "100px auto 0",
              padding: "10px",
              boxSizing: "border-box",
              fontSize: "26px",
            }}
          >
            <li className={styles.cards} style={{}}>
              {
                <a
                  href={links.find((x) => x.subCode === props.code).url1}
                  style={{ textDecoration: "none", color: "pink" }}
                  target="_blank"
                >
                  MODULE 1
                </a>
              }
            </li>
            <li className={styles.cards}>
              {
                <a
                  href={links.find((x) => x.subCode === props.code).url2}
                  style={{ textDecoration: "none", color: "pink" }}
                  target="_blank"
                >
                  MODULE 2
                </a>
              }
            </li>
            <li className={styles.cards}>
              {
                <a
                  href={links.find((x) => x.subCode === props.code).url3}
                  style={{ textDecoration: "none", color: "pink" }}
                  target="_blank"
                >
                  MODULE 3
                </a>
              }
            </li>
            <li className={styles.cards}>
              {
                <a
                  href={links.find((x) => x.subCode === props.code).url4}
                  style={{ textDecoration: "none", color: "pink" }}
                  target="_blank"
                >
                  MODULE 4
                </a>
              }
            </li>
            <li className={styles.cards}>
              {
                <a
                  href={links.find((x) => x.subCode === props.code).url5}
                  style={{ textDecoration: "none", color: "pink" }}
                  target="_blank"
                >
                  MODULE 5
                </a>
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PdfList;
