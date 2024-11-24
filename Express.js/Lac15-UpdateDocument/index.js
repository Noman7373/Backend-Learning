import express from "express";
import dataBaseConnect from "./db/dbConnect.js";
import {
  updateDocumenst,
  updateDocumenstOne,
  updateManyDocuments,
  deleteDocumentOne,
} from "./models/userSchema.js";
const app = express();

const PORT = process.env.PORT || 3000;

const dataBase_URL = process.env.dataBase_URL || "mongodb://localhost:27017/";

dataBaseConnect(dataBase_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost${PORT}`);
    });
    // createDocuments();
    // updateDocumenst("67431865204b9b718291f145");
    updateDocumenstOne("673ddf4196c57ddb2b350027");
    updateManyDocuments();
    deleteDocumentOne();
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });
