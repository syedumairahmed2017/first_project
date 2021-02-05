import React, { useState } from "react";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";

const { Button, Form, Col } = ReactBootStrap;

const CreateMeeting = ({ count }) => {
  let meeting = { id: "", description: "", low: "", high: "" };
  function myChangeHandler(event, name) {
    if (name == "description") {
      console.log(event);
      meeting.description = event.target.value;
      console.log(meeting);
    }
  }
  return (
    <Form className="m-b-lg">
      <Form.Row>
        <Form.Group as={Col} md="5" lg="5" controlId="formGridDesc">
          <Form.Control
            placeholder="Description"
            onChange={e => this.myChangeHandler(e, "description")}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridStime">
          <Form.Control placeholder="Start Time" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridETime">
          <Form.Control placeholder="End Time" />
        </Form.Group>
        <Form.Group as={Col} controlId="Submit">
          <Form.Control as={Button} type="submit">
            Submit
          </Form.Control>
        </Form.Group>
      </Form.Row>
    </Form>
  );
};

export default CreateMeeting;
