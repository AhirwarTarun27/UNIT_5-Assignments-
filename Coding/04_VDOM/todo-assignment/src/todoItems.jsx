import "./App.css"


export const TodoItem = ({status, todolist, setTodolist, onSelect ,title,id,statusId}) => {
      
      const onStatus = (todo) => {
            console.log(todolist)
            setTodolist(todolist.map((item) => {
                  if (item.id === todo) {
                        return {...item,status: !item.status}
                  }
                  console.log("item",item)
                  return item
            }))
      }
      
      return <div className="tableBox">
            {/* <div><h3>{title}</h3></div>
            <div><h3>{status ? "Done": "Not Done"}</h3></div>
            <div className="button"><button onClick={() => {
                  getId(id)
            }}>Delete</button></div> */}
            <ul>
                  <li><strong>Task</strong> : {title} <strong>Status</strong> : <div className="status" onClick={() => {
                        onStatus(statusId)
                  }}>{status ? "Done" : "Not Done"} </div><button className="hoverRed" onClick={() => {
                        
                        onSelect(id)
                  }}>Remove</button></li>
                  <hr />
            </ul>
      </div>
}