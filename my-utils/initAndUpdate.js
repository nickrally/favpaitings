const somePaintingList = [
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

const initState = {
  paintingList: [],
  isLoading: true,
  good: true,
};

function populate(data) {
  return {
    ...initState,
    paintingList: data,
    isLoading: false,
  };
}

const updatedPaintingList = populate(somePaintingList);
console.log("updatedPaintingList:", updatedPaintingList);
