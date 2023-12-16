import { useDispatch } from "react-redux";
import { presave3 } from "../../../../store";
const Foptions = (props) => {
  //   char one = "1";
  const dispatch = useDispatch();
  const handleOptionChange = (optionValue) => {
    // Update the state when a radio button is selected
    // setSelectedOption(optionValue);
    // let t = data3.selected;
    // t[props.index] = optionValue;

    dispatch(
      presave3.addselectedoptions({
        key1: props.no1,
        key2: props.no2,
        data: optionValue,
      })
    );
  };
  console.log("fffff", props.data["1"]);
  return (
    <div className="passege_option mb-2">
      <div className="question__item mt-2 mb-3">
        <div className="heading ps-3 w-100">
          Question {props.no1 + 1 + "." + (props.no2 + 1)}
        </div>
        <div className="bar mt-2"></div>
        <div className="ms-4 ps-3 mt-3 w-100">
          <h6>{props.q}</h6>
          <div className="mb-1">
            <input
              type="radio"
              onChange={() => handleOptionChange(1)}
              name={props.no1 + " " + props.no2}
              className="me-1"
            />
            <label>{props.data["1"]}</label>
          </div>
          <div className="mb-1">
            <input
              type="radio"
              onChange={() => handleOptionChange(2)}
              name={props.no1 + " " + props.no2}
              className="me-1"
            />
            <label>{props.data["2"]}</label>
          </div>
          <div className="mb-1">
            <input
              type="radio"
              onChange={() => handleOptionChange(3)}
              name={props.no1 + " " + props.no2}
              className="me-1"
            />
            <label>{props.data["3"]}</label>
          </div>
          <div className="mb-1">
            <input
              type="radio"
              onChange={() => handleOptionChange(4)}
              name={props.no1 + " " + props.no2}
              className="me-1"
            />
            <label>{props.data["4"]}</label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Foptions;
