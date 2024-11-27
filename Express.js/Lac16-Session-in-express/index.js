// Session in Express.js

import express from "express";
import session from "express-session";
import router from "./routes/web.js";

const app = express();

// Apply Session
app.use(
  session({
    name: "Session-Learning",
    secret: "imkey",
    resave: false,
    saveUninitialized: true,
    
  })
);

const PORT = process.env.PORT || 3000;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost${PORT}`);
});
