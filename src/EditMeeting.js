import React, { useState } from "react";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";

const { Button, Form, Modal } = ReactBootStrap;

const EditMeeting = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Meeting</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formGroupDesc">
            <Form.Control type="text" placeholder="Description" />
          </Form.Group>
          <Form.Group controlId="formGroupSTime">
            <Form.Control type="text" placeholder="Start Time" />
          </Form.Group>
          <Form.Group controlId="formGroupETime">
            <Form.Control type="text" placeholder="End Time" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditMeeting;
