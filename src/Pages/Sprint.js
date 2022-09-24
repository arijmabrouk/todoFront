import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button, Table, Col, Row } from "reactstrap";
import Cart from "./Cart";
import ListTasksModal from "./ListTasksModal";
import TaskUpdateModal from "./TaskUpdateModal";

const Sprint = () => {
  const [modal, setModal] = useState(false);
  const [modalTask, setModalTask] = useState(false);
  const [backlog, setBacklog] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };
  const toggleTask = () => {
    setModalTask(!modalTask);
  };
  return (
    <div style={{ marginTop: "2rem" }}>
      <TaskUpdateModal
        modalTask={modalTask}
        setModalTask={setModalTask}
        toggleTask={toggleTask}
      />
      <ListTasksModal
        backlog={backlog}
        setBacklog={setBacklog}
        toggle={toggle}
        modal={modal}
      />
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

            {backlog.map((b, index) => {
              return (
                <Cart
                  backlog={backlog}
                  setBacklog={setBacklog}
                  index={index}
                  key={index}
                  title={b}
                />
              );
            })}

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
            <Button
              style={{
                marginTop: "3rem",
                backgroundColor: "#87CEFA",
                color: "red",
                width: "9rem",
                border: "none",
              }}
              onClick={toggleTask}
            >
              update Task
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
