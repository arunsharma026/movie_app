import React, { useContext, useState, useEffect } from 'react' 
import { NavLink, useFetcher } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import {AppContext} from "./context/AppcontectProvider";
import axios from 'axios';
import {API} from './context/AppcontectProvider';

//const API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIES_KEY}`

const Singlemovie = () => {

  
  const {id} = useParams();

  const usecon = useContext(AppContext);
  
  const {isLoading, singleProduct , getSingleProduct, isError} = usecon;

  //const {usecon} = useFetcher(`&i=${id}`);

  useEffect(()=>{
    let timeout = setTimeout(()=>{
        getSingleProduct(`${API}&i=${id}`);
     }, 600);
 
     return()=> clearTimeout(timeout);
 
 }, [id]) 

  

   
 


  return (
    <div>
      
      
       <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={singleProduct.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{singleProduct.Title}</p>
          <p className=""></p>
          <p className="card-text">{singleProduct.Released}</p>
          <p className="card-text">{singleProduct.Genre}</p>
          <p className="card-text">{singleProduct.imdbRating} / 10</p>
          <p className="card-text">{singleProduct.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Singlemovie