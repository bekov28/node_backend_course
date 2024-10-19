import { Schema, model } from "mongoose";
import { TODO } from "../../constants/db.constants";

const todoSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { timestamps: true }
);
export const Todo = model(TODO, todoSchema, TODO);
