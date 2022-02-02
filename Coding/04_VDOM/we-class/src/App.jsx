import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react"
import { TodoInput } from "./todoInput";
import { TodoItem } from "./todoItem";
import {v4 as uuid} from "uuid"

//Parent
function App() {
  // //          default function
  // const [age, setAge] = useState(0)
  // function handleData(data) {
  //   setAge(data)
  // }
  const [todos, setTodos] = useState([])
  function importText(text) {
    const handleText = {
      title: text,
      id: uuid(),
      status: false
    }
    setTodos([...todos,handleText])
}
  
  return (
    <div className="App">
      <TodoInput importText={importText}/>
      {todos.map((e)=>{
        return <TodoItem key={e.id} title={e.title} status ={e.status } />
      })}
    </div>
  );
}

// function Child({ageData}) {
//   const age = 6;
//   ageData(age)
//   return <div>
//     <h1>First</h1>
//   </div>
// }

// function Child2({age}) {
//   return <div>
//     <h1>I am the second child my age is { age}</h1>
//   </div>
// }



export default App;
