import React from "react";
import SubjectCard from "./SubjectCard";
import Styles from "../css/subjects.module.css";
const Subjects = (props) => {
  return (
    <div className={Styles.container}>
      {props.subject.map((sub) => (
        <SubjectCard key={sub.code} subName={sub} />
      ))}
    </div>
  );
};

export default Subjects;
