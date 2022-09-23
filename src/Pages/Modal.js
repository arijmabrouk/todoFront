import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, Input } from "reactstrap";

const ModalInput = (props) => {
  const { modal, setModal, userStory, setUserStory, setList, list } = props;

  const handleChange = (e) => {
    setUserStory(e.target.value);
  };

  const toggle = () => {
    setList([...list, userStory]);
    console.log(list);
    setModal(false);
  };

  return (
    <Modal size="lg" isOpen={modal} toggle={toggle}>
      <ModalBody>
        <Input
          placeholder="add youd user story"
          onChange={handleChange}
        ></Input>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          submillkkkk
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalInput;
