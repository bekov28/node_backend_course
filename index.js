// console.log(1);

// console.log(__dirname);  - papkaning path - yo'lini ko'rsatadi;
// console.log(__filename); - faylning path yo'lini ko'rsatadi;
// console.log(process);

// Path Module:

const path = require("path");
// console.log(path.basename(__filename)); - faylning to'liq nomini ko'rsatadi
// console.log(path.extname(__filename)); - faylning kengaytmasini korsatadi -> .js
// const ImageUrl = "salom.jpg";
// console.log(path.extname(ImageUrl));
// console.log(path.join(__dirname, "text.txt")); -> papka pathni yaratish, fayl emas!

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

// Fayl yaratish

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
console.log(os.cpus());
