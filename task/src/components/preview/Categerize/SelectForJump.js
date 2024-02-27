import React from "react";

const SelectForJump = (props) => {
  return (
    <div style={{ width: "100%" }} className="wrap-1 ">
      <div className="select_for_jump">{props.no + 1}</div>
    </div>
  );
};

export default SelectForJump;
