import React from 'react'

function SearchBar({query , onChangingInput , onClickSearch}) {
  return (
    <div className="flex justify-center items-center space-x-4">
      <input
        type="text"
        className="p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="Enter the dish..."
        value={query}
        onChange={onChangingInput}
      />
      <button
        onClick={onClickSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
  
}

export default SearchBar