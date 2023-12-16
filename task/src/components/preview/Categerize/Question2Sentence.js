import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { presave2 } from "../../../store";
export const Question2Sentence = (props) => {
  const [filldata, setFilldata] = useState([]);
  const dispatch = useDispatch();
  // function handleDrop(ev) {
  //   ev.preventDefault();
  //   const data = ev.dataTransfer.getData("text");
  //   const draggedElement = document.getElementById(data);
  //   // Append the dragged element to the box
  //   ev.target.appendChild(draggedElement);
  // }
  function handleDrop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);

    // Check if the draggedElement exists and is a valid node
    if (draggedElement && draggedElement.nodeType === 1) {
      // Remove all child nodes from the drop target
      while (ev.target.firstChild) {
        ev.target.removeChild(ev.target.firstChild);
      }

      // Create a new element with the content of the dragged element
      const newElement = document.createElement("div");
      newElement.textContent = draggedElement.textContent;

      // Append the new element to the b
      ev.target.appendChild(newElement);
      setFilldata([...filldata, draggedElement.textContent]);
      console.log("ssssssssssss");
      dispatch(
        presave2.addfill({
          key1: props.no,
          data: [...filldata, draggedElement.textContent],
        })
      );
    }
  }

  function handleDragOver(ev) {
    ev.preventDefault();
  }

  return (
    //  <div className="mt-5">{props.data}</div>;
    <div style={{ display: "flex" }} className="mt-5">
      {props.data.split(" ").map((v, i) => {
        if (v[0])
          if (v[0] === "-") {
            return (
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                style={{
                  // backgroundColor: "white",
                  // border: "1px solid black",
                  color: "white",
                  width: "17%",
                }}
                className="question2__box  me-1 ms-1"
              ></div>
            );
          }
        return v + " ";
      })}
      {/* <div
        style={{ backgroundColor: "white", border: "1px solid black" }}
        className="question2__box"
      ></div> */}
    </div>
  );
};
