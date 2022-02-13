import React from "react";
import { useState, useRef } from "react";

export const Counter = ({ myRef }) => {
  const [counter, setCounter] = useState(0);
  let myVar = useRef(10);
  return (
    <div ref={myRef}>
      <h1>CounterApp</h1>
      <h3>Counter: {counter}</h3>
      <h3>my var: {myVar.current}</h3>
      <button
        onClick={() => {
          setCounter((p) => p + 1);
        }}
      >
        change state
      </button>
      <button
        onClick={() => {
          myVar.current += 1;
          console.log("myvar", myVar);
        }}
      >
        change var
      </button>
    </div>
  );
};
