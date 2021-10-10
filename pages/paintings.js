import React from "react";
import App from "../src/App";
import path from "path";
import fs from "fs";

export const InitPaintingsDataContext = React.createContext();
export async function getServerSideProps() {
  const { promisify } = require("util");
  const readFile = promisify(fs.readFile);
  const jsonFile = path.resolve("./", "db.json");
  let initPaitingData;
  try {
    const readFileData = await readFile(jsonFile);
    initPaitingData = JSON.parse(readFileData).paintings;
  } catch (e) {
    console.log("/api/paintings error:", e);
  }
  return { props: { initPaitingData } };
}

function paintings({ initPaitingData }) {
  return (
    <InitPaintingsDataContext.Provider value={initPaitingData}>
      <App pageName="Paintings" />
    </InitPaintingsDataContext.Provider>
  );
}

export default paintings;
