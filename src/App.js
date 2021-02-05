import React, { useState } from "react";
import "./App.css";
import MeetingList from "./MeetingList";
import CreateMeeting from "./CreateMeeting";
import EditMeeting from "./EditMeeting";


const App = () => {
  const [show, setShow] = useState(false);

  const tables = [
    { id: "1", description: "morning", low: "9.00am", high: "5.00pm" },
    { id: "2", description: "morning", low: "9.00am", high: "5.00pm" },
    { id: "3", description: "morning", low: "9.00am", high: "5.00pm" },
    // {description:"morning", low:"9.00am", high:"5.00pm"},
    // {description:"morning", low:"9.00am", high:"5.00pm"},
   
  ];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <center>
        <h1 className="m-b-lg">Meeting Times</h1>
        <CreateMeeting count={tables.length} />

      </center>
      <MeetingList tables={tables} handleShow={handleShow} />
      <EditMeeting show={show} handleClose={handleClose} />
    </div>
  );
};

export default App;
