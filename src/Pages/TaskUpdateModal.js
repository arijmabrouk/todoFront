import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  Label,
  ModalHeader,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";
function TaskUpdateModal(props) {
  const { modalTask, setModalTask, toggleTask, title, setTitle } = props;

  // const handleChange = (e) => {
  //   setUserStory(e.target.value);
  // };

  const handleChange = async (e) => {
    const temp = e.target.value;
    setTitle(temp);
  };

  const handleSubmit = async () => {
    try {
      await axios.patch("http://localhost:5000/api/v1/sprints/modifier", {
        title: title,
      });
      setTitle(title);
    } catch (error) {
      console.log(error.response.data.message);
    }
    setModalTask(false);
  };

  return (
    <Modal size="lg" isOpen={modalTask} toggle={toggleTask}>
      <ModalHeader toggle={toggleTask}>
        <h4
          style={{
            fontFamily: "sansSerif",
            color: "#2E8B57",
            fontSize: "1.5rem",
          }}
        >
          Update your task :
        </h4>
      </ModalHeader>
      <ModalBody>
        <Form>
          <Row>
            <Col xs="12" lg="4">
              <Label for="name">Name task :</Label>
            </Col>
            <Col xs="12" lg="8">
              <Input
                name="email"
                id="name"
                placeholder=""
                defaultValue={title}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Row style={{ paddingBlock: "1rem" }}>
            <Col xs="12" lg="4">
              <Label for="description">Description :</Label>
            </Col>
            <Col xs="12" lg="8">
              <Input
                type="textarea"
                name="email"
                id="description"
                placeholder=""
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="4">
              <Label for="dateCreation">Date Creation :</Label>
            </Col>
            <Col xs="12" lg="8">
              <Input
                type="date"
                name="email"
                id="dateCreation"
                placeholder=""
              />
            </Col>
          </Row>
          {/* <Input
        placeholder="add youd user story"
        onChange={handleChange}
      ></Input> */}
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={handleSubmit}>
          Update
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default TaskUpdateModal;
