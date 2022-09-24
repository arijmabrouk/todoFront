import React, { useState } from "react";

import { Button, Col, Form, Input, Label, Row } from "reactstrap";
import Accordion from "react-bootstrap/Accordion";
import ModalInput from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../contexts/GlobalContext";

const Backlog = () => {
  const [modal, setModal] = React.useState(false);
  const [userStory, setUserStory] = useState([]);
  const { list, setList } = React.useContext(GlobalContext);

  const toggle = () => {
    setModal(!modal);
  };

  const dragItem = React.useRef(null);
  const dragOverItem = React.useRef(null);

  const handleSort = () => {
    let storyList = [...list];
    const draggedItemContent = storyList.splice(dragItem.current, 1)[0];
    storyList.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(storyList);
  };

  //   const onDragStart = (e: React.DragEvent<HTMLDivElement>, index: Number) => {
  //     console.log("drag started", index);
  //   };
  //   const onDragEnter = (e: React.DragEvent<HTMLDivElement>, index: Number) => {
  //     console.log("drag enter", index);
  //   };
  //   const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
  //     console.log("drag end");
  //   };

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

              <div
                style={{
                  backgroundColor: "#EA4949",
                  border: "none",
                  borderRadius: "0.7rem",
                  width: "4.3rem",
                  height: "2rem",
                  color: "white",
                  textAlign: "center",
                  paddingTop: "0.2rem",
                }}
                onClick={toggle}
              >
                Add US
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              {list.map((l, index) => {
                return (
                  <li
                    onDragStart={(e) => (dragItem.current = index)}
                    onDragEnter={(e) => (dragOverItem.current = index)}
                    onDragEnd={handleSort}
                    onDragOver={(e) => e.preventDefault()}
                    draggable
                    key={index}
                    style={{
                      cursor: "move",
                      listStyle: "none",
                      height: "2rem",
                      backgroundColor: "lightgray",
                      marginTop: "1rem",
                    }}
                  >
                    <FontAwesomeIcon
                      style={{ marginRight: "1rem" }}
                      icon={faList}
                    />{" "}
                    {l}{" "}
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
