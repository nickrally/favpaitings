const reducer = (state, action) => {
  function updateFavorite(favoriteValue) {
    return state.paintingList.map((item, index) => {
      if (item.id === action.id) {
        return { ...item, favorite: favoriteValue };
      }
      return item;
    });
  }
  switch (action.type) {
    case "setPaintingList": {
      return { ...state, paintingList: action.data, isLoading: false }; //remember to replace entire state object
    }
    case "favorite": {
      return { ...state, paintingList: updateFavorite(true) };
    }
    case "unfavorite": {
      return { ...state, paintingList: updateFavorite(false) };
    }
    default:
      return state;
  }
};

export default reducer;
