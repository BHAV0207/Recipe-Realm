import React from "react";

function FilterButton({ onToggleFilter, filterState }) {
  return (
    <button
      className="bg-green-500 p-2 rounded-xl m-2"
      onClick={onToggleFilter}
    >
      {filterState ? "hideFilter" : "ShowFilter"}
    </button>
  );
}

export default FilterButton;
