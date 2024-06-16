import React from "react";
import Greeting from "./Greeting";
import Counter from "./Counter";
import "./App.css";

function App() {
  return (
    <>
      <h1>Mon Compteur</h1>
      <div className="card">
        <Counter />
      </div>
      <Greeting name="Moha" />
      <p className="footer">Copyright 2024</p>
    </>
  );
}

export default App;
