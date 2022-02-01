import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react"

//Parent
function App() {
  const [age, setAge] = useState(0)
  const handleData = (data)=> {
    setAge(data);
  }
  return (
    <div className="App">
      <p>your name is: {age}</p>
      <First getData={handleData} />
    </div>
  );
}

//Child
function First({getData}) {
  const age = 10;
  getData(age);
  return (
    <div>
      First <p>Your age is: {age}</p>
    </div>
  );
}

function Second({ age }) {
  return (
    <div>
      Second <p>Your age is: {age}</p>
    </div>
  );
}

export default App;
