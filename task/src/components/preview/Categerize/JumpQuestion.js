import React from "react";
import SelectForJump from "./SelectForJump";

const JumpQuestion = (props) => {
  return (
    <div className="passege_option mt-3 ">
      <div className="question__item mt-3 mb-3 ms-2">
        <div className="question ps-3 w-100">Questions</div>
        <div className="ps-3 pe-3 mt-3 mb-3 w-100">
          {/* <div>Answered: 2</div>
          <div>Unanswered:1</div> */}
          <div>Total Question: {props.total}</div>
          {/* <div className="all_Question_Jump mt-3">
            <SelectForJump /> 
          </div> */}
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="all_Question_Jump  mt-3"
          >
            {Array.from({ length: props.total }, (_, index) => (
              <SelectForJump no={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumpQuestion;
