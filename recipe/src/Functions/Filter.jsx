import React from "react";

function Filter({ setFilter, filter, resetFilter }) {
  return (
    <div className="filter-content flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      <div className="mb-4">
        <label htmlFor="cuisine" className="block font-medium mb-1">
          Cuisine Type
        </label>
        <select
          id="cuisine"
          value={filter.cuisine}
          onChange={(e) => setFilter({ ...filter, cuisine: e.target.value })}
          className="p-2 border border-gray-300 rounded-md w-full"
        >
          <option value="All">All</option>
          <option value="Italian">Italian</option>
          <option value="Mexican">Mexican</option>
          <option value="Indian">Indian</option>
          <option value="Chinese">Chinese</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="diet" className="block font-medium mb-1">
          Dietary Restrictions
        </label>
        <select
          id="diet"
          value={filter.diet}
          onChange={(e) => setFilter({ ...filter, diet: e.target.value })}
          className="p-2 border border-gray-300 rounded-md w-full"
        >
          <option value="All">All</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="Gluten Free">Gluten Free</option>
          <option value="Dairy Free">Dairy Free</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="time" className="block font-medium mb-1">
          Time (in minutes)
        </label>
        <input
          id="time"
          min={0}
          max={120}
          type="range"
          value={filter.time}
          onChange={(e) => setFilter({ ...filter, time: e.target.value })}
          className="w-full"
        />
        <p>{filter.time} minutes</p>
      </div>

      <button
        onClick={resetFilter}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors w-full"
      >
        Reset Filters
      </button>
    </div>
  );
}

export default Filter;
