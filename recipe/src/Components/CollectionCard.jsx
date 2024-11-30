import React, { useState } from "react";

function CollectionCard({
  item,
  handleRemove,
  setSelectedCollection,
  recipeForCollection,
  handleAddRecipeToCollection,
  setDisplayCollection,
  displayCollections
}) {
  let [select, setSelected] = useState(false);

  const func = () => {
    handleRemove(item.id);
  };

  const collectionInfo = () => {
    setSelectedCollection(item);
    setSelected(!select);
  };

  const addRecipeToCollection = () => {
    if (recipeForCollection) {
      setSelectedCollection(item); // Set this collection as selected
      handleAddRecipeToCollection(); // Add the recipe to this collection
    }
  };

  const displayColl = () => {
    setDisplayCollection(true)
  }
 
  return (
    <div className="flex">
      <p onClick={displayColl}>{item.tag}</p>
      <button className="bg-red-500 ml-2" onClick={func}>
        {" "}
        remove
      </button>
      <button
        onClick={collectionInfo}
        className="bg-yellow-300 rounded-md  ml-2 "
      >
        {select ? "Selected" : "Select"}
      </button>
      <button
        className="bg-blue-400 rounded-md ml-2"
        onClick={addRecipeToCollection}
      >
        Add
      </button>
    </div>
  );
}

export default CollectionCard;
