import "./App.css"
import React from "react";
import { v4 as uuid } from "uuid";

export const Ginput = ({ inputItm, setInputItm, list, setList }) => {
     
      return (
            <div>
                  <input type="text" value={inputItm} placeholder="Enter item here..." className="input" onChange={e => setInputItm(e.target.value)}/>
                  <button className="submitBtn" onClick={() => {
                        setList([...list, { id: uuid(), title: inputItm, completed: false }]);
                        setInputItm("")
                        console.log(list)
            }}>Submit</button>
            </div>
      )
}