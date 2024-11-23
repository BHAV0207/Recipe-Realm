import React from 'react'

function FilterButton({onToggleFilter , filterState}) {
  return (
    <button onClick={onToggleFilter}>{filterState ? 'hideFilter' : 'ShowFilter'}</button>
  )
}

export default FilterButton