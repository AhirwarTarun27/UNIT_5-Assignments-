import "./App.css"


export const TodoItem = ({title,status,id,getId}) => {
      
      return <div className="tableBox">
            <div><h3>{title}</h3></div>
            <div><h3>{status ? "Done": "Not Done"}</h3></div>
            <div className="button"><button onClick={() => {
                  getId(id)
            }}>Delete</button></div>
      </div>
}