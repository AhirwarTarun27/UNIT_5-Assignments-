import React from 'react'
import icon from "./unnamed.jpg"
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div id='navbar'>
        <div>
            <img src={icon} alt="google Icon" className='googleI' />

        </div>

        <div>
            <input type="text"  />
            <button className='search'>Search</button>
        </div>

        <div>
            <Link to={"/"}>Home</Link>
        </div>

    </div>
  )
}

export default Navbar