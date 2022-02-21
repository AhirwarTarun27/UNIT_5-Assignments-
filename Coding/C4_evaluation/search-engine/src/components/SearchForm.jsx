import {useState, useContext} from 'react'
import googleI from "./unnamed.jpg"
import { useNavigate} from "react-router-dom"
import {SearchContext} from "./searchContext/SearchContext"
import {searchResults} from "./actions/SearchActions"

function SearchForm() {

    let [text, setText] = useState("");
    let { dispatch} = useContext(SearchContext)

    let navigate = useNavigate()

    const onSubmit = async(e) =>{
        e.preventDefault()

        if(text === ""){
            return alert("Please Give Input")
        }

        // console.log(text);

       let data = await searchResults(text);

        dispatch({
            type:"GET_RESULT",
            payload:data
        })

        navigate("/searchresults")
    }

    const handleChange = (e) =>{
        setText(e.target.value)
    }


  return (
    <div>   
        <div >
            <img src={googleI} id='gImg' alt="" />
        </div>

        <form onSubmit={onSubmit} >

            <input type="text" onChange={handleChange} value={text}  className='search-box' />
            
                <button type='submit'>Search</button>
            
        </form>

    </div>
  )
}

export default SearchForm