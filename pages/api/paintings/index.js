//import paintingData from "../../../src/PaintingData";

import path from "path";
import fs from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
  //res.status(200).send(JSON.stringify(paintingData, null, 2));
  const jsonFile = path.resolve("./", "db.json");
  try {
    const readFileData = await readFile(jsonFile);
    await delay(1000);
    const paintings = JSON.parse(readFileData).paintings;
    if (!paintings) {
      res.status(404).send("Error 404");
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(paintings, null, 2));
      console.log("GET /api/paintings status: 200");
    }
  } catch (e) {
    console.log("/api/paintings error:", e);
  }
}
