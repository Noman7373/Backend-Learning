// ===================================  HTTP Module in Node JS & Creating Server ===================================

// This module, containing both a client and server, can be imported via require('node:http') (CommonJS) or import * as http from 'node:http' (ES module).

// The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses, so the user is able to stream data.

import http from "http";

const port = process.env.PORT || 8000;
const Host = "localhost";

// const myServer = http.createServer((req, res) => {
//   // to check the req url
//   //   console.log(req.url);
//   //   console.log(req.method);

//   //   // to change the status code
//   //   res.statusCode = 202;
//   //   res.statusMessage = "Good";

//   //   res.setHeader("Content-Type", "text/plain"); // to see the text content
//   res.writeHead(202, "Good", { "Content-Type": "text/plain" });
//   res.end("Response from server learing Node.Js");
// });

// myServer.listen(port, Host, () => {
//   console.log("Server Running at", port);
// });



// ========================   Routing URL & Serve HTML   =============================



// =================================== Nodemon =============================

// nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

//  npm i nodemone
