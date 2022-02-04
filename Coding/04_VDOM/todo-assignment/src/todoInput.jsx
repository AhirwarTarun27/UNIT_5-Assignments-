import { v4 as uuid } from "uuid"
import "./App.css"

export const TodoInput = ({todo,setTodo,todolist,setTodolist}) => {
     

      const importList = (text) => {
            const data = {
              title: text,
              id: uuid(),
              status: false,
            }
            setTodolist([...todolist, data])
            setTodo("")
          }

      return <div>
            <img className="imgSize" src="https://i.pinimg.com/originals/1f/3f/4c/1f3f4ce973d946578567f190e2773709.png" alt="" /><br />
            <input type="text" value={todo} onChange={(e) => {
                  setTodo(e.target.value)
            }} />
            <button className="hoverGreen" onClick={() => {
                  console.log(todo)
                  importList(todo)
            }}>Add Note</button>
            <hr />
      </div>
}