import React from "react";
import SubjectCard from "./SubjectCard";
import "../css/subjects.css";
const Subjects = (props) => {
  return (
    <div className="container">
      {props.subject.map((sub) => (
        <SubjectCard key={sub.code} subName={sub} />
      ))}
    </div>
  );
};

export default Subjects;
