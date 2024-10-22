import { Router } from "express";
export const router = Router();

import {
  deleteTodo,
  getAllTodo,
  getByIdTodo,
  todoAdd,
  updateTodo,
} from "../../controllers/todo/todo.controller.js";
router;

router.post("/add", todoAdd);

router.put("/edit/:id", updateTodo);

router.get("/get/:id", getByIdTodo);

router.get("/get-all", getAllTodo);

router.delete("/delete/:id", deleteTodo);
