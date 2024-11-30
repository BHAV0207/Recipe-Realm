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
  displayCollections
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
    <div>
      <div>
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
              displayCollections={displayCollections}
            ></CollectionCard>
          );
        })}
      </div>
      <div>
        <input
          type="text"
          placeholder="Add a New Collection"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button className="bg-green-500 rounded-md p-1" onClick={handelInput}>
          Add
        </button>
      </div>
    </div>
  );
}

export default CollectionContiner;
