import React from "react";
import { annou, submissions, events, notice } from "../services/Notices";
import { Button, Container } from "@material-ui/core";

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
  const handleNotice = (e) => {
    notice.push(document.getElementById("notice").value);
    console.log(notice);
  };
  const handleClear = (array) => {
    /*clears all data from array
     */ while (array.length > 0) {
      array.pop();
    }

    console.log(array);
  };
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "30px",
            width: "100%",
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
          <h3>Notice</h3>
          <input
            type="text"
            id="notice"
            style={{ marginBottom: "10px", padding: "20px" }}
          />
          <Button color="primary" variant="contained" onClick={handleNotice}>
            Add
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => handleClear(notice)}
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
      </Container>
    </React.Fragment>
  );
}

export default Admin;
