import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';

import ProblemView from "./Components/ProblemView/ProblemView";
// import Problem from "./Components/Problem/Problem";
import ProblemList from './Components/ProbemList/ProblemList';
import Navbar from './Components/ProblemView/Navbar';
import ProblemLevel from './Components/ProblemLevel/ProblemLevel';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar/>
          <Route path="/" exact component={ProblemLevel}/>
          <Route path="/problem" exact component={ProblemView}/>
          <Route path="/problemlist" exact component={ProblemList}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
