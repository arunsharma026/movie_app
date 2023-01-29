import { createContext, useEffect, useContext, useReducer, useState  } from "react";
import axios from "axios";
import reduser from "../reduser/Appreduser";

export const API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIES_KEY}`

const AppContext = createContext(); 

//let querySearch 

const initialState = {
    isLoading : true,
    isError : false,
    Search : [],
    singleProduct : {},
    //querySearch : (""),
}

const AppcontectProvider = ({children})=>{
 
    const [state, dispatch] = useReducer(reduser, initialState);
    const [querySearch, setquerySearch] = useState("");

const getMovies = async(url)=>{

    dispatch({type: "SET_LOADING"});

    try{

        const res = await axios.get(url);
          //console.log(res);
         const Search = await res.data; 
         
         dispatch ({type : "API_GET_MOVIE", payload:Search});
         console.log(Search);
    }catch(Error){
        dispatch ({type : "API_ERROR"});
        console.log(` arun error: ${Error}`)
    }
}




useEffect(()=>{
    let timeout = setTimeout(()=>{
         getMovies(`${API}&s=${querySearch}`);
     }, 500);
 
     return()=> clearTimeout(timeout)
 
 }, [querySearch]) 

 
// 2nd api for single product

const getSingleProduct = async(url)=>{

    dispatch({type: "SET_LOADING" });

    try{
        const res = await axios.get(url);
        const singleProduct = await res.data;
        console.log(singleProduct);
        dispatch({type: "SET_SINGLE_PRODUCT" , payload: singleProduct});
    }catch(error){
        dispatch({type : "API_ERROR"});
        console.log(` Detail error: ${Error}`)
    }

} 



return <AppContext.Provider value={{...state, querySearch, setquerySearch, getSingleProduct }} >

{children}

</AppContext.Provider>

}

const useGlobelContext=()=>{
    
    return useContext(AppContext);
}

export default AppcontectProvider;
export {AppContext, useGlobelContext};