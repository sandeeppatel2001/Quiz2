import React from "react";
import PreCategorize from "../PreCategorize";

const Quesstion1 = (props) => {
  return (
    <div style={{ width: "100%" }} className="question1 mt-3 mb-3">
      <p style={{ width: "100%" }} className="question_heading m-3 ps-3">
        Categorize {props.no + 1}
      </p>
      <div>
        <PreCategorize no={props.no} data={props.data} />
      </div>
    </div>
  );
};

export default Quesstion1;
