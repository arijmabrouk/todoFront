import React from "react";
import { Button, Modal, ModalBody, ModalFooter, Input } from "reactstrap";
import GlobalContext from "../contexts/GlobalContext";

const ListTasksModal = () => {
  const { list, setList } = React.useContext(GlobalContext);
  return (
    <Modal size="lg" isOpen={modal} toggle={toggle}>
      <ModalBody></ModalBody>
    </Modal>
  );
};

export default ListTasksModal;
