//  ===============================  Routing  ========================================================

//  Routing refers to how an application’s endpoints (URIs) respond to client requests. For an introduction to routing, see Basic routing.You define routing using methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests.

//  ===============================  Route paths  =========================================

// Route paths, in combination with a request method, define the endpoints at which requests can be made. Route paths can be strings, string patterns, or regular expressions. The characters ?, +, *, and () are subsets of their regular expression counterparts. The hyphen (-) and the dot (.) are interpreted literally by string-based paths.

//  HTTPS Methods (HyperText Transfer Protocol Secure)

// GET  ===========   Retrieve data from a server.
// POST ==========    Send data to the server to create a new resource
// PUT  ==========    When you want to update an entire resource.
// DELETE =========   When you want to delete a specific resource, such as removing a user or an item.
// PATCH =========    Update part of an existing resource.
// HEAD ==========    Similar to GET but retrieves only the headers, not the body of the response

import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

// ==========================================  Regular Expression  ============================================

app.get(/^abc(d|cd)?$/, (req, res) => {
  res.send("route will match acd , abcd");
});

// =================================   Single Callback Example   ================================

app.get("/cbExample1", (req, res) => {
  res.send("Callback Example 1");
});

// =================================   More then one Callback Example   ================================

app.get(
  "/cbExample2",
  (req, res, next) => {
    console.log("first Callback");
    next();
  },
  (req, res) => {
    console.log("Second Callback");
    res.send("More then one Callbacks");
  }
);
// =================================   An Array of Callback Example   ================================

const callback1 = (req, res, next) => {
  console.log("Callback one");
  next();
};
const callback2 = (req, res, next) => {
  console.log("Callback two");
  next();
};
const callback3 = (req, res) => {
  console.log("Callback three");
  res.send("An Array of Callbacks");
};

app.get("/Callbacks", [callback1, callback2, callback3]);

// ==================  Combinaion of independent function and Array of functions Example   ===============================

const callback1Example = (req, res, next) => {
  console.log("Callback one");
  next();
};
const callback2Example = (req, res, next) => {
  console.log("Callback two");
  next();
};

app.get(
  "/callbackExample4",
  [callback1Example, callback2Example],
  (req, res, next) => {
    console.log("Third Callback");
    next();
  },
  (req, res) => {
    console.log("Fourth Callback");
    res.send("Combination of callback Functions and array of function");
  }
);

// ===============================================   app.route() method  ==================================

// The new app.route() method enables you to create chainable route handlers for a route path.

app
  .route("/book")
  .get((req, res) => {
    res.send("Get a random book");
  })
  .post((req, res) => {
    res.send("Add a book");
  })
  .delete((req, res) => {
    res.send("Delete a book");
  })
  .put((req, res) => {
    res.send("Update the book");
  });

// for all routes error page
// app.all("*", (req, res) => {
//   res.status(404).send("Page not found");
// });

// app.all("/api/*", (req, res) => {
//   res.send("Api Page");
// });

// // Multiple Routes

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
