import React from "react";
import "../styles/App.css";
import srlogo from "../images/srlogo-white.png";

function App() {
  return (
    <div className="App">
      <img src={srlogo} alt="Surreal Estate logo" className="srlogo" />
      <h2>Surreal Estate</h2>
      <h3>...Your #1 estate agent!</h3>
    </div>
  );
}

export default App;
