import React from "react";
import PreCategorize from "../PreCategorize";

const Quesstion1 = (props) => {
  return (
    <div className="question1 mt-3 mb-3">
      <p className="question_heading m-3 ps-3">
        CategorizeQuestion {props.no + 1}
      </p>
      <div>
        <PreCategorize no={props.no} data={props.data} />
      </div>
    </div>
  );
};

export default Quesstion1;
