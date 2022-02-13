import { useState } from 'react';
import './App.css';
import { Ginput } from "./GroceryInput"
import { v4 as uuid} from "uuid"
import { Glist } from './GroceryList';

function App() {

  const [inputItm, setInputItm] = useState("");
  const [list, setList] = useState([])

  return (
    <div className="App">
      <div id="container">
        <div className="heading">
          <h1>Grocery List Mangement App</h1>
        </div><hr />
        <Ginput inputItm={inputItm} setInputItm={setInputItm} list={list} setList={setList} />
        <Glist list={list} setList={setList} key={ uuid()}/>
      </div>
    </div>
  );
}


export default App;
