import React from "react";

const Question2Box = (props) => {
  function dragover(ev) {
    console.log("dragover");
    ev.preventDefault();
  }
  // console.log("ddddddd", props.data.items);
  function drag(ev) {
    console.log("drag start");
    ev.dataTransfer.setData("text", ev.target.id);
  }
  return (
    <div style={{ display: "flex" }}>
      {props.data.map((v, i) => {
        return (
          <div
            draggable={true}
            onDragStart={drag}
            id={props.no + "s" + i}
            className="question2__box  ms-1"
          >
            {v}
          </div>
        );
      })}
    </div>
  );
};

export default Question2Box;
