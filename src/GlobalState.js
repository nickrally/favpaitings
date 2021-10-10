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
    imageRendererIdentifier,
    forceImageRerender,
  } = usePaintingDataManager();
  const provider = {
    isLoading,
    error,
    hasError,
    paintingList,
    togglePaintingFavoriteStatus,
    favoriteClickCount,
    incrementFavoriteClickCount,
    imageRendererIdentifier,
    forceImageRerender,
  };
  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};
