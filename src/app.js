import express from "express";
const server = express();
import { Routes } from "./routes/index.js";

import { PORT } from "./utils/secrets.js";
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// this library is to receive data through form element;
// POST request

Routes.forEach((item) => {
  server.use(item.path, item.router);
});

server.listen(PORT, () => {
  console.log(`Server is running port on ${PORT}!`);
});
