import React from 'react'

function SearchBar({query , onChangingInput , onClickSearch}) {
  return (
    <div>
      <input type="text"
      placeholder='enter the dish...'
      value={query} 
      onChange={onChangingInput}/>
      
      <button onClick={onClickSearch}>Search</button>
    </div>

  )
}

export default SearchBar