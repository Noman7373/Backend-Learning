// Session in Express.js

import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import router from "./routes/web.js";
import dataBaseConnect from "./db/dbConnect.js";
const app = express();

const dataBase_URL = process.env.dataBase_URL || "mongodb://localhost:27017/";

// Create Store for Session and Connect MongoDB
const sessionStorage = MongoStore.create({
  mongoUrl: dataBase_URL,
  dbName: "test",
  collectionName: "students",
  ttl: 14 * 24 * 60 * 60,
  // autoRemove: "native",
  // autoRemove : "disabled" session will not remove forever
  // autoRemoveInterval: 10mnt, // autoremove interval session will remove after 10 mnt
});

// Apply Session
app.use(
  session({
    name: "Session-Learning",
    secret: "imkey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 10000 },
    store: sessionStorage,
  })
);

const PORT = process.env.PORT || 3000;

app.use("/", router);

dataBaseConnect(dataBase_URL);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost${PORT}`);
});
