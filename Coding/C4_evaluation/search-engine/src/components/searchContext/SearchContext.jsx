import { createContext, useReducer } from "react";
import { searchReducer } from "../reducer/SearchReducer";

export let SearchContext = createContext();

export const SearchProvider = ({children}) =>{

    const initialState = {
        searchResult:[],
        isLoading:false
    }

    const [state, dispatch] = useReducer(searchReducer, initialState)




    return <SearchContext.Provider value={{...state, dispatch}}> {children} </SearchContext.Provider>


}