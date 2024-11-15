// import * as fs from "fs";
import * as fs from "fs/promises";

// File Operation Practice

// fs.writeFile("HelloWorld.txt", "Hello from Node.js", (error) => {
//   if (error) throw new error
//   console.log("File is written");
// });

//  Read FIle
// fs.readFile("HelloWorld.txt", "utf-8", (error, file) => {
//   if (error) throw new error();

//   console.log(file);
// });

// fs.appendFile("HelloWorld.txt", "Welcome Noman", (error) => {
//   if (error) throw new error();
//   console.log("File Data is append......");
// });

// Directory Method

// fs.mkdir(
//   "C:\\Users\\Administrator\\Desktop\\BACKEND_LEARNING\\Lacture-Practice\\Directory",
//   (error) => {
//     if (error) throw new error();
//     console.log("Directory is created");
//   }
// );

// fs.readdir(
//   "C:\\Users\\Administrator\\Desktop\\BACKEND_LEARNING\\Lacture-Practice\\Directory",
//   (error, dir) => {
//     if (error) throw new error();
//     if (dir.length == 0) {
//       console.log("Directory is empty");
//     } else {
//       console.log("Dir is", dir);
//     }
//   }
// );

// fs.rmdir(
//   "C:\\Users\\Administrator\\Desktop\\BACKEND_LEARNING\\Lacture-Practice\\Directory",
//   (error) => {
//     if (error) throw new error();

//     console.log("Directory is deleted");
//   }
// );

// fs.stat(
//   "C:\\Users\\Administrator\\Desktop\\BACKEND_LEARNING\\Lacture-Practice\\Directory",
//   (error, stats) => {
//     if (error) throw error;
//     console.log(stats.isDirectory());
//     console.log(stats.isFile());
//   }
// );

// PRomise Based

// try {
//   await fs.mkdir(
//     "C:\\Users\\Administrator\\Desktop\\BACKEND_LEARNING\\Lacture-Practice\\PromiseBase"
//   );
//   console.log("Directory is created");
// } catch (error) {
//   console.log(error);
// }

try {
  const files = await fs.readdir(
    "C:\\Users\\Administrator\\Desktop\\BACKEND_LEARNING\\Lacture-Practice\\Directory"
  );
  for (let file of files) {
    if (file.length === 0) {
      console.log("FIle is Empty");
    } else {
      console.log(file);
    }
  }
} catch (error) {
  console.log(error);
}
