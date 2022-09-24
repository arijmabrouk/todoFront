import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Accordion from "react-bootstrap/Accordion";
import { Button, Table, Col, Row, Container } from "reactstrap";
import Cart from "./Cart";
import ListTasksModal from "./ListTasksModal";
import TaskUpdateModal from "./TaskUpdateModal";

const Sprint = () => {
  const [modal, setModal] = useState(false);

  const [backlog, setBacklog] = useState([]);
  const [ToDo, setTodo] = useState([]);
  const [started, setStarted] = useState(false);
  const [sprint, setSprint] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <Container>
      <div style={{ marginTop: "2rem" }}>
        <ListTasksModal
          backlog={backlog}
          setBacklog={setBacklog}
          toggle={toggle}
          modal={modal}
          setModal={setModal}
        />
        <div style={{ display: "flex", justifyContent: "end" }}>
          <div>
            <Button
              style={{
                backgroundColor: "white",
                color: "grey",
                border: "none",
              }}
              onClick={() => setStarted(true)}
            >
              Start sprint
            </Button>
            <Button
              disabled={!started}
              style={{
                backgroundColor: "white",
                color: "grey",
                border: "none",
              }}
              onClick={() => {
                setStarted(false);
                setSprint(true);
              }}
            >
              End sprint
            </Button>
          </div>
        </div>

        {started && (
          <Table>
            <Row>
              <Col xs="12" lg="2">
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
                      title={b.title}
                    />
                  );
                })}

                <Button
                  style={{
                    marginTop: "3rem",
                    backgroundColor: "#87CEFA",
                    color: "white",
                    width: "3rem",
                    borderRadius: "50%",
                    border: "none",
                  }}
                  onClick={toggle}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              </Col>
              <Col xs="12" lg="2">
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
              <Col xs="12" lg="2">
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
              <Col xs="12" lg="2">
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
              <Col xs="12" lg="2">
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
        )}
        {/* {sprint && (
          <Table>
            <h3
              style={{
                textAlign: "center",
                color: "grey",
                marginBlock: "2rem",
              }}
            >
              Sprint 2{" "}
            </h3>
            <Row style={{ marginInline: "4rem" }}>
              <Col xs="12" lg="2">
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
                      title={b.title}
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
        )} */}
      </div>
    </Container>
  );
};

export default Sprint;
