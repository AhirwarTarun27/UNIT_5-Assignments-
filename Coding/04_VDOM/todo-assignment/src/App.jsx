import logo from './logo.svg';
import './App.css';
import { TodoInput } from './todoInput';
import { TodoItem } from './todoItems';
import { useState } from 'react';
import { v4 as uuid } from "uuid"

function App() {
  const [todolist, setTodolist] = useState([])
  const importList = (text) => {
    let sr = 0;
    const data = {
      title: text,
      sr: Number(sr),
      id: uuid(),
      status: false,
    }
    setTodolist([...todolist,data])
  }

  const deleteId = (id) => {
    let index = todolist.indexOf(id)
    delete index
  }
  
  return (
    <div className="App">

      <div className='container'>
        <TodoInput importText={ importList}/>
        
        {todolist.map((e) => {
       return <TodoItem getId={deleteId} title={e.title} sr={e.sr} id={e.id} status={e.status} />
      })}
      </div>
     
    </div>
  );
}

export default App;
