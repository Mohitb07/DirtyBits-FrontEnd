import React from "react";
import "./ProblemArea.css";

let data = require("./data.json");

function ProblemArea() {
  return (
    <div>
      <h1 className="problemTitle">{data.title}</h1>
      <br></br>
      <p className="problemStatement">{data.Statement}</p>
      <br></br>
      <h3 className="TestCaseHeading">Sample Test Cases</h3>
      <div className="ui segment" id="testCases">
        <div className="ui two column very relaxed grid">
          <div className="column" id="testCasesColumn">
            <h3>Input</h3>
            <pre>{data.input1}</pre>
          </div>
          <div className="column" id="testCasesColumn">
            <h3>Output</h3>
            <pre>{data.output1}</pre>
          </div>
        </div>
        <div className="ui vertical divider"></div>
      </div>
      <p>Time Limit : {data["Time Limit"]}</p>
      <p>Memory Limit: {data["Memory Limit"]}</p>
    </div>
  );
}

export default ProblemArea;
