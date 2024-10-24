// console.log(1);

// console.log(__dirname);  - only indicates folder's path
// console.log(__filename); - only indicates file's path
// console.log(process);

// Path Module:

// const path = require("path");
// import path from "path"; => New way

// console.log(path.basename(__filename)); - indicates full name of a file;
// console.log(path.extname(__filename)); - indicates the extension of a file-> .js
// const ImageUrl = "salom.jpg";
// console.log(path.extname(ImageUrl));
// console.log(path.join(__dirname, "text.txt")); -> to create path for a folder...

// Papka yaratish

const fs = require("fs");

// fs.mkdir - buyruq beradi, lekin natijani kutmay, keyingisiga o'tib ketadi;
// fs.mkdirSync -buyruq beradi va natijani kutadi;

// Papka yaratish

// fs.mkdir(path.join(__dirname, "Hello"), {}, (err) => {
//   console.log(err);
// });

// Papka o'chirish

// fs.rmdir(path.join(__dirname, "Hello"), (err) => {
//   if (err) {
//     throw err;
//   }
// });

// Faylni yaratish

// fs.writeFile(path.join(__dirname, "image.jpg"), "Image", (err) => {
//   if (err) {
//     throw err;
//   }
// });

// fs.writeFile(path.join(__dirname, "text.txt"), "Salom", (err) => {
//   if (err) {
//     throw err;
//   }
// });

// Faylni o'qish

// fs.readFile(path.join(__dirname, "text.txt"), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data.toString());
// });

// Faylni o'chirish

// fs.rm(path.join(__dirname, "text.txt"), (err) => {
//   if (err) {
//     throw err;
//   }
// });

// os module

const os = require("os");
// console.log(os.cpus()); => 13th Gen Intel(R) Core(TM) i5-1340P (16ta yadro);
// console.log(os.arch()); => x64
// console.log(os.freemem());  => 4232564736
// console.log(os.totalmem()); => 16847327232
// console.log(os.hostname()); => Berd
// console.log(os.type());  => Windows_NT
// console.log(os.version()); => Windows 11 Pro
// console.log(os.userInfo()); =>

// {
//     uid: -1,
//     gid: -1,
//     username: 'Sentbe',
//     homedir: 'C:\\Users\\Sentbe',
//     shell: null
//   }

// console.log(os.platform()); => win32;

// HTTP Module (for creating servers)

// Eski usuliL:

// const http = require("http");         (yangisi -> import http from 'http')

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello, World!");
// });

// server.listen(3030, () => {
//   console.log("Server is running!");
// });




// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";
// // import { v4 } from "uuid";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// server.get("/create-folder", (req, res) => {
//   fs.mkdir(path.join(__dirname, "Images"), {}, (err) => {
//     console.log(err);
//   });
//   res.status(200).json({ success: true, msg: "Folder created successfully" });
// });

// server.get("/delete-folder", (req, res) => {
//   fs.rmdir(path.join(__dirname, "Images"), (err) => {
//     if (err) {
//       throw err;
//     }
//   });
//   res.status(200).json({ success: true, msg: "Folder deleted successfully" });
// });

// server.get("/create-file", (req, res) => {
//   fs.writeFile(path.join(__dirname, "text.txt"), "Salom", (err) => {
//     if (err) {
//       throw err;
//     }
//   });
// });

// server.get("/delete-file", (req, res) => {
//   fs.rm(path.join(__dirname, "text.txt"), (err) => {
//     if (err) {
//       throw err;
//     }
//   });
// });