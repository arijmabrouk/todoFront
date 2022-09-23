import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button, Table, Col, Row } from "reactstrap";

const Sprint = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <div>
      <Table>
        <Row style={{ marginInline: "4rem" }}>
          <Col xs="6" lg="2">
            <th
              style={{
                backgroundColor: "#00BFFF",
                borderRadius: "1rem",
                textAlign: "center",
                color: "white",
                width: "6rem",
                marginInline: "3rem",
              }}
            >
              Backlog
            </th>
            <Button
              style={{
                marginTop: "3rem",
                backgroundColor: "#87CEFA",
                color: "white",
                width: "9rem",
                border: "none",
              }}
              onClick={toggle}
            >
              AddTask
            </Button>
          </Col>
          <Col xs="6" lg="2">
            <th
              style={{
                backgroundColor: "#800080",
                borderRadius: "1rem",
                textAlign: "center",
                color: "white",
                width: "6rem",
              }}
            >
              To Do
            </th>
          </Col>
          <Col xs="6" lg="2">
            <th
              style={{
                backgroundColor: "#FF8C00",
                borderRadius: "1rem",
                textAlign: "center",
                color: "white",
                width: "7rem",
              }}
            >
              In Progress
            </th>
          </Col>
          <Col xs="6" lg="2">
            <th
              style={{
                backgroundColor: "#FF1493",
                borderRadius: "1rem",
                textAlign: "center",
                color: "white",
                width: "7rem",
              }}
            >
              To Test
            </th>
          </Col>
          <Col xs="6" lg="2">
            <th
              style={{
                backgroundColor: "#228B22",
                borderRadius: "1rem",
                textAlign: "center",
                color: "white",
                width: "7rem",
              }}
            >
              Done
            </th>
          </Col>{" "}
        </Row>
      </Table>
    </div>
  );
};

export default Sprint;
