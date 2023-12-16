import React from "react";
import Foptions from "./Foption";
const Question3 = (props) => {
  return (
    <div className="question1 mt-3 mb-3">
      <div className="mb-3">
        <p className="question_heading ms-3 mt-3 mb-0 ps-3">
          Comprehensive Question {props.no + 1}
        </p>
        <div>
          <div className="question3__option p-3 ms-3 me-3">
            <h5>Passege Heading</h5>
            <div className="passege__content">
              <p>{props.question}</p>
            </div>
            {props.options.map((v, i) => {
              return (
                <Foptions
                  no1={props.no}
                  no2={i}
                  q={props.q[i]}
                  data={v}
                ></Foptions>
              );
            })}
            {/* <Foptions></Foptions> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question3;
