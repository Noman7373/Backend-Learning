//  Creating Server

import { writeFile } from "fs";
import http from "http";

const server = http.createServer((req, res) => {
  res.writeFile(200, "ok", { ContantType: "text/html" });

  if(req.url == "/") {
    
  }
});
