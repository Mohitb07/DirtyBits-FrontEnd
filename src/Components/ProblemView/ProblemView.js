import React from "react";
import ViewArea from "./ViewArea";
import "./sass/ProblemView.css";

function ProblemView(props) {
  const questionId = props.location.questionId ? props.location.questionId:props.history.push('/')
  const id = questionId;
  const uid = 1;
  return (
    <div id="pageDiv">
      <ViewArea id={id} uid={uid} />
    </div>
  );
}

export default ProblemView;
