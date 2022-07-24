import React from "react";
import './App.css';
import Chat from "./Components/Chat";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import { useStateValue } from "./StateProvider";


function App() {
  const [{ user } , dispatch ] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? ( 
            <Login />
        ) : (
          <>
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
                    {/* <Chat /> */}
                  </Route>
                </Switch>
            </div>
          </>
        )}
      </Router>

    </div>
  );
}

export default App;
