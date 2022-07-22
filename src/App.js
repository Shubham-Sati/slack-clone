import React from "react";
import './App.css';

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      <div className="app__body">
          {/* sideBar */}
          <Sidebar />


          {/* React-Router -> chat screen */}
      </div>

    </div>
  );
}

export default App;
