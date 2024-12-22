import React from "react";

function SearchBar({ query, onChangingInput, onClickSearch }) {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full">
      <input
        type="text"
        className="w-full sm:w-auto p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="Enter the dish..."
        value={query}
        onChange={onChangingInput}
      />
      <button
        onClick={onClickSearch}
        className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
