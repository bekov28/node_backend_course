import express from "express";
import { Routes } from "./routes/index.js";
import { PORT } from "./utils/secrets.js";
import { MONGODB_CONNECT } from "./utils/database.config.js";
import cors from "cors";

const server = express();

void MONGODB_CONNECT();
server.use(express.json());
server.use(express.urlencoded({ extended: true })); // this library is to receive data through form element;
server.use(cors({}));

Routes.forEach((item) => {
  server.use(item.path, item.router);
});
server.listen(PORT, () => {
  console.log(`Server is running port on ${PORT}!`);
});
