import React, { useState, useRef } from "react";
import "../styles/Categories.css";
import drag from "./drag.svg";
import { useDispatch } from "react-redux";
import { savedataaction2 } from "../store";
import Fillinput from "./Fillinput";
const FillBlanks = (props) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [selectedword, setSelectedword] = useState([]);
  const [wholetext, setWholetext] = useState([]);
  const inputRef = useRef(null);
  const addnewform = () => {
    dispatch(savedataaction2.addnewquestion());
  };
  const gettext = (e) => {
    const text = e.target.value;
    setText(text);
  };
  const changeSelectedText = (newText) => {
    if (inputRef.current) {
      const start = inputRef.current.selectionStart;
      const end = inputRef.current.selectionEnd;

      // Replace the selected text with the new text
      const inputValue = inputRef.current.value;
      let selectvalue = inputValue.substring(start, end);
      if (selectvalue.trim().length <= 0) return;
      setSelectedword([...selectedword, selectvalue]);
      console.log("old value", selectvalue);
      // setWholetext([...wholetext, selectvalue]);
      // const newInput = document.createElement("input");
      // newInput.className = "select";
      // newInput.type = "text";
      // newInput.value = selectvalue; // You can set a default value if needed
      // //   newInput.id = "select";
      // const checkbox = document.createElement("input");

      // checkbox.className = "me-1";
      // checkbox.type = "checkbox";
      // checkbox.checked = true;
      // const div = document.createElement("div");
      // div.append(checkbox);
      // div.append(newInput);
      // document.getElementById("sel").append(div);
      let dot = " ";
      for (let i = 0; i < selectvalue.length; i++) {
        dot = dot + "-";
      }
      dot += " ";

      const forpreview = text.substring(0, start) + dot + text.substring(end);
      console.log(forpreview);
      dispatch(
        savedataaction2.adddata({
          key: props.no,
          forpreview,
          selectedword: [...selectedword, selectvalue],
        })
      );
      setText(forpreview);
      inputRef.current.value =
        inputRef.current.value.slice(0, start) +
        selectvalue.toUpperCase() +
        inputRef.current.value.slice(end);
      // Optionally, you can set the cursor position after the changed text
      const newCursorPos = start + newText.length;
      inputRef.current.setSelectionRange(newCursorPos, newCursorPos);
    }
  };

  return (
    <div className="position_plus">
      <div className="category__box mt-5 mb-5">
        <div className="ms-1 mb-5">
          <div className="ms-4 mt-4 question">
            <img src={drag} className="img mb-1 me-1" />
            FillInBlanksQuestion {props.no + 1}
          </div>
          <div className="ms-4 mt-3">
            <div className="mt-3 heading">Preview</div>
            <input
              value={text}
              type="text"
              placeholder="Preview"
              className="w-50 category__text"
            />
          </div>
          <div className="ms-4 mt-3 heading">
            <div className="mt-3">Sentence</div>
            <input
              ref={inputRef}
              id="sandeep"
              onMouseUp={() => changeSelectedText("NewText")}
              onChange={gettext}
              type="text"
              placeholder="Underline the word here to convert them into blanks"
              className="w-50 category__text"
            />
          </div>

          <div className="ms-4 mt-3">
            {/* <input type="checkbox" className="me-1"></input>
          <input className="select" type="text"></input> */}

            <div id="sel" style={{ display: "flex", flexDirection: "column" }}>
              {/* <div>
              <input type="checkbox" className="me-1"></input>
              <input className="select" type="text"></input>
            </div> */}
              {selectedword.map((v, i) => {
                return <Fillinput value={v}></Fillinput>;
              })}
            </div>
            <div className="ms-4">
              <select className="select">
                <option value="option1">
                  {"Option " + (wholetext.length + 1)}
                </option>
              </select>
            </div>
          </div>
        </div>
        {/* <button onClick={addnewform}>+</button> */}
      </div>
      <div className="d-flex align-items-center ms-1">
        <div onClick={addnewform} className="add_one_more">
          <div className="plus">+</div>
        </div>
      </div>
    </div>
  );
};

export default FillBlanks;
