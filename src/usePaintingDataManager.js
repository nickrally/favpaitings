import React, { useReducer, useEffect } from "react";
import PaintingData from "./PaintingData";
import reducer from "./reducer";

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
    painting.favorite === true
      ? dispatch({ type: "unfavorite", id: painting.id })
      : dispatch({ type: "favorite", id: painting.id });
  }
  useEffect(() => {
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      dispatch({
        type: "setPaintingList",
        data: PaintingData,
      });
    });

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
