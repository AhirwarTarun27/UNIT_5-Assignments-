import logo from './logo.svg';
import './App.css';
import { TodoInput } from './todoInput';
import { TodoItem } from './todoItems';
import { useState } from 'react';


function App() {
  const [todo, setTodo] = useState("")
  const [todolist, setTodolist] = useState([])
  

  const deleteId = (id) => {
    console.log("Delete")
    console.log(setTodolist)
    setTodolist((oldItems) => {
      return oldItems.filter((title, index) => {
        return index !== id
      })
    })
  }
  const reverseStatus = (todolist) => {
    console.log(todolist)
    
    setTodolist(
      todolist.map((item) => {
        if (item.id === todolist.id) {
          return {...item, status: !item.status}
        }
        return item;
      })
    )
    
  }
  
  return (
    <div className="App">

      <div className='container'>
        <TodoInput todo={todo} setTodo={setTodo} todolist={todolist} setTodolist={ setTodolist}/>
        
        {todolist.map((e,index) => {
       return <TodoItem onSelect={deleteId} key={e.id} statusId={e.id} id={index} title={e.title} status={e.status} todolist={todolist} setTodolist={ setTodolist} />
      })}
      </div>
     
    </div>
  );
}

export default App;
