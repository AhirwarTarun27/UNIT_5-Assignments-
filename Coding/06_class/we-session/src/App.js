import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Thead } from "./thead";

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      {/* <Button> Click here</Button>
      <br />
      <button
        onClick={() => {
          setTheme(theme == "light" ? "dark" : "light");
        }}
      >
        change Theme
      </button> */}
      <Thead list={list} setList={setList} />
      {console.log(list)}
    </div>
  );
}

export default App;
