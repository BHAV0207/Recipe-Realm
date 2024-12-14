import React, { useState } from "react";

function CollectionCard({
  item,
  handleRemove,
  setSelectedCollection,
  recipeForCollection,
  handleAddRecipeToCollection,
  setDisplayCollection,
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
    if (recipeForCollection && select) {
      setSelectedCollection(item); // Set this collection as selected
      handleAddRecipeToCollection(); // Add the recipe to this collection
      setSelected(!select);
    }
  };

  const displayColl = () => {
    setDisplayCollection(true);
    setSelectedCollection(item);
    // console.log(item);
  };

  return (
    <div className="p-4 bg-gray-50 border rounded-md shadow-sm flex justify-between items-center mb-4">
      <p
        className="text-lg font-semibold cursor-pointer hover:text-blue-600"
        onClick={displayColl}
      >
        {item.tag}
      </p>
      <div className="flex gap-2">
        <button
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
          onClick={() => handleRemove(item.id)}
        >
          Remove
        </button>
        <button
          className={`px-3 py-1 rounded-md ${
            select ? "bg-yellow-500" : "bg-gray-300"
          } hover:bg-yellow-600`}
          onClick={() => {
            setSelected(!select);
            setSelectedCollection(item);
          }}
        >
          {select ? "Selected" : "Select"}
        </button>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
          onClick={addRecipeToCollection}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default CollectionCard;
