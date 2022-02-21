export const searchReducer = (state, action) =>{
    switch(action.type){
        case "GET_RESULT":
            return {
                ...state,
                searchResult: action.payload,
                isLoading:false
            }
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true
            }
        default:
            return state
    }
}