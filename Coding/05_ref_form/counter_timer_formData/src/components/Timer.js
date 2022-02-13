import React from "react";
import { useState, useRef, useEffect } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(0);

  let currentTime = useRef();
  useEffect(() => {
    startTimer();
  }, []);

  const startTimer = () => {
    currentTime.current = setInterval(() => {
      setTimer((p) => p + 1);
    }, 1000);
  };

  return (
    <div>
      <hr />
      <h1
        style={{
          marginTop: "10%"
        }}
      >
        Timer App
      </h1>
      <h3>Timer: {timer}</h3>
      <button
        onClick={() => {
          clearInterval(currentTime.current);
        }}
      >
        stop
      </button>
      <button onClick={() => startTimer()}>start</button>
      <button onClick={() => setTimer(0)}>Reset</button>
    </div>
  );
};
