import React from "react";
import SubjectCard from "./SubjectCard";
import { Container } from "@material-ui/core";
const Home = (props) => {
  return (
    <Container maxWidth="sm">
      {props.subject.map((sub) => (
        <SubjectCard key={sub.code} subName={sub} />
      ))}
    </Container>
  );
};

export default Home;
