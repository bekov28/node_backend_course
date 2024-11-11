import { Router } from "express";
export const router = Router();

import {
  deleteTodo,
  getAllTodo,
  getByIdTodo,
  todoAdd,
  updateTodo,
} from "../../controllers/todo/todo.controller.js";
import { validate } from "../../validator/validator.js";
import { addValidator, updateValidator } from "../../validator/todo/todo.validator.js";

// How to create middleware

// const test = (req, res, next) => {
//   console.log(req.body);
//   next();
// };
// router.post("/add", test, todoAdd);  -> usage of Middleware

// In case the user didnt fill out title and sent a request => //

// const test = (req, res, next) => {
//   const { title, desc } = req.body;

//   if (typeof title !== 'string' || title === "", title.length >= 5) {
//     return res.status(400).json({success: false, msg: "Title must be a string and not empty!"})
//   }
//   if (typeof desc !== 'string' || desc === "") {
//     return res.status(400).json({success: false, msg: "Desc must be a string and not empty!"})
//   }

//   next();
// };

router.post("/add", addValidator(), validate, todoAdd);

router.put("/edit/:id", updateValidator(), validate, updateTodo);

router.get("/get/:id", getByIdTodo);

router.get("/get-all", getAllTodo);

router.delete("/delete/:id", deleteTodo);
