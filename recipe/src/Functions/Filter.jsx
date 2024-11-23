import React from 'react'

function Filter({setFilter,filter,resetFilter}) {


  return (
    <div>
      <h2>filters</h2>

      <div>
        <label htmlFor="">CusineType </label>
        <select value={filter}></select>
      </div>
    </div>
  )
}

export default Filter