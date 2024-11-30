import React from "react";

function CollectionDisplay({setDisplayCollection}) {
  return (
    <div>
      <div>diaplay</div>
      <button onClick={() => (setDisplayCollection(false))} className="bg-red-500 rounded-lg p-1">Hide</button>
    </div>
  );
}

export default CollectionDisplay;
