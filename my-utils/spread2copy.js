const paintingList = [
  {
    id: 0,
    painter: "Fragonard",
    title: "Woman reading",
    favorite: true,
  },
  {
    id: 1,
    painter: "Kramskoi",
    title: "Portrait of an unknown woman",
    favorite: false,
  },
];

const state = {
  paintingList,
  isLoading: false,
};

function updateFavorite(id, favoriteValue) {
  return state.paintingList.map((item) => {
    if (item.id === id) {
      console.log("item.id", item.id, "item.favorite", item.favorite);
      return { ...item, favorite: favoriteValue };
    }
    return item;
  });
}

const updatedPaintingList = updateFavorite(1, true);
console.log("updatedPaintingList:", updatedPaintingList);
