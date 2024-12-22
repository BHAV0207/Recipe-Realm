import React, { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import { fetchRecipies } from "../Functions/Api";
import RecipeContainer from "../Components/RecipeContainer";
import FilterButton from "../Components/FilterButton";
import Filter from "../Functions/Filter";
import Page from "../Components/Page";
import Favourites from "../Components/Favourites";
import FavouriteButton from "../Components/FavouriteButton";
import CollectionButton from "../Components/CollectionButton";
import CollectionContiner from "../Components/CollectionContiner";
import CollectionDisplay from "../Components/CollectionDisplay";
import Rating from "../Components/Rating";
import Notes from "../Components/Notes";
import { loadFromStorage, saveToStorage } from "../utils/localStorage";

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
  let [favourites, setFavourites] = useState(() =>
    loadFromStorage("favourites", [])
  );

  let [collectionBtn, setCollectionBtn] = useState(false);
  let [collection, setCollection] = useState(() =>
    loadFromStorage("collections", [])
  );
  let [recipeCollectionBtn, setRecipeCollectionBtn] = useState(false);
  let [recipeForCollection, setRecipeForCollection] = useState(null);
  let [selectedCollection, setSelectedCollection] = useState(null);
  let [displayCollection, setDisplayCollection] = useState(false);

  let [ratingBtn, setRatingBtn] = useState(false);
  let [ratingRecipe, setRatingRecipe] = useState(null);
  let [rating, setRating] = useState(() => loadFromStorage("ratings", {}));

  let [noteBtn, setNoteBtn] = useState(false);
  let [noteRecipe, setNoteRecipe] = useState(null);
  let [note, setNote] = useState(() => loadFromStorage("notes", {}));

  const addNote = (recipeId, noteMessage) => {
    setNote((prevNote) => ({
      ...prevNote,
      [recipeId]: noteMessage,
    }));
  };

  const addRating = (recipeId, rating) => {
    setRating((prevRating) => ({
      ...prevRating,
      [recipeId]: rating,
    }));
  };

  const handleAddRecipeToCollection = () => {
    if (!recipeForCollection || !selectedCollection) return;

    setCollection((prevCollection) =>
      prevCollection.map((collectionItem) =>
        collectionItem.id === selectedCollection.id
          ? {
              ...collectionItem,
              recipes: [...(collectionItem.recipes || []), recipeForCollection], // Ensure recipes is an array
            }
          : collectionItem
      )
    );

    // Clear the temporary states
    setRecipeForCollection(null);
    setSelectedCollection(null);
  };
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
        // setSearchClicked(false);
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

  const collectionRemove = (id) => [
    setCollection((prevCollection) =>
      prevCollection.filter((item) => item.id !== id)
    ),
  ];

  useEffect(() => {
    saveToStorage("favourites", favourites);
  }, [favourites]);

  useEffect(() => {
    saveToStorage("collections", collection);
  }, [collection]);

  useEffect(() => {
    saveToStorage("ratings", rating);
  }, [rating]);

  useEffect(() => {
    saveToStorage("notes", note);
  }, [note]);

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
    <div className="container mx-auto px-4 py-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <div className="w-full sm:w-auto">
          <SearchBar
            query={query}
            onChangingInput={onChangingInput}
            onClickSearch={onClickSearch}
          />
        </div>

        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
          <FilterButton
            onToggleFilter={() => setFilterAccess(!filterAccess)}
            filterState={filterAccess}
          />

          <FavouriteButton
            favouriteBtn={favouriteBtn}
            setFavouriteBtn={setFavouriteBtn}
          />

          <CollectionButton
            collectionBtn={collectionBtn}
            setCollectionBtn={setCollectionBtn}
          
          />
        </div>
      </div>

      {favouriteBtn && (
        <Favourites
          favourites={favourites}
          handelRemoveFavourites={handelRemoveFavourites}
        />
      )}

      {(collectionBtn || recipeCollectionBtn) && (
        <CollectionContiner
          collection={collection}
          setCollection={setCollection}
          collectionRemove={collectionRemove}
          setSelectedCollection={setSelectedCollection}
          recipeForCollection={recipeForCollection} // Pass recipe
          handleAddRecipeToCollection={handleAddRecipeToCollection} // Pass handler
          setDisplayCollection={setDisplayCollection}
        ></CollectionContiner>
      )}

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

      {message && !searchClicked && !displayCollection && (
        <div className="text-black font-semibold text-xl flex justify-center h-[450px] items-center">
          This is a comprehensive cooking guide which provides you with several
          recipes
        </div>
      )}

      {searchClicked && !favouriteBtn && !displayCollection && (
        <RecipeContainer
          recipies={recipies}
          favourites={favourites}
          handleAddToFavourites={handleAddToFavourites}
          handelRemoveFavourites={handelRemoveFavourites}
          setRecipeCollectionBtn={setRecipeCollectionBtn}
          recipeCollectionBtn={recipeCollectionBtn}
          setRecipeForCollection={setRecipeForCollection}
          setRatingBtn={setRatingBtn}
          setRatingRecipe={setRatingRecipe}
          rating={rating}
          setNoteBtn={setNoteBtn}
          setNoteRecipe={setNoteRecipe}
          note={note}
        />
      )}

      {displayCollection && (
        <CollectionDisplay
          selectedCollection={selectedCollection}
          setDisplayCollection={setDisplayCollection}
        ></CollectionDisplay>
      )}

      {ratingBtn && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setRatingBtn(false)}
        >
          <div
            className="bg-white rounded-lg p-6 shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-200 hover:text-gray-800"
              onClick={() => setRatingBtn(false)}
            >
              ✖
            </button>
            <Rating
              setRatingBtn={setRatingBtn}
              addRating={addRating}
              ratingRecipe={ratingRecipe}
            />
          </div>
        </div>
      )}

      {noteBtn && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setNoteBtn(false)}
        >
          <div
            className="bg-white rounded-lg p-6 shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-200 hover:text-gray-800"
              onClick={() => setRatingBtn(false)}
            >
              ✖
            </button>
            <Notes
              setNoteBtn={setNoteBtn}
              noteRecipe={noteRecipe}
              addNote={addNote}
            />
          </div>
        </div>
      )}

      <div className="mt-8">
        <Page page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
}

export default HomePage;
