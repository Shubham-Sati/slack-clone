import React from "react";
import './App.css';
import Chat from "./Components/Chat";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
          {/* Header */}
          <Header />

          <div className="app__body">
              {/* sideBar */}
              <Sidebar />

              {/* React-Router -> chat screen */}
              {/* switch is used to switch between screens */}
              <Switch> 
                <Route path="/room/:roomId">
                  {/* <h3>Chat Screen</h3> */}
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>

          </div>

      </Router>

    </div>
  );
}

export default App;
