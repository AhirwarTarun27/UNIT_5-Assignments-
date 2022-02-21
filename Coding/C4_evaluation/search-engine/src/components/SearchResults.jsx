import { useState } from 'react';
import { useEffect } from 'react';
import {useContext} from 'react'
import Navbar from './Navbar'
import {SearchContext} from "./searchContext/SearchContext"


function SearchResults() {

    const {searchResult, dispatch, isLoading} = useContext(SearchContext)

    console.log(searchResult);

    let [sortT, setSort] = useState([]);




    useEffect(()=>{

        setSort(searchResult)
    },[setSort])



    const sortAT = () =>{
        

       let a = sortT.sort((a,b) => a.title.localeCompare(b.title));

        setSort(a)
    }

    const sortDT = () =>{
        

        sortT.sort((a,b) => b.title.localeCompare(a.title));

        setSort(sortT)
    }

    
    
    return (
        <div>
        <Navbar></Navbar>

        <div>
            <button onClick={sortAT} id="sort-alphabetically" >Sort A-Z</button>
            <button  id="sort-alphabetically-desc" >Sort A-Z</button>
            <button onClick={sortAT} id="sort-by-date" >Sort by Date (a)</button>
            <button  id="sort-by-date-desc" >Sort by Date (d)</button>
            <button onClick={sortAT} id="sort-by-quality" >sort-by-quality</button>
            <button  id="sort-by-quality-desc" >sort-by-quality-desc</button>
            <button onClick={sortAT} id="filter-explicit" >filter-explicit</button>
        </div>

        <div>
            {sortT.map((el)=>{
                let {url, title, author, description, creation_date, explicit, quality} = el;
                // console.log(url);

                let time = new Date().getTime();
                let date = new Date(time);

               return(
                   
                   <div key={el.id} id="detailed-result" >
                       <div>{url}</div>
                        <h3 className='title'> <a href={url}> {title}</a> | <span className='author'>{author}</span> </h3>
                        <p className='desc'>{description}</p>
                        <div className='creation-date'>
                            Creation Date: {date.toString()}
                        </div>
                        <div className='explicit'>Explicite: {explicit ? "Yes" : "No"} | <span className='quality'> Quality: {quality}</span></div>

                    </div>
                    
               )
                
            })}
        </div>
        

        </div>
  )
}

export default SearchResults