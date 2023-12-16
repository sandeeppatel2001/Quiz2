import Option from "./Option";
import { savedataaction3 } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import drag from "../drag.svg";
const Mcq = (props) => {
  console.log("wwwww", props.index + " " + props.name);
  // const data = useSelector((state) => state);
  // const data3 = data.counter.formlist;
  const dispatch = useDispatch();
  // const [selectedOption, setSelectedOption] = useState(null);
  const addin2 = () => {
    dispatch(savedataaction3.addnewquestion2(props.index));
  };
  const oquestionhandler = (e) => {
    dispatch(
      savedataaction3.addoquestion({
        key1: props.index,
        key2: props.name,
        data: e.target.value,
      })
    );
  };
  const handleOptionChange = (optionValue) => {
    // Update the state when a radio button is selected
    // setSelectedOption(optionValue);
    // let t = data3.selected;
    // t[props.index] = optionValue;
    dispatch(
      savedataaction3.addselectedoptions({
        key1: props.index,
        key2: props.name,
        data: optionValue,
      })
    );
  };
  return (
    <div className="position_plus mb-2">
      <div className="ms-4 question__box">
        <div className="question_item mt-2 mb-3 ms-1">
          <div className="ms-1 pb-2">
            <div className="ms-4 mt-4 heading">
              <img src={drag} className="img mb-1 me-1" />
              Question {props.index + 1 + "." + (props.name + 1)}
            </div>
            <div className="ms-4 mt-3 ">
              <div className="ms-3 mb-1">
                <label className="w-75">
                  <input
                    onChange={oquestionhandler}
                    placeholder="Write your Question"
                    className="w-100"
                  ></input>
                </label>
              </div>
              <div className="mb-1">
                <input
                  onChange={() => handleOptionChange(1)}
                  type="radio"
                  name={props.index + " " + props.name}
                  className="me-1"
                />
                <label className="w-75">
                  {
                    <Option
                      key1={props.index}
                      key2={props.name}
                      key3={1}
                    ></Option>
                  }
                </label>
              </div>
              <div className="mb-1">
                <input
                  onChange={() => handleOptionChange(2)}
                  type="radio"
                  name={props.index + " " + props.name}
                  className="me-1"
                />
                <label className="w-75">
                  {
                    <Option
                      key1={props.index}
                      key2={props.name}
                      key3={2}
                    ></Option>
                  }
                </label>
              </div>
              <div className="mb-1">
                <input
                  onChange={() => handleOptionChange(3)}
                  type="radio"
                  name={props.index + " " + props.name}
                  className="me-1"
                />
                <label className="w-75">
                  {
                    <Option
                      key1={props.index}
                      key2={props.name}
                      key3={3}
                    ></Option>
                  }
                </label>
              </div>
              <div className="mb-1">
                <input
                  onChange={() => handleOptionChange(4)}
                  type="radio"
                  name={props.index + " " + props.name}
                  className="me-1"
                />
                <label className="w-75">
                  {
                    <Option
                      key1={props.index}
                      key2={props.name}
                      key3={4}
                    ></Option>
                  }
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center ms-1">
        <div onClick={addin2} className="add_one_more">
          <div className="plus">+</div>
        </div>
      </div>
    </div>
  );
};

export default Mcq;
