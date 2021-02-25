import React from "react";
import Navbar from "./Navbar";
import ViewArea from "./ViewArea";
import "./sass/ProblemView.css";

function ProblemView() {
  const id = 1;
  const uid = 1;
  return (
    <div id="pageDiv">
      <ViewArea id={id} uid={uid} />
    </div>
  );
}

export default ProblemView;
