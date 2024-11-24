import React, { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import { fetchRecipies } from "../Functions/Api";
import RecipeContainer from "../Components/RecipeContainer";
import FilterButton from "../Components/FilterButton";
import Filter from "../Functions/Filter";
import Page from "../Components/Page";
import Favourites from "../Components/Favourites";
import FavouriteButton from "../Components/FavouriteButton";

function HomePage() {
  let [query, setQuery] = useState("");
  let [searchClicked, setSearchClicked] = useState(false);
  let [recipies, setRecipies] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [isError, setIsError] = useState(false);
  let [filterAccess, setFilterAccess] = useState(false);
  let [filter, setFilter] = useState({
    cuisine: "",
    diet: "",
    time: 120,
    exclusion: "",
  });
  let [message, setMessage] = useState(true);

  let [page, setPage] = useState(1);
  let [totalPages, setTotalPages] = useState(1);

  let [favouriteBtn, setFavouriteBtn] = useState(false);
  let [favourites, setFavourites] = useState([]);

  useEffect(() => {
    if (!searchClicked || query.length === "") return;

    const fetchedData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const data = await fetchRecipies(
          query,
          filter.diet,
          filter.cuisine,
          filter.time,
          page
        );
        setRecipies(data.results);
        setTotalPages(Math.ceil(data.totalResults / 10));
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchedData();
  }, [searchClicked, query, filter.diet, filter.cuisine, filter.time, page]);

  const onChangingInput = (e) => {
    setQuery(e.target.value);
  };

  const onClickSearch = () => {
    if (query.length > 0) {
      setSearchClicked(true);
    }
  };

  const resetFilter = () => {
    setFilter({
      cuisine: "",
      diet: "",
      time: 120,
      exclusion: "",
    });
  };

  const handleAddToFavourites = (recipe) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites.some((fav) => fav.id === recipe.id)) {
        return prevFavourites;
      }
      return [...prevFavourites, recipe];
    });
  };


  const handelRemoveFavourites = (id) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((recipe) => recipe.id !== id)
    );
  };
  

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <SearchBar
          query={query}
          onChangingInput={onChangingInput}
          onClickSearch={onClickSearch}
        />

        <FilterButton
          onToggleFilter={() => setFilterAccess(!filterAccess)}
          filterState={filterAccess}
          className="ml-4"
        />

        <FavouriteButton
          favouriteBtn={favouriteBtn}
          setFavouriteBtn={setFavouriteBtn}
        />

        {favouriteBtn && <Favourites favourites={favourites} handelRemoveFavourites={handelRemoveFavourites} />}
      </div>

      {filterAccess && (
        <div className="filter-dropdown mt-4 p-4 bg-white shadow-lg rounded-lg absolute z-10 w-80">
          <Filter
            setFilter={setFilter}
            filter={filter}
            resetFilter={resetFilter}
          />
        </div>
      )}

      {isLoading && (
        <div className="text-center text-xl text-blue-500 mt-8">Loading...</div>
      )}
      {isError && (
        <div className="text-center text-xl text-red-500 mt-8">
          Error fetching recipes
        </div>
      )}

      {message && !searchClicked && (
        <div className="text-black font-semibold text-xl flex justify-center h-[450px] items-center">
          This is a comprehensive cooking guide which provides you with several recipes
        </div>
      )}

      {searchClicked && !favouriteBtn && (
        <RecipeContainer
          recipies={recipies}
          favourites={favourites}
          handleAddToFavourites={handleAddToFavourites}
        />
      )}

      <Page page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
}


export default HomePage;
