import React from 'react'
import RecipeCard from './RecipeCard'

function RecipeContainer({recipies}) {
  return (
    <div>
      {recipies.map((ele) => (
        <RecipeCard recipe={ele} key={ele.id}></RecipeCard>
      ))}
    </div>
  )
}

export default RecipeContainer