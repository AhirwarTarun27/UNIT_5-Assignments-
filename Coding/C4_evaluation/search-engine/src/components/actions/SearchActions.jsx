
import axios from "axios"

export const searchResults = async (text)=>{

    let res = await axios.get(`https://fast-reef-22226.herokuapp.com/data?q=${text}`)

    // console.log(res);

    return res.data;

}