import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { FillSpinner as Loader } from "react-spinners-kit";
import ThemeDropDown from "./ThemeDropDown";
import LanguageDropDown from "./LanguageDropDown";
import InputField from "./InputField";
import OutputField from "./OutputField";
import axios from "axios";
import "./EditorStyle.css";

let info = require("./data.json");

const CodeEditor = (props) => {
  var mapping = { python: "P3", cpp: "CP" };
  var score;

  const [isEditorReady, setIsEditorReady] = useState(false);
  const valueGetter = useRef();

  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("cpp");
  const [input, setInput] = useState("Enter Input");
  const [output, setOutput] = useState("Output will be Displayed Here");

  const handleEditorDidMount = (_valueGetter) => {
    setIsEditorReady(true);
    valueGetter.current = _valueGetter;
  };
  const compileCode = async (data) => {
    console.log(data);
    const response = await axios.post(
      "https://schdserver.herokuapp.com/run/",
      data
    );
    const out = response.data;
    score = out["testCasesPassed"];
    if (!document.getElementById("custominput").checked) {
      document.getElementById("result").innerHTML =
        "Test Cases Passed : " + score;
    }
    if (out["error"] !== "") {
      setOutput("ERROR \n" + out["error"]);
    } else {
      if (out["outputGen"] !== "") {
        setOutput(out["outputGen"]);
      }
    }
    if (document.getElementById("custominput").checked) {
      document.getElementById("inputfield").style.display = "none";
      document.getElementById("outputfield").style.display = "none";
      var x = document.getElementById("inputoutputfield");
      x.style.display = "block";
      x.focus();
      x.scrollIntoView();
    } else {
      document.getElementById("inputoutputfield").style.display = "none";
      document.getElementById("inputfield").style.display = "none";
    }
    setIsEditorReady(true);
  };
  const runCode = () => {
    setIsEditorReady(false);

    if (input !== "Enter Input") {
      const data = {
        userId: 2,
        problemId: info.id,
        code: valueGetter.current(),
        language: mapping[language],
        inputGiven: input,
        status: "R",
        testCasesPassed: 0,
      };
      compileCode(data);
    } else {
      const data = {
        userId: 2,
        problemId: info.id,
        code: valueGetter.current(),
        language: mapping[language],
        inputGiven: "",
        status: "R",
        testCasesPassed: 0,
      };
      compileCode(data);
    }
  };
  const inputProvided = () => {
    const inpVal = document.getElementById("custominput").checked;
    var x = document.getElementById("inputfield");
    if (inpVal) {
      if (document.getElementById("outputfield").style.display === "block") {
        document.getElementById("outputfield").style.display = "none";
        document.getElementById("inputoutputfield").style.display = "block";
      } else if (
        document.getElementById("inputoutputfield").style.display === "block"
      ) {
        document.getElementById("inputoutputfield").style.display = "block";
      } else {
        x.style.display = "block";
        x.focus();
        x.scrollIntoView();
      }
    } else {
      x.style.display = "none";
    }
  };
  return (
    <div>
      <div className="ui grid">
        <div className="eight wide column">
          <LanguageDropDown props={language} dispatch={setLanguage} />
        </div>
        <div className="eight wide column">
          <ThemeDropDown props={theme} dispatch={setTheme} />
        </div>
      </div>
      <br />
      <Editor
        value="Enter Code Here"
        loading={<Loader />}
        height="calc(100vh - 300px)"
        theme={theme}
        language={language}
        editorDidMount={handleEditorDidMount}
      />
      <div className="ui segment">
        <h3 id="result"></h3>
        <div className="ui grid">
          <div className="eight wide column">
            <div className="ui checkbox">
              <input
                type="checkbox"
                onClick={inputProvided}
                id="custominput"
              ></input>
              <label>Custom Input </label>
            </div>
          </div>
          <div
            className="eight wide column"
            style={{ paddingTop: "2%", alignItems: "right" }}
          >
            <button
              className="ui red button"
              onClick={runCode}
              disabled={!isEditorReady}
            >
              {" "}
              Run Code
            </button>
          </div>
        </div>
      </div>
      <div className="column" id="inputfield" style={{ display: "none" }}>
        <InputField val={input} dispatch={setInput} />
      </div>

      <div className="column" id="outputfield" style={{ display: "none" }}>
        <OutputField val={output} dispatch={setOutput} />
      </div>
      <div
        className="ui two column very relaxed grid"
        id="inputoutputfield"
        style={{ display: "none" }}
      >
        <div className="column">
          <InputField val={input} dispatch={setInput} />
        </div>
        <div className="column">
          <OutputField val={output} dispatch={setOutput} />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
