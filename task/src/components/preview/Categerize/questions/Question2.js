import React from "react";
import Question2Box from "../Question2Box";
import { Question2Sentence } from "../Question2Sentence";

const Question2 = (props) => {
  return (
    <div className="question1 mt-3 mb-3">
      <div className="mb-3">
        <p className="question_heading ms-3 mt-3 mb-0 ps-3">
          FillBlanksQuestion {props.no + 1} (Drag and Drop)
        </p>
        <div>
          <div className="question2__option p-3 ms-3">
            <Question2Box no={props.no} data={props.data.selectedword} />
            {/* <Question2Box data={props.selectedword} /> */}
            <Question2Sentence no={props.no} data={props.data.forpreview} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question2;
