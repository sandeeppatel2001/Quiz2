import { useState } from "react";
import { useDispatch } from "react-redux";
import { savedataaction3 } from "../../store";
const Option = (props) => {
  const dispatch = useDispatch();
  const inputhandle = (e) => {
    dispatch(
      savedataaction3.addoption({
        key1: props.key1,
        key2: props.key2,
        key3: props.key3,
        data: e.target.value,
      })
    );
  };
  return (
    <div>
      <div className="option">
        <div>
          <input
            onChange={inputhandle}
            placeholder="Type Your Options Here"
            style={{ width: "100%" }}
          ></input>
        </div>
      </div>
    </div>
  );
};
export default Option;
