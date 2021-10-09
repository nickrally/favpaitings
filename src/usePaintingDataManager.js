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
    dispatch,
  };
}
export default usePaintingDataManager;
