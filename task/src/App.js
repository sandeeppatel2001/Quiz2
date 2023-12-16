import "./App.css";
import Categorize from "./components/Categories";
import Comprehension from "./components/Comprehension";
import FillBlanks from "./components/FillBlanks";
import { useSelector } from "react-redux";

import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Preview from "./components/preview/Preview";
import { Link } from "react-router-dom";
import SubmitPage from "./SubmitPage";
function App() {
  const flist = useSelector((state) => state);
  const data1 = flist.counter.count;
  const data2 = flist.counter2.count;
  const data3 = flist.counter3.count1;
  console.log("sandeep", flist.counter3.oquestion);
  let dataToSend = {
    q1: flist.counter.formlist,
    q2: flist.counter2.formlist,
    q3: {
      question: flist.counter3.question,
      options: flist.counter3.options,
      selectedoptions: flist.counter3.selectedoptions,
      oquestion: flist.counter3.oquestion,
    },
  };
  const sendDataToBackend = async () => {
    try {
      const response = await fetch("https://quizbackend.adaptable.app/", {
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
  console.log("from App.js question", flist.counter3.question);
  console.log("from App.js options", flist.counter3.options);
  console.log("from App.js se;ectedoptions", flist.counter3.selectedoptions);

  return (
    <div className="App mb-3">
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Fragment>
              {data1.map((v, i) => {
                return <Categorize name="sandeep" no={i} />;
              })}
              {data2.map((v, i) => {
                return <FillBlanks no={i} />;
              })}
              {data3.map((v, i) => {
                return <Comprehension no={i} />;
              })}
              {/* <button onClick={sendDataToBackend}>Preview</button> */}
              <Link onClick={sendDataToBackend} to="/preview">
                <button className="button">Preview</button>
              </Link>
            </Fragment>
          }
        ></Route>

        <Route path="/preview" element={<Preview data={dataToSend} />} />
        <Route path="/submite" element={<SubmitPage />} />
      </Routes>
      {/* <Categorize /> */}
      {/* <FillBlanks /> */}
      {/* <Comprehension /> */}
    </div>
  );
}

export default App;
