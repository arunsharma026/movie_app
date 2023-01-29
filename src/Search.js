import React from 'react'
import { useGlobelContext } from './context/AppcontectProvider'
const Searchs = () => {

  const {querySearch, setquerySearch, isError} = useGlobelContext();



  return (
    <section className='search-section'>
<h2>Search Your Favoruite Movies</h2>
<form action='#' onSubmit={(e)=> e.preventDefault()}>
<div className=''>
  <input type="text" 
  placeholder="search here name" 
  value={querySearch}
  onChange={(e)=>setquerySearch(e.target.value)}
  />
</div>

</form>

<div className='card-error'>
  <p>{isError}</p>
</div>
    </section>
  )
}

export default Searchs