import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(parseInt(localStorage.getItem("COUNTER")) || 0);
  const [counter2, setCounter2] = useState(
    parseInt(localStorage.getItem("COUNTER2")) || 0
  );

  useEffect(() => {
    updateLocalStorage();
  });

  const increaseCounter = (name) => {
    if (name === "counter1") {
      setCounter(counter + 1);
    } else {
      if (counter2 === 9) {
        setCounter2(0);
        setCounter(counter + 1);
        return;
      }
      setCounter2(counter2 + 1);
    }
  };

  const updateLocalStorage = () => {
    localStorage.setItem("COUNTER", parseInt(counter));
    localStorage.setItem("COUNTER2", parseInt(counter2));
  };

  const decreaseCounter = (name) => {
    if (name === "counter1") {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    } else {
      if (counter2 === 0 && counter > 0) {
        setCounter2(9);
        setCounter(counter - 1);
      } else if (counter2 > 0) {
        setCounter2(counter2 - 1);
      }
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className={"solutionContainer"}>
        <div className={"counter"}>
          <span>Counter 1 : {counter}</span>
        </div>
        <div className={"buttonActions"}>
          <button
            onClick={() => increaseCounter("counter1")}
            className={"counterUp"}
          >
            {" "}
            Up{" "}
          </button>
          <button
            onClick={() => decreaseCounter("counter1")}
            className={"counterDown"}
          >
            {" "}
            Down{" "}
          </button>
        </div>

        <div className={"counter"}>
          <span>Counter 2 : {counter2}</span>
        </div>
        <div className={"buttonActions"}>
          <button
            onClick={() => increaseCounter("counter2")}
            className={"counterUp"}
          >
            {" "}
            Up{" "}
          </button>
          <button
            onClick={() => decreaseCounter("counter2")}
            className={"counterDown"}
          >
            {" "}
            Down{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
