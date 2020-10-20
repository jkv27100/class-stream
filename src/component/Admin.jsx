import React from "react";
import { Button } from "@material-ui/core";
import { annou, submissions, events } from "../services/Notices";
import * as UrlData from "../services/UrlData";

function Admin(props) {
  const handleAnnou = (e) => {
    annou.push(document.getElementById("acc").value);
    console.log(annou);
  };
  const handleSub = (e) => {
    submissions.push(document.getElementById("upcoming").value);
  };
  const handleEvent = (e) => {
    events.push(document.getElementById("events").value);
  };

  const handleClear = (array) => {
    /*clears all data from array
     */ while (array.length > 0) {
      array.pop();
    }
  };
  const handleLink = () => {
    UrlData.getUrlData();
    const typedCode = document.getElementById("code").value.toUpperCase();
    const typedLink = document.getElementById("link");
    const code = UrlData.getUrlByCode(typedCode);
    if (code) {
      UrlData.setUrlByCode(typedCode, typedLink.value);
      typedLink.value = "";

      alert("linked uploaded!");
    } else {
      alert("no such code");
    }
  };
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "30px",
            width: "50%",
          }}
        >
          <h2>Admin</h2>
          <h3>Announcement</h3>
          <input
            type="text"
            id="acc"
            style={{ marginBottom: "10px", padding: "20px" }}
          />
          <Button color="primary" variant="contained" onClick={handleAnnou}>
            Add
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => handleClear(annou)}
          >
            Clear Array
          </Button>

          <h3>Upcoming</h3>
          <input
            type="text"
            id="upcoming"
            style={{ marginBottom: "10px", padding: "20px" }}
          />
          <Button color="primary" variant="contained" onClick={handleSub}>
            Add
          </Button>
          <Button color="secondary" variant="contained" onClick={handleClear}>
            Clear Array
          </Button>
          <h3>Events</h3>
          <input
            type="text"
            id="events"
            style={{ marginBottom: "10px", padding: "20px" }}
          />
          <Button color="primary" variant="contained" onClick={handleEvent}>
            Add
          </Button>
          <Button color="secondary" variant="contained" onClick={handleClear}>
            Clear Array
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "30px",
            marginLeft: "30px",
            width: "30%",
          }}
        >
          <h3>Code</h3>
          <input
            type="text"
            id="code"
            style={{ marginBottom: "10px", padding: "20px" }}
          />
          <h3>Add Video ID</h3>
          <input
            type="text"
            id="link"
            style={{ marginBottom: "10px", padding: "20px" }}
          />
          <Button color="primary" variant="contained" onClick={handleLink}>
            Add
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Admin;
