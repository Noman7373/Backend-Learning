//  Callback API

// The callback APIs perform all operations asynchronous, without blocking the event loop, then invoke a callback function
// upon completion or error.

// mkdir() = Asynchronous       // Syntex :  mkdir(path, [options] , callback)

// readdir() = Reads the contents of a directory       //  syntex:  readdir(path,[options],callbak)

// rmdir() = Remove the directory identified by path   //  syntex:  rmdir(path,[options], callback)

// writeFile() =  Asynchronous write data to a file,   //  syntex:  writeFile(file, data ,[options] callback)

// readFile() = Asynchronous read the entire contents // syntex: readFile(path, [options] ,callback)

//  appnedFile(path, data[options] , callback) = Asynchronous append data to file creating the file if it deos not yet exits.

//  copyFile() = Asynchorouns copies src to dest. By Default, dest is overwritten if it already exits.
//  syntex:      copyFile(src, dest[, mode], callback)

//  stat() = USed to get file information  // syntex:  stat(path, [options], callback)

// import { error } from "console"

import * as fs from "fs";

// Creating Directory Path should be there
fs.mkdir(
  "C:\\Users\\Administrator\\Desktop\\BACKEND_LEARNING\\Node.Js\\Lac1-FileSystem\\Callback-API\\Nomi",
  { recursive: true }, // if path deos'n exits it will create it...
  (error) => {
    if (error) throw error;
    console.log("Directory Created......");
  }
);

// Readc content inside Directory
fs.readdir(
  "C:\\Users\\Administrator\\Desktop\\BACKEND_LEARNING\\Node.Js\\Lac1-FileSystem\\Callback-API",
  (error, files) => {
    if (error) throw error;
    for (const file of files) {
      console.log(file);
    }
  }
);

// Remove Directory  & Directory Should be empty
fs.rmdir(
  "C:\\Users\\Administrator\\Desktop\\BACKEND_LEARNING\\Node.Js\\Lac1-FileSystem\\Callback-API\\Nomi",
  (error) => {
    if (error) throw error;
    console.log("Removing.....");
  }
);

// Create and write File

fs.writeFile("readme.txt", "Hello World", (error) => {
  if (error) throw error;
  console.log("file created");
});

// Read File
fs.readFile("readme.txt", "utf-8", (error, readFile) => {
  if (error) throw error;
  console.log(readFile);
});

// Apend Data into File
fs.appendFile("readme.txt", "Hello from Node", (error) => {
  if (error) throw error;
  console.log("Data Apend........");
});

// File copy
fs.copyFile("readme.txt", "copyData.txt", (error) => {
  if (error) throw error;
  console.log("FIle Copy........");
});

// Get file info
fs.stat(
  "C:\\Users\\Administrator\\Desktop\\BACKEND_LEARNING\\Node.Js\\Lac1-FileSystem\\Callback-API",
  (error, stats) => {
    if (error) throw error;
    console.log(stats.isDirectory());
    console.log(stats.isFile());
  }
);
