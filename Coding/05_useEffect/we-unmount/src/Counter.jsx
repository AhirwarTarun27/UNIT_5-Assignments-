import {useState, useEffect} from "react"

export const Counter = () => {
      const [timer,setTimer] = useState(10)

      useEffect(() => {
           const id =  setInterval(() => {
                  console.log("setInterval", timer);
                  setTimer((prevValue) => {
                        if(prevValue <= 1){
                              clearInterval(id)
                              return 0;
                              
                        }
                        return prevValue - 1;
                        // return prevValue - 1;
                  })
           }, 1000)
            return () => {
                  //Unmounting
                  console.log("Removing Counter Component")
                  clearInterval(id)
            }
      },[])

      return <div>Timer: { timer}</div>
}