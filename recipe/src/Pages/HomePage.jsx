import React, { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import { fetchRecipies } from "../Functions/Api";
import RecipeContainer from "../Components/RecipeContainer";
import FilterButton from "../Components/FilterButton";
import Filter from "../Functions/Filter";

function HomePage() {
  let [query, setQuery] = useState("");
  let [searchClicked, setSearchClicked] = useState(false);
  let [isLoading, setIsLoading] = useState(false);
  let [isError, setIsError] = useState(false);
  let [recipies, setRecipies] = useState([]);
  let [filterAccess, setFilterAccess] = useState(false);
  let [filter , setFilter] = useState({
    cuisine: "",
      diet: "",
      time: 120,
      exclusion: ""
  })

  useEffect(() => {
    if (!searchClicked || query.length === "") return;

    const fetchedData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const data = await fetchRecipies(query);
        setRecipies(data.results);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchedData();
  }, [searchClicked, query]);

  const onChangingInput = (e) => {
    setQuery(e.target.value);
  };

  const onClickSearch = () => {
    if (query.length > 0) {
      setSearchClicked(true);
    }
  };


  const resetFilter =() => {
    setFilter({
      cuisine: "",
      diet: "",
      time :"",
      exclusion:""
    })
  }

  return (
    <div>
      <SearchBar
        query={query}
        onChangingInput={onChangingInput}
        onClickSearch={onClickSearch}
      ></SearchBar>

      <FilterButton
        onToggleFilter={() => setFilterAccess(!filterAccess)}
        filterState={filterAccess}
      ></FilterButton>

      {filterAccess && (
        <Filter setFilter={setFilter} filter={filter} resetFilter={resetFilter}></Filter>
      )}

      {isLoading && (
        <div className="text-center text-xl text-blue-500 mt-8">Loading...</div>
      )}
      {isError && (
        <div className="text-center text-xl text-red-500 mt-8">
          Error fetching recipes
        </div>
      )}

      <RecipeContainer recipies={recipies}></RecipeContainer>
    </div>
  );
}

export default HomePage;
