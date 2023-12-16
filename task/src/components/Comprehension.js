import React, { useState } from "react";
import "../styles/Categories.css";
import drag from "./drag.svg";
import Mcq from "./smallComp/Mcq";
import { useDispatch, useSelector } from "react-redux";
import { savedataaction3 } from "../store";
const Comprehension = (props) => {
  const [question, setQuestion] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const data3 = data.counter3.count2;

  const addnewform = () => {
    dispatch(savedataaction3.addnewquestion());
  };
  const Comprehensivetext = (e) => {
    setQuestion(e.target.value);
    dispatch(
      savedataaction3.addquestion({
        key: props.no,
        q: e.target.value,
      })
    );
  };
  return (
    <div className="position_plus">
      <div className="category__box mt-5 mb-5 ms-1">
        <div className="ms-1 mb-5">
          <div className="ms-4 mt-4 question">
            <img src={drag} className="img mb-1 me-1" />
            Comprehensive Question {props.no + 1}
          </div>
          <div className="ms-4 mt-3 mb-5">
            <textarea
              style={{ width: "70%", height: "150px", padding: "20px" }}
              type="text"
              name="name"
              className="category__text"
              onChange={Comprehensivetext}
            />
          </div>

          {data3[props.no].map((v, i) => {
            return <Mcq name={i} index={props.no} />;
          })}

          {/* <button onClick={addnewform}>+</button> */}
        </div>
      </div>
      <div className="d-flex align-items-center ms-1">
        <div onClick={addnewform} className="add_one_more">
          <div className="plus">+</div>
        </div>
      </div>
    </div>
  );
};

export default Comprehension;
