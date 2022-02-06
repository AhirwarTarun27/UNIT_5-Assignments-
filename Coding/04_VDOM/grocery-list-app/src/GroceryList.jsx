import React from "react";
import "./App.css"

export const Glist = ({ list, setList }) => {


      const handleDelete = ({ id }) => {
            setList(list.filter(((item) => item.id !== id)))
      }

      const handleComplete = (gItem) => {
            console.log(list)
            setList(list.map((item) => {
                  if(item.id === gItem.id){
                        return {...item,completed: !item.completed}
                  }
                  return item
            }))
      }
      
      return <>
      
            {list.map((item) => (
                  
                  <div className="flex">
                        <div><strong>{ item.title}</strong></div>
                        <div className="status" onClick={
                              () => {
                                    handleComplete(item)
                              // console.log("change")
                              }
                        }>{item.completed ? "Done" : "Not done"}</div>
                        <div>
                              <button className="delete" onClick={() => {
                                    handleDelete(item)
                              }}>Delete</button>
                        </div>
                   </div>
                  
            ))}
            
      </>
}