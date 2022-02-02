import { useState } from "react"
import "./App.css"

export const TodoInput = ({importText}) => {
      const [todo, setTodo] = useState("")
      return <div>
            <img className="imgSize" src="https://i.pinimg.com/originals/1f/3f/4c/1f3f4ce973d946578567f190e2773709.png" alt="" /><br />
            <input type="text" onChange={(e) => {
                  setTodo(e.target.value)
            }} />
            <button onClick={() => {
                  console.log(todo)
                  importText(todo)
            }}>Add Note</button>
      </div>
}