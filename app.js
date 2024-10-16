import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { v4 } from "uuid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

import express from "express";
const server = express();
import { v4 } from "uuid";
server.use(express.json());

// POST method

const todo = [];

server.post("/todo/add", (req, res) => {
  const { title, desc } = req.body;

  todo.push({ id: v4(), title, desc });

  res.status(201).json({ success: true, todo });
});

server.put("/todo/edit", (req, res) => {
  const { title, desc, id } = req.body;

  const data = todo.findIndex((val) => val.id === id);
  console.log(data);

  res.status(200).json({ success: true, todo });
});

server.listen(3031, () => {
  console.log("Server is running on port 3031!");
});
