const Appreduser = (state, action) =>{
 
    switch (action.type){

        case "SET_LOADING" :
            return{
                ...state,
                isLoading : true,
            }

          case "API_GET_MOVIE": 

          
            return{
                ...state,
                isLoading:false,
                Search: action.payload.Search, 
            }  
            case "API_ERROR":
                return{
                    ...state,
                    isError: true,
                }

                 
                  case "SET_SINGLE_PRODUCT": 
        
                  
                    return{
                        ...state,
                        isSingleLoading: false,
                        singleProduct:action.payload, 
                    }  
                 
        

    }

}

export default Appreduser;