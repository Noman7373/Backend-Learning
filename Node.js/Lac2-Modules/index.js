/// ==========================     OS in Node.js    ===================================

//  The node:os module provides operating system-related utility methods and properties. It can be accessed using:

// os.cpus()  =  Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information is available, such as if the /proc file system is unavailable.

// os.platform()  =  Returns: <string> Returns a string identifying the operating system platform for which the Node.js binary was compiled. The value is set at compile time. Possible values are 'aix', 'darwin', 'freebsd','linux', 'openbsd', 'sunos', and 'win32'.

//  os.arch()
// Added in: v0.5.0
// Returns: <string>
// Returns the operating system CPU architecture for which the Node.js binary was compiled. Possible values are 'arm', 'arm64', 'ia32', 'loong64', 'mips', 'mipsel', 'ppc', 'ppc64', 'riscv64', 's390', 's390x', and 'x64'.

// os.homedir()#
// Added in: v2.3.0
// Returns: <string>
// Returns the string path of the current user's home directory. On POSIX, it uses the $HOME environment variable if defined. Otherwise it uses the effective UID to look up the user's home directory.
// On Windows, it uses the USERPROFILE environment variable if defined. Otherwise it uses the path to the profile directory of the current user.

// os.networkInterfaces() == Returns an object containing network interfaces that have been assigned a network address.

import os from "node:os";

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.hostname());
console.log(os.homedir());
console.log(os.networkInterfaces());
console.log(os.freemem());
console.log(os.totalmem());

/// ==========================     URL in Node.js    ===================================
// The node:url module provides utilities for URL resolution and parsing. It can be accessed using:

// url.Hash =  Gets and sets the fragment portion of the URL.
// url.host = Gets and sets the host portion of the URL.
// url.hostname  ==  Gets and sets the host name portion of the URL. The key difference between url.host and url.hostname is that url.hostname does not include the port.

//  url.href = Gets and sets the serialized URL.

// const pathname = '/a/b/c';
// const search = '?d=e';
// const hash = '#fgh';
// const myURL = new URL(`https://example.org${pathname}${search}${hash}`);

import { URL } from "url";

const myURL = new URL("https://www.example.com:8080/p/a/t/h?query=string#hash");

console.log(myURL.hash); // output = #hash
console.log(myURL.host); // output = www.example.com:8080
console.log(myURL.hostname); // output =  www.example.com
console.log(myURL.search); // output = ?query=string
console.log(myURL.href); // output = https://www.example.com:8080/p/a/t/h?query=string#hash
console.log(myURL.pathname); // output =   /p/a/t/h
console.log(myURL.port); // output =  8080
console.log(myURL.protocol); // output = https:
console.log(myURL.toString()); //output =  https://www.example.com:8080/p/a/t/h?query=string#hash
console.log(myURL.toJSON()); // output = https://www.example.com:8080/p/a/t/h?query=string#hash

/// ==========================     Events in Node.js    ===================================

//  Events
// Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.

// Handling events only once  on()
// When a listener is registered using the eventEmitter.on() method, that listener is invoked every time the named event is emitted.

//  emit() method is trigger to event
import EventEmitter from "events";

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

let num = 0;
myEmitter.on("event", () => {
  console.log(++num);
});

myEmitter.emit("event"); // Trigger the event

// to invoke only one time event we use once() method

myEmitter.once("eventwithonce", () => {
  console.log("Using once method", ++num);
});

myEmitter.emit("eventwithonce");
myEmitter.emit("eventwithonce");
myEmitter.emit("eventwithonce");
