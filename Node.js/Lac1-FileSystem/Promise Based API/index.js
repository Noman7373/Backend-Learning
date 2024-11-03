// File System

// The fs module enables interacting with the file system in a way modedled on standered POXIS function.

//    # Promise Based API
//          const fs = require ("fs")
//          import * as fs from "fs/promise"

//    The fs/promises API provides asynchoronous file system method that return promises
//    mkdir ____Asycjoronous create directory
//    syntex:  mkdir(path,[options])

//    readdir() = Reads the contents of a directory
//    syntex:  readdir(path,[options])

//    rmdir() = Remove the directory identified by path
//    syntex:  rmdir(path,[options])

//    writeFile() =  Asynchronous write data to a file, replacing the file if it already exits
//    syntex:       writeFile(file, data ,[options])

//    readFile() = Asynchronous read the entire contents of a file
//    syntex:       readFile(path, [options])
//    syntex:       readFile(path, [options])

//    appnedFile(path, data[options]) = Asynchronous append data to file creating the file if it deos not yet exits.

//    copyFile() = Asynchorouns copies src to dest. By Default, dest is overwritten if it already exits.
//    syntex:      copyFile(src, dest[, mode])

//    stat() = USed to get file information
//    syntex:   stat(path, [options])

//  Creating directory

import * as fs from "fs/promises";

//  Path must be there
try {
  await fs.mkdir(
    "C:\\Users\\Administrator\\Desktop\\Backend_Learning\\Node.Js\\Lac1-FileSystem\\Noman"
  );
  console.log("Directory created.....");
} catch (error) {
  console.log(error);
}

//  Path is not require
try {
  await fs.mkdir(
    "C:\\Users\\Administrator\\Desktop\\Backend_Learning\\Node.Js\\Lac1-FileSystem\\test\\demo",
    { recursive: true }     // Recusive if path is not there create the path dir
  );
  console.log("Directory created.....");
} catch (error) {
  console.log(error);
}

// Read directory content
try {
  const files = await fs.readdir(
    "C:\\Users\\Administrator\\Desktop\\BACKEND_LEARNING\\Node.Js\\Lac1-FileSystem\\test\\"
  );
  //   console.log(files);
  for (const file of files) {
    console.log(file);
  }
} catch (error) {
  console.log(error);
}

//  Remove the Directory & Directory should be empty
try {
  await fs.rmdir(
    "C:\\Users\\Administrator\\Desktop\\BACKEND_LEARNING\\Node.Js\\Lac1-FileSystem\\test\\"
  );
  console.log("Directory removed.....");
} catch (error) {
  console.log(error);
}

//    Create a file and it will create a file main folder where we are
//  it will replace the file and content if we create same file again
try {
  fs.writeFile("readme.txt", "Hello Node js");
} catch (error) {
  console.log(error);
}

// Read the created file
try {
   const data =  await fs.readFile("readme.txt")   // it will the buffer
   console.log(data);

} catch (error) {
    console.log(error);
}

try {
    const data =  await fs.readFile("readme.txt","utf-8")   // getting actual data rather then buffer
    console.log(data);
 } catch (error) {
     console.log(error);
 }

// Apend Data into file
try {
  await fs.appendFile("readme.txt", " Hello world");
} catch (error) {
  console.log(error);
}

// Copy file and move
try {
  await fs.copyFile(
    "readme.txt",
    "C:\\Users\\Administrator\\Desktop\\BACKEND_LEARNING\\Node.Js\\Lac1-FileSystem//Noman//info.txt"
  );                                            // if file deos'n exits it will create than copy file
} catch (error) {
  console.log(error);
}

// Stat get file all Information
try {
  const stats = await fs.stat(
    "C:\\Users\\Administrator\\Desktop\\BACKEND_LEARNING\\Node.Js\\Lac1-FileSystem\\test\\demo\\demo.js"
  );
  console.log(stats.isDirectory()); // return true if directory else false
  console.log(stats.isFile()); // return trus
} catch (error) {
  console.log(error);
}
