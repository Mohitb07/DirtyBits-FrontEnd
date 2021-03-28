import React from "react";
import {Route} from 'react-router-dom';
import {Router} from 'react-router';

import ProblemView from "./Components/ProblemView/ProblemView";
import ProblemList from './Components/ProbemList/ProblemList';
import Navbar from './Components/ProblemView/Navbar';
import ProblemLevel from './Components/ProblemLevel/ProblemLevel';
import settings from './settings';
import logout from './logout';
import history from './history';
import { useAuth0 } from '@auth0/auth0-react'



function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <Router history={history} >
        <div style={{overflowX:'hidden'}}>
          <Navbar/>
          <Route path="/logout" component={logout}/>
          <Route path="/" exact component={ProblemLevel}/>
          <Route path="/problem" exact component={ProblemView}/>
          <Route path="/problemlist" exact render={
            (props) => (<ProblemList {...props} auth={isAuthenticated}/>)
          }/>
          <Route path="/settings" exact component={settings}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
