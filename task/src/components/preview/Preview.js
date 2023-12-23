import React from "react";
import "./Preview.css";
import { Link } from "react-router-dom";
import Quesstion1 from "./Categerize/questions/Quesstion1";
import Question2 from "./Categerize/questions/Question2";
import Question3 from "./Categerize/questions/Question3";
import Filter from "./Categerize/Filter";
import JumpQuestion from "./Categerize/JumpQuestion";
import { useSelector } from "react-redux";
import Clock from "./Clock";
const Preview = (props) => {
  const flist = useSelector((state) => state);
  const data1 = flist.counter.count.length;
  const data2 = flist.counter2.count.length;
  // const data3 = flist.counter3.count1.length;

  let total = data1 + data2;
  flist.counter3.count2.forEach((element) => {
    total += element.length;
  });
  let dataToSend = {
    q1: flist.precounter1.catsubmite,
    q2: flist.precounter2.fillsubmite,
    q3: flist.precounter3.selectedoptions,
  };
  console.log("sandeeppppppppp", total, dataToSend);
  const sendDataToBackend = async () => {
    try {
      const response = await fetch("https://quizbackend.adaptable.app/answer", {
        method: "POST",
        body: JSON.stringify(dataToSend),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Data sent successfully!");
      } else {
        console.error("Failed to send data to the backend.");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="preview__container">
      <Clock />

      <div className="preview__box mt-4">
        <div className="preview__heading question w-100">Untitled Quiz</div>
        <div className="progress__bar"></div>
        <div className="question__container">
          <div className="questions mt-3 scrollable-questions">
            {props.data.q1.map((v, i) => {
              return (
                <Quesstion1 data={props.data.q1[i]} no={i} key={i}></Quesstion1>
              );
            })}
            {props.data.q2.map((v, i) => {
              return <Question2 data={props.data.q2[i]} no={i} key={i} />;
            })}
            {props.data.q3.question.map((v, i) => {
              return (
                <Question3
                  no={i}
                  question={v}
                  q={props.data.q3.oquestion[i]}
                  options={props.data.q3.options[i]}
                />
              );
            })}
            {/* <Question3 data={props.data.q3[i]} /> map function for all question3 */}
          </div>
          <div className="side_bar">
            <Filter />
            <JumpQuestion total={total} />
          </div>
        </div>
      </div>

      <Link to="/submite">
        <button onClick={sendDataToBackend} className="button">
          Submit
        </button>
      </Link>
    </div>
  );
};

export default Preview;
