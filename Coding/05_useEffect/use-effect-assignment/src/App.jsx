import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react"

function App() {

  const [data, setData] = useState(0);
  const [mult,setMult] = useState(1)

  // useEffect(() => {
    
  //   if (data == 11) {
  //     setMult(0)
  //   }

  // },[mult])

  useEffect(() => {

    // fetch("http://localhost:3003/users")
    // .then(d => d.json())
    //   .then(res => {
    //     console.log("response", res)
    //     setData(res)
    //   })

    console.log(mult)
    if (data == 11) {
      setMult(0)
    }

  },[data,mult])



  return (
    <div className="App">
      <span><h3>Counter: {data}</h3> <h3>Counter2: { mult}</h3></span>
      <button onClick={
        () => {
          setData(data + 1)
          if (data > 0 && mult > 0) {
            setMult(data * mult)
          }
        }
      }>
        Click here
      </button>
    </div>
  );
}

export default App;
