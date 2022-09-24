import React from "react";

const Cart = (props) => {
  const { title, index, backlog, setBacklog } = props;

  const dragItem = React.useRef(null);
  const dragOverItem = React.useRef(null);

  const handleSort = () => {
    let backlogList = [...backlog];
    const draggedItemContent = backlogList.splice(dragItem.current, 1)[0];
    backlogList.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setBacklog(backlogList);
  };
  return (
    <div
      onDragStart={(e) => (dragItem.current = index)}
      onDragEnter={(e) => (dragOverItem.current = index)}
      onDragEnd={handleSort}
      onDragOver={(e) => e.preventDefault()}
      draggable
      style={{
        backgroundColor: "#FADADD",
        marginBlock: "1rem",
        borderRadius: "1rem",
        textAlign: "center",
        width: "10rem",
        cursor: "move",
      }}
    >
      <h5>{title}</h5>
      <h6>desciption</h6>
      <h7>date</h7>
    </div>
  );
};

export default Cart;
