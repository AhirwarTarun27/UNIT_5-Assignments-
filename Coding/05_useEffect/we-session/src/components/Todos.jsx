import { useEffect ,useState } from "react"


export const Todos = () => {
const [todos,setTodos] = useState([])
      const [text, setText] = useState("")
      const [loading, setLoading] = useState(false)
      const [page,setPage] = useState(1)

      useEffect(() => {
            
            getData()
      }, [page])
      
      const getData = () => {
            setLoading(true)
            fetch(`http://localhost:3001/todos?_page=${page}&_limit=2`).then((d) => d.json()).then((res) => { setTodos(res); setLoading(false) }) 
      }
      
      

      return loading ? (
            "Loading..."
      ):( <div>
            <input type="text" placeholder="Enter Here" onChange={(e)=> setText(e.target.value)} />
            <button onClick={() => {

                  const data = { status: false, title: text }
                  fetch("http://localhost:3001/todos", {
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: {
                          "content-type":"application/json"    
                        }
                  }).then(getData)
                  // setTodos([...todos,{status: false,title: text}])
            }}>
                  Add Todo
            </button>
                  {todos.map(e => <div>{e.title} - {e.status ? "done" : "Not Done"}</div>)}
                  
                  <button onClick={() => {
                        setPage(page - 1)
                  }}>Prev</button>
                  <button onClick={() => {
                        setPage(page + 1)
                  }}>Next</button>

            </div>
            )
}
<button></button>