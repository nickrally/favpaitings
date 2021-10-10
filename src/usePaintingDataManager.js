import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
import { InitPaintingsDataContext } from "../pages/paintings";

function usePaintingDataManager() {
  const initPaintingsData = useContext(InitPaintingsDataContext);

  const initState = {
    isLoading: false, //I already have the data
    paintingList: initPaintingsData,
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
  return {
    isLoading,
    paintingList,
    togglePaintingFavoriteStatus,
  };
}
export default usePaintingDataManager;
