import React, { useState } from "react";
import CollectionCard from "./CollectionCard";

function CollectionContiner({
  collection,
  setCollection,
  collectionRemove,
  setSelectedCollection,
  recipeForCollection,
  handleAddRecipeToCollection,
  setDisplayCollection,
}) {
  let [inputVal, setInputVal] = useState("");

  const handelInput = () => {
    const obj = {
      id: Date.now(),
      tag: inputVal,
      recipes: [],
    };

    setCollection((prevCollection) => [...prevCollection, obj]);
    setInputVal("");
  };

  const handleRemove = (id) => {
    collectionRemove(id);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md mb-6">
      <div className="grid gap-4">
        {collection.map((item) => {
          return (
            <CollectionCard
              key={item.id}
              item={item}
              handleRemove={handleRemove}
              setSelectedCollection={setSelectedCollection}
              recipeForCollection={recipeForCollection} // Pass the selected recipe
              handleAddRecipeToCollection={handleAddRecipeToCollection} // Pass the handler
              setDisplayCollection={setDisplayCollection}
            ></CollectionCard>
          );
        })}
      </div>
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          placeholder="Add a New Collection"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        />
        <button
          className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600"
          onClick={handelInput}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default CollectionContiner;
