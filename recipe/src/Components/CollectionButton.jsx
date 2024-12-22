import React from 'react'

function CollectionButton({collectionBtn , setCollectionBtn}) {
  const handelBtn = () => {
      setCollectionBtn(!collectionBtn)
  }


  return (
    <button className='bg-green-700 rounded-md p-1' onClick={handelBtn}>
      {collectionBtn ? 'HIdeCollections' : "Collections"}
    </button>
  )
}

export default CollectionButton