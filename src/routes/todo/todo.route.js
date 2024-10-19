import { Router } from "express";
export const router = Router();

import {
  todoAdd,
  todoDelete,
  todoEdit,
  todoGetAll,
  todoGetId,
} from "../../controllers/todo/todo.controller.js";
router;

router.post("/add", todoAdd);

router.put("/edit/:id", todoEdit);

router.get("/get/:id", todoGetId);

router.get("/get-all", todoGetAll);

router.delete("/delete/:id", todoDelete);
