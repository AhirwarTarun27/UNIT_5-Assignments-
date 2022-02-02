import { useState } from "react"

export function TodoInput({importText}) {
      const [text, setText] = useState("")
      return <div>
            <input type="text" onChange={(e) => {
                  console.log("changing",e.target.value)
                  setText( e.target.value )
            }} />
            <button onClick={
                  () => {
                        importText(text)
                  }
            }>Add List</button>
      </div>
}