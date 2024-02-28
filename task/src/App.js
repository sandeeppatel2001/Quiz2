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
  const dataToSendinstring = {
    q1: [
      {
        key: 0,
        items: ["Apple", "Grass", "Cherry", "eucalyptus", "Blueberries"],
        cat: ["1.Red", "2.Blue", "3.Green"],
        updatedBelong: ["1", "1", "3", "3", "2"],
      },
    ],
    q2: [
      {
        key: 0,
        forpreview: "I am an ---- . I'm going to ---- you.",
        selectedword: ["Hire", "HR"],
      },
      {
        key: 0,
        forpreview: "I am an ---- . I'm NOT going to ---- you.",
        selectedword: ["Fire", "HR"],
      },
    ],
    q3: {
      question: [
        "Like many other agents that affect neuron firing, adenosine must first bind to specific receptors on neuronal membranes. There are at least two classes of these receptors, which have been designated A1 and A2.Snyder et al propose that caffeine, which is structurally similar to adenosine, is able to bind to both types of receptors, which prevents adenosine from attaching there and allows the neurons to fire more readily than they otherwise would",
        "I would like to make an outrageous suggestion that would at one stroke provide funds for archaeology and reduce the amount of illegal digging. I would propose that scientific archeological expeditions and governmental authorities sell excavated artifacts on the open market. Such sales would provide substantial funds for the excavation and preservation of archaeological sites and the publication of results. At the same time, they would break the illegal excavator’s grip on the market, thereby decreasing the inducement to engage in illegal activities.",
      ],
      options: [
        [
          {
            1: "mixed effects in the brain",
            2: "inhibitory effects on enzymes in the brain",
            3: "close structural relationships with caffeine",
            4: "depressive effects on mouse locomotion",
          },
          { 1: "IBMX", 2: "caffeine", 3: "adenosine", 4: "theophylline" },
        ],
        [
          {
            1: " A market for such artifacts already exists.",
            2: "Such artifacts seldom have scientific value.",
            3: "There is likely to be a continuing supply of such artifacts.",
            4: " Museums are well supplied with examples of such artifacts.",
          },
        ],
      ],
      selectedoptions: [],
      oquestion: [
        [
          "In response to experimental results concerning IBMX, Snyder etal contended that it is not uncommon for psychoactive drugs to have",
          "According to Snyder et al, all of the following compounds can bind to specific receptors in the brain EXCEPT",
        ],
        [
          "The author implies that all of the following statements about duplicate artifacts are true EXCEPT:",
        ],
      ],
    },
  };

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
  const create = () => {
    window.location = "/create";
  };
  console.log("from App.js question", flist.counter3.question);
  console.log("from App.js options", flist.counter3.options);
  console.log("from App.js se;ectedoptions", flist.counter3.selectedoptions);
  console.log("dataToSend = ", dataToSend);
  console.log("dataToSendinstring = ", JSON.stringify(dataToSend));
  return (
    <div className="App mb-3">
      <div>
        <Link to="/">
          <button style={{ marginTop: "3px" }} className="button">
            Home
          </button>
        </Link>
        <Link to="/create">
          <button
            style={{ marginTop: "3px", marginLeft: "3px" }}
            className="button"
          >
            Create Your Quize
          </button>
        </Link>
      </div>

      {/* <div
        onClick={create}
        style={{ marginTop: "3px", cursor: "pointer" }}
        className="button"
      >
        Create Your Quize
      </div> */}
      <Routes>
        <Route
          path="/create"
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
        <Route path="/" element={<Preview data={dataToSendinstring} />} />
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
