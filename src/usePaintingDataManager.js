import React, { useReducer, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";

function usePaintingDataManager() {
  const initState = {
    isLoading: true,
    paintingList: [],
    favoriteClickCount: 0,
    hasError: false,
    error: null,
  };
  const [
    { isLoading, paintingList, favoriteClickCount, hasError, error },
    dispatch,
  ] = useReducer(reducer, initState);

  function incrementFavoriteClickCount() {
    dispatch({ type: "incrementFavoriteClickCount" });
  }

  function togglePaintingFavoriteStatus(painting) {
    const updateData = async function () {
      axios.put(`/api/paintings/${painting.id}`, {
        ...painting,
        favorite: !painting.favorite,
      });
      //above changes the data, and below we change the state:
      painting.favorite === true
        ? dispatch({ type: "unfavorite", id: painting.id })
        : dispatch({ type: "favorite", id: painting.id });
    };
    updateData();
  }
  useEffect(() => {
    const fetchData = async function () {
      try {
        let result = await axios.get("/api/paintings");
        dispatch({
          type: "setPaintingList",
          data: result.data,
        });
      } catch (e) {
        dispatch({ type: "errored", error: e });
      }
    };
    fetchData();
    return () => {
      console.log("cleanup if needed");
    };
  }, []);

  return {
    isLoading,
    error,
    hasError,
    paintingList,
    togglePaintingFavoriteStatus,
    favoriteClickCount,
    incrementFavoriteClickCount,
  };
}
export default usePaintingDataManager;
