import React from "react";
import usePaintingDataManager from "./usePaintingDataManager";
export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const {
    paintingList,
    isLoading,
    error,
    hasError,
    togglePaintingFavoriteStatus,
    favoriteClickCount,
    incrementFavoriteClickCount,
  } = usePaintingDataManager();
  const provider = {
    isLoading,
    error,
    hasError,
    paintingList,
    togglePaintingFavoriteStatus,
    favoriteClickCount,
    incrementFavoriteClickCount,
  };
  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};
