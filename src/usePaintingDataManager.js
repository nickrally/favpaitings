import React, { useReducer, useEffect } from "react";
import PaintingData from "./PaintingData";
import reducer from "./reducer";
import axios from "axios";

function usePaintingDataManager() {
  const initState = {
    isLoading: true,
    paintingList: [],
  };
  const [{ isLoading, paintingList }, dispatch] = useReducer(
    reducer,
    initState
  );

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
      let result = await axios.get("/api/paintings");
      dispatch({
        type: "setPaintingList",
        data: result.data,
      });
    };
    fetchData();
    return () => {
      console.log("cleanup if needed");
    };
  }, []);

  return {
    isLoading,
    paintingList,
    togglePaintingFavoriteStatus,
  };
}
export default usePaintingDataManager;
