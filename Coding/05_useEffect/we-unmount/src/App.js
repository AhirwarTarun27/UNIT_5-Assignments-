import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Counter } from "./Counter";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {show ? <Counter /> : null}

      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"}
        Counter
      </button>
    </div>
  );
}

export default App;
