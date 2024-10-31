// Sync APi

//  The synchronous APis perform all operations synchronously, blocking the event loop until the operation completes or fails

import * as fs from "fs";

// Creating Directory   // path should be available
fs.mkdirSync(
  "C:\\Users\\Administrator\\Desktop\\BACKEND_LEARNING\\Node.Js\\Lac1-FileSystem\\Callback-API\\Nomi",
  { recursive: true } // if path deos'n exits it will create it...
);
