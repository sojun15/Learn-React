import { useState } from "react";
import "./App.css";
import Button from "./Button";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let collection = [
    1,
    2,
    3,
    "+",
    4,
    5,
    6,
    "-",
    7,
    8,
    9,
    "*",
    0,
    ".",
    "=",
    "AC",
  ];

  return (
    <div className="container">
      <div className="sub-container">
        <input type="text" />
        <div>
          <Button element={collection} />
        </div>
      </div>
    </div>
  );
}

export default App;
