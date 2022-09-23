import React, { useState } from "react";

import { Button, Col, Form, Input, Label, Row } from "reactstrap";
import Accordion from "react-bootstrap/Accordion";
import ModalInput from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Backlog = () => {
  const [modal, setModal] = React.useState(false);
  const [userStory, setUserStory] = useState([]);
  const [list, setList] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div>
      <ModalInput
        list={list}
        setList={setList}
        modal={modal}
        setModal={setModal}
        userStory={userStory}
        setUserStory={setUserStory}
      />
      <Accordion
        defaultActiveKey="1"
        style={{
          marginBottom: 15,

          marginTop: "5rem",
          marginInline: "3rem",
        }}
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div>
                <h5> Backlog P.O </h5>
              </div>

              <Button
                style={{
                  backgroundColor: "#EA4949",
                  border: "none",
                }}
                onClick={toggle}
              >
                Add US
              </Button>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              {list.map((l, index) => {
                return (
                  <li
                    key={index}
                    style={{
                      listStyle: "none",
                      height: "2rem",
                      backgroundColor: "lightgray",
                      marginTop: "1rem",
                    }}
                  >
                    {l}{" "}
                    <Button>
                      <FontAwesomeIcon
                        style={{ color: "red" }}
                        icon="fa-solid fa-trash"
                      />
                    </Button>
                  </li>
                );
              })}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Backlog;
