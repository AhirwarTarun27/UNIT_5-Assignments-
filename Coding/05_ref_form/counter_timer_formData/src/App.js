import "./styles.css";
import React from "react";
import { ScrollTop } from "./components/Scroll_top";
import { Counter } from "./components/Counter";
import { Timer } from "./components/Timer";
import { useRef } from "react";
import { Form } from "./components/Form";

export default function App() {
  const myRef = useRef();
  return (
    <div className="App">
      <Counter myRef={myRef} />
      <Timer />
      <Form />
      <ScrollTop myRef={myRef} />
    </div>
  );
}
