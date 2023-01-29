import React, { useContext } from 'react' 
import { NavLink } from 'react-router-dom';
import {AppContext} from "./context/AppcontectProvider";

const Movies = () => {

  const usecon = useContext(AppContext);
  
  const {isLoading,  Search} = usecon;
 
  //console.log( Search)

 
if(isLoading){
  return<div>........Loading</div>
}
else{

  return (
    <section className="movie-page">
        <div className="grid grid-4-col">
        { Search ? Search.map((curMovie)=>{
const {Title, Year, imdbID, Type, Poster}= curMovie;
const moviTitle = Title.substring(0, 15);

return(
  <NavLink to={`movie/${imdbID}`} key={imdbID}>
    <div className='card'>
  <div className='card-info'>

<h2> {moviTitle.length >= 15 ? `${moviTitle} ...:` : moviTitle } </h2>
<img src={Poster} alt={imdbID} />
  </div>

    </div>

  </NavLink>
)
        }): <h2>No Records Founds.</h2>} 
        </div>

        </section>
  )
}
}

  

export default Movies