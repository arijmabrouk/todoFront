import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, Input } from "reactstrap";
import GlobalContext from "../contexts/GlobalContext";

const ListTasksModal = (props) => {
  const { list, setList } = React.useContext(GlobalContext);
  const { modal, toggle, backlog, setBacklog } = props;

  return (
    <Modal size="lg" isOpen={modal} toggle={toggle}>
      <ModalBody>
        <ul>
          {list.map((l, index) => {
            return (
              <li
                onClick={() => {
                  setBacklog([...backlog, l]);
                }}
                key={index}
                style={{
                  cursor: "move",
                  listStyle: "none",
                  height: "2rem",
                  backgroundColor: "lightgray",
                  marginTop: "1rem",
                }}
              >
                {l}{" "}
              </li>
            );
          })}
        </ul>
      </ModalBody>
    </Modal>
  );
};

export default ListTasksModal;
