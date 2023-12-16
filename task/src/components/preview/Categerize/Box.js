import React from "react";
import "../Preview.css";
import { useDispatch } from "react-redux";
import { presave } from "../../../store";
import { useState } from "react";
const Box = (props) => {
  const [droppedWords, setDroppedWords] = useState([]);

  const dispatch = useDispatch();
  // const prelist = useSelector((state) => state);
  // const data1 = prelist.counter.count
  function handleDrop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    draggedElement.style.display = "flex";
    draggedElement.style.textAlign = "center";
    draggedElement.style.justifyContent = "center";
    draggedElement.style.alignItems = "center";
    ev.target.appendChild(draggedElement);
    console.log("kk", draggedElement.textContent);
    setDroppedWords([...droppedWords, draggedElement.textContent]);
    dispatch(
      presave.addselected({
        key1: props.no1,
        key2: props.no2,
        data: [...droppedWords, draggedElement.textContent],
      })
    );
  }

  function handleDragOver(ev) {
    ev.preventDefault();
  }

  return (
    <div
      key={props.no}
      className="boxandname"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="boxname">{props.data}</div>
      <div className="box"></div>
    </div>
  );
};

export default Box;
