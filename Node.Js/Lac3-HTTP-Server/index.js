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
//

import fs from "fs";
const myServer = http.createServer((req, res) => {
  res.writeHead(200, "OK", { "Content-Type": "text/html" });
  //  URL Handling  and to set HTML Full Page & to send full html page import "fs"
  if (req.url === "/") {
    fs.readFile("./public/home.html", (error, home) => {
      if (error) throw error;
      res.end(home);
    });
  } else if (req.url === "/about") {
    fs.readFile("./public/about.html", (error, about) => {
      if (error) throw error;
      res.end(about);
    });
  } else {
    res.end("<h1>404 Page Not Found</h1>");
  }
});

myServer.listen(port, Host, () => {
  console.log("Server Running at", port);
});

// =================================== Nodemon =============================

// nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

//  npm i nodemone

// =================================    DNS Modules (Domain Name System (DNS))   ===================================

//  The node:dns module enables name resolution. For example, use it to look up IP addresses of host names.

// dns.lookupService(address, port, callback)
// Resolves the given address and port into a host name and service using the operating system's underlying getnameinfo implementation.

import dns from "dns";

dns.lookup("google.com", (error, address, family) => {
  if (error) throw error;
  console.log(address);
  console.log(family);
});

dns.resolve("google.com", "NS", (error, records) => {
  // "MX"
  if (error) throw error;
  console.log(records);
});

//  ======================== Import and Export Statement in Node.js   ================================

// Modules: ECMAScript modules
//  ECMAScript modules are the official standard format to package JavaScript code for reuse. Modules are defined using a variety of import and export statements.

// Import in common Js

let name = "Noman Ahmed";
function sum(a, b) {
  return a + b;
}

// Export in Common js
module.exports = { name, sum };

// Export in ES6 Modern js

let user = "Nomi Khan";
let age = 24;

export default user; // default export

export { user, age };
