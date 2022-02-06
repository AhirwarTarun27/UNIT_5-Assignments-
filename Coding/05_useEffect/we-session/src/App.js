import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Todos } from "./components/Todos";

//lifecycle:- it consist of mounting.. updating... and unmounting and component posibily so through this process

//mounting:- like attacthing counter component to ui

//updating:- whenever the data is changing

//unmounting:- removing from the ui

//useEffect can go through all the above phases

function App() {
  // //componect function cannot be async
  // const [data, setData] = useState([]);
  // const [age, setAge] = useState([]);

  // useEffect(() => {
  //   //mounting
  //   console.log("age");
  //   //network request should be here
  //   // fetch("http://localhost:3001/users")
  //   //   .then((d) => d.json())
  //   //   .then((res) => {
  //   //     // console.log("response: ", res);
  //   //     setData(res);
  //   //   });
  //   //dependencies array
  // }, [age]);

  // useEffect(() => {
  //   console.log("counter")
  // },[data])

  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
