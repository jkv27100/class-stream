import React, { Component } from "react";
import Routes from "./component/Routes";
import NavBar from "./component/NavBar";
import axios from "axios";

class App extends Component {
  state = {
    subject: [
      { code: "17CS75", sub: "Storage Area Network" },
      { code: "17CS71", sub: "Web Technology" },
      { code: "17CS74", sub: "Unix System Programming" },
      { code: "17CS73", sub: "Machine Learning" },
      { code: "17CS72", sub: "Advaned Computer Architecure" },
    ],
    UrlData: [],
    isFetched: false,
    NoticeData: [],
    isFetchedNotices: false,
  };
  async componentDidMount() {
    try {
      const apiEndPoint = "https://api.npoint.io/9b55a20979116003466e";
      let { data: UrlData } = await axios.get(apiEndPoint);
      this.setState({ UrlData });
      let isFetched = true;
      this.setState({ isFetched });
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Routes
          subject={this.state.subject}
          UrlData={this.state.UrlData}
          isFetched={this.state.isFetched}
        />
      </div>
    );
  }
}

export default App;
