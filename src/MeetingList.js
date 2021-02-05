import React, { useState } from "react";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";

const { Button, Table } = ReactBootStrap;

const MeetingList = ({ tables, handleShow }) => {

  const renderTable = (item, index) => {
    return (
      <tr>
        <td>{item.description}</td>
        <td>{item.low}</td>
        <td>{item.high}</td>
        <td>
          <Button variant="primary" className="m-r" onClick={handleShow}>
            Edit
          </Button>
          <Button variant="danger">Delete</Button>
        </td>
      </tr>
    );
  };
  
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Description</th>
          <th>Low</th>
          <th>High</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{tables.map(renderTable)}</tbody>
    </Table>
  );
};

export default MeetingList;
