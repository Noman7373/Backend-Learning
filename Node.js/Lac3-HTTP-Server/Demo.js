// Import in commone js

const { name, sum } = require("./Demo.js");

console.log(name);
console.log(sum(10, 20));

// Import in ES6 Modern
import user from "./index.js";
import { user, age } from "./index.js";

console.log(user);
console.log(age);
