import React from "react";
import SubjectCard from "./SubjectCard";

import "./home.css";
const Home = (props) => {
  return (
    <div className="container">
      {props.subject.map((sub) => (
        <SubjectCard key={sub.code} subName={sub} />
      ))}
    </div>
  );
};

export default Home;