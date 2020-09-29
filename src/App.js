import React, { Component } from "react";
import Routes from "./Routes";
class App extends Component {
  state = {
    subject: [
      { code: "17CS71", sub: "Storage Area Network" },
      { code: "17CS72", sub: "Web Technology" },
      { code: "17CS73", sub: "Unix System Programming" },
      { code: "17CS74", sub: "Machine Learning" },
      { code: "17CS75", sub: "Advaned Computer Architecure" },
    ],
  };
  render() {
    return (
      <div>
        <Routes subject={this.state.subject} />
      </div>
    );
  }
}

export default App;
